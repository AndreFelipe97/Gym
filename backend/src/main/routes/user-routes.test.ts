import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup user routes', () => {
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
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: 'André Felipe',
        email: 'andrefeliperf17@gmail.com',
        registration: '123456',
        passwordHash: '123456',
        coach: 'true',
        admin: 'true',
        gym: 'Spartan Gym'
      })
      .expect(200)
  })
})
