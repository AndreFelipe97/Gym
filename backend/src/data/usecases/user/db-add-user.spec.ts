import { DbAddUser } from './db-add-user'

describe('DbAddUser Usecase', () => {
  test('should call Encrypter with correct password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddUser(encrypterStub)
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
})
