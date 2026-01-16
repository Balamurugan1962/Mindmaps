import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const canvas = pgTable("canvas", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdBy: text("createdBy")
    .notNull()
    .references(() => user.id),
});
