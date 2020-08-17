import { SignUpUserController } from './signup'
import { MissingParamError, InvalidParamError, ServerError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

interface SutTypes {
  sut: SignUpUserController
  emailValidatorStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const sut = new SignUpUserController(emailValidatorStub)
  return {
    sut,
    emailValidatorStub
  }
}

describe('SiguUp Controller User', () => {
  test('should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
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
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
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
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no registration is provided', async () => {
    const { sut } = makeSut()
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
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('registration'))
  })

  test('should return 400 if no passwordHash is provided', async () => {
    const { sut } = makeSut()
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
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordHash'))
  })

  test('should return 400 if no coach is provided', async () => {
    const { sut } = makeSut()
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
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('coach'))
  })

  test('should return 400 if no admin is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        gym: 'any_gym'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('admin'))
  })

  test('should return 400 if no gym is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('gym'))
  })

  test('should return 400 if an invalid email is provided', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'invalid_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  })

  test('should call EmailValidator with correct email', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const emailValidator = jest.spyOn(emailValidatorStub, 'isValid')
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    await sut.handle(httpRequest)
    expect(emailValidator).toHaveBeenCalledWith('any_email')
  })

  test('should return 500 if EmailValidator throws', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'any_passwordHash',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
