import { SignUpController } from './signup'
import { MissingParamError, InvalidParamError, ServerError } from '../../errors'
import { AddGym, AddGymModel, CnpjValidator, GymModel } from './signup-protocols'

const makeCnpjValidator = (): CnpjValidator => {
  class CnpjValidatorStub implements CnpjValidator {
    isValid (cnpj: string): boolean {
      return true
    }
  }
  return new CnpjValidatorStub()
}

const makeAddGym = (): AddGym => {
  class AddGymStub implements AddGym {
    add (cnpj: AddGymModel): GymModel {
      const fakeGym = {
        id: 'valid_id',
        name: 'valid_name',
        phone: 'valid_phone',
        cnpj: 'valid_cnpj',
        zipCode: 'valid_zip_code',
        street: 'valid_street',
        number: 'valid_number',
        complement: 'valid_complement',
        neighborhood: 'valid_neighborhood',
        city: 'valid_city',
        state: 'valid_state'
      }
      return fakeGym
    }
  }
  return new AddGymStub()
}

interface SutTypes {
  sut: SignUpController
  cnpjValidatorStub: CnpjValidator
  addGymStub: AddGym
}

const makeSut = (): SutTypes => {
  const cnpjValidatorStub = makeCnpjValidator()
  const addGymStub = makeAddGym()
  const sut = new SignUpController(cnpjValidatorStub, addGymStub)

  return {
    sut,
    cnpjValidatorStub,
    addGymStub
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
    const { sut, cnpjValidatorStub } = makeSut()
    jest.spyOn(cnpjValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })
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

  test('should call AddGym with correct values', () => {
    const { sut, addGymStub } = makeSut()
    const addSpy = jest.spyOn(addGymStub, 'add')
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
    expect(addSpy).toHaveBeenCalledWith({
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
    })
  })

  test('should return 500 if AddGym throws', () => {
    const { sut, addGymStub } = makeSut()
    jest.spyOn(addGymStub, 'add').mockImplementationOnce(() => {
      throw new Error()
    })
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

  test('should return 200 if valid data is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        phone: 'valid_phone',
        cnpj: 'valid_cnpj',
        zipCode: 'valid_zip_code',
        street: 'valid_street',
        number: 'valid_number',
        complement: 'valid_complement',
        neighborhood: 'valid_neighborhood',
        city: 'valid_city',
        state: 'valid_state'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 'valid_id',
      name: 'valid_name',
      phone: 'valid_phone',
      cnpj: 'valid_cnpj',
      zipCode: 'valid_zip_code',
      street: 'valid_street',
      number: 'valid_number',
      complement: 'valid_complement',
      neighborhood: 'valid_neighborhood',
      city: 'valid_city',
      state: 'valid_state'
    })
  })
})
