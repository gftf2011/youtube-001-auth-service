import { ValueObject } from '../../common';

export interface IDomainEvent<T = any> {
  aggregateId: ValueObject;
  eventVersion: number;
  eventName: string;
  eventPayload: T;
  createdAt: string;
}
