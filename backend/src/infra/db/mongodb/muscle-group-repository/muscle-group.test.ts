import { MuscleGroupMongoRepository } from './muscle-group'
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

  const makeSut = (): MuscleGroupMongoRepository => {
    return new MuscleGroupMongoRepository()
  }

  test('should return an Muscle Group on success', async () => {
    const sut = makeSut()
    const muscleGroup = await sut.add({
      name: 'valid_name'
    })
    expect(muscleGroup).toBeTruthy()
    expect(muscleGroup.id).toBeTruthy()
    expect(muscleGroup.name).toBe('valid_name')
  })
})
