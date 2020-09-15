import { Publisher, Subjects, TicketCreatedEvent } from '@rhorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
