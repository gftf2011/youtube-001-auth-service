import { v4 } from 'uuid';
import { ValueObject } from '../common';

export class UUID extends ValueObject<string> {
  private constructor(id: string) {
    super(id);
  }

  public static create(): UUID {
    return new UUID(v4());
  }
}
