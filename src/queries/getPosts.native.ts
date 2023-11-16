import { db } from "../lib/db.native";
import type { Post } from "../lib/types";

export const getPosts = async () => {
  const response = await db.executeAsync("SELECT * FROM posts");
  return response.rows._array as Post[];
};
