import { AddMuscleGroupModel } from '../../domain/usecases/add-muscle-group'
import { MuscleGroupModel } from '../../domain/models/muscle-group-model'

export interface AddMuscleGroupRepository {
  add: (muscleGroupData: AddMuscleGroupModel) => Promise<MuscleGroupModel>
}
