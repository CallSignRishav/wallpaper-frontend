import { authentication, createDirectus, rest } from "@directus/sdk";
import { env } from "./env";
import { User } from "@directus/types";

export interface Posts {
  id: string;
  post_caption: string;
  post_img: string;
  post_author?: string | User;
}

interface Schema {
  posts: Posts[];
  users: User[];
}

// Client with REST support
export const sdk = createDirectus<Schema>(env.NEXT_PUBLIC_API)
  .with(authentication("session", { credentials: "include" }))
  .with(rest({ credentials: "include" }));
