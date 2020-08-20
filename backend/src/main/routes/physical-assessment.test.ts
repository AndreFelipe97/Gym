import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Physical Assessment routes', () => {
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
  test('should return an physical assessment on success', async () => {
    await request(app)
      .post('/api/physical/assessment')
      .send({
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
      .expect(200)
  })
})
