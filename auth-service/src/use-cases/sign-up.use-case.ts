import { ISignUpUseCase } from '../domain/contracts/use-cases';
import {
  InvalidEmailDomainError,
  InvalidFirstNameDomainError,
} from '../domain/errors';

/**
 * @desc Email regex
 * @author Esteban Küber
 * @link https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 */
const VALID_EMAIL_REGEX =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export class SignUpUseCase implements ISignUpUseCase {
  async execute(input: ISignUpUseCase.INPUT): Promise<ISignUpUseCase.OUTPUT> {
    if (!VALID_EMAIL_REGEX.test(input.email)) {
      throw new InvalidEmailDomainError();
    }

    const firstName = input.first_name;

    if (!firstName || firstName.length < 2) {
      throw new InvalidFirstNameDomainError();
    }
  }
}
