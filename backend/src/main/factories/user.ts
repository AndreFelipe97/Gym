import { SignUpUserController } from '../../presentation/controllers/user/controllers-user'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddUser } from '../../data/usecases/user/db-add-user'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { UserMongoRepository } from '../../infra/db/mongodb/user-repository/user'

export const makeSignUpUserController = (): SignUpUserController => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const userMongoRepository = new UserMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const addUser = new DbAddUser(bcryptAdapter, userMongoRepository)
  return new SignUpUserController(emailValidator, addUser)
}
