import { AddGym, AddGymModel, AddGymRepository, GymModel } from './db-add-gym-protocols'

export class DbAddGym implements AddGym {
  private readonly addGymRepository: AddGymRepository

  constructor (addGymRepository: AddGymRepository) {
    this.addGymRepository = addGymRepository
  }

  async add (gymData: AddGymModel): Promise<GymModel> {
    const gym = await this.addGymRepository.add(gymData)
    return gym
  }
}
