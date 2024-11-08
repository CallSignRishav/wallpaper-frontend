import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),

  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export const signupSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(25, { message: "First name must be at most 25 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),

  role: z.string(),
});

export const formSchema = z.object({
  post_caption: z
    .string()
    .min(5, { message: "Caption must be at least 5 characters" })
    .max(25, { message: "Caption must be at most 25 characters" }),
});

export const userEditSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(25, { message: "First name must be at most 25 characters" }),

  email: z.string().email({ message: "Invalid email" }),

  description: z.string(),
});
