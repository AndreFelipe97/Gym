import { HttpResponse, HttpRequest } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { CnpjValidator } from '../../protocols/cnpj-validator'
import { InvalidParamError } from '../../errors/invalid-param-error'

export class SignUpController implements Controller {
  private readonly cnpjValidator: CnpjValidator

  constructor (cnpjValidator: CnpjValidator) {
    this.cnpjValidator = cnpjValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'phone', 'cnpj', 'zipCode', 'street', 'number', 'complement', 'neighborhood', 'city', 'state']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.cnpjValidator.isValid(httpRequest.body.cnpj)
    if (!isValid) {
      return badRequest(new InvalidParamError('cnpj'))
    }
  }
}
