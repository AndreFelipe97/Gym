import { SignUpExerciseSheetController } from './signup'
import { AddExerciseSheet, AddExerciseSheetModel, ExerciseSheetModel } from './signup-protocols'
import { MissingParamError, ServerError } from '../../errors'

const makeAddExerciseSheet = (): AddExerciseSheet => {
  class AddExerciseSheetStub implements AddExerciseSheet {
    async add (exerciseSheet: AddExerciseSheetModel): Promise<ExerciseSheetModel> {
      const fakeExerciseSheet = {
        id: 'valid_id',
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
      return await new Promise(resolve => resolve(fakeExerciseSheet))
    }
  }
  return new AddExerciseSheetStub()
}

interface SutTypes {
  sut: SignUpExerciseSheetController
  addExerciseSheetStub: AddExerciseSheet
}

const makeSut = (): SutTypes => {
  const addExerciseSheetStub = makeAddExerciseSheet()
  const sut = new SignUpExerciseSheetController(addExerciseSheetStub)

  return { sut, addExerciseSheetStub }
}

describe('Signup Exercise Sheet Controller', () => {
  test('should return 400 if no user is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('user'))
  })

  test('should return 400 if no exercise is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('exercise'))
  })

  test('should return 400 if no repetition is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        exercise: 'any_exercise',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('repetition'))
  })

  test('should return 400 if no amount is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('amount'))
  })

  test('should return 400 if no day is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('day'))
  })

  test('should return 400 if no responsible is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('responsible'))
  })

  test('should call AddExerciseSheet with correct values', async () => {
    const { sut, addExerciseSheetStub } = makeSut()
    const addSpy = jest.spyOn(addExerciseSheetStub, 'add')
    const httpRequest = {
      body: {
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    })
  })

  test('should return 500 if AddExerciseSheet throws', async () => {
    const { sut, addExerciseSheetStub } = makeSut()
    jest.spyOn(addExerciseSheetStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpRequest = {
      body: {
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
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
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 'valid_id',
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    })
  })
})
