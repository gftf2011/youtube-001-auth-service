import {
  InvalidEmailDomainError,
  InvalidFirstNameDomainError,
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
});
