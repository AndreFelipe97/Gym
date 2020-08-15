import { SignUpController } from './signup'
import { MissingParamError, InvalidParamError, ServerError } from '../../errors'
import { CnpjValidator } from '../../protocols'

interface SutTypes {
  sut: SignUpController
  cnpjValidatorStub: CnpjValidator
}

const makeCnpjValidator = (): CnpjValidator => {
  class CnpjValidatorStub implements CnpjValidator {
    isValid (cnpj: string): boolean {
      return true
    }
  }
  return new CnpjValidatorStub()
}

const makeCnpjValidatorWithError = (): CnpjValidator => {
  class CnpjValidatorStub implements CnpjValidator {
    isValid (cnpj: string): boolean {
      throw new Error()
    }
  }
  return new CnpjValidatorStub()
}

const makeSut = (): SutTypes => {
  const cnpjValidatorStub = makeCnpjValidator()
  const sut = new SignUpController(cnpjValidatorStub)

  return {
    sut,
    cnpjValidatorStub
  }
}

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no phone is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('phone'))
  })

  test('should return 400 if no cnpj is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('cnpj'))
  })

  test('should return 400 if no zipCode is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('zipCode'))
  })

  test('should return 400 if no street is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('street'))
  })

  test('should return 400 if no number is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('number'))
  })

  test('should return 400 if no complement is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('complement'))
  })

  test('should return 400 if no neighborhood is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('neighborhood'))
  })

  test('should return 400 if no city is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('city'))
  })

  test('should return 400 if no state is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('state'))
  })

  test('should return 400 if an invalid cnpj is provided', () => {
    const { sut, cnpjValidatorStub } = makeSut()
    const isValidSpy = jest.spyOn(cnpjValidatorStub, 'isValid')
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    sut.handle(httpRequest)
    expect(isValidSpy).toHaveBeenCalledWith('any_cnpj')
  })

  test('should call cnpjValidator with correct cnpj', () => {
    const { sut, cnpjValidatorStub } = makeSut()
    jest.spyOn(cnpjValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'invalid_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('cnpj'))
  })

  test('should return 500 if CnpjValidator throws', () => {
    const cnpjValidatorStub = makeCnpjValidatorWithError()
    const sut = new SignUpController(cnpjValidatorStub)
    const httpRequest = {
      body: {
        name: 'any_name',
        phone: 'any_phone',
        cnpj: 'any_cnpj',
        zipCode: 'any_zip_code',
        street: 'any_street',
        number: 'any_number',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        city: 'any_city',
        state: 'any_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
