import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Exercises routes', () => {
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
