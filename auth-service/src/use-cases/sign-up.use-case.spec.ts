import { InvalidEmailDomainError } from '../domain/errors';
import { SignUpUseCase } from './sign-up.use-case';

describe('Sign-Up Use Case', () => {
  it('should throw error if email input is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: '' });
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });
});
