import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'

export class SignUpUserController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400
      }
    }

    if (!httpRequest.body.email) {
      return {
        body: new MissingParamError('email'),
        statusCode: 400
      }
    }
  }
}
