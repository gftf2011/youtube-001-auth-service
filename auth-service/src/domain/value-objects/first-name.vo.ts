import { ValueObject } from '../common';
import { InvalidFirstNameDomainError } from '../errors';

const WHITE_SPACE_REGEX = /(\s)+/;

export class FirstName extends ValueObject<string> {
  constructor(firstName: string) {
    const value = firstName
      ? firstName
          .split(WHITE_SPACE_REGEX)
          .filter((value: string) => value.trim().length > 0)
          .join(' ')
          .toLowerCase()
      : '';
    super(value);
    this.isValid(value);
  }

  private isValid(firstName: string): void {
    const names: string[] = firstName
      .split(WHITE_SPACE_REGEX)
      .filter((value: string) => value.trim().length > 0);
    if (names.length === 0) {
      throw new InvalidFirstNameDomainError();
    }
    names.forEach((value: string) => {
      if (value.length < 2) {
        throw new InvalidFirstNameDomainError();
      }
    });
  }
}
