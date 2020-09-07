import request from 'supertest';

import { app } from '../../app';

const creatTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'asdf', price: 20 });
};
it('can fetch a list of tickets', async () => {
  await creatTicket();
  await creatTicket();
  await creatTicket();

  const res = await request(app).get('/api/tickets').send().expect(200);
  expect(res.body.length).toEqual(3);
});
