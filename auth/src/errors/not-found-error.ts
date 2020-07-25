import { CustomError } from "./custom-error";

export default class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Not Found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: "Not found" }];
  }
}
