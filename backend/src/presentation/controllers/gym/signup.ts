import { HttpResponse, HttpRequest } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.phone) {
      return {
        body: new MissingParamError('phone'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.zipCode) {
      return {
        body: new MissingParamError('zipCode'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.street) {
      return {
        body: new MissingParamError('street'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.number) {
      return {
        body: new MissingParamError('number'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.complement) {
      return {
        body: new MissingParamError('complement'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.neighborhood) {
      return {
        body: new MissingParamError('neighborhood'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.city) {
      return {
        body: new MissingParamError('city'),
        statusCode: 400
      }
    }

    if (!httpRequest.body.state) {
      return {
        body: new MissingParamError('state'),
        statusCode: 400
      }
    }
  }
}
