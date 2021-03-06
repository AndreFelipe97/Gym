import { DbAddExerciseSheet } from './db-add-exercise-sheet'
import { AddExerciseSheetRepository, AddExerciseSheetModel, ExerciseSheetModel } from './db-add-exercise-sheet-protcols'

const makeAddExerciseSheetRepository = (): AddExerciseSheetRepository => {
  class AddExerciseSheetRepositoryStub implements AddExerciseSheetRepository {
    async add (exerciseSheet: AddExerciseSheetModel): Promise<ExerciseSheetModel> {
      const fakeExerciseSheet = {
        id: 'valid_id',
        user: 'valid_user',
        exercise: 'any_exercise',
        repetition: 'any_repetition',
        amount: 'any_amount',
        day: 'any_day',
        responsible: 'any_responsible'
      }
      return await new Promise(resolve => resolve(fakeExerciseSheet))
    }
  }
  return new AddExerciseSheetRepositoryStub()
}

interface SutTypes {
  sut: DbAddExerciseSheet
  addExerciseSheetRepositoryStub: AddExerciseSheetRepository
}

const makeSut = (): SutTypes => {
  const addExerciseSheetRepositoryStub = makeAddExerciseSheetRepository()
  const sut = new DbAddExerciseSheet(addExerciseSheetRepositoryStub)
  return { sut, addExerciseSheetRepositoryStub }
}

describe('DbAddExerciseSheet Usecase', () => {
  test('should call AddExerciseSheetRepository with correct values', async () => {
    const { sut, addExerciseSheetRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addExerciseSheetRepositoryStub, 'add')
    const exerciseSheetData = {
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    }
    await sut.add(exerciseSheetData)
    expect(addSpy).toHaveBeenCalledWith({
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    })
  })

  test('should throw if AddExerciseSheetRepository throws', async () => {
    const { sut, addExerciseSheetRepositoryStub } = makeSut()
    jest.spyOn(addExerciseSheetRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const exerciseSheetData = {
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    }
    const promise = sut.add(exerciseSheetData)
    await expect(promise).rejects.toThrow()
  })

  test('should return an ExerciseSheet on success', async () => {
    const { sut } = makeSut()
    const exerciseSheetData = {
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    }
    const exercises = await sut.add(exerciseSheetData)
    expect(exercises).toEqual({
      id: 'valid_id',
      user: 'valid_user',
      exercise: 'any_exercise',
      repetition: 'any_repetition',
      amount: 'any_amount',
      day: 'any_day',
      responsible: 'any_responsible'
    })
  })
})
