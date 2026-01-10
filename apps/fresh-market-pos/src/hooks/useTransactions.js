import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionService } from '../services/transaction.service';

// Query keys
export const transactionKeys = {
    all: ['transactions'],
    lists: () => [...transactionKeys.all, 'list'],
    list: (filters) => [...transactionKeys.lists(), filters],
    details: () => [...transactionKeys.all, 'detail'],
    detail: (id) => [...transactionKeys.details(), id],
    recent: (limit) => [...transactionKeys.all, 'recent', limit],
};

/**
 * Hook to fetch all transactions with pagination and filters
 */
export function useTransactions(params = {}) {
    return useQuery({
        queryKey: transactionKeys.list(params),
        queryFn: () => transactionService.getAll(params),
    });
}

/**
 * Hook to fetch a single transaction by ID
 */
export function useTransaction(id) {
    return useQuery({
        queryKey: transactionKeys.detail(id),
        queryFn: () => transactionService.getById(id),
        enabled: !!id,
    });
}

/**
 * Hook to fetch recent transactions
 */
export function useRecentTransactions(limit = 10) {
    return useQuery({
        queryKey: transactionKeys.recent(limit),
        queryFn: () => transactionService.getRecent(limit),
    });
}

/**
 * Hook to create a new transaction
 */
export function useCreateTransaction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => transactionService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: transactionKeys.all });
            // Also invalidate reports since transactions affect reports
            queryClient.invalidateQueries({ queryKey: ['reports'] });
        },
    });
}

/**
 * Hook to update an existing transaction
 */
export function useUpdateTransaction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => transactionService.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: transactionKeys.all });
            queryClient.invalidateQueries({ queryKey: transactionKeys.detail(id) });
            queryClient.invalidateQueries({ queryKey: ['reports'] });
        },
    });
}

/**
 * Hook to delete a transaction
 */
export function useDeleteTransaction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => transactionService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: transactionKeys.all });
            queryClient.invalidateQueries({ queryKey: ['reports'] });
        },
    });
}
