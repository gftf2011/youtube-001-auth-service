import { DomainError } from './domain.error';

export class InvalidPasswordDomainError extends DomainError {
  constructor() {
    super();
    this.message = 'provided password is invalid';
    this.name = InvalidPasswordDomainError.name;
  }
}
