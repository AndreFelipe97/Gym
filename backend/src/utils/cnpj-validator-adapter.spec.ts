import { CnpjValidatorAdapter } from './cnpj-validator'
describe('CnpjValidator Adapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new CnpjValidatorAdapter()
    const isValid = sut.isValid('invalid_cnpj')
    expect(isValid).toBe(false)
  })
})
