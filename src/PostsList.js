import { Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./queries/getPosts";

export const PostsList = () => {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  return <Text>{JSON.stringify(data, null, 2)}</Text>;
};
