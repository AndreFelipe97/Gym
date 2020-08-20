import { SignUpExercisesController } from '../../presentation/controllers/exercises/controller-exercises'
import { DbAddExercises } from '../../data/usecases/exercises/db-add-exercises'
import { ExercisesMongoRepository } from '../../infra/db/mongodb/exercises-repository/exercises'

export const makeSignUpExercisesController = (): SignUpExercisesController => {
  const exercisesRepository = new ExercisesMongoRepository()
  const addExercises = new DbAddExercises(exercisesRepository)
  return new SignUpExercisesController(addExercises)
}
