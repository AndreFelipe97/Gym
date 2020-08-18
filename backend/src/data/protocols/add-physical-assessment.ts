import { AddPhysicalAssessmentModel } from '../../domain/usecases/add-physical-assessment'
import { PhysicalAssessmentModel } from '../../domain/models/physical-assessment'

export interface AddPhysicalAssessmentRepository {
  add: (gymData: AddPhysicalAssessmentModel) => Promise<PhysicalAssessmentModel>
}
