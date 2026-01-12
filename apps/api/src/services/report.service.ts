import { db } from '../config/database.js';
import { transactions, categories, products } from '../db/schema/index.js';
import { eq, sql, and, gte, lte, desc, lt } from 'drizzle-orm';

export class ReportService {
    async getDashboardStats() {
        const today = new Date().toISOString().slice(0, 10);
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        const startOfMonth = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`;
        const endOfMonth = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-31`;

        // Total Balance (all income - all expenses)
        const [balanceResult] = await db.select({
            totalIncome: sql<string>`COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0)`,
            totalExpense: sql<string>`COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0)`,
        }).from(transactions).where(eq(transactions.status, 'completed'));

        // Daily Income
        const [dailyIncome] = await db.select({
            total: sql<string>`COALESCE(SUM(amount), 0)`,
        }).from(transactions).where(
            and(
                eq(transactions.type, 'income'),
                eq(transactions.transactionDate, today),
                eq(transactions.status, 'completed')
            )
        );

        // Monthly Expenses
        const [monthlyExpenses] = await db.select({
            total: sql<string>`COALESCE(SUM(amount), 0)`,
        }).from(transactions).where(
            and(
                eq(transactions.type, 'expense'),
                gte(transactions.transactionDate, startOfMonth),
                lte(transactions.transactionDate, endOfMonth),
                eq(transactions.status, 'completed')
            )
        );

        const totalIncome = parseFloat(balanceResult?.totalIncome || '0');
        const totalExpense = parseFloat(balanceResult?.totalExpense || '0');

        return {
            totalBalance: (totalIncome - totalExpense).toString(),
            dailyIncome: dailyIncome?.total || '0',
            monthlyExpenses: monthlyExpenses?.total || '0',
        };
    }

    async getCashFlow(months = 6) {
        const result = await db.select({
            month: sql<string>`TO_CHAR(transaction_date, 'YYYY-MM')`,
            income: sql<string>`COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0)`,
            expense: sql<string>`COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0)`,
        })
            .from(transactions)
            .where(eq(transactions.status, 'completed'))
            .groupBy(sql`TO_CHAR(transaction_date, 'YYYY-MM')`)
            .orderBy(desc(sql`TO_CHAR(transaction_date, 'YYYY-MM')`))
            .limit(months);

        return result.reverse();
    }

    async getProfitLoss(month: number, year: number) {
        const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
        const endDate = `${year}-${month.toString().padStart(2, '0')}-31`;

        const [result] = await db.select({
            totalRevenue: sql<string>`COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0)`,
            totalCOGS: sql<string>`COALESCE(SUM(CASE WHEN type = 'expense' AND category_id IN (SELECT id FROM categories WHERE name = 'Beli Stok') THEN amount ELSE 0 END), 0)`,
            totalOperational: sql<string>`COALESCE(SUM(CASE WHEN type = 'expense' AND category_id NOT IN (SELECT id FROM categories WHERE name = 'Beli Stok') THEN amount ELSE 0 END), 0)`,
        })
            .from(transactions)
            .where(
                and(
                    gte(transactions.transactionDate, startDate),
                    lte(transactions.transactionDate, endDate),
                    eq(transactions.status, 'completed')
                )
            );

        const revenue = parseFloat(result?.totalRevenue || '0');
        const cogs = parseFloat(result?.totalCOGS || '0');
        const operational = parseFloat(result?.totalOperational || '0');
        const netProfit = revenue - cogs - operational;

        return {
            totalRevenue: result?.totalRevenue || '0',
            costOfGoodsSold: result?.totalCOGS || '0',
            operationalExpenses: result?.totalOperational || '0',
            netProfit: netProfit.toString(),
            profitMargin: revenue > 0 ? ((netProfit / revenue) * 100).toFixed(2) : '0',
        };
    }

    async getExpenseDistribution(month: number, year: number) {
        const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
        const endDate = `${year}-${month.toString().padStart(2, '0')}-31`;

        const result = await db.select({
            categoryName: categories.name,
            categoryIcon: categories.icon,
            total: sql<string>`COALESCE(SUM(${transactions.amount}), 0)`,
        })
            .from(transactions)
            .leftJoin(categories, eq(transactions.categoryId, categories.id))
            .where(
                and(
                    eq(transactions.type, 'expense'),
                    gte(transactions.transactionDate, startDate),
                    lte(transactions.transactionDate, endDate),
                    eq(transactions.status, 'completed')
                )
            )
            .groupBy(categories.id, categories.name, categories.icon);

        // Calculate percentages
        const total = result.reduce((sum, item) => sum + parseFloat(item.total), 0);
        return result.map(item => ({
            ...item,
            percentage: total > 0 ? ((parseFloat(item.total) / total) * 100).toFixed(1) : '0',
        }));
    }

    async getMonthlyProfitTrend(months = 6) {
        const result = await db.select({
            month: sql<string>`TO_CHAR(transaction_date, 'YYYY-MM')`,
            monthLabel: sql<string>`TO_CHAR(transaction_date, 'Mon')`,
            income: sql<string>`COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0)`,
            expense: sql<string>`COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0)`,
        })
            .from(transactions)
            .where(eq(transactions.status, 'completed'))
            .groupBy(sql`TO_CHAR(transaction_date, 'YYYY-MM')`, sql`TO_CHAR(transaction_date, 'Mon')`)
            .orderBy(desc(sql`TO_CHAR(transaction_date, 'YYYY-MM')`))
            .limit(months);

        return result.reverse().map(item => ({
            ...item,
            profit: (parseFloat(item.income) - parseFloat(item.expense)).toString(),
        }));
    }

    async getLowStockProducts() {
        return db.select()
            .from(products)
            .where(lt(products.stock, products.minStock))
            .orderBy(products.stock)
            .limit(5);
    }
}

export const reportService = new ReportService();
