import { SignUpUserController } from './signup'
import { MissingParamError } from '../../errors'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no email is provided', () => {
    const sut = new SignUpUserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no registration is provided', () => {
    const sut = new SignUpUserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('registration'))
  })

  test('should return 400 if no passwordHash is provided', () => {
    const sut = new SignUpUserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordHash'))
  })

  test('should return 400 if no coach is provided', () => {
    const sut = new SignUpUserController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('coach'))
  })
})
