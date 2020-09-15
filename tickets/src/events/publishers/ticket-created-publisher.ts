import { Publisher, Subjects, TicketCreatedEvent } from '@rhorg/common';

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queueGroupName = 'payments-service';
}

export default TicketCreatedPublisher;
