import { DbAddGym } from './db-add-gym'
import { AddGymModel, GymModel, AddGymRepository } from './db-add-gym-protocols'

const makeAddGymRepository = (): AddGymRepository => {
  class AddGymRepositoryStub implements AddGymRepository {
    async add (gymData: AddGymModel): Promise<GymModel> {
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
      return await new Promise(resolve => resolve(fakeGym))
    }
  }
  return new AddGymRepositoryStub()
}

interface SutTypes {
  sut: DbAddGym
  addGymRepositoryStub: AddGymRepository
}

const makeSut = (): SutTypes => {
  const addGymRepositoryStub = makeAddGymRepository()
  const sut = new DbAddGym(addGymRepositoryStub)
  return { sut, addGymRepositoryStub }
}

describe('DbAddGym Usecase', () => {
  test('should call AddGymRepository with correct values', async () => {
    const { sut, addGymRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addGymRepositoryStub, 'add')
    const gymData = {
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
    await sut.add(gymData)
    expect(addSpy).toHaveBeenCalledWith({
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
