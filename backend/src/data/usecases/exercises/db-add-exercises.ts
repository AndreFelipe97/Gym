import { AddExercises, AddExercisesRepository, AddExercisesModel, ExercisesModel } from './db-add-exercises-protocols'

export class DbAddExercises implements AddExercises {
  private readonly addExercisesRepository: AddExercisesRepository

  constructor (addExercisesRepository: AddExercisesRepository) {
    this.addExercisesRepository = addExercisesRepository
  }

  async add (exercisesData: AddExercisesModel): Promise<ExercisesModel> {
    const exercises = await this.addExercisesRepository.add(exercisesData)
    return exercises
  }
}
