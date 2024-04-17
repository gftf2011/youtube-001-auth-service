/* eslint-disable max-classes-per-file */
import { AggregateRoot } from '../common';
import { Email, FirstName, LastName, Password, UUID } from '../value-objects';

type CreateNewArgs = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

type CreateArgs = {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  blocked: boolean;
  confirmed: boolean;
  created_at: number;
  updated_at: number;
};

type Props = {
  id: UUID;
  email: Email;
  password: Password;
  first_name: FirstName;
  last_name: LastName;
  created_at: Date;
  updated_at: Date;
  blocked: boolean;
  confirmed: boolean;
};

type Value = {
  id: UUID;
  email: Email;
  password: Password;
  first_name: FirstName;
  last_name: LastName;
  created_at: Date;
  updated_at: Date;
  admin: boolean;
  blocked: boolean;
  confirmed: boolean;
};

abstract class User extends AggregateRoot {
  override id: UUID;

  protected email: Email;

  protected password: Password;

  protected first_name: FirstName;

  protected last_name: LastName;

  protected created_at: Date;

  protected updated_at: Date;

  protected confirmed: boolean;

  protected blocked: boolean;

  protected abstract admin: boolean;

  protected constructor(props: Props) {
    super();
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
    this.blocked = props.blocked;
    this.confirmed = props.confirmed;
  }
}

interface IAbstractFactory {
  createNew: (args: CreateNewArgs) => Promise<User>;
  create: (args: CreateArgs) => User;
}

class CustomerUser extends User {
  protected override admin: boolean = false;

  private constructor(props: Props) {
    super(props);
  }

  override getValue(): Value {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,
      created_at: this.created_at,
      updated_at: this.updated_at,
      admin: this.admin,
      blocked: this.blocked,
      confirmed: this.confirmed,
    };
  }

  public static async createNew(args: CreateNewArgs): Promise<User> {
    const timespan = new Date();

    const id = UUID.create();
    const email = new Email(args.email);
    const password = await Password.tryToCreateHexHashed(
      args.password,
      email.value,
    );
    const first_name = new FirstName(args.first_name);
    const last_name = new LastName(args.last_name);
    const blocked = false;
    const confirmed = false;
    const created_at = timespan;
    const updated_at = timespan;

    return new CustomerUser({
      id,
      email,
      password,
      first_name,
      last_name,
      created_at,
      updated_at,
      blocked,
      confirmed,
    });
  }

  public static create(args: CreateArgs): User {
    const id = UUID.tryToCreate(args.id);
    const email = new Email(args.email);
    const password = Password.create(args.password);
    const first_name = new FirstName(args.first_name);
    const last_name = new LastName(args.last_name);
    const { confirmed, blocked } = args;
    const created_at = new Date(args.created_at);
    const updated_at = new Date(args.updated_at);

    return new CustomerUser({
      id,
      email,
      password,
      first_name,
      last_name,
      created_at,
      updated_at,
      blocked,
      confirmed,
    });
  }
}

class AdminUser extends User {
  protected override admin: boolean = true;

  private constructor(props: Props) {
    super(props);
  }

  override getValue(): Value {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,
      created_at: this.created_at,
      updated_at: this.updated_at,
      admin: this.admin,
      blocked: this.blocked,
      confirmed: this.confirmed,
    };
  }

  public static async createNew(args: CreateNewArgs): Promise<User> {
    const timespan = new Date();

    const id = UUID.create();
    const email = new Email(args.email);
    const password = await Password.tryToCreateHexHashed(
      args.password,
      email.value,
    );
    const first_name = new FirstName(args.first_name);
    const last_name = new LastName(args.last_name);
    const blocked = false;
    const confirmed = false;
    const created_at = timespan;
    const updated_at = timespan;

    return new AdminUser({
      id,
      email,
      password,
      first_name,
      last_name,
      created_at,
      updated_at,
      blocked,
      confirmed,
    });
  }

  public static create(args: CreateArgs): User {
    const id = UUID.tryToCreate(args.id);
    const email = new Email(args.email);
    const password = Password.create(args.password);
    const first_name = new FirstName(args.first_name);
    const last_name = new LastName(args.last_name);
    const { confirmed, blocked } = args;
    const created_at = new Date(args.created_at);
    const updated_at = new Date(args.updated_at);

    return new AdminUser({
      id,
      email,
      password,
      first_name,
      last_name,
      created_at,
      updated_at,
      blocked,
      confirmed,
    });
  }
}

class CustomerUserFactory implements IAbstractFactory {
  public createNew(args: CreateNewArgs): Promise<User> {
    return CustomerUser.createNew(args);
  }

  public create(args: CreateArgs): User {
    return CustomerUser.create(args);
  }
}

class AdminUserFactory implements IAbstractFactory {
  public createNew(args: CreateNewArgs): Promise<User> {
    return AdminUser.createNew(args);
  }

  public create(args: CreateArgs): User {
    return AdminUser.create(args);
  }
}

export class UserFactory {
  static create(admin: boolean): IAbstractFactory {
    if (admin) {
      return new AdminUserFactory();
    }
    return new CustomerUserFactory();
  }
}
