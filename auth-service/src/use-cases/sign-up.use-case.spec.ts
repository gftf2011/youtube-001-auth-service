import {
  InvalidEmailDomainError,
  InvalidFirstNameDomainError,
  InvalidLastNameDomainError,
  InvalidPasswordDomainError,
} from '../domain/errors';
import { SignUpUseCase } from './sign-up.use-case';

describe('Sign-Up Use Case', () => {
  it('should throw error if email input is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: '' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input is "null"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: null } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input is "undefined"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({} as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have an @', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'testmail.com' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have a domain', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: '@mail.com' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have an address', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@.com' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input ends with a dot', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@mail.' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has more than one consecutive dot', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@mail..com' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has no dot between address', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@mail' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has a white space', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@ mail.com' } as any);
    await expect(promise).rejects.toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if first_name input is "undefined"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: 'test@mail.com' } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name input is "null"', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: null,
    } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name input is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: '',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has only one character', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'a',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has a surname with one character', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: 'aa a',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has only white spaces', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({
      email: 'test@mail.com',
      first_name: ' ',
    } as any);
    await expect(promise).rejects.toThrow(new InvalidFirstNameDomainError());
  });

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
});
