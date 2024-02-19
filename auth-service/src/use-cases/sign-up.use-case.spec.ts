/* eslint-disable max-classes-per-file */
/**
 * @desc Email regex
 * @author Esteban Küber
 * @link https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 */
const VALID_EMAIL_REGEX =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

class DomainError extends Error {}

class InvalidEmailDomainError extends DomainError {
  constructor() {
    super();
    this.message = 'provided email is invalid';
    this.name = InvalidEmailDomainError.name;
  }
}

class SignUpUseCase {
  async execute(input: any): Promise<void> {
    if (!VALID_EMAIL_REGEX.test(input.email)) {
      throw new InvalidEmailDomainError();
    }
  }
}

describe('Sign-Up Use Case', () => {
  it('should throw error if email input is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: '' });
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });
});
