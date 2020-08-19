import { Router } from 'express'

export default (router: Router): void => {
  router.post('/physical/assessment', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
