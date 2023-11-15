import { open } from "@op-engineering/op-sqlite";

export const db = open({ name: "op-sqlite" });

db.executeBatch([
  "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT)",
]);
