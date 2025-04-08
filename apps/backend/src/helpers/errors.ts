import { AppBindingsLogs } from "./factories/factory-with-logs.ts";
import { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";

export const errorHandler: ErrorHandler<AppBindingsLogs> = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  const logger = c.get("logger");
  logger.error(err);
  return c.json({ message: "Internal server error" }, 500);
};
