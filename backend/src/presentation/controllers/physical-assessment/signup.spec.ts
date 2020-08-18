import { SignUpPhysicalAssessmentController } from './signup'
import { MissingParamError } from '../../errors/missing-param-error'
interface SutTypes {
  sut: SignUpPhysicalAssessmentController
}
const makeSut = (): SutTypes => {
  const sut = new SignUpPhysicalAssessmentController()

  return { sut }
}

describe('Singup Controller PhysicalAssessment', () => {
  test('should return 400 if no user is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('user'))
  })

  test('should return 400 if no weight is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('weight'))
  })

  test('should return 400 if no height is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('height'))
  })

  test('should return 400 if no rightBiceps is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('rightBiceps'))
  })

  test('should return 400 if no leftBiceps is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('leftBiceps'))
  })

  test('should return 400 if no rightForearm is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        rightThigh: 'any_rightThigh',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('rightForearm'))
  })
})
