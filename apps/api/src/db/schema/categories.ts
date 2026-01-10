import { pgTable, uuid, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const categoryTypeEnum = pgEnum('category_type', ['income', 'expense']);

export const categories = pgTable('categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 100 }).notNull(),
    type: categoryTypeEnum('type').notNull(),
    icon: varchar('icon', { length: 50 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
