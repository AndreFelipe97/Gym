import { Router } from 'express'

export default (router: Router): void => {
  router.post('/gym', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
