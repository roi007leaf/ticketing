import { Publisher, Subjects, TicketUpdatedEvent } from '@rhorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
