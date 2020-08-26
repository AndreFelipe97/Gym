import { PhysicalAssessmentController } from '../../presentation/controllers/physical-assessment/controller-physical-assessment'
import { DbAddPhysicalAssessment } from '../../data/usecases/physical-assessment/db-add-physical-assessment'
import { PhysicalAssessmentMongoRepository } from '../../infra/db/mongodb/physical-assessment-repository/physical-assessment'

export const makePhysicalAssessmentController = (): PhysicalAssessmentController => {
  const physicalAssessmentMongoRepository = new PhysicalAssessmentMongoRepository()
  const addPhysicalAssessment = new DbAddPhysicalAssessment(physicalAssessmentMongoRepository)
  return new PhysicalAssessmentController(addPhysicalAssessment)
}
