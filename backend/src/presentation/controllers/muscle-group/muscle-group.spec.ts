import { SignUpMuscleGroupController } from './signup'
import { MissingParamError } from '../../errors'
import { AddMuscleGroup, AddMuscleGroupModel } from '../../../domain/usecases/add-muscle-group'
import { MuscleGroupModel } from '../../../domain/models/muscle-group-model'

const makeMuscleGroup = (): AddMuscleGroup => {
  class AddMuscleGroupStub implements AddMuscleGroup {
    async add (cnpj: AddMuscleGroupModel): Promise<MuscleGroupModel> {
      const muscleGroupGym = {
        id: 'valid_id',
        name: 'valid_name'
      }
      return await new Promise(resolve => resolve(muscleGroupGym))
    }
  }
  return new AddMuscleGroupStub()
}
interface SutTypes {
  sut: SignUpMuscleGroupController
  addMuscleGroupStub: AddMuscleGroup
}

const makeSut = (): SutTypes => {
  const addMuscleGroupStub = makeMuscleGroup()
  const sut = new SignUpMuscleGroupController(addMuscleGroupStub)
  return { sut, addMuscleGroupStub }
}

describe('Signup Muscle Group Controller', () => {
  test('should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {}
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
