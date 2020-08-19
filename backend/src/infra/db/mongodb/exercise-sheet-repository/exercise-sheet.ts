import { AddExerciseSheetRepository } from '../../../../data/protocols/add-exercise-sheet-repository'
import { AddExerciseSheetModel } from '../../../../domain/usecases/add-exercise-sheet'
import { ExerciseSheetModel } from '../../../../domain/models/exercise-sheet-model'
import { MongoHelper } from '../helpers/mongo-helper'

export class ExerciseSheetMongoRepository implements AddExerciseSheetRepository {
  async add (exerciseSheetData: AddExerciseSheetModel): Promise<ExerciseSheetModel> {
    const exerciseSheetCollection = MongoHelper.get_collection('exerciseSheets')
    const result = await exerciseSheetCollection.insertOne(exerciseSheetData)
    const exerciseSheet = result.ops[0]
    return MongoHelper.map(exerciseSheet)
  }
}
