import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../services/product.service';

// Query keys
export const productKeys = {
    all: ['products'],
    lists: () => [...productKeys.all, 'list'],
    list: (filters) => [...productKeys.lists(), filters],
    details: () => [...productKeys.all, 'detail'],
    detail: (id) => [...productKeys.details(), id],
    lowStock: () => [...productKeys.all, 'low-stock'],
    topSelling: (limit) => [...productKeys.all, 'top-selling', limit],
};

/**
 * Hook to fetch all products with pagination and filters
 */
export function useProducts(params = {}) {
    return useQuery({
        queryKey: productKeys.list(params),
        queryFn: () => productService.getAll(params),
    });
}

/**
 * Hook to fetch a single product by ID
 */
export function useProduct(id) {
    return useQuery({
        queryKey: productKeys.detail(id),
        queryFn: () => productService.getById(id),
        enabled: !!id,
    });
}

/**
 * Hook to fetch low stock products
 */
export function useLowStockProducts() {
    return useQuery({
        queryKey: productKeys.lowStock(),
        queryFn: () => productService.getLowStock(),
    });
}

/**
 * Hook to fetch top selling products
 */
export function useTopSellingProducts(limit = 5) {
    return useQuery({
        queryKey: productKeys.topSelling(limit),
        queryFn: () => productService.getTopSelling(limit),
    });
}

/**
 * Hook to create a new product
 */
export function useCreateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => productService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: productKeys.all });
        },
    });
}

/**
 * Hook to update an existing product
 */
export function useUpdateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => productService.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: productKeys.all });
            queryClient.invalidateQueries({ queryKey: productKeys.detail(id) });
        },
    });
}

/**
 * Hook to delete a product
 */
export function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => productService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: productKeys.all });
        },
    });
}
