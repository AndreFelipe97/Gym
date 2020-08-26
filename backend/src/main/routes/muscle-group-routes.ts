import { Router } from 'express'
import { makeMuscleGroupController } from '../factories/muscle-group'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/muscle/group', adaptRoute(makeMuscleGroupController()))
}
