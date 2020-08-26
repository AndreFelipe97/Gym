import { MuscleGroupController } from '../../presentation/controllers/muscle-group/controller-muscle-group'
import { DbAddMuscleGroup } from '../../data/usecases/muscle-group/db-add-muscle-group'
import { MuscleGroupMongoRepository } from '../../infra/db/mongodb/muscle-group-repository/muscle-group'

export const makeMuscleGroupController = (): MuscleGroupController => {
  const muscleGroupRepository = new MuscleGroupMongoRepository()
  const addMuscleGroup = new DbAddMuscleGroup(muscleGroupRepository)
  return new MuscleGroupController(addMuscleGroup)
}
