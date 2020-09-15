import { Stan } from 'node-nats-streaming';

import Event from './event';

abstract class Publisher<T extends Event> {
  private client: Stan;
  abstract subject: T['subject'];

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T['data']): void {
    this.client.publish(this.subject, JSON.stringify(data), () => {
      console.log('Event published!', data);
    });
  }
}

export default Publisher;
