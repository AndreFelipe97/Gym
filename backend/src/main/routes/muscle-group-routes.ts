import { Router } from 'express'
import { makeSignUpMuscleGroupController } from '../factories/muscle-group'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/muscle/group', adaptRoute(makeSignUpMuscleGroupController()))
}
