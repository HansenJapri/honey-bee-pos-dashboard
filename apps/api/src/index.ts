import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/auth.routes';
import { productRoutes } from './routes/product.routes';
import { transactionRoutes } from './routes/transaction.routes';
import { supplierRoutes } from './routes/supplier.routes';
import { categoryRoutes } from './routes/category.routes';
import { reportRoutes } from './routes/report.routes';
import { errorMiddleware } from './middleware/error.middleware';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/reports', reportRoutes);

// Error handling
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
});

export default app;
