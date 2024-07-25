export default class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  validation: any;

  constructor(message: string, statusCode: number, errors: any) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.validation = errors;
    // Error.captureStackTrace(this, this.constructor);
  }
}
