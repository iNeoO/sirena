import z from "zod";
import "zod-openapi/extend";

export const responseSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string().optional(),
});

export const querySchema = z.object({
  name: z.optional(z.string()),
});
