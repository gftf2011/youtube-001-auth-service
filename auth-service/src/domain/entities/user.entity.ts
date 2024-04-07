import { AggregateRoot } from '../common';
import { Email, FirstName, LastName, Password, UUID } from '../value-objects';

type CreateNewArgs = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  admin: boolean;
};

type Props = {
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

export class User extends AggregateRoot {
  override id: UUID;

  private email: Email;

  private password: Password;

  private first_name: FirstName;

  private last_name: LastName;

  private created_at: Date;

  private updated_at: Date;

  private confirmed: boolean;

  private blocked: boolean;

  private admin: boolean;

  private constructor(props: Props) {
    super();
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
    this.admin = props.admin;
    this.blocked = props.blocked;
    this.confirmed = props.confirmed;
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
    const { admin } = args;
    const blocked = false;
    const confirmed = false;
    const created_at = timespan;
    const updated_at = timespan;

    return new User({
      id,
      email,
      password,
      first_name,
      last_name,
      created_at,
      updated_at,
      admin,
      blocked,
      confirmed,
    });
  }
}
