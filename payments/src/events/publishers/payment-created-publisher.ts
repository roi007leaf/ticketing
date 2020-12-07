import { PaymentCreatedEvent, Publisher, Subjects } from '@rhorg/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
