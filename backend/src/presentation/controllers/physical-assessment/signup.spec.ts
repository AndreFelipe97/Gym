import { SignUpPhysicalAssessmentController } from './signup'
import { MissingParamError } from '../../errors'
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

  test('should return 400 if no leftForearm is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
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
    expect(httpResponse.body).toEqual(new MissingParamError('leftForearm'))
  })

  test('should return 400 if no chest is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
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
    expect(httpResponse.body).toEqual(new MissingParamError('chest'))
  })

  test('should return 400 if no waist is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
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
    expect(httpResponse.body).toEqual(new MissingParamError('waist'))
  })

  test('should return 400 if no abdomen is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
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
    expect(httpResponse.body).toEqual(new MissingParamError('abdomen'))
  })

  test('should return 400 if no rightThigh is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
        weight: 'any_weight',
        height: 'any_height',
        rightBiceps: 'any_rightBiceps',
        leftBiceps: 'any_leftBiceps',
        rightForearm: 'any_rightForearm',
        leftForearm: 'any_leftForearm',
        chest: 'any_chest',
        waist: 'any_waist',
        abdomen: 'any_abdomen',
        leftThigh: 'any_leftThigh',
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('rightThigh'))
  })

  test('should return 400 if no leftThigh is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
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
        rightCalf: 'any_rightCalf',
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('leftThigh'))
  })

  test('should return 400 if no rightCalf is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
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
        leftCalf: 'any_leftCalf',
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('rightCalf'))
  })

  test('should return 400 if no leftCalf is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
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
        date: 'any_date',
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('leftCalf'))
  })

  test('should return 400 if no date is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
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
        responsible: 'any_responsible'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('date'))
  })

  test('should return 400 if no responsible is provided ', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        user: 'any_user',
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
        date: 'any_date'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('responsible'))
  })
})
