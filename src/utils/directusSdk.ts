import { authentication, createDirectus, rest } from "@directus/sdk";
import { env } from "./env";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  description: string;
  avatar: string;
  role: string;
}

export interface Posts {
  id: string;
  post_caption: string;
  post_img: string;
  post_author?: User[] | undefined;
}

interface Schema {
  posts: Posts[];
  users: User[];
}

// Client with REST support
export const sdk = createDirectus<Schema>(env.NEXT_PUBLIC_API)
  .with(authentication("session", { credentials: "include" }))
  .with(rest({ credentials: "include" }));
