import { User } from './user.entity';

describe('User Entity', () => {
  it('should return value if parameters are valid when creating user for the first time', async () => {
    const sut = await User.createNew({
      email: 'test@mail.com',
      password: '1234567aA8#',
      first_name: 'aa',
      last_name: 'aa',
      admin: false,
    });
    expect(sut.getValue().id.value).toBeDefined();
    expect(sut.getValue().email.value).toBe('test@mail.com');
    expect(sut.getValue().password.value).toBeDefined();
    expect(sut.getValue().first_name.value).toBe('aa');
    expect(sut.getValue().last_name.value).toBe('aa');
    expect(sut.getValue().admin).toBeFalsy();
    expect(sut.getValue().confirmed).toBeFalsy();
    expect(sut.getValue().blocked).toBeFalsy();
    expect(sut.getValue().created_at.getTime()).toBeDefined();
    expect(sut.getValue().updated_at.getTime()).toBeDefined();
  });
});
