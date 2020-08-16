import { AddGym, AddGymModel, GymModel } from './db-add-gym-protocols'

export class DbAddGym implements AddGym {
  async add (gym: AddGymModel): Promise<GymModel> {
    return await new Promise(resolve => resolve(null))
  }
}
