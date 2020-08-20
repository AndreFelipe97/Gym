import request from 'supertest'
import app from '../config/app'

describe('Exercises routes', () => {
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
