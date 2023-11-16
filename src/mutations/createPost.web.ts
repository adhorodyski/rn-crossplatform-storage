import { set } from "idb-keyval";

export const createPost = async () => {
  const id = Math.floor(Math.random() * 1000000);

  await set(`posts_${id}`, { title: `New post: ${id}` });
};
