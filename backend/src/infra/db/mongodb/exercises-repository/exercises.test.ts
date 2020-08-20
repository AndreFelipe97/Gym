import { ExercisesMongoRepository } from './exercises'
import { MongoHelper } from '../helpers/mongo-helper'

describe('Exercises Mongo Repository', () => {
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

  const makeSut = (): ExercisesMongoRepository => {
    return new ExercisesMongoRepository()
  }

  test('should return an exercises on success', async () => {
    const sut = makeSut()
    const exercises = await sut.add({
      name: 'any_name',
      muscleGroup: 'any_mascle_group'
    })
    expect(exercises).toBeTruthy()
    expect(exercises.id).toBeTruthy()
    expect(exercises.name).toBe('any_name')
    expect(exercises.muscleGroup).toBe('any_mascle_group')
  })
})
