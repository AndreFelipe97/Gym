import { GymModel } from '../models/gym-model'

export interface AddGymModel {
  name: string
  phone: string
  cnpj: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export interface AddGym {
  add: (gym: AddGymModel) => Promise<GymModel>
}
