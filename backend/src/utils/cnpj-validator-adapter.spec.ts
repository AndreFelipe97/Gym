import { CnpjValidatorAdapter } from './cnpj-validator'

describe('CnpjValidator Adapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new CnpjValidatorAdapter()
    const isValid = sut.isValid('29840191000100')
    expect(isValid).toBe(false)
  })

  test('should return true if validator returns true', () => {
    const sut = new CnpjValidatorAdapter()
    const isValid = sut.isValid('29840191000181')
    expect(isValid).toBe(true)
  })

  test('should return false if numbers are equal', () => {
    const sut = new CnpjValidatorAdapter()
    const isValid = sut.isValid('00000000000000')
    expect(isValid).toBe(false)
  })
})
