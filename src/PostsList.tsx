import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./queries/posts";
import { postsKeys } from "./lib/queryClient";

export const PostsList = () => {
  const { data } = useQuery({ queryKey: postsKeys.all, queryFn: getPosts });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Text>
          {item.id}: {item.title}
        </Text>
      )}
    />
  );
};
