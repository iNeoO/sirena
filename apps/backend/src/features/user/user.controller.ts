import factoryWithLogs from '@/helpers/factories/appWithLogs.ts';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { getUserRoute } from './user.route.ts';
import { querySchema, responseSchema } from './user.schema.ts';
import { getUser } from './user.service.ts';

const app = factoryWithLogs.createApp().get('/', getUserRoute, zValidator('query', querySchema), async (c) => {
  const query = c.req.valid('query');
  const user = await getUser();
  return c.json({ ...user, username: query.name || 'toto' }, 200);
});

export default app;
