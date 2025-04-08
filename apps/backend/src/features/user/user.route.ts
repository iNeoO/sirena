import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { responseSchema } from './user.schema.ts';

export const getUserRoute = describeRoute({
  description: 'Say hello to the user',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: resolver(responseSchema) },
      },
    },
  },
});
