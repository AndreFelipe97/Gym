import { AddExercisesModel } from '../../domain/usecases/add-exercises'
import { ExercisesModel } from '../../domain/models/exercises-model'

export interface AddExercisesRepository {
  add: (exercisesData: AddExercisesModel) => Promise<ExercisesModel>
}
