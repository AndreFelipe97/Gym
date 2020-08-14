export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        body: new Error('Missing param: name'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.phone) {
      return {
        body: new Error('Missing param: phone'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.zipCode) {
      return {
        body: new Error('Missing param: zipCode'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.street) {
      return {
        body: new Error('Missing param: street'),
        statusCode: 400
      }
    }
  }
}
