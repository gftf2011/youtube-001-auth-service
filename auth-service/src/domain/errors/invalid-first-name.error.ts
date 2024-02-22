import { DomainError } from './domain.error';

export class InvalidFirstNameDomainError extends DomainError {
  constructor() {
    super();
    this.message = 'provided first_name is invalid';
    this.name = InvalidFirstNameDomainError.name;
  }
}
