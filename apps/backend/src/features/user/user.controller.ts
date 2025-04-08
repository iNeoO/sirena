import factoryWithLogs from "@/helpers/factories/factory-with-logs.ts";
import { describeRoute } from "hono-openapi";
import { querySchema, responseSchema } from "./user.schema.ts";
import { getUser } from "./user.service.ts";
import { resolver, validator as zValidator } from "hono-openapi/zod";

const app = factoryWithLogs.createApp().get(
  "/",
  describeRoute({
    description: "Say hello to the user",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": { schema: resolver(responseSchema) },
        },
      },
    },
  }),
  async (c) => {
    const user = await getUser();
    return c.json(user, 200);
  }
);

export default app;
