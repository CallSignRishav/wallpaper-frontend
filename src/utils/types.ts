import { z } from "zod";
import { loginSchema, signupSchema } from "./schemas";

export type LogInType = z.infer<typeof loginSchema>;

export type SignUpType = z.infer<typeof signupSchema>;
