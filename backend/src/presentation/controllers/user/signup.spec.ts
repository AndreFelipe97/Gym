import { SignUpUserController } from './signup'

describe('SiguUp Controller User', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpUserController()
    const httpRequest = {
      body: {
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
