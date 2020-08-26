import { Router } from 'express'
import { makeUserController } from '../factories/user'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeUserController()))
}
