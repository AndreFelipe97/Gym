import { PhysicalAssessmentModel } from '../models/physical-assessment'

export interface AddPhysicalAssessmentModel {
  user: string
  weight: number
  height: number
  rightBiceps: number
  leftBiceps: number
  rightForearm: number
  leftForearm: number
  chest: number
  waist: number
  abdomen: number
  rightThigh: number
  leftThigh: number
  rightCalf: number
  leftCalf: number
  date: string
  responsible: string
}

export interface AddPhysicalAssessment {
  add: (physicalAssessment: AddPhysicalAssessmentModel) => Promise<PhysicalAssessmentModel>
}
