import { serve } from "@hono/node-server";
import { setupOpenAPI } from "./openAPI.ts";
import { app } from "./app.ts";

setupOpenAPI(app);

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
