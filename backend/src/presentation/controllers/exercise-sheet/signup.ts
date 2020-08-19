import { Controller, HttpRequest, HttpResponse, AddExerciseSheet } from './signup-protocols'
import { serverError, badRequest, successRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

export class SignUpExerciseSheetController implements Controller {
  private readonly addExerciseSheet: AddExerciseSheet

  constructor (addExerciseSheet: AddExerciseSheet) {
    this.addExerciseSheet = addExerciseSheet
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['user', 'exercise', 'repetition', 'amount', 'day', 'responsible']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { user, exercise, repetition, amount, day, responsible } = httpRequest.body
      const exerciseSheet = await this.addExerciseSheet.add({
        user, exercise, repetition, amount, day, responsible
      })
      return successRequest(exerciseSheet)
    } catch (error) {
      return serverError()
    }
  }
}
