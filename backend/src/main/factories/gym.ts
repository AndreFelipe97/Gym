import { SignUpController } from '../../presentation/controllers/gym/signup'
import { CnpjValidatorAdapter } from '../../utils/cnpj-validator'
import { DbAddGym } from '../../data/usecases/gym/db-add-gym'
import { GymMongoRepository } from '../../infra/db/mongodb/gym-repository/gym'

export const makeSignUpGymController = (): SignUpController => {
  const cnpjValidatorAdapter = new CnpjValidatorAdapter()
  const gymMongoRepository = new GymMongoRepository()
  const addGym = new DbAddGym(gymMongoRepository)
  return new SignUpController(cnpjValidatorAdapter, addGym)
}
