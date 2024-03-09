import { ValueObject } from '../common';
import { InvalidFirstNameDomainError } from '../errors';

const WHITE_SPACE_REGEX = /(\s)+/;

export class FirstName extends ValueObject<string> {
  constructor(firstName: string) {
    const value = firstName
      ? firstName
          .split(WHITE_SPACE_REGEX)
          .map((value: string) => value.trim())
          .join(' ')
          .toLowerCase()
      : '';
    super(value);
    this.isValid(value);
  }

  private isValid(firstName: string): void {
    firstName.split(' ').forEach((value: string) => {
      if (!value || value.length < 2) {
        throw new InvalidFirstNameDomainError();
      }
    });
  }
}
