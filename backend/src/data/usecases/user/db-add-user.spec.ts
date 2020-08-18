import { DbAddUser } from './db-add-user'
import { UserModel, AddUserModel, AddUserRepository, Encrypter } from './db-add-user-protocols'

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new EncrypterStub()
}

const makeAddUserRepository = (): AddUserRepository => {
  class AddGymRepositoryStub implements AddUserRepository {
    async add (userData: AddUserModel): Promise<UserModel> {
      const fakeUser = {
        id: 'valid_id',
        name: 'any_name',
        email: 'any_email',
        registration: 'any_registration',
        passwordHash: 'hashed_password',
        coach: 'any_coach',
        admin: 'any_admin',
        gym: 'any_gym'
      }
      return await new Promise(resolve => resolve(fakeUser))
    }
  }
  return new AddGymRepositoryStub()
}

interface SutTypes {
  sut: DbAddUser
  encrypterStub: Encrypter
  addUserRepositoryStub: AddUserRepository
}

const makeSut = (): SutTypes => {
  const encrypterStub = makeEncrypter()
  const addUserRepositoryStub = makeAddUserRepository()
  const sut = new DbAddUser(encrypterStub, addUserRepositoryStub)

  return {
    sut,
    encrypterStub,
    addUserRepositoryStub
  }
}

describe('DbAddUser Usecase', () => {
  test('should call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const userData = {
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_passwordHash',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    }
    await sut.add(userData)
    expect(encryptSpy).toHaveBeenCalledWith('any_passwordHash')
  })

  test('should throw if Encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()
    jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const userData = {
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_passwordHash',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    }
    const promise = sut.add(userData)
    await expect(promise).rejects.toThrow()
  })

  test('should call AddUserRepository with correct values', async () => {
    const { sut, addUserRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addUserRepositoryStub, 'add')
    const userData = {
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_password',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    }
    await sut.add(userData)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'hashed_password',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    })
  })

  test('should throw if AddUserRepository throws', async () => {
    const { sut, addUserRepositoryStub } = makeSut()
    jest.spyOn(addUserRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const userData = {
      name: 'any_name',
      email: 'any_email',
      registration: 'any_registration',
      passwordHash: 'any_passwordHash',
      coach: 'any_coach',
      admin: 'any_admin',
      gym: 'any_gym'
    }
    const promise = sut.add(userData)
    await expect(promise).rejects.toThrow()
  })
})
