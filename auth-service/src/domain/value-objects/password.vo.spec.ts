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

  it('should return hashed value if parameter is valid', async () => {
    const sut = await Password.create(`${'0'.repeat(8)}aA#`, '');
    expect(sut.value).toBe(
      '66ef8b5d57965a9092dfa52d549d59d31a8cb1f853b88c0dbfad6ace62a480cfa429294f371c9197b482f7bf126b2c8bbfdedafd0f1419ef630a9e412babad55381a0bc72ce10183b24e4d6cadd11a52210eb20018ec3fd51d4734d8085f1145c784541d27188eeeaed74b64eb5b067bf0fbf5d913894bd32d3dcd25d9c47479234bb7c3b8026b9089ff067d8cac9e755638ed98a0b422bc837e97e0549d6c3b3f8a466598303989a8e29b168a4e7923c9e465d68e0e258107578cff5e6dbe855cd10c7ed5165cb594aeb4c0b03a8beab25598d41b0d40356dd6b6da9d59bdcda9add7e9ed8a1e66dd46930b6b74ef6da0649d3cf235bc774c6275dda2163b860839ac1c9306b4abbfefe20b973b8a39070e1555d7f8cf828773b593a9719d08cc58273c91e8a5b134885a1f7989f7f826d0547c9589d820bd45dd8dff1804847aaab1b5b87a84845d2cafedcfcff72709397e9c25ce1852e397747fc69123563a226902f2c6006e2b9132cd9a87dabff32c362417472fed69b117fd408b2ce6548f48462d7a1e0dcbddfcb93f9c85b81bfe9d3146f75da64897ce3509e95313c4a5fea7eabfbc80732ea8e1ba7cbaa999b90e38adae25ed494a2e78888eb177b14e10641754e306ee8f5d4aec21b9388b0b4f5d6fa906204f3da38ddfacdefe10d3443b76b4a5551f72a7893540a6db6be51451e6f431428d1de6545c8638ff',
    );
  });
});
