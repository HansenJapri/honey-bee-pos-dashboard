import React from 'react';

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Balance */}
            <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Total Saldo</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                    </div>
                </div>
                <div>
                    <p className="font-mono text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Rp 124.592.000</p>
                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-success">
                        <span className="material-symbols-outlined text-base">trending_up</span>
                        <span>+12% vs bulan lalu</span>
                    </div>
                </div>
            </div>
            {/* Daily Income */}
            <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Pemasukan Harian</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">payments</span>
                    </div>
                </div>
                <div>
                    <p className="font-mono text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Rp 4.250.500</p>
                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-success">
                        <span className="material-symbols-outlined text-base">trending_up</span>
                        <span>+5% vs kemarin</span>
                    </div>
                </div>
            </div>
            {/* Monthly Expenses */}
            <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Pengeluaran Bulanan</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-danger/10 text-danger">
                        <span className="material-symbols-outlined">shopping_cart_checkout</span>
                    </div>
                </div>
                <div>
                    <p className="font-mono text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Rp 12.400.000</p>
                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-danger">
                        <span className="material-symbols-outlined text-base">trending_down</span>
                        <span>-2% vs bulan lalu</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StatsGrid;
