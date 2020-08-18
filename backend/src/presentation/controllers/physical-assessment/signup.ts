import { AddPhysicalAssessment, Controller, HttpRequest, HttpResponse } from './signup-protocols'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, successRequest } from '../../helpers/http-helper'

export class SignUpPhysicalAssessmentController implements Controller {
  private readonly addPhysicalAssessment: AddPhysicalAssessment

  constructor (addPhysicalAssessment: AddPhysicalAssessment) {
    this.addPhysicalAssessment = addPhysicalAssessment
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['user', 'weight', 'height', 'rightBiceps', 'leftBiceps', 'rightForearm', 'leftForearm', 'chest',
        'waist', 'abdomen', 'rightThigh', 'leftThigh', 'rightCalf', 'leftCalf', 'date', 'responsible']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const {
        user, weight, height, rightBiceps, leftBiceps, rightForearm, leftForearm, chest,
        waist, abdomen, rightThigh, leftThigh, rightCalf, leftCalf, date, responsible
      } = httpRequest.body

      const physicalAssessment = await this.addPhysicalAssessment.add({
        user,
        weight,
        height,
        rightBiceps,
        leftBiceps,
        rightForearm,
        leftForearm,
        chest,
        waist,
        abdomen,
        rightThigh,
        leftThigh,
        rightCalf,
        leftCalf,
        date,
        responsible
      })
      console.log(physicalAssessment)
      return successRequest(physicalAssessment)
    } catch (error) {
      return serverError()
    }
  }
}
