import { UserController } from '../../presentation/controllers/user/controllers-user'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddUser } from '../../data/usecases/user/db-add-user'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { UserMongoRepository } from '../../infra/db/mongodb/user-repository/user'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { Controller } from '../../presentation/protocols'
import { LogControllerDecorator } from '../decorators/log'

export const makeUserController = (): Controller => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const userMongoRepository = new UserMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const addUser = new DbAddUser(bcryptAdapter, userMongoRepository)
  const userController = new UserController(emailValidator, addUser)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(userController, logMongoRepository)
}
