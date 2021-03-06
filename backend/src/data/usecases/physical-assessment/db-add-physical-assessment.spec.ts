import { DbAddPhysicalAssessment } from './db-add-physical-assessment'
import { AddPhysicalAssessmentRepository, AddPhysicalAssessmentModel, PhysicalAssessmentModel } from './db-add-physical-assessment-protocols'

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
  test('should call AddPhysicalAssessmentRepository with correct values', async () => {
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

  test('should throw if AddPhysicalAssessmentRepository throws', async () => {
    const { sut, addPhysicalAssessmentRepositoryStub } = makeSut()
    jest.spyOn(addPhysicalAssessmentRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const physicalAssessmentData = {
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
    const promise = sut.add(physicalAssessmentData)
    await expect(promise).rejects.toThrow()
  })

  test('should return an PhysicalAssessment on success', async () => {
    const { sut } = makeSut()
    const PhysicalAssessmentData = {
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
    const user = await sut.add(PhysicalAssessmentData)
    expect(user).toEqual({
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
    })
  })
})
