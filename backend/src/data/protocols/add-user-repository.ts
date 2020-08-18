import { AddUserModel } from '../../domain/usecases/add-user'
import { UserModel } from '../../domain/models/user-model'

export interface AddUserRepository {
  add: (userData: AddUserModel) => Promise<UserModel>
}
