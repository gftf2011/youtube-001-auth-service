import { DomainError } from './domain.error';

export class InvalidUUIDDomainError extends DomainError {
  constructor(id: string) {
    super();
    this.message = `provided uuid - ${id || ''} - is invalid`;
    this.name = InvalidUUIDDomainError.name;
  }
}
