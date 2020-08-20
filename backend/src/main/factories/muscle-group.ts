import { SignUpMuscleGroupController } from '../../presentation/controllers/muscle-group/signup'
import { DbAddMuscleGroup } from '../../data/usecases/muscle-group/db-add-muscle-group'
import { MuscleGroupMongoRepository } from '../../infra/db/mongodb/muscle-group-repository/muscle-group'

export const makeSignUpMuscleGroupController = (): SignUpMuscleGroupController => {
  const muscleGroupRepository = new MuscleGroupMongoRepository()
  const addMuscleGroup = new DbAddMuscleGroup(muscleGroupRepository)
  return new SignUpMuscleGroupController(addMuscleGroup)
}
