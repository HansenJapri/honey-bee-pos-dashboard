import { apiClient } from '../lib/api';

/**
 * Transaction service for API interactions
 */
export const transactionService = {
    /**
     * Get all transactions with pagination and filters
     */
    getAll: (params = {}) => {
        return apiClient.get('/transactions', params);
    },

    /**
     * Get transaction by ID
     */
    getById: (id) => {
        return apiClient.get(`/transactions/${id}`);
    },

    /**
     * Get recent transactions
     */
    getRecent: (limit = 10) => {
        return apiClient.get('/transactions/recent', { limit });
    },

    /**
     * Create a new transaction
     */
    create: (data) => {
        return apiClient.post('/transactions', data);
    },

    /**
     * Update an existing transaction
     */
    update: (id, data) => {
        return apiClient.put(`/transactions/${id}`, data);
    },

    /**
     * Delete a transaction
     */
    delete: (id) => {
        return apiClient.delete(`/transactions/${id}`);
    },
};

export default transactionService;
