import isEqual from 'lodash/isEqual';

export abstract class ValueObject<Value = any> {
  private readonly _value: Value;

  constructor(value: Value) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = Object.freeze(value);
  }

  get value(): Value {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  public equals(obj: this): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }

    if (obj.value === undefined) {
      return false;
    }

    if (obj.constructor.name !== this.constructor.name) {
      return false;
    }

    return isEqual(this.value, obj.value);
  }

  toString = () => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString();
      } catch (e) {
        return `${this.value}`;
      }
    }
    const valueStr = this.value.toString();
    return valueStr === '[object Object]'
      ? JSON.stringify(this.value)
      : valueStr;
  };
}
