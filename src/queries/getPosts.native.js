import { db } from "../lib/db.native";

export const getPosts = async () => {
  const response = await db.executeAsync("SELECT * FROM posts");
  return response.rows._array;
};
