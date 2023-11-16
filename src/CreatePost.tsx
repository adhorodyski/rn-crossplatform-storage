import { Pressable, Text } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "./mutations/posts";
import { postsKeys, queryClient } from "./lib/queryClient";

export const CreatePost = () => {
  const createPostMutation = useMutation({
    mutationKey: postsKeys.create,
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });

  return (
    <Pressable
      onPress={() => createPostMutation.mutate()}
      style={{ backgroundColor: "pink", padding: 10, borderRadius: 5 }}
    >
      <Text>Create post</Text>
    </Pressable>
  );
};
