import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { Component } from "./src/Component";
import { queryClient } from "./src/queryClient";
import { PostsList } from "./src/PostsList";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Component />

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
