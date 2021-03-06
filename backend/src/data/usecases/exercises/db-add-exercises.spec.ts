import { DbAddExercises } from './db-add-exercises'
import { AddExercisesRepository, AddExercisesModel, ExercisesModel } from './db-add-exercises-protocols'

const makeAddExercisesRepository = (): AddExercisesRepository => {
  class AddExercisesRepositoryStub implements AddExercisesRepository {
    async add (exercises: AddExercisesModel): Promise<ExercisesModel> {
      const fakeExercises = {
        id: 'valid_id',
        name: 'valid_name',
        muscleGroup: 'valid_muscle_group'
      }
      return await new Promise(resolve => resolve(fakeExercises))
    }
  }
  return new AddExercisesRepositoryStub()
}

interface SutTypes {
  sut: DbAddExercises
  addExercisesRepositoryStub: AddExercisesRepository
}

const makeSut = (): SutTypes => {
  const addExercisesRepositoryStub = makeAddExercisesRepository()
  const sut = new DbAddExercises(addExercisesRepositoryStub)
  return { sut, addExercisesRepositoryStub }
}

describe('DbAddExercises Usecase', () => {
  test('should call AddExercisesRepository with correct values', async () => {
    const { sut, addExercisesRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addExercisesRepositoryStub, 'add')
    const exercisesData = {
      name: 'valid_name',
      muscleGroup: 'valid_muscle_group'
    }
    await sut.add(exercisesData)
    expect(addSpy).toHaveBeenCalledWith({
      name: 'valid_name',
      muscleGroup: 'valid_muscle_group'
    })
  })

  test('should throw if AddExercisesRepository throws', async () => {
    const { sut, addExercisesRepositoryStub } = makeSut()
    jest.spyOn(addExercisesRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const exercisesData = {
      name: 'valid_name',
      muscleGroup: 'valid_muscle_group'
    }
    const promise = sut.add(exercisesData)
    await expect(promise).rejects.toThrow()
  })

  test('should return an Gym on success', async () => {
    const { sut } = makeSut()
    const exercisesData = {
      name: 'valid_name',
      muscleGroup: 'valid_muscle_group'
    }
    const exercises = await sut.add(exercisesData)
    expect(exercises).toEqual({
      id: 'valid_id',
      name: 'valid_name',
      muscleGroup: 'valid_muscle_group'
    })
  })
})
