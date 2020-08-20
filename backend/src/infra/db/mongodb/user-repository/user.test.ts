import { UserMongoRepository } from './user'
import { MongoHelper } from '../helpers/mongo-helper'

describe('User Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const gymCollection = await MongoHelper.get_collection('gyms')
    await gymCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): UserMongoRepository => {
    return new UserMongoRepository()
  }

  test('should return an gym on success ', async () => {
    const sut = makeSut()
    const user = await sut.add({
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_passwordHash',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    })
    expect(user).toBeTruthy()
    expect(user).toBeTruthy()
    expect(user.name).toBe('any_name')
    expect(user.email).toBe('any_email')
    expect(user.registration).toBe('any_registration')
    expect(user.passwordHash).toBe('any_passwordHash')
    expect(user.coach).toBe('any_coach')
    expect(user.admin).toBe('any_admin')
    expect(user.gym).toBe('any_gym')
  })
})
