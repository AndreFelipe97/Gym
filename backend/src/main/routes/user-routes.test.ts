import request from 'supertest'
import app from '../config/app'

describe('Signup user routes', () => {
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
