import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Gym routes', () => {
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
  test('should return an gym on success', async () => {
    await request(app)
      .post('/api/gym')
      .send({
        name: 'valid_name',
        phone: 'valid_phone',
        cnpj: '17717557000140',
        zipCode: 'valid_zip_code',
        street: 'valid_street',
        number: 'valid_number',
        complement: 'valid_complement',
        neighborhood: 'valid_neighborhood',
        city: 'valid_city',
        state: 'valid_state'
      })
      .expect(200)
  })
})
