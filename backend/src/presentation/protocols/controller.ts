import { HttpRequest, HttpResponse } from './http'
export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>

  list?: (HttpRequest: HttpRequest) => Promise<HttpResponse>

  update?: (HttpRequest: HttpRequest) => Promise<HttpResponse>

  delete?: (HttpRequest: HttpRequest) => Promise<HttpResponse>
}
