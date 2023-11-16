import { Pressable, Text } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "./mutations/createPost";
import { queryClient } from "./lib/queryClient";

export const CreatePost = () => {
  const createPostMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <Pressable onPress={() => createPostMutation.mutate()}>
      <Text>Create post</Text>
    </Pressable>
  );
};
