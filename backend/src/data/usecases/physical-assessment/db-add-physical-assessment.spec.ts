import { DbAddPhysicalAssessment } from './db-add-physical-assessment'
import { AddPhysicalAssessmentRepository } from '../../protocols/add-physical-assessment'
import { AddPhysicalAssessmentModel } from '../../../domain/usecases/add-physical-assessment'
import { PhysicalAssessmentModel } from '../../../domain/models/physical-assessment'

const makeAddUserRepository = (): AddPhysicalAssessmentRepository => {
  class AddPhysicalAssessmentRepositoryStub implements AddPhysicalAssessmentRepository {
    async add (physicalAssessmentRepositoryData: AddPhysicalAssessmentModel): Promise<PhysicalAssessmentModel> {
      const fakePhysicalAssessment = {
        id: 'valid_id',
        user: 'valid_user',
        weight: 2,
        height: 2,
        rightBiceps: 2,
        leftBiceps: 2,
        rightForearm: 2,
        leftForearm: 2,
        chest: 2,
        waist: 2,
        abdomen: 2,
        rightThigh: 2,
        leftThigh: 2,
        rightCalf: 2,
        leftCalf: 2,
        date: '2020-08-18',
        responsible: 'valid_responsible'
      }
      return await new Promise(resolve => resolve(fakePhysicalAssessment))
    }
  }
  return new AddPhysicalAssessmentRepositoryStub()
}

interface SutTypes {
  addPhysicalAssessmentRepositoryStub: AddPhysicalAssessmentRepository
  sut: DbAddPhysicalAssessment
}

const makeSut = (): SutTypes => {
  const addPhysicalAssessmentRepositoryStub = makeAddUserRepository()
  const sut = new DbAddPhysicalAssessment(addPhysicalAssessmentRepositoryStub)
  return {
    sut,
    addPhysicalAssessmentRepositoryStub
  }
}

describe('DbAddPhysicalAssessment Usecase', () => {
  test('should call AddUserRepository with correct values', async () => {
    const { sut, addPhysicalAssessmentRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addPhysicalAssessmentRepositoryStub, 'add')
    const physicalAssessmentRepositoryData = {
      user: 'valid_user',
      weight: 2,
      height: 2,
      rightBiceps: 2,
      leftBiceps: 2,
      rightForearm: 2,
      leftForearm: 2,
      chest: 2,
      waist: 2,
      abdomen: 2,
      rightThigh: 2,
      leftThigh: 2,
      rightCalf: 2,
      leftCalf: 2,
      date: '2020-08-18',
      responsible: 'valid_responsible'
    }
    await sut.add(physicalAssessmentRepositoryData)
    expect(addSpy).toHaveBeenCalledWith({
      user: 'valid_user',
      weight: 2,
      height: 2,
      rightBiceps: 2,
      leftBiceps: 2,
      rightForearm: 2,
      leftForearm: 2,
      chest: 2,
      waist: 2,
      abdomen: 2,
      rightThigh: 2,
      leftThigh: 2,
      rightCalf: 2,
      leftCalf: 2,
      date: '2020-08-18',
      responsible: 'valid_responsible'
    })
  })
})
