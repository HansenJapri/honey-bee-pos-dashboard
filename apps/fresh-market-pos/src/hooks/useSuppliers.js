import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supplierService } from '../services/supplier.service';

// Query keys
export const supplierKeys = {
    all: ['suppliers'],
    lists: () => [...supplierKeys.all, 'list'],
    list: () => [...supplierKeys.lists()],
    details: () => [...supplierKeys.all, 'detail'],
    detail: (id) => [...supplierKeys.details(), id],
};

/**
 * Hook to fetch all suppliers
 */
export function useSuppliers() {
    return useQuery({
        queryKey: supplierKeys.list(),
        queryFn: () => supplierService.getAll(),
    });
}

/**
 * Hook to fetch a single supplier by ID
 */
export function useSupplier(id) {
    return useQuery({
        queryKey: supplierKeys.detail(id),
        queryFn: () => supplierService.getById(id),
        enabled: !!id,
    });
}

/**
 * Hook to create a new supplier
 */
export function useCreateSupplier() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => supplierService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: supplierKeys.all });
        },
    });
}

/**
 * Hook to update an existing supplier
 */
export function useUpdateSupplier() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => supplierService.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: supplierKeys.all });
            queryClient.invalidateQueries({ queryKey: supplierKeys.detail(id) });
        },
    });
}

/**
 * Hook to delete a supplier
 */
export function useDeleteSupplier() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => supplierService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: supplierKeys.all });
        },
    });
}
