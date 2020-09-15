import Publisher from './base-publisher';
import Subjects from './subjects';
import TicketCreatedEvent from './ticket-created-event';

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queueGroupName = 'payments-service';
}

export default TicketCreatedPublisher;
