import { SignUpExercisesController } from './signup'
import { MissingParamError } from '../../errors'

interface SutTypes {
  sut: SignUpExercisesController
}

const makeSut = (): SutTypes => {
  const sut = new SignUpExercisesController()

  return { sut }
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
})
