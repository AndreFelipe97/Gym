import { Router } from 'express'

export default (router: Router): void => {
  router.post('/exercises', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
