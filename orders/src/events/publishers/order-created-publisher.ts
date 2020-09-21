import { OrderCreatedEvent, Publisher, Subjects } from '@rhorg/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
