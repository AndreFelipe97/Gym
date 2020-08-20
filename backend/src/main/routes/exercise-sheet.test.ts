import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Exercise Sheet routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const gymCollection = MongoHelper.get_collection('gyms')
    await gymCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('should return an exercise sheet on success', async () => {
    await request(app)
      .post('/api/exercise/sheet')
      .send({
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      })
      .expect(200)
  })
})
