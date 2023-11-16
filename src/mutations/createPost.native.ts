import { db } from "../lib/db.native";

export const createPost = async () => {
  const id = Math.floor(Math.random() * 1000000);

  await db.executeAsync("INSERT INTO posts (title) VALUES (?)", [
    `New post: ${id}`,
  ]);
};
