import { AddMuscleGroup, AddMuscleGroupModel, AddMuscleGroupRepository, MuscleGroupModel } from './db-add-muscle-group-protocols'

export class DbAddMuscleGroup implements AddMuscleGroup {
  private readonly addMuscleGroupRepository: AddMuscleGroupRepository

  constructor (addMuscleGroupRepository: AddMuscleGroupRepository) {
    this.addMuscleGroupRepository = addMuscleGroupRepository
  }

  async add (muscleGroupData: AddMuscleGroupModel): Promise<MuscleGroupModel> {
    const muscleGroup = await this.addMuscleGroupRepository.add(muscleGroupData)
    return muscleGroup
  }
}
