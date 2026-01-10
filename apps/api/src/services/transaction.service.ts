import { db } from '../config/database';
import { transactions, categories, products, suppliers, users } from '../db/schema';
import { eq, sql, desc, and, gte, lte } from 'drizzle-orm';

export interface CreateTransactionDto {
    userId: string;
    type: 'income' | 'expense';
    categoryId?: string;
    productId?: string;
    supplierId?: string;
    amount: string;
    quantity?: number;
    unitPrice?: string;
    paymentMethod?: 'cash' | 'bank_transfer' | 'qris';
    notes?: string;
    receiptUrl?: string;
    transactionDate: string;
    status?: 'pending' | 'completed' | 'cancelled';
}

export interface UpdateTransactionDto extends Partial<CreateTransactionDto> { }

export interface TransactionFilters {
    userId?: string;
    type?: 'income' | 'expense';
    categoryId?: string;
    startDate?: string;
    endDate?: string;
    status?: string;
    page?: number;
    limit?: number;
}

function generateTransactionId(): string {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `TRX-${dateStr}-${random}`;
}

export class TransactionService {
    async create(data: CreateTransactionDto) {
        const transactionId = generateTransactionId();
        const [transaction] = await db
            .insert(transactions)
            .values({ ...data, transactionId })
            .returning();
        return transaction;
    }

    async findAll(filters: TransactionFilters = {}) {
        const { page = 1, limit = 10 } = filters;
        const offset = (page - 1) * limit;

        const result = await db
            .select({
                transaction: transactions,
                category: categories,
                product: products,
                supplier: suppliers,
            })
            .from(transactions)
            .leftJoin(categories, eq(transactions.categoryId, categories.id))
            .leftJoin(products, eq(transactions.productId, products.id))
            .leftJoin(suppliers, eq(transactions.supplierId, suppliers.id))
            .orderBy(desc(transactions.createdAt))
            .limit(limit)
            .offset(offset);

        const [{ count }] = await db
            .select({ count: sql<number>`count(*)::int` })
            .from(transactions);

        return {
            data: result,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async findById(id: string) {
        const [result] = await db
            .select({
                transaction: transactions,
                category: categories,
                product: products,
                supplier: suppliers,
            })
            .from(transactions)
            .leftJoin(categories, eq(transactions.categoryId, categories.id))
            .leftJoin(products, eq(transactions.productId, products.id))
            .leftJoin(suppliers, eq(transactions.supplierId, suppliers.id))
            .where(eq(transactions.id, id));

        return result || null;
    }

    async update(id: string, data: UpdateTransactionDto) {
        const [transaction] = await db
            .update(transactions)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(transactions.id, id))
            .returning();
        return transaction;
    }

    async delete(id: string) {
        await db.delete(transactions).where(eq(transactions.id, id));
    }

    async getRecentTransactions(limit = 10) {
        return db
            .select({
                transaction: transactions,
                category: categories,
                product: products,
            })
            .from(transactions)
            .leftJoin(categories, eq(transactions.categoryId, categories.id))
            .leftJoin(products, eq(transactions.productId, products.id))
            .orderBy(desc(transactions.createdAt))
            .limit(limit);
    }

    async getDailyIncome(date: Date) {
        const dateStr = date.toISOString().slice(0, 10);
        const [result] = await db
            .select({ total: sql<string>`COALESCE(SUM(amount), 0)` })
            .from(transactions)
            .where(
                and(
                    eq(transactions.type, 'income'),
                    eq(transactions.transactionDate, dateStr),
                    eq(transactions.status, 'completed')
                )
            );
        return result?.total || '0';
    }

    async getMonthlyExpenses(month: number, year: number) {
        const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
        const endDate = `${year}-${month.toString().padStart(2, '0')}-31`;

        const [result] = await db
            .select({ total: sql<string>`COALESCE(SUM(amount), 0)` })
            .from(transactions)
            .where(
                and(
                    eq(transactions.type, 'expense'),
                    gte(transactions.transactionDate, startDate),
                    lte(transactions.transactionDate, endDate),
                    eq(transactions.status, 'completed')
                )
            );
        return result?.total || '0';
    }
}

export const transactionService = new TransactionService();
