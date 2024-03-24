import { Password } from './password.vo';
import { InvalidPasswordDomainError } from '../errors';

describe('Password Value-Object', () => {
  it('should throw error if password is "undefined"', async () => {
    const sut = Password.create(undefined as any, '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password is "null"', async () => {
    const sut = Password.create(null as any, '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password is empty', async () => {
    const sut = Password.create('', '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has any white space', async () => {
    const sut = Password.create(' ', '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 8 numeric characters', async () => {
    const sut = Password.create('0'.repeat(7), '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 lowercase letter', async () => {
    const sut = Password.create('0'.repeat(8), '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 uppercase letter', async () => {
    const sut = Password.create(`${'0'.repeat(8)}a`, '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });

  it('should throw error if password has less than 1 special character', async () => {
    const sut = Password.create(`${'0'.repeat(8)}aA`, '');
    await expect(sut).rejects.toThrow(new InvalidPasswordDomainError());
  });
});
