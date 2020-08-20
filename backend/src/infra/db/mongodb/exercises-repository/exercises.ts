import { AddExercisesRepository } from '../../../../data/protocols/add-exercises-repository'
import { AddExercisesModel } from '../../../../domain/usecases/add-exercises'
import { ExercisesModel } from '../../../../domain/models/exercises-model'
import { MongoHelper } from '../helpers/mongo-helper'

export class ExercisesMongoRepository implements AddExercisesRepository {
  async add (exercisesData: AddExercisesModel): Promise<ExercisesModel> {
    const exercisesCollection = await MongoHelper.get_collection('exercises')
    const result = await exercisesCollection.insertOne(exercisesData)
    const exercises = result.ops[0]
    return MongoHelper.map(exercises)
  }
}
