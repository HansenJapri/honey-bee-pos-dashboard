import { db } from '../config/database.js';
import { products, categories, suppliers } from '../db/schema/index.js';
import { eq, sql, lt } from 'drizzle-orm';

export interface CreateProductDto {
    sku: string;
    name: string;
    categoryId?: string;
    supplierId?: string;
    sellingPrice: string;
    costPrice: string;
    stock?: number;
    minStock?: number;
    unit?: string;
    imageUrl?: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> { }

export interface ProductFilters {
    categoryId?: string;
    supplierId?: string;
    lowStock?: boolean;
    search?: string;
    page?: number;
    limit?: number;
}

export class ProductService {
    async create(data: CreateProductDto) {
        const [product] = await db.insert(products).values(data).returning();
        return product;
    }

    async findAll(filters: ProductFilters = {}) {
        const { page = 1, limit = 10 } = filters;
        const offset = (page - 1) * limit;

        const result = await db
            .select({
                product: products,
                category: categories,
                supplier: suppliers,
            })
            .from(products)
            .leftJoin(categories, eq(products.categoryId, categories.id))
            .leftJoin(suppliers, eq(products.supplierId, suppliers.id))
            .limit(limit)
            .offset(offset);

        const [{ count }] = await db
            .select({ count: sql<number>`count(*)::int` })
            .from(products);

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
                product: products,
                category: categories,
                supplier: suppliers,
            })
            .from(products)
            .leftJoin(categories, eq(products.categoryId, categories.id))
            .leftJoin(suppliers, eq(products.supplierId, suppliers.id))
            .where(eq(products.id, id));

        return result || null;
    }

    async update(id: string, data: UpdateProductDto) {
        const [product] = await db
            .update(products)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(products.id, id))
            .returning();
        return product;
    }

    async delete(id: string) {
        await db.delete(products).where(eq(products.id, id));
    }

    async getLowStock() {
        return db
            .select({
                product: products,
                supplier: suppliers,
            })
            .from(products)
            .leftJoin(suppliers, eq(products.supplierId, suppliers.id))
            .where(lt(products.stock, products.minStock));
    }

    async getTopSelling(limit = 5) {
        // This would need transaction data to calculate top selling
        // For now, just return products with lowest stock (most sold)
        return db
            .select()
            .from(products)
            .orderBy(products.stock)
            .limit(limit);
    }
}

export const productService = new ProductService();
