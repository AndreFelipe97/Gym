import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpUserController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new Error('Missing param: name'),
        statusCode: 400
      }
    }

    if (!httpRequest.body.email) {
      return {
        body: new Error('Missing param: email'),
        statusCode: 400
      }
    }
  }
}
