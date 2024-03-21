import { LastName } from './last-name.vo';
import { InvalidLastNameDomainError } from '../errors';

describe('LastName Value-Object', () => {
  it('should throw error if last_name input is "undefined"', () => {
    const sut = () => new LastName(undefined as any);
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name input is "null"', () => {
    const sut = () => new LastName(null as any);
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name input is empty', () => {
    const sut = () => new LastName('');
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has only one character', () => {
    const sut = () => new LastName('a');
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has a surname with one character', () => {
    const sut = () => new LastName('a aa');
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should throw error if last_name has only white spaces', () => {
    const sut = () => new LastName(' ');
    expect(sut).toThrow(new InvalidLastNameDomainError());
  });

  it('should return value if parameter is valid', () => {
    const sut = new LastName('aa aa');
    expect(sut.value).toBe('aa aa');
  });
});
