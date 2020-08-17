import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'

export class SignUpUserController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'registration', 'passwordHash', 'coach', 'admin']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
