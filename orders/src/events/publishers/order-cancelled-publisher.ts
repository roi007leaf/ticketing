import { OrderCancelledEvent, Publisher, Subjects } from '@rhorg/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
