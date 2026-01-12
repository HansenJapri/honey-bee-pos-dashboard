import { Router, Request, Response } from 'express';
import { reportService } from '../services/report.service.js';

export const reportRoutes = Router();

// Get dashboard statistics
reportRoutes.get('/dashboard-stats', async (_req: Request, res: Response) => {
    try {
        const stats = await reportService.getDashboardStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dashboard stats' });
    }
});

// Get cash flow data for chart
reportRoutes.get('/cash-flow', async (req: Request, res: Response) => {
    try {
        const months = parseInt(req.query.months as string) || 6;
        const cashFlow = await reportService.getCashFlow(months);
        res.json(cashFlow);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cash flow data' });
    }
});

// Get profit & loss summary
reportRoutes.get('/profit-loss', async (req: Request, res: Response) => {
    try {
        const month = parseInt(req.query.month as string) || new Date().getMonth() + 1;
        const year = parseInt(req.query.year as string) || new Date().getFullYear();
        const profitLoss = await reportService.getProfitLoss(month, year);
        res.json(profitLoss);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profit/loss data' });
    }
});

// Get expense distribution by category
reportRoutes.get('/expense-distribution', async (req: Request, res: Response) => {
    try {
        const month = parseInt(req.query.month as string) || new Date().getMonth() + 1;
        const year = parseInt(req.query.year as string) || new Date().getFullYear();
        const distribution = await reportService.getExpenseDistribution(month, year);
        res.json(distribution);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expense distribution' });
    }
});

// Get monthly profit trend
reportRoutes.get('/profit-trend', async (req: Request, res: Response) => {
    try {
        const months = parseInt(req.query.months as string) || 6;
        const trend = await reportService.getMonthlyProfitTrend(months);
        res.json(trend);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profit trend' });
    }
});

// Get low stock products
reportRoutes.get('/low-stock', async (_req: Request, res: Response) => {
    try {
        const products = await reportService.getLowStockProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch low stock products' });
    }
});
