import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Platform, SafeAreaView } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/lib/queryClient";
import { PostsList } from "./src/PostsList";
import { CreatePost } from "./src/CreatePost";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.platform}>
          Platform: {Platform.OS} (
          {Platform.OS === "web" ? "IndexedDB" : "SQLite"})
        </Text>

        <View style={styles.actionWrapper}>
          <CreatePost />
        </View>

        <PostsList />

        <StatusBar style="auto" />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  platform: {
    marginBottom: 32,
    fontWeight: "bold",
  },
  actionWrapper: {
    marginBottom: 32,
  },
});
