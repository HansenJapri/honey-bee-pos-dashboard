import { Router, Request, Response } from 'express';
import { categoryService } from '../services/category.service';

export const categoryRoutes = Router();

// Get all categories
categoryRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const type = req.query.type as 'income' | 'expense' | undefined;
        const categories = await categoryService.findAll(type);
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

// Get category by ID
categoryRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const category = await categoryService.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch category' });
    }
});

// Create category
categoryRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const category = await categoryService.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create category' });
    }
});

// Update category
categoryRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const category = await categoryService.update(req.params.id, req.body);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update category' });
    }
});

// Delete category
categoryRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        await categoryService.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
});
