import appFactory from "@/helpers/factories/factory-with-logs.ts";
import UserApp from "@features/user/user.controller.ts";
import pinoLogger from "@middlewares/pino.middleware.ts";
import { errorHandler } from "./helpers/errors.ts";

export const app = appFactory
  .createApp()
  .use(pinoLogger())
  .route("/user", UserApp)
  .get("/dd", (c) => {
    return c.text("Hello world!");
  })
  .onError(errorHandler);
