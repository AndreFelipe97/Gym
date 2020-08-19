import { SignUpExerciseSheetController } from './signup'
import { MissingParamError } from '../../errors'

interface SutTypes {
  sut: SignUpExerciseSheetController
}

const makeSut = (): SutTypes => {
  const sut = new SignUpExerciseSheetController()

  return { sut }
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
})
