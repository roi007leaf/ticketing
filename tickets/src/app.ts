import 'express-async-errors';

import { errorHandler, NotFoundError } from '@rhorg/common';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
