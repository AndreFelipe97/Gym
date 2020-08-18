import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'

export class SignUpPhysicalAssessmentController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['user', 'weight', 'height', 'rightBiceps', 'leftBiceps', 'rightForearm', 'leftForearm', 'chest',
      'waist', 'abdomen', 'rightThigh', 'leftThigh', 'rightCalf', 'leftCalf', 'date', 'responsible']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
