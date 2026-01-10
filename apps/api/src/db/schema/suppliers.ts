import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const suppliers = pgTable('suppliers', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    contactPerson: varchar('contact_person', { length: 255 }),
    phone: varchar('phone', { length: 20 }),
    email: varchar('email', { length: 255 }),
    address: text('address'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
