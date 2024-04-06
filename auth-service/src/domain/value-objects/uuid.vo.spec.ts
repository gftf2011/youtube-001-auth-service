import { InvalidUUIDDomainError } from '../errors';
import { UUID } from './uuid.vo';

describe('UUID Value-Object', () => {
  it('should throw error if uuid is "undefined"', () => {
    const sut = () => UUID.tryToCreate(undefined as any);
    expect(sut).toThrow(new InvalidUUIDDomainError(undefined as any));
  });

  it('should return value', () => {
    const sut = UUID.create();
    expect(sut.value).toBeDefined();
  });
});
