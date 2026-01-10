import { pgTable, uuid, varchar, integer, decimal, timestamp } from 'drizzle-orm/pg-core';
import { categories } from './categories';
import { suppliers } from './suppliers';

export const products = pgTable('products', {
    id: uuid('id').primaryKey().defaultRandom(),
    sku: varchar('sku', { length: 50 }).notNull().unique(),
    name: varchar('name', { length: 255 }).notNull(),
    categoryId: uuid('category_id').references(() => categories.id),
    supplierId: uuid('supplier_id').references(() => suppliers.id),
    sellingPrice: decimal('selling_price', { precision: 15, scale: 2 }).notNull(),
    costPrice: decimal('cost_price', { precision: 15, scale: 2 }).notNull(),
    stock: integer('stock').default(0).notNull(),
    minStock: integer('min_stock').default(10).notNull(),
    unit: varchar('unit', { length: 20 }).default('pcs'),
    imageUrl: varchar('image_url', { length: 500 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
