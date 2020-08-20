import { Router } from 'express'
import { makeSignUpUserController } from '../factories/user'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeSignUpUserController()))
}
