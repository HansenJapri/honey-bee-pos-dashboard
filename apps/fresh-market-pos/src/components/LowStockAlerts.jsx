import React from 'react';

const LowStockAlerts = () => {
    return (
        <div className="lg:col-span-1 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Peringatan Stok Rendah</h3>
                <button className="text-xs font-semibold text-primary hover:text-primary-dark">Lihat Semua</button>
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px] pr-2">
                {/* Item 1 */}
                <div className="flex items-center gap-3 rounded-lg border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/20 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400">
                        <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-bold text-text-main-light dark:text-text-main-dark">Kabel Data Type-C</p>
                        <p className="text-xs font-medium text-orange-600 dark:text-orange-400">Sisa 3 unit</p>
                    </div>
                    <button className="shrink-0 rounded bg-white dark:bg-background-dark p-1.5 text-text-sub-light hover:text-primary shadow-sm border border-transparent hover:border-border-light transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                </div>
                {/* Item 2 */}
                <div className="flex items-center gap-3 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined">error</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-bold text-text-main-light dark:text-text-main-dark">Power Bank 10000mAh</p>
                        <p className="text-xs font-medium text-red-600 dark:text-red-400">Stok Habis</p>
                    </div>
                    <button className="shrink-0 rounded bg-white dark:bg-background-dark p-1.5 text-text-sub-light hover:text-primary shadow-sm border border-transparent hover:border-border-light transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                </div>
                {/* Item 3 */}
                <div className="flex items-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-border-light dark:border-border-dark text-text-sub-light">
                        <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-bold text-text-main-light dark:text-text-main-dark">Buku Tulis Sidu</p>
                        <p className="text-xs font-medium text-text-sub-light">Sisa 5 unit</p>
                    </div>
                    <button className="shrink-0 rounded bg-white dark:bg-card-dark p-1.5 text-text-sub-light hover:text-primary shadow-sm border border-border-light dark:border-border-dark transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                </div>
                {/* Item 4 */}
                <div className="flex items-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-border-light dark:border-border-dark text-text-sub-light">
                        <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-bold text-text-main-light dark:text-text-main-dark">Pulpen Standard AE7</p>
                        <p className="text-xs font-medium text-text-sub-light">Sisa 8 unit</p>
                    </div>
                    <button className="shrink-0 rounded bg-white dark:bg-card-dark p-1.5 text-text-sub-light hover:text-primary shadow-sm border border-border-light dark:border-border-dark transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LowStockAlerts;
