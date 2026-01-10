import { apiClient } from '../lib/api';

/**
 * Category service for API interactions
 */
export const categoryService = {
    /**
     * Get all categories, optionally filtered by type
     */
    getAll: (type) => {
        return apiClient.get('/categories', type ? { type } : {});
    },

    /**
     * Get category by ID
     */
    getById: (id) => {
        return apiClient.get(`/categories/${id}`);
    },

    /**
     * Create a new category
     */
    create: (data) => {
        return apiClient.post('/categories', data);
    },

    /**
     * Update an existing category
     */
    update: (id, data) => {
        return apiClient.put(`/categories/${id}`, data);
    },

    /**
     * Delete a category
     */
    delete: (id) => {
        return apiClient.delete(`/categories/${id}`);
    },
};

export default categoryService;
