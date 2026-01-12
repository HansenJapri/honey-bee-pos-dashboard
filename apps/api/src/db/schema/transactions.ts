import { pgTable, uuid, varchar, integer, decimal, text, date, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { users } from './users.js';
import { categories } from './categories.js';
import { products } from './products.js';
import { suppliers } from './suppliers.js';

export const transactionTypeEnum = pgEnum('transaction_type', ['income', 'expense']);
export const paymentMethodEnum = pgEnum('payment_method', ['cash', 'bank_transfer', 'qris']);
export const transactionStatusEnum = pgEnum('transaction_status', ['pending', 'completed', 'cancelled']);

export const transactions = pgTable('transactions', {
    id: uuid('id').primaryKey().defaultRandom(),
    transactionId: varchar('transaction_id', { length: 50 }).notNull().unique(),
    userId: uuid('user_id').notNull().references(() => users.id),
    type: transactionTypeEnum('type').notNull(),
    categoryId: uuid('category_id').references(() => categories.id),
    productId: uuid('product_id').references(() => products.id),
    supplierId: uuid('supplier_id').references(() => suppliers.id),
    amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
    quantity: integer('quantity').default(1),
    unitPrice: decimal('unit_price', { precision: 15, scale: 2 }),
    paymentMethod: paymentMethodEnum('payment_method').default('cash'),
    notes: text('notes'),
    receiptUrl: varchar('receipt_url', { length: 500 }),
    transactionDate: date('transaction_date').notNull(),
    status: transactionStatusEnum('status').default('completed'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
