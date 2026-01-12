import { Router, Request, Response } from 'express';
import { supplierService } from '../services/supplier.service.js';

export const supplierRoutes = Router();

// Get all suppliers
supplierRoutes.get('/', async (_req: Request, res: Response) => {
    try {
        const suppliers = await supplierService.findAll();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch suppliers' });
    }
});

// Get supplier by ID
supplierRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const supplier = await supplierService.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch supplier' });
    }
});

// Create supplier
supplierRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const supplier = await supplierService.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create supplier' });
    }
});

// Update supplier
supplierRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const supplier = await supplierService.update(req.params.id, req.body);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update supplier' });
    }
});

// Delete supplier
supplierRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        await supplierService.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete supplier' });
    }
});
