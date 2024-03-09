import {
  InvalidLastNameDomainError,
  InvalidPasswordDomainError,
} from '../domain/errors';
import { SignUpUseCase } from './sign-up.use-case';

describe('Sign-Up Use Case', () => {
  it('should throw error if last_name is "undefined"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name is "null"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: null,
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: '',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has only one character', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'a',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has a surname with one character', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'a aa',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has only white spaces', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: ' ',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if password is "undefined"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password is "null"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: null,
    } as any);
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: '',
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has any white space', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: ' ',
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 8 numeric characters', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: '0'.repeat(7),
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 lowercase letter', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: '0'.repeat(8),
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 uppercase letter', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: `${'0'.repeat(8)}a`,
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 special character', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa',
      last_name: 'aa',
      password: `${'0'.repeat(8)}aA`,
    });
    await expect(promise).rejects.toThrow(new InvalidPasswordDomainError());
  });
});
