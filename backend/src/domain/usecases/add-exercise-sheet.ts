import { ExerciseSheetModel } from '../models/exercise-sheet-model'

export interface AddExerciseSheetModel {
  user: string
  exercise: string
  repetition: string
  amount: string
  day: string
  responsible: string
}

export interface AddExerciseSheet {
  add: (exerciseSheet: AddExerciseSheetModel) => Promise<ExerciseSheetModel>
}
