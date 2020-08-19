import { Router } from 'express'

export default (router: Router): void => {
  router.post('/muscle/group', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
