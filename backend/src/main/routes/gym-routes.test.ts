import request from 'supertest'
import app from '../config/app'

describe('Gym routes', () => {
  test('should return an gym on success', async () => {
    await request(app)
      .post('/api/gym')
      .send({
        name: 'valid_name',
        phone: 'valid_phone',
        cnpj: 'valid_cnpj',
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
