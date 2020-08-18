import { AddUser, AddUserModel, Encrypter, UserModel } from './db-add-user-protocols'

export class DbAddUser implements AddUser {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (userData: AddUserModel): Promise<UserModel> {
    await this.encrypter.encrypt(userData.passwordHash)
    return await new Promise(resolve => resolve(null))
  }
}
