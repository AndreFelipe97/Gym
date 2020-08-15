import { CnpjValidator } from '../presentation/protocols/cnpj-validator'

export class CnpjValidatorAdapter implements CnpjValidator {
  isValid (cnpj: string): boolean {
    return false
  }
}
