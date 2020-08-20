import { AddUser, Controller, EmailValidator, HttpRequest, HttpResponse } from './protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError, successRequest } from '../../helpers/http-helper'

export class SignUpUserController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addUser: AddUser

  constructor (emailValidator: EmailValidator, addUser: AddUser) {
    this.emailValidator = emailValidator
    this.addUser = addUser
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'registration', 'passwordHash', 'coach', 'admin', 'gym']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, registration, passwordHash, coach, admin, gym } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const user = await this.addUser.add({
        name,
        email,
        registration,
        passwordHash,
        coach,
        admin,
        gym
      })
      return successRequest(user)
    } catch (error) {
      return serverError()
    }
  }
}
