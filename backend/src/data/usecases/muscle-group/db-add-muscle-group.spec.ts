import { DbAddMuscleGroup } from './db-add-muscle-group'
import { MuscleGroupModel, AddMuscleGroupModel, AddMuscleGroupRepository } from './db-add-muscle-group-protocols'

const makeAddMuscleGroupRepository = (): AddMuscleGroupRepository => {
  class AddMuscleGroupRepositoryStub implements AddMuscleGroupRepository {
    async add (userData: AddMuscleGroupModel): Promise<MuscleGroupModel> {
      const fakeMuscleGroup = {
        id: 'valid_id',
        name: 'any_name'
      }
      return await new Promise(resolve => resolve(fakeMuscleGroup))
    }
  }
  return new AddMuscleGroupRepositoryStub()
}

interface SutTypes {
  addMuscleGroupRepositoryStub: AddMuscleGroupRepository
  sut: DbAddMuscleGroup
}

const makeSut = (): SutTypes => {
  const addMuscleGroupRepositoryStub = makeAddMuscleGroupRepository()
  const sut = new DbAddMuscleGroup(addMuscleGroupRepositoryStub)

  return { sut, addMuscleGroupRepositoryStub }
}

describe('DbMuscleGroup Usecase', () => {
  test('should call AddMuscleGroupRepository with correct values', async () => {
    const { sut, addMuscleGroupRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addMuscleGroupRepositoryStub, 'add')
    const userData = {
      name: 'any_name'
    }
    await sut.add(userData)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name'
    })
  })
})
