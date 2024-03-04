import { InvalidEmailDomainError } from '../errors';
import { Email } from './email.vo';

describe('Email Value-Object', () => {
  it('should throw error if email input is empty', () => {
    const sut = () => new Email('');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input is "null"', () => {
    const sut = () => new Email(null as any);
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input is "undefined"', () => {
    const sut = () => new Email(undefined as any);
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have an @', () => {
    const sut = () => new Email('testmail.com');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have a domain', () => {
    const sut = () => new Email('@mail.com');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input does not have an address', () => {
    const sut = () => new Email('test@.com');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input ends with a dot', () => {
    const sut = () => new Email('test@mail.');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has more than one consecutive dot', () => {
    const sut = () => new Email('test@mail..com');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has no dot between address', () => {
    const sut = () => new Email('test@mail');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should throw error if email input has a white space', () => {
    const sut = () => new Email('test@ mail.com');
    expect(sut).toThrow(new InvalidEmailDomainError());
  });

  it('should return value if parameter is valid', () => {
    const sut = new Email('test@mail.com');
    expect(sut.value).toBe('test@mail.com');
  });
});
