import { AddMuscleGroup, Controller, HttpRequest, HttpResponse } from './signup-protocols'
import { MissingParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'

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
      await this.addMuscleGroup.add({
        name
      })
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
