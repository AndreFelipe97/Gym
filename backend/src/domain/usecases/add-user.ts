import { UserModel } from '../models/user-model'

export interface AddUserModel {
  name: string
  email: string
  registration: string
  passwordHash: string
  coach: string
  admin: string
  gym: string
}

export interface AddUser {
  add: (gym: AddUserModel) => Promise<UserModel>
}
