import { UserController } from './controllers-user'
import { MissingParamError, InvalidParamError, ServerError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'
import { AddUser, AddUserModel, UserModel, HttpRequest } from './protocols'
import { successRequest, badRequest, serverError } from '../../helpers/http-helper'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

const makeAddUser = (): AddUser => {
  class AddUserStub implements AddUser {
    async add (user: AddUserModel): Promise<UserModel> {
      return await new Promise(resolve => resolve(makeFakeAddUser()))
    }
  }
  return new AddUserStub()
}

const makeFakeRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    email: 'any_email',
    registration: 'any_registration',
    passwordHash: 'any_passwordHash',
    coach: 'any_coach',
    admin: 'any_admin',
    gym: 'any_gym'
  }
})

const makeFakeAddUser = (): UserModel => ({
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email',
  registration: 'valid_registration',
  passwordHash: 'valid_passwordHash',
  coach: 'valid_coach',
  admin: 'valid_admin',
  gym: 'valid_gym'
})

interface SutTypes {
  sut: UserController
  emailValidatorStub: EmailValidator
  addUserStub: AddUser
}

const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const addUserStub = makeAddUser()
  const sut = new UserController(emailValidatorStub, addUserStub)
  return {
    sut,
    emailValidatorStub,
    addUserStub
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('name')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('registration')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('passwordHash')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('coach')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('admin')))
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
    expect(httpResponse).toEqual(badRequest(new MissingParamError('gym')))
  })

  test('should return 400 if an invalid email is provided', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('should call EmailValidator with correct email', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const emailValidator = jest.spyOn(emailValidatorStub, 'isValid')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(emailValidator).toHaveBeenCalledWith('any_email')
  })

  test('should return 500 if EmailValidator throws', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('should call add User with correct values', async () => {
    const { sut, addUserStub } = makeSut()
    const addSpy = jest.spyOn(addUserStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_passwordHash',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    })
  })

  test('should return 500 if AddUser throws', async () => {
    const { sut, addUserStub } = makeSut()
    jest.spyOn(addUserStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(successRequest(makeFakeAddUser()))
  })
})
