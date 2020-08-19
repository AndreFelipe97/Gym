import { AddExerciseSheet, AddExerciseSheetRepository, AddExerciseSheetModel, ExerciseSheetModel } from './db-add-exercise-sheet-protcols'

export class DbAddExerciseSheet implements AddExerciseSheet {
  private readonly addExerciseSheetRepository: AddExerciseSheetRepository

  constructor (addExerciseSheetRepository: AddExerciseSheetRepository) {
    this.addExerciseSheetRepository = addExerciseSheetRepository
  }

  async add (exerciseSheetData: AddExerciseSheetModel): Promise<ExerciseSheetModel> {
    const exercises = await this.addExerciseSheetRepository.add(exerciseSheetData)
    return exercises
  }
}
