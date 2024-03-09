import { FirstName } from './first-name.vo';
import { InvalidFirstNameDomainError } from '../errors';

describe('FirstName Value-Object', () => {
  it('should throw error if first_name input is "undefined"', () => {
    const sut = () => new FirstName(undefined as any);
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name input is "null"', () => {
    const sut = () => new FirstName(null as any);
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name input is empty', () => {
    const sut = () => new FirstName('');
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has only one character', () => {
    const sut = () => new FirstName('a');
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has a surname with one character', () => {
    const sut = () => new FirstName('aa a');
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });

  it('should throw error if first_name has only white spaces', () => {
    const sut = () => new FirstName(' ');
    expect(sut).toThrow(new InvalidFirstNameDomainError());
  });
});
