import { AddUserRepository } from '../../../../data/protocols/add-user-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { AddUserModel } from '../../../../domain/usecases/add-user'
import { UserModel } from '../../../../domain/models/user-model'

export class UserMongoRepository implements AddUserRepository {
  async add (userData: AddUserModel): Promise<UserModel> {
    const userCollection = MongoHelper.get_collection('users')
    const result = await userCollection.insertOne(userData)
    const user = result.ops[0]
    return MongoHelper.map(user)
  }
}
