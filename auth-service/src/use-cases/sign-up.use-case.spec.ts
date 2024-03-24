import { SignUpUseCase } from './sign-up.use-case';

describe('Sign-Up Use Case', () => {
  it('should execute and resolve', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: '12345678bB#',
    });
    await expect(promise).resolves.not.toThrow();
  });
});
