import { InvalidEmailDomainError } from '../domain/errors';
import { SignUpUseCase } from './sign-up.use-case';

describe('Sign-Up Use Case', () => {
  it('should throw error if email input is empty', async () => {
    const sut = new SignUpUseCase();
    const promise = sut.execute({ email: '' });
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
  // caso o email não tenha @
  // caso não tenha um dominio
  // caso não tenha um endereço
  // caso termine com um .
  // caso tenha mais de um ponto consecutivo
  // caso não tenha nenhum ponto depois do endereço
  // caso ele tenha um espaço em branco
});
