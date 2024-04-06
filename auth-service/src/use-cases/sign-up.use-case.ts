/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISignUpUseCase } from '../domain/contracts/use-cases';
import { Email, FirstName, LastName, Password } from '../domain/value-objects';

export class SignUpUseCase implements ISignUpUseCase {
  async execute(input: ISignUpUseCase.INPUT): Promise<ISignUpUseCase.OUTPUT> {
    const email: Email = new Email(input.email);
    const firstName: FirstName = new FirstName(input.first_name);
    const lastName: LastName = new LastName(input.last_name);
    const password: Password = await Password.tryToCreateHexHashed(
      input.password,
      email.value,
    );
  }
}
