import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const books = pgTable('books', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    author: text('author'),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type BookRow = typeof books.$inferSelect


