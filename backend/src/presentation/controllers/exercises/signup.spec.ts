import { SignUpExercisesController } from './signup'
import { MissingParamError, ServerError } from '../../errors'
import { AddExercises, AddExercisesModel, ExercisesModel } from './signup-protocols'

const makeAddExercises = (): AddExercises => {
  class AddExercisesStub implements AddExercises {
    async add (exercises: AddExercisesModel): Promise<ExercisesModel> {
      const fakeExercise = {
        id: 'valid_id',
        name: 'valid_name',
        muscleGroup: 'valid_muscle_group'
      }
      return await new Promise(resolve => resolve(fakeExercise))
    }
  }
  return new AddExercisesStub()
}

interface SutTypes {
  sut: SignUpExercisesController
  addExercisesStub: AddExercises
}

const makeSut = (): SutTypes => {
  const addExercisesStub = makeAddExercises()
  const sut = new SignUpExercisesController(addExercisesStub)

  return { sut, addExercisesStub }
}

describe('SignUp Exercises Controller', () => {
  test('should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        muscleGroup: 'any_muscle_group'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no muscleGroup is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('muscleGroup'))
  })

  test('should call AddExercises with correct values', async () => {
    const { sut, addExercisesStub } = makeSut()
    const addSpy = jest.spyOn(addExercisesStub, 'add')
    const httpRequest = {
      body: {
        name: 'any_name',
        muscleGroup: 'any_muscle_group'
      }
    }
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      muscleGroup: 'any_muscle_group'
    })
  })

  test('should return 500 if AddExercises throws', async () => {
    const { sut, addExercisesStub } = makeSut()
    jest.spyOn(addExercisesStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpRequest = {
      body: {
        name: 'any_name',
        muscleGroup: 'any_muscle_group'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
