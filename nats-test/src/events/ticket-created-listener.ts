import { Message } from 'node-nats-streaming';

import { Listener } from '../../../common/src/events/base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';

class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    msg.ack();
  }
}

export default TicketCreatedListener;
