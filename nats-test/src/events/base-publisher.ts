import { Stan } from 'node-nats-streaming';
import { resolve } from 'path';

import Event from './event';

abstract class Publisher<T extends Event> {
  private client: Stan;
  abstract subject: T['subject'];

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log('Event published!', data);
        resolve();
      });
    });
  }
}

export default Publisher;