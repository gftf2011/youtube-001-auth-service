import { DomainError } from './domain.error';

export class InvalidEmailDomainError extends DomainError {
  constructor() {
    super();
    this.message = 'provided email is invalid';
    this.name = InvalidEmailDomainError.name;
  }
}
