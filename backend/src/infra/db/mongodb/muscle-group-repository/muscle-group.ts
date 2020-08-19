import { AddMuscleGroupRepository } from '../../../../data/protocols/add-muscle-group-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { AddMuscleGroupModel } from '../../../../domain/usecases/add-muscle-group'
import { MuscleGroupModel } from '../../../../domain/models/muscle-group-model'

export class MuscleGroupMongoRepository implements AddMuscleGroupRepository {
  async add (muscleGroupData: AddMuscleGroupModel): Promise<MuscleGroupModel> {
    const muscleGroupCollection = MongoHelper.get_collection('muscleGroups')
    const result = await muscleGroupCollection.insertOne(muscleGroupData)
    const muscleGroup = result.ops[0]
    return MongoHelper.map(muscleGroup)
  }
}
