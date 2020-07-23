import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import DatabaseConnectionError from "../errors/database-connection-error";
import RequestValidationError from "../errors/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email Must Be Valid"),
    body("password")
      .isString()
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4-20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    console.log("creating a user....");
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
