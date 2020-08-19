import request from 'supertest'
import app from '../config/app'

describe('Muscle Group routes', () => {
  test('should return an Muscle Group on success', async () => {
    await request(app)
      .post('/api/muscle/group')
      .send({
        name: 'valid_name'
      })
      .expect(200)
  })
})
