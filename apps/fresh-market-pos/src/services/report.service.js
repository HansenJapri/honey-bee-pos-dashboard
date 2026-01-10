import { apiClient } from '../lib/api';

/**
 * Report service for API interactions
 */
export const reportService = {
    /**
     * Get dashboard statistics
     */
    getDashboardStats: () => {
        return apiClient.get('/reports/dashboard-stats');
    },

    /**
     * Get cash flow data for chart
     */
    getCashFlow: (months = 6) => {
        return apiClient.get('/reports/cash-flow', { months });
    },

    /**
     * Get profit & loss summary
     */
    getProfitLoss: (month, year) => {
        return apiClient.get('/reports/profit-loss', { month, year });
    },

    /**
     * Get expense distribution by category
     */
    getExpenseDistribution: (month, year) => {
        return apiClient.get('/reports/expense-distribution', { month, year });
    },

    /**
     * Get monthly profit trend
     */
    getProfitTrend: (months = 6) => {
        return apiClient.get('/reports/profit-trend', { months });
    },

    /**
     * Get low stock products
     */
    getLowStockProducts: () => {
        return apiClient.get('/reports/low-stock');
    },
};

export default reportService;
