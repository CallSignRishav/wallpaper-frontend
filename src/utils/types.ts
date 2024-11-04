import { z } from "zod";
import { formSchema, loginSchema, signupSchema } from "./schemas";
import { Posts } from "./directusSdk";

export type LogInType = z.infer<typeof loginSchema>;

export type SignUpType = z.infer<typeof signupSchema>;

export type FormType = z.infer<typeof formSchema>;
