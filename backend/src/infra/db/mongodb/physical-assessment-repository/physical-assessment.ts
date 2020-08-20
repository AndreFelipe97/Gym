import { AddPhysicalAssessmentRepository } from '../../../../data/protocols/add-physical-assessment'
import { AddPhysicalAssessmentModel } from '../../../../domain/usecases/add-physical-assessment'
import { PhysicalAssessmentModel } from '../../../../domain/models/physical-assessment'
import { MongoHelper } from '../helpers/mongo-helper'

export class PhysicalAssessmentMongoRepository implements AddPhysicalAssessmentRepository {
  async add (physicalAssessmentData: AddPhysicalAssessmentModel): Promise<PhysicalAssessmentModel> {
    const physicalAssessmentCollection = await MongoHelper.get_collection('physicalAssessments')
    const result = await physicalAssessmentCollection.insertOne(physicalAssessmentData)
    const physicalAssessment = result.ops[0]
    return MongoHelper.map(physicalAssessment)
  }
}
