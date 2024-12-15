import { z } from "zod";

const envSchema = z.object({
  IP_ADDRESS: z.number(),
  API_PORT: z.number(),
});

const _env = envSchema.safeParse(process.env);

if (_env.error) throw new Error("Invalid Environment Variables.");

export const env = _env.data;
