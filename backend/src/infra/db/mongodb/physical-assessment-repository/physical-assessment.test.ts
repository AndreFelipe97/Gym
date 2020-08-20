import { PhysicalAssessmentMongoRepository } from './physical-assessment'
import { MongoHelper } from '../helpers/mongo-helper'

describe('Physical Assessment mongo repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const gymCollection = await MongoHelper.get_collection('gyms')
    await gymCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): PhysicalAssessmentMongoRepository => {
    return new PhysicalAssessmentMongoRepository()
  }

  test('should return an Physical Assessment on success', async () => {
    const sut = makeSut()
    const physicalAssessment = await sut.add({
      user: 'valid_user',
      weight: 2,
      height: 2,
      rightBiceps: 2,
      leftBiceps: 2,
      rightForearm: 2,
      leftForearm: 2,
      chest: 2,
      waist: 2,
      abdomen: 2,
      rightThigh: 2,
      leftThigh: 2,
      rightCalf: 2,
      leftCalf: 2,
      date: '2020-08-18',
      responsible: 'valid_responsible'
    })
    expect(physicalAssessment).toBeTruthy()
    expect(physicalAssessment.id).toBeTruthy()
    expect(physicalAssessment.user).toBe('valid_user')
    expect(physicalAssessment.weight).toBe(2)
    expect(physicalAssessment.height).toBe(2)
    expect(physicalAssessment.rightBiceps).toBe(2)
    expect(physicalAssessment.leftBiceps).toBe(2)
    expect(physicalAssessment.rightForearm).toBe(2)
    expect(physicalAssessment.leftForearm).toBe(2)
    expect(physicalAssessment.chest).toBe(2)
    expect(physicalAssessment.waist).toBe(2)
    expect(physicalAssessment.abdomen).toBe(2)
    expect(physicalAssessment.rightThigh).toBe(2)
    expect(physicalAssessment.leftThigh).toBe(2)
    expect(physicalAssessment.rightCalf).toBe(2)
    expect(physicalAssessment.leftCalf).toBe(2)
    expect(physicalAssessment.date).toBe('2020-08-18')
    expect(physicalAssessment.responsible).toBe('valid_responsible')
  })
})
