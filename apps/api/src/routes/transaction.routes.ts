import { Router, Request, Response } from 'express';
import { transactionService } from '../services/transaction.service';

export const transactionRoutes = Router();

// Get all transactions
transactionRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const filters = {
            page: parseInt(req.query.page as string) || 1,
            limit: parseInt(req.query.limit as string) || 10,
            type: req.query.type as 'income' | 'expense',
            categoryId: req.query.categoryId as string,
            startDate: req.query.startDate as string,
            endDate: req.query.endDate as string,
        };
        const result = await transactionService.findAll(filters);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// Get recent transactions
transactionRoutes.get('/recent', async (req: Request, res: Response) => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const transactions = await transactionService.getRecentTransactions(limit);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recent transactions' });
    }
});

// Get transaction by ID
transactionRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const transaction = await transactionService.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transaction' });
    }
});

// Create transaction
transactionRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const transaction = await transactionService.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create transaction' });
    }
});

// Update transaction
transactionRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const transaction = await transactionService.update(req.params.id, req.body);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update transaction' });
    }
});

// Delete transaction
transactionRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        await transactionService.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete transaction' });
    }
});
