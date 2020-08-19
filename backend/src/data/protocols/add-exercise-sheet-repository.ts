import { AddExerciseSheetModel } from '../../domain/usecases/add-exercise-sheet'
import { ExerciseSheetModel } from '../../domain/models/exercise-sheet-model'

export interface AddExerciseSheetRepository {
  add: (exercisesData: AddExerciseSheetModel) => Promise<ExerciseSheetModel>
}
