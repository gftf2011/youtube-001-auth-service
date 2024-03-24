import crypto from 'node:crypto';
import { promisify } from 'node:util';

import { ValueObject } from '../common';
import { InvalidPasswordDomainError } from '../errors';

const WHITE_SPACE_REGEX = /(\s)+/;

const NON_NUMBERS_REGEX = /(\D)/g;

const NON_LOWERCASE_LETTERS_REGEX = /([^a-z]*)/g;

const NON_UPPERCASE_LETTERS_REGEX = /([^A-Z]*)/g;

const NON_SPECIAL_CHARACTER_REGEX = /([^#$@]*)/g;

export class Password extends ValueObject<string> {
  constructor(password: string) {
    super(password);
  }

  private static isValid(password: string): void {
    if (
      !password ||
      WHITE_SPACE_REGEX.test(password) ||
      password.replace(NON_NUMBERS_REGEX, '').length < 8 ||
      password.replace(NON_LOWERCASE_LETTERS_REGEX, '').length < 1 ||
      password.replace(NON_UPPERCASE_LETTERS_REGEX, '').length < 1 ||
      password.replace(NON_SPECIAL_CHARACTER_REGEX, '').length < 1
    ) {
      throw new InvalidPasswordDomainError();
    }
  }

  public static async create(
    password: string,
    salt: string,
  ): Promise<Password> {
    Password.isValid(password);
    const value = (
      await promisify(crypto.pbkdf2)(password, salt, 50000, 512, 'sha512')
    ).toString('hex');
    return new Password(value);
  }
}
