import { Router } from 'express'
import { makeSignUpGymController } from '../factories/gym'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/gym', adaptRoute(makeSignUpGymController()))
}
