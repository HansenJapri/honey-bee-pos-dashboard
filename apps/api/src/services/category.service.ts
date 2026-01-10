import { db } from '../config/database';
import { categories } from '../db/schema';
import { eq } from 'drizzle-orm';

export interface CreateCategoryDto {
    name: string;
    type: 'income' | 'expense';
    icon?: string;
}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> { }

export class CategoryService {
    async create(data: CreateCategoryDto) {
        const [category] = await db.insert(categories).values(data).returning();
        return category;
    }

    async findAll(type?: 'income' | 'expense') {
        if (type) {
            return db.select().from(categories).where(eq(categories.type, type));
        }
        return db.select().from(categories);
    }

    async findById(id: string) {
        const [category] = await db
            .select()
            .from(categories)
            .where(eq(categories.id, id));
        return category || null;
    }

    async update(id: string, data: UpdateCategoryDto) {
        const [category] = await db
            .update(categories)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(categories.id, id))
            .returning();
        return category;
    }

    async delete(id: string) {
        await db.delete(categories).where(eq(categories.id, id));
    }
}

export const categoryService = new CategoryService();
