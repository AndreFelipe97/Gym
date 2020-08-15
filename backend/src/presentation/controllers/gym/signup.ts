import { Controller, CnpjValidator, HttpResponse, HttpRequest } from '../../protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'
import { AddGym } from '../../../domain/usecases/add-gym'

export class SignUpController implements Controller {
  private readonly cnpjValidator: CnpjValidator
  private readonly addGym: AddGym

  constructor (cnpjValidator: CnpjValidator, addGym: AddGym) {
    this.cnpjValidator = cnpjValidator
    this.addGym = addGym
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'phone', 'cnpj', 'zipCode', 'street', 'number', 'complement', 'neighborhood', 'city', 'state']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, phone, cnpj, zipCode, street, number, complement, neighborhood, city, state } = httpRequest.body
      const isValid = this.cnpjValidator.isValid(cnpj)
      if (!isValid) {
        return badRequest(new InvalidParamError('cnpj'))
      }
      this.addGym.add({
        name,
        phone,
        cnpj,
        zipCode,
        street,
        number,
        complement,
        neighborhood,
        city,
        state
      })
    } catch (error) {
      return serverError()
    }
  }
}
