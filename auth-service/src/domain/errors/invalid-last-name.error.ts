import { DomainError } from './domain.error';

export class InvalidLastNameDomainError extends DomainError {
  constructor() {
    super();
    this.message = 'provided last_name is invalid';
    this.name = InvalidLastNameDomainError.name;
  }
}
