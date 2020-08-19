import { ExercisesModel } from '../models/exercises-model'

export interface AddExercisesModel {
  name: string
  muscleGroup: string
}

export interface AddExercises {
  add: (exercises: AddExercisesModel) => Promise<ExercisesModel>
}
