import { Router, Request, Response } from 'express';
import { productService } from '../services/product.service.js';

export const productRoutes = Router();

// Get all products
productRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const filters = {
            page: parseInt(req.query.page as string) || 1,
            limit: parseInt(req.query.limit as string) || 10,
            categoryId: req.query.categoryId as string,
            supplierId: req.query.supplierId as string,
            search: req.query.search as string,
        };
        const result = await productService.findAll(filters);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get low stock products
productRoutes.get('/low-stock', async (_req: Request, res: Response) => {
    try {
        const products = await productService.getLowStock();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch low stock products' });
    }
});

// Get top selling products
productRoutes.get('/top-selling', async (req: Request, res: Response) => {
    try {
        const limit = parseInt(req.query.limit as string) || 5;
        const products = await productService.getTopSelling(limit);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top selling products' });
    }
});

// Get product by ID
productRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const product = await productService.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// Create product
productRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const product = await productService.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// Update product
productRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});

// Delete product
productRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        await productService.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});
