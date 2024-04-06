import { UUID } from './uuid.vo';

describe('UUID Value-Object', () => {
  it('should return value', () => {
    const sut = UUID.create();
    expect(sut.value).toBeDefined();
  });
});
