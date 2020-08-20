import { SignUpPhysicalAssessmentController } from '../../presentation/controllers/physical-assessment/controller-physical-assessment'
import { DbAddPhysicalAssessment } from '../../data/usecases/physical-assessment/db-add-physical-assessment'
import { PhysicalAssessmentMongoRepository } from '../../infra/db/mongodb/physical-assessment-repository/physical-assessment'

export const makeSignUpPhysicalAssessmentController = (): SignUpPhysicalAssessmentController => {
  const physicalAssessmentMongoRepository = new PhysicalAssessmentMongoRepository()
  const addPhysicalAssessment = new DbAddPhysicalAssessment(physicalAssessmentMongoRepository)
  return new SignUpPhysicalAssessmentController(addPhysicalAssessment)
}
