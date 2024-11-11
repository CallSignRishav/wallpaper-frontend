import { z } from "zod";
import {
  formSchema,
  loginSchema,
  signupSchema,
  userEditSchema,
} from "./schemas";

export type LogInType = z.infer<typeof loginSchema>;

export type SignUpType = z.infer<typeof signupSchema>;

export type FormType = z.infer<typeof formSchema>;

export type UserEditType = z.infer<typeof userEditSchema>;
