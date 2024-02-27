import { ISignUpUseCase } from '../domain/contracts/use-cases';
import {
  InvalidEmailDomainError,
  InvalidFirstNameDomainError,
  InvalidLastNameDomainError,
  InvalidPasswordDomainError,
} from '../domain/errors';

/**
 * @desc Email regex
 * @author Esteban Küber
 * @link https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 */
const VALID_EMAIL_REGEX =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const WHITE_SPACE_REGEX = /(\s)+/;

const NON_NUMBERS_REGEX = /(\D)/g;

const NON_LOWERCASE_LETTERS_REGEX = /([^a-z]*)/g;

const NON_UPPERCASE_LETTERS_REGEX = /([^A-Z]*)/g;

const NON_SPECIAL_CHARACTER_REGEX = /([^#$@]*)/g;

export class SignUpUseCase implements ISignUpUseCase {
  async execute(input: ISignUpUseCase.INPUT): Promise<ISignUpUseCase.OUTPUT> {
    const email = input.email ? input.email.trim().toLowerCase() : '';

    if (!VALID_EMAIL_REGEX.test(email)) {
      throw new InvalidEmailDomainError();
    }

    const firstName = input.first_name
      ? input.first_name
          .split(WHITE_SPACE_REGEX)
          .map((value: string) => value.trim())
          .join(' ')
          .toLowerCase()
      : '';

    firstName.split(' ').forEach((value: string) => {
      if (!value || value.length < 2) {
        throw new InvalidFirstNameDomainError();
      }
    });

    const lastName = input.last_name
      ? input.last_name
          .split(WHITE_SPACE_REGEX)
          .map((value: string) => value.trim())
          .join(' ')
          .toLowerCase()
      : '';

    lastName.split(' ').forEach((value: string) => {
      if (!value || value.length < 2) {
        throw new InvalidLastNameDomainError();
      }
    });

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
  }
}
