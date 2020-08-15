import { Controller, CnpjValidator, HttpResponse, HttpRequest } from '../../protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly cnpjValidator: CnpjValidator

  constructor (cnpjValidator: CnpjValidator) {
    this.cnpjValidator = cnpjValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'phone', 'cnpj', 'zipCode', 'street', 'number', 'complement', 'neighborhood', 'city', 'state']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { cnpj } = httpRequest.body
      const isValid = this.cnpjValidator.isValid(cnpj)
      if (!isValid) {
        return badRequest(new InvalidParamError('cnpj'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
