import { Router } from 'express'

export default (router: Router): void => {
  router.post('/exercise/sheet', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
