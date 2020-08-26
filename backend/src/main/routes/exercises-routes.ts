import { Router } from 'express'
import { makeExercisesController } from '../factories/exercises'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/exercises', adaptRoute(makeExercisesController()))
}
