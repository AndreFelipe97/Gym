import { Router } from 'express'
import { makeSignUpExercisesController } from '../factories/exercises'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/exercises', adaptRoute(makeSignUpExercisesController()))
}
