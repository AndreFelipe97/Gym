import { HttpResponse, HttpRequest } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.phone) {
      return badRequest(new MissingParamError('phone'))
    }
    if (!httpRequest.body.zipCode) {
      return badRequest(new MissingParamError('zipCode'))
    }
    if (!httpRequest.body.street) {
      return badRequest(new MissingParamError('street'))
    }
    if (!httpRequest.body.number) {
      return badRequest(new MissingParamError('number'))
    }
    if (!httpRequest.body.complement) {
      return badRequest(new MissingParamError('complement'))
    }
    if (!httpRequest.body.neighborhood) {
      return badRequest(new MissingParamError('neighborhood'))
    }
    if (!httpRequest.body.city) {
      return badRequest(new MissingParamError('city'))
    }

    if (!httpRequest.body.state) {
      return badRequest(new MissingParamError('state'))
    }
  }
}
