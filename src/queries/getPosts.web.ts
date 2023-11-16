import { keys, getMany } from "idb-keyval";

export const getPosts = async () => {
  const allKeys = await keys();
  const postsKeys = allKeys.filter((key) =>
    key.toString().startsWith("posts_")
  );

  const posts = await getMany(postsKeys);
  return posts;
};
