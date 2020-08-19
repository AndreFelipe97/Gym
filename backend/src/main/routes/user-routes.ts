import { Router } from 'express'

export default (router: Router): void => {
  router.post('/users', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
