import { MongoHelper } from '../helpers/mongo-helper'
import { GymMongoRepository } from './gym'

describe('Gym Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): GymMongoRepository => {
    return new GymMongoRepository()
  }

  test('should return an gym on success', async () => {
    const sut = makeSut()
    const gym = await sut.add({
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
    expect(gym).toBeTruthy()
    expect(gym).toBeTruthy()
    expect(gym.name).toBe('any_name')
    expect(gym.phone).toBe('any_phone')
    expect(gym.cnpj).toBe('any_cnpj')
    expect(gym.zipCode).toBe('any_zip_code')
    expect(gym.street).toBe('any_street')
    expect(gym.number).toBe('any_number')
    expect(gym.complement).toBe('any_complement')
    expect(gym.neighborhood).toBe('any_neighborhood')
    expect(gym.city).toBe('any_city')
    expect(gym.state).toBe('any_state')
  })
})
