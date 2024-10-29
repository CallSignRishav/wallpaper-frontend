import { authentication, createDirectus, rest } from "@directus/sdk";

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
export const sdk = createDirectus<Schema>("http://localhost:8055")
  .with(authentication("session", { credentials: "include" }))
  .with(rest({ credentials: "include" }));
