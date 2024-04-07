import { Entity } from './entity';
import { IDomainEvent } from '../contracts/events/domain-event.interface';

export abstract class AggregateRoot extends Entity {
  events: Set<IDomainEvent> = new Set<IDomainEvent>();

  protected addEvent(event: IDomainEvent) {
    this.events.add(event);
  }
}
