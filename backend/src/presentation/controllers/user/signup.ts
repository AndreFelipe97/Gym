import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'

export class SignUpUserController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'registration', 'passwordHash', 'coach', 'admin', 'gym']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
