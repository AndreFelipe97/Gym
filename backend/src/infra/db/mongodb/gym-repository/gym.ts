import { AddGymRepository } from '../../../../data/protocols/add-gym-repository'
import { AddGymModel } from '../../../../domain/usecases/add-gym'
import { GymModel } from '../../../../domain/models/gym-model'
import { MongoHelper } from '../helpers/mongo-helper'

export class GymMongoRepository implements AddGymRepository {
  async add (gymData: AddGymModel): Promise<GymModel> {
    const gymCollection = MongoHelper.get_collection('gyms')
    const result = await gymCollection.insertOne(gymData)
    const gym = result.ops[0]
    const { _id, ...gymWithoutId } = gym
    return Object.assign({}, gymWithoutId, { id: _id })
  }
}
