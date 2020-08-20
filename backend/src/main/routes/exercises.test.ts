import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Exercises routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const exercisesCollection = await MongoHelper.get_collection('exercises')
    await exercisesCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('should return an exercises on success', async () => {
    await request(app)
      .post('/api/exercises')
      .send({
        name: 'valid_name',
        muscleGroup: 'valid_muscle_group'
      })
      .expect(200)
  })
})
