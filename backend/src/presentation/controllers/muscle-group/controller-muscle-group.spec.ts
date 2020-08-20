import { SignUpMuscleGroupController } from './controller-muscle-group'
import { MissingParamError, ServerError } from '../../errors'
import { AddMuscleGroup, AddMuscleGroupModel } from '../../../domain/usecases/add-muscle-group'
import { MuscleGroupModel } from '../../../domain/models/muscle-group-model'

const makeMuscleGroup = (): AddMuscleGroup => {
  class AddMuscleGroupStub implements AddMuscleGroup {
    async add (cnpj: AddMuscleGroupModel): Promise<MuscleGroupModel> {
      const muscleGroupGym = {
        id: 'valid_id',
        name: 'valid_name'
      }
      return await new Promise(resolve => resolve(muscleGroupGym))
    }
  }
  return new AddMuscleGroupStub()
}
interface SutTypes {
  sut: SignUpMuscleGroupController
  addMuscleGroupStub: AddMuscleGroup
}

const makeSut = (): SutTypes => {
  const addMuscleGroupStub = makeMuscleGroup()
  const sut = new SignUpMuscleGroupController(addMuscleGroupStub)
  return { sut, addMuscleGroupStub }
}

describe('Signup Muscle Group Controller', () => {
  test('should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {}
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should call AddMuscleGroup with correct values', async () => {
    const { sut, addMuscleGroupStub } = makeSut()
    const addSpy = jest.spyOn(addMuscleGroupStub, 'add')
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name'
    })
  })

  test('should return 500 if AddMuscleGroup throws', async () => {
    const { sut, addMuscleGroupStub } = makeSut()
    jest.spyOn(addMuscleGroupStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })

  test('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 'valid_id',
      name: 'valid_name'
    })
  })
})
