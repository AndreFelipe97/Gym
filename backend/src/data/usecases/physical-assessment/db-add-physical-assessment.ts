import { AddPhysicalAssessment, AddPhysicalAssessmentModel, AddPhysicalAssessmentRepository, PhysicalAssessmentModel } from './db-add-physical-assessment-protocols'

export class DbAddPhysicalAssessment implements AddPhysicalAssessment {
  private readonly addPhysicalAssessmentRepository: AddPhysicalAssessment

  constructor (addPhysicalAssessmentRepository: AddPhysicalAssessmentRepository) {
    this.addPhysicalAssessmentRepository = addPhysicalAssessmentRepository
  }

  async add (userPhysicalAssessment: AddPhysicalAssessmentModel): Promise<PhysicalAssessmentModel> {
    const physicalAssessment = await this.addPhysicalAssessmentRepository.add(userPhysicalAssessment)
    return physicalAssessment
  }
}
