// Export all hooks
export { useAuth } from './useAuth';
export {
    useProducts,
    useProduct,
    useLowStockProducts,
    useTopSellingProducts,
    useCreateProduct,
    useUpdateProduct,
    useDeleteProduct,
    productKeys
} from './useProducts';
export {
    useCategories,
    useCategory,
    useCreateCategory,
    useUpdateCategory,
    useDeleteCategory,
    categoryKeys
} from './useCategories';
export {
    useSuppliers,
    useSupplier,
    useCreateSupplier,
    useUpdateSupplier,
    useDeleteSupplier,
    supplierKeys
} from './useSuppliers';
export {
    useTransactions,
    useTransaction,
    useRecentTransactions,
    useCreateTransaction,
    useUpdateTransaction,
    useDeleteTransaction,
    transactionKeys
} from './useTransactions';
export {
    useDashboardStats,
    useCashFlow,
    useProfitLoss,
    useExpenseDistribution,
    useProfitTrend,
    useLowStockReport,
    reportKeys
} from './useReports';
