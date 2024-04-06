import { v4, validate } from 'uuid';
import { ValueObject } from '../common';
import { InvalidUUIDDomainError } from '../errors';

export class UUID extends ValueObject<string> {
  private constructor(id: string) {
    super(id);
  }

  private static isValid(uuid: string): void {
    if (!validate(uuid)) {
      throw new InvalidUUIDDomainError(uuid);
    }
  }

  public static tryToCreate(uuid: string): UUID {
    UUID.isValid(uuid);
    return new UUID(uuid);
  }

  public static create(): UUID {
    return new UUID(v4());
  }
}
