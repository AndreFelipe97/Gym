import { AddGymModel } from '../../domain/usecases/add-gym'
import { GymModel } from '../../domain/models/gym-model'

export interface AddGymRepository {
  add: (gymData: AddGymModel) => Promise<GymModel>
}
