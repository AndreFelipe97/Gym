import { ExerciseSheetMongoRepository } from './exercise-sheet'
import { MongoHelper } from '../helpers/mongo-helper'

describe('Exercise Sheet Mongo Repository', () => {
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

  const makeSut = (): ExerciseSheetMongoRepository => {
    return new ExerciseSheetMongoRepository()
  }

  test('should return an exercises on success', async () => {
    const sut = makeSut()
    const exercises = await sut.add({
      user: 'any_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    })
    expect(exercises).toBeTruthy()
    expect(exercises.id).toBeTruthy()
    expect(exercises.user).toBe('any_user')
    expect(exercises.exercise).toBe('any_exercise')
    expect(exercises.repetition).toBe('any_repetition')
    expect(exercises.amount).toBe('any_amount')
    expect(exercises.day).toBe('any_day')
    expect(exercises.responsible).toBe('any_responsible')
  })
})
