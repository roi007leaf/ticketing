import { Listener, OrderCreatedEvent, Subjects } from '@rhorg/common';
import { Message } from 'node-nats-streaming';

import { queueGroupName } from './queue-group-name';

export class OrcerCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  queueGroupName = queueGroupName;

  onMessage(data: OrderCreatedEvent['data'], msg: Message) {}
}
