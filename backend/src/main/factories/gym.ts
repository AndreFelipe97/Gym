import { GymController } from '../../presentation/controllers/gym/controllers-gym'
import { CnpjValidatorAdapter } from '../../utils/cnpj-validator'
import { DbAddGym } from '../../data/usecases/gym/db-add-gym'
import { GymMongoRepository } from '../../infra/db/mongodb/gym-repository/gym'

export const makeGymController = (): GymController => {
  const cnpjValidatorAdapter = new CnpjValidatorAdapter()
  const gymMongoRepository = new GymMongoRepository()
  const addGym = new DbAddGym(gymMongoRepository)
  return new GymController(cnpjValidatorAdapter, addGym)
}
