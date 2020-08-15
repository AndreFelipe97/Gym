import { AddGym, Controller, CnpjValidator, HttpResponse, HttpRequest } from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, successRequest, serverError } from '../../helpers/http-helper'

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
      const gym = this.addGym.add({
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
      return successRequest(gym)
    } catch (error) {
      return serverError()
    }
  }
}
