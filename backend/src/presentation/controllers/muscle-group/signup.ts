import { AddMuscleGroup, Controller, HttpRequest, HttpResponse } from './signup-protocols'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, successRequest } from '../../helpers/http-helper'

export class SignUpMuscleGroupController implements Controller {
  private readonly addMuscleGroup: AddMuscleGroup
  constructor (addMuscleGroup: AddMuscleGroup) {
    this.addMuscleGroup = addMuscleGroup
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name } = httpRequest.body
      const muscleGroup = await this.addMuscleGroup.add({
        name
      })
      return successRequest(muscleGroup)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
