import { useQuery } from '@tanstack/react-query';
import { reportService } from '../services/report.service';

// Query keys
export const reportKeys = {
    all: ['reports'],
    dashboardStats: () => [...reportKeys.all, 'dashboard-stats'],
    cashFlow: (months) => [...reportKeys.all, 'cash-flow', months],
    profitLoss: (month, year) => [...reportKeys.all, 'profit-loss', { month, year }],
    expenseDistribution: (month, year) => [...reportKeys.all, 'expense-distribution', { month, year }],
    profitTrend: (months) => [...reportKeys.all, 'profit-trend', months],
    lowStock: () => [...reportKeys.all, 'low-stock'],
};

/**
 * Hook to fetch dashboard statistics
 */
export function useDashboardStats() {
    return useQuery({
        queryKey: reportKeys.dashboardStats(),
        queryFn: () => reportService.getDashboardStats(),
    });
}

/**
 * Hook to fetch cash flow data
 */
export function useCashFlow(months = 6) {
    return useQuery({
        queryKey: reportKeys.cashFlow(months),
        queryFn: () => reportService.getCashFlow(months),
    });
}

/**
 * Hook to fetch profit & loss summary
 */
export function useProfitLoss(month, year) {
    return useQuery({
        queryKey: reportKeys.profitLoss(month, year),
        queryFn: () => reportService.getProfitLoss(month, year),
        enabled: !!month && !!year,
    });
}

/**
 * Hook to fetch expense distribution by category
 */
export function useExpenseDistribution(month, year) {
    return useQuery({
        queryKey: reportKeys.expenseDistribution(month, year),
        queryFn: () => reportService.getExpenseDistribution(month, year),
        enabled: !!month && !!year,
    });
}

/**
 * Hook to fetch monthly profit trend
 */
export function useProfitTrend(months = 6) {
    return useQuery({
        queryKey: reportKeys.profitTrend(months),
        queryFn: () => reportService.getProfitTrend(months),
    });
}

/**
 * Hook to fetch low stock products
 */
export function useLowStockReport() {
    return useQuery({
        queryKey: reportKeys.lowStock(),
        queryFn: () => reportService.getLowStockProducts(),
    });
}
