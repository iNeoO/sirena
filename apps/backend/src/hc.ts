import { app } from "./app.ts";
import { hc } from "hono/client";

export type AppType = typeof app;
export const client = hc<AppType>("http://localhost:4000/");
