import { AddGym, Controller, CnpjValidator, HttpResponse, HttpRequest } from './protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, successRequest, serverError } from '../../helpers/http-helper'

export class GymController implements Controller {
  private readonly cnpjValidator: CnpjValidator
  private readonly addGym: AddGym

  constructor (cnpjValidator: CnpjValidator, addGym: AddGym) {
    this.cnpjValidator = cnpjValidator
    this.addGym = addGym
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
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
      const gym = await this.addGym.add({
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
      return serverError(error)
    }
  }
}
