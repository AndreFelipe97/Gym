import { AddExercises, Controller, HttpRequest, HttpResponse } from './signup-protocols'
import { serverError, badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

export class SignUpExercisesController implements Controller {
  private readonly addExercises: AddExercises

  constructor (addExercises: AddExercises) {
    this.addExercises = addExercises
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'muscleGroup']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, muscleGroup } = httpRequest.body
      await this.addExercises.add({
        name,
        muscleGroup
      })
    } catch (error) {
      return serverError()
    }
  }
}
