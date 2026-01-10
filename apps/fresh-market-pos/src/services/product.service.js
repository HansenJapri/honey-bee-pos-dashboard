import { apiClient } from '../lib/api';

/**
 * Product service for API interactions
 */
export const productService = {
    /**
     * Get all products with pagination and filters
     */
    getAll: (params = {}) => {
        return apiClient.get('/products', params);
    },

    /**
     * Get product by ID
     */
    getById: (id) => {
        return apiClient.get(`/products/${id}`);
    },

    /**
     * Get low stock products
     */
    getLowStock: () => {
        return apiClient.get('/products/low-stock');
    },

    /**
     * Get top selling products
     */
    getTopSelling: (limit = 5) => {
        return apiClient.get('/products/top-selling', { limit });
    },

    /**
     * Create a new product
     */
    create: (data) => {
        return apiClient.post('/products', data);
    },

    /**
     * Update an existing product
     */
    update: (id, data) => {
        return apiClient.put(`/products/${id}`, data);
    },

    /**
     * Delete a product
     */
    delete: (id) => {
        return apiClient.delete(`/products/${id}`);
    },
};

export default productService;
