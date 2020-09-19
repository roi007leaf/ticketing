import { requireAuth, validateRequest } from '@rhorg/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator/src/middlewares/validation-chain-builders';
import mongoose from 'mongoose';

const router = express.Router();

router.post(
  'api/orders',
  requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .custom((input: string): boolean => mongoose.Types.ObjectId.isValid(input))
      .withMessage('Ticket Id is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
