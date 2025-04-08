import type { ErrorHandler } from 'hono';
import { HTTPException } from 'hono/http-exception';
import type { AppBindingsLogs } from './factories/appWithLogs.ts';

export const errorHandler: ErrorHandler<AppBindingsLogs> = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  const logger = c.get('logger');
  logger.error(err);
  return c.json({ message: 'Internal server error' }, 500);
};
