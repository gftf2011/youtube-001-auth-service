/* eslint-disable @typescript-eslint/no-unused-vars */
import crypto from 'node:crypto';
import { promisify } from 'node:util';

import { ISignUpUseCase } from '../domain/contracts/use-cases';
import { InvalidPasswordDomainError } from '../domain/errors';
import { Email, FirstName, LastName } from '../domain/value-objects';

const WHITE_SPACE_REGEX = /(\s)+/;

const NON_NUMBERS_REGEX = /(\D)/g;

const NON_LOWERCASE_LETTERS_REGEX = /([^a-z]*)/g;

const NON_UPPERCASE_LETTERS_REGEX = /([^A-Z]*)/g;

const NON_SPECIAL_CHARACTER_REGEX = /([^#$@]*)/g;

export class SignUpUseCase implements ISignUpUseCase {
  async execute(input: ISignUpUseCase.INPUT): Promise<ISignUpUseCase.OUTPUT> {
    const email: Email = new Email(input.email);

    const firstName: FirstName = new FirstName(input.first_name);

    const lastName: LastName = new LastName(input.last_name);

    if (
      !input.password ||
      WHITE_SPACE_REGEX.test(input.password) ||
      input.password.replace(NON_NUMBERS_REGEX, '').length < 8 ||
      input.password.replace(NON_LOWERCASE_LETTERS_REGEX, '').length < 1 ||
      input.password.replace(NON_UPPERCASE_LETTERS_REGEX, '').length < 1 ||
      input.password.replace(NON_SPECIAL_CHARACTER_REGEX, '').length < 1
    ) {
      throw new InvalidPasswordDomainError();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const password = await promisify(crypto.pbkdf2)(
      input.password,
      email.value,
      50000,
      512,
      'sha512',
    );
  }
}
