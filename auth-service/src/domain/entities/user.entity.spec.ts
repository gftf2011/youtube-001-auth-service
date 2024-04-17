import { UserFactory } from './user.entity';

describe('User Entity', () => {
  describe('User - Customer', () => {
    it('should return value if parameters are valid when creating user for the first time', async () => {
      const sut = await UserFactory.create(false).createNew({
        email: 'test@mail.com',
        password: '1234567aA8#',
        first_name: 'aa',
        last_name: 'aa',
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

    it('should return value if parameters are valid when creating user', () => {
      const timestamp = Date.now();

      const sut = UserFactory.create(false).create({
        id: '326a002b-b0ae-49a0-b0db-9301bc2398f9',
        email: 'test@mail.com',
        password:
          'cc9288a3617b195e2a30f9bc1ed847fd444d39dcb543336b643fbaf9e02e5e84c5db724c337015954ece1601b868abc55d9a4566bd6630b2def377c0971cee1f29ef82da4d213fba921cf571b9c9bc9ccc6578bc5b60b4a851cc4051b6df83013a01ca1d9f20141cc0748b929d59439fba707f87b6b518a1cf0e0ba56d06934416283816d95fd5ec89b6fc7519901f5ee12a4b5715c5c3a520be3a5f03bda270a00e005591f4aa9af598e5ff19fa7455e16e9c460af197928fe024add34f485180463d9d0dd5b88177bab8d81eb3cca9cbdb032dec0f2cc62b6338e63e88fa64ac5c0794aa1c3c989e02e1b917ec4a71d5ba16ad5906f1059506d4c71c30e32b8efb4d38eee0304d817807669052f52eb1fb1bbe6fa1c047e5437bbd0e3ac0db80d9084acd5948b44f2a1518ede4bc07640d77b6e20819c3a9af5a8aba3cffbb5d337fab38384378dfa10c74964a82cfa87e73271a73c0ce1a9f0bcd7a5a9c31e633473f46a8946dc34b2a123c8bc99cd46a73ecdbc2be356e2982dcb6e536337fb84980c59780719bb8ecb35036e1a20c9eb22a35fc636f9f61940502e8435e0e22160b724ea96023e42f3eafb7133fccf450426fc96abb610c0fb01afd545905f1fbcdb8c04b420cc037a4de00def36d7b30c363a9147347c68f624e5170de8402de69a08687450bf40d2bc0eebdd13def14029623599b8e22de1ef0e1e979',
        first_name: 'aa',
        last_name: 'aa',
        blocked: false,
        confirmed: false,
        created_at: timestamp,
        updated_at: timestamp,
      });
      expect(sut.getValue().id.value).toBe(
        '326a002b-b0ae-49a0-b0db-9301bc2398f9',
      );
      expect(sut.getValue().email.value).toBe('test@mail.com');
      expect(sut.getValue().password.value).toBe(
        'cc9288a3617b195e2a30f9bc1ed847fd444d39dcb543336b643fbaf9e02e5e84c5db724c337015954ece1601b868abc55d9a4566bd6630b2def377c0971cee1f29ef82da4d213fba921cf571b9c9bc9ccc6578bc5b60b4a851cc4051b6df83013a01ca1d9f20141cc0748b929d59439fba707f87b6b518a1cf0e0ba56d06934416283816d95fd5ec89b6fc7519901f5ee12a4b5715c5c3a520be3a5f03bda270a00e005591f4aa9af598e5ff19fa7455e16e9c460af197928fe024add34f485180463d9d0dd5b88177bab8d81eb3cca9cbdb032dec0f2cc62b6338e63e88fa64ac5c0794aa1c3c989e02e1b917ec4a71d5ba16ad5906f1059506d4c71c30e32b8efb4d38eee0304d817807669052f52eb1fb1bbe6fa1c047e5437bbd0e3ac0db80d9084acd5948b44f2a1518ede4bc07640d77b6e20819c3a9af5a8aba3cffbb5d337fab38384378dfa10c74964a82cfa87e73271a73c0ce1a9f0bcd7a5a9c31e633473f46a8946dc34b2a123c8bc99cd46a73ecdbc2be356e2982dcb6e536337fb84980c59780719bb8ecb35036e1a20c9eb22a35fc636f9f61940502e8435e0e22160b724ea96023e42f3eafb7133fccf450426fc96abb610c0fb01afd545905f1fbcdb8c04b420cc037a4de00def36d7b30c363a9147347c68f624e5170de8402de69a08687450bf40d2bc0eebdd13def14029623599b8e22de1ef0e1e979',
      );
      expect(sut.getValue().first_name.value).toBe('aa');
      expect(sut.getValue().last_name.value).toBe('aa');
      expect(sut.getValue().admin).toBeFalsy();
      expect(sut.getValue().confirmed).toBeFalsy();
      expect(sut.getValue().blocked).toBeFalsy();
      expect(sut.getValue().created_at.getTime()).toBe(timestamp);
      expect(sut.getValue().updated_at.getTime()).toBe(timestamp);
    });
  });

  describe('User - Admin', () => {
    it('should return value if parameters are valid when creating user for the first time', async () => {
      const sut = await UserFactory.create(true).createNew({
        email: 'test@mail.com',
        password: '1234567aA8#',
        first_name: 'aa',
        last_name: 'aa',
      });
      expect(sut.getValue().id.value).toBeDefined();
      expect(sut.getValue().email.value).toBe('test@mail.com');
      expect(sut.getValue().password.value).toBeDefined();
      expect(sut.getValue().first_name.value).toBe('aa');
      expect(sut.getValue().last_name.value).toBe('aa');
      expect(sut.getValue().admin).toBeTruthy();
      expect(sut.getValue().confirmed).toBeFalsy();
      expect(sut.getValue().blocked).toBeFalsy();
      expect(sut.getValue().created_at.getTime()).toBeDefined();
      expect(sut.getValue().updated_at.getTime()).toBeDefined();
    });

    it('should return value if parameters are valid when creating user', () => {
      const timestamp = Date.now();

      const sut = UserFactory.create(true).create({
        id: '326a002b-b0ae-49a0-b0db-9301bc2398f9',
        email: 'test@mail.com',
        password:
          'cc9288a3617b195e2a30f9bc1ed847fd444d39dcb543336b643fbaf9e02e5e84c5db724c337015954ece1601b868abc55d9a4566bd6630b2def377c0971cee1f29ef82da4d213fba921cf571b9c9bc9ccc6578bc5b60b4a851cc4051b6df83013a01ca1d9f20141cc0748b929d59439fba707f87b6b518a1cf0e0ba56d06934416283816d95fd5ec89b6fc7519901f5ee12a4b5715c5c3a520be3a5f03bda270a00e005591f4aa9af598e5ff19fa7455e16e9c460af197928fe024add34f485180463d9d0dd5b88177bab8d81eb3cca9cbdb032dec0f2cc62b6338e63e88fa64ac5c0794aa1c3c989e02e1b917ec4a71d5ba16ad5906f1059506d4c71c30e32b8efb4d38eee0304d817807669052f52eb1fb1bbe6fa1c047e5437bbd0e3ac0db80d9084acd5948b44f2a1518ede4bc07640d77b6e20819c3a9af5a8aba3cffbb5d337fab38384378dfa10c74964a82cfa87e73271a73c0ce1a9f0bcd7a5a9c31e633473f46a8946dc34b2a123c8bc99cd46a73ecdbc2be356e2982dcb6e536337fb84980c59780719bb8ecb35036e1a20c9eb22a35fc636f9f61940502e8435e0e22160b724ea96023e42f3eafb7133fccf450426fc96abb610c0fb01afd545905f1fbcdb8c04b420cc037a4de00def36d7b30c363a9147347c68f624e5170de8402de69a08687450bf40d2bc0eebdd13def14029623599b8e22de1ef0e1e979',
        first_name: 'aa',
        last_name: 'aa',
        blocked: false,
        confirmed: false,
        created_at: timestamp,
        updated_at: timestamp,
      });
      expect(sut.getValue().id.value).toBe(
        '326a002b-b0ae-49a0-b0db-9301bc2398f9',
      );
      expect(sut.getValue().email.value).toBe('test@mail.com');
      expect(sut.getValue().password.value).toBe(
        'cc9288a3617b195e2a30f9bc1ed847fd444d39dcb543336b643fbaf9e02e5e84c5db724c337015954ece1601b868abc55d9a4566bd6630b2def377c0971cee1f29ef82da4d213fba921cf571b9c9bc9ccc6578bc5b60b4a851cc4051b6df83013a01ca1d9f20141cc0748b929d59439fba707f87b6b518a1cf0e0ba56d06934416283816d95fd5ec89b6fc7519901f5ee12a4b5715c5c3a520be3a5f03bda270a00e005591f4aa9af598e5ff19fa7455e16e9c460af197928fe024add34f485180463d9d0dd5b88177bab8d81eb3cca9cbdb032dec0f2cc62b6338e63e88fa64ac5c0794aa1c3c989e02e1b917ec4a71d5ba16ad5906f1059506d4c71c30e32b8efb4d38eee0304d817807669052f52eb1fb1bbe6fa1c047e5437bbd0e3ac0db80d9084acd5948b44f2a1518ede4bc07640d77b6e20819c3a9af5a8aba3cffbb5d337fab38384378dfa10c74964a82cfa87e73271a73c0ce1a9f0bcd7a5a9c31e633473f46a8946dc34b2a123c8bc99cd46a73ecdbc2be356e2982dcb6e536337fb84980c59780719bb8ecb35036e1a20c9eb22a35fc636f9f61940502e8435e0e22160b724ea96023e42f3eafb7133fccf450426fc96abb610c0fb01afd545905f1fbcdb8c04b420cc037a4de00def36d7b30c363a9147347c68f624e5170de8402de69a08687450bf40d2bc0eebdd13def14029623599b8e22de1ef0e1e979',
      );
      expect(sut.getValue().first_name.value).toBe('aa');
      expect(sut.getValue().last_name.value).toBe('aa');
      expect(sut.getValue().admin).toBeTruthy();
      expect(sut.getValue().confirmed).toBeFalsy();
      expect(sut.getValue().blocked).toBeFalsy();
      expect(sut.getValue().created_at.getTime()).toBe(timestamp);
      expect(sut.getValue().updated_at.getTime()).toBe(timestamp);
    });
  });
});
