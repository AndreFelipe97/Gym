import { ExerciseSheetController } from '../../presentation/controllers/exercise-sheet/controllers-exercise-sheet'
import { DbAddExerciseSheet } from '../../data/usecases/exercise-sheet/db-add-exercise-sheet'
import { ExerciseSheetMongoRepository } from '../../infra/db/mongodb/exercise-sheet-repository/exercise-sheet'

export const makeExerciseSheetController = (): ExerciseSheetController => {
  const exerciseRepository = new ExerciseSheetMongoRepository()
  const addExerciseSheet = new DbAddExerciseSheet(exerciseRepository)
  return new ExerciseSheetController(addExerciseSheet)
}
