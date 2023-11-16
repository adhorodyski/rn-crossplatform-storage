import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const postsKeys = {
  all: ["posts"] as const,
};
