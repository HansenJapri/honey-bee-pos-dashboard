import { db } from '../config/database.js';
import { suppliers } from '../db/schema/index.js';
import { eq, sql } from 'drizzle-orm';

export interface CreateSupplierDto {
    name: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    address?: string;
}

export interface UpdateSupplierDto extends Partial<CreateSupplierDto> { }

export class SupplierService {
    async create(data: CreateSupplierDto) {
        const [supplier] = await db.insert(suppliers).values(data).returning();
        return supplier;
    }

    async findAll() {
        return db.select().from(suppliers).orderBy(suppliers.name);
    }

    async findById(id: string) {
        const [supplier] = await db
            .select()
            .from(suppliers)
            .where(eq(suppliers.id, id));
        return supplier || null;
    }

    async update(id: string, data: UpdateSupplierDto) {
        const [supplier] = await db
            .update(suppliers)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(suppliers.id, id))
            .returning();
        return supplier;
    }

    async delete(id: string) {
        await db.delete(suppliers).where(eq(suppliers.id, id));
    }
}

export const supplierService = new SupplierService();
