import request from 'supertest'
import app from '../config/app'

describe('Exercise Sheet routes', () => {
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
