import { randomBytes } from 'crypto';
import nats from 'node-nats-streaming';

import TicketCreatedListener from './events/ticket-created-listener';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on('SIGINT', () => stan.close()); // Whenever server is about to shutdown close nats
process.on('SIGTERM', () => stan.close());
