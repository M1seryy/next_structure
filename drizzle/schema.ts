import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const books = pgTable("books", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	author: text().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});
