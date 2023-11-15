import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { Component } from "./src/Component";
import { queryClient } from "./src/lib/queryClient";
import { PostsList } from "./src/PostsList";
import { CreatePost } from "./src/CreatePost";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Component />

        <CreatePost />
        <PostsList />
      </View>
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
