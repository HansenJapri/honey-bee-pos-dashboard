import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryService } from '../services/category.service';

// Query keys
export const categoryKeys = {
    all: ['categories'],
    lists: () => [...categoryKeys.all, 'list'],
    list: (type) => [...categoryKeys.lists(), { type }],
    details: () => [...categoryKeys.all, 'detail'],
    detail: (id) => [...categoryKeys.details(), id],
};

/**
 * Hook to fetch all categories, optionally filtered by type
 */
export function useCategories(type) {
    return useQuery({
        queryKey: categoryKeys.list(type),
        queryFn: () => categoryService.getAll(type),
    });
}

/**
 * Hook to fetch a single category by ID
 */
export function useCategory(id) {
    return useQuery({
        queryKey: categoryKeys.detail(id),
        queryFn: () => categoryService.getById(id),
        enabled: !!id,
    });
}

/**
 * Hook to create a new category
 */
export function useCreateCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => categoryService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: categoryKeys.all });
        },
    });
}

/**
 * Hook to update an existing category
 */
export function useUpdateCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => categoryService.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: categoryKeys.all });
            queryClient.invalidateQueries({ queryKey: categoryKeys.detail(id) });
        },
    });
}

/**
 * Hook to delete a category
 */
export function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => categoryService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: categoryKeys.all });
        },
    });
}
