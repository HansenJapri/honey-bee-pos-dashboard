import { apiClient } from '../lib/api';

/**
 * Supplier service for API interactions
 */
export const supplierService = {
    /**
     * Get all suppliers
     */
    getAll: () => {
        return apiClient.get('/suppliers');
    },

    /**
     * Get supplier by ID
     */
    getById: (id) => {
        return apiClient.get(`/suppliers/${id}`);
    },

    /**
     * Create a new supplier
     */
    create: (data) => {
        return apiClient.post('/suppliers', data);
    },

    /**
     * Update an existing supplier
     */
    update: (id, data) => {
        return apiClient.put(`/suppliers/${id}`, data);
    },

    /**
     * Delete a supplier
     */
    delete: (id) => {
        return apiClient.delete(`/suppliers/${id}`);
    },
};

export default supplierService;
