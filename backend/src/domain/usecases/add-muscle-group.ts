import { MuscleGroupModel } from '../models/muscle-group-model'

export interface AddMuscleGroupModel {
  name: string
}

export interface AddMuscleGroup {
  add: (gym: AddMuscleGroupModel) => Promise<MuscleGroupModel>
}
