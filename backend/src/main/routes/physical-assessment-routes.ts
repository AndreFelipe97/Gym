import { Router } from 'express'
import { makeSignUpPhysicalAssessmentController } from '../factories/physical-assessment'
import { adaptRoute } from '../adapters/express-routes-adapter'

export default (router: Router): void => {
  router.post('/physical/assessment', adaptRoute(makeSignUpPhysicalAssessmentController()))
}
