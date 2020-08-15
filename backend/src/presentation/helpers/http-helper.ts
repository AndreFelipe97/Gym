import { HttpResponse } from '../protocols'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  body: error,
  statusCode: 400
})

export const serverError = (): HttpResponse => ({
  body: new ServerError(),
  statusCode: 500
})

export const successRequest = (data: any): HttpResponse => ({
  body: data,
  statusCode: 200
})
