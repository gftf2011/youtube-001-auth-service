import { ValueObject } from '../common';
import { InvalidLastNameDomainError } from '../errors';

const WHITE_SPACE_REGEX = /(\s)+/;

export class LastName extends ValueObject<string> {
  constructor(lastName: string) {
    const value = lastName
      ? lastName
          .split(WHITE_SPACE_REGEX)
          .filter((value: string) => value.trim().length > 0)
          .join(' ')
          .toLowerCase()
      : '';
    super(value);
    this.isValid(value);
  }

  private isValid(lastName: string): void {
    const names: string[] = lastName
      .split(WHITE_SPACE_REGEX)
      .filter((value: string) => value.trim().length > 0);
    if (names.length === 0) {
      throw new InvalidLastNameDomainError();
    }
    names.forEach((value: string) => {
      if (value.length < 2) {
        throw new InvalidLastNameDomainError();
      }
    });
  }
}
