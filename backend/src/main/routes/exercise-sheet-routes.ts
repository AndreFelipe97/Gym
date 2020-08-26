import { Router } from 'express'
import { makeExerciseSheetController } from '../factories/exercise-sheet'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/exercise/sheet', adaptRoute(makeExerciseSheetController()))
}
