import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { serverError, badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

export class SignUpExerciseSheetController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['user', 'exercise', 'repetition', 'amount', 'day', 'responsible']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
    } catch (error) {
      return serverError()
    }
  }
}
