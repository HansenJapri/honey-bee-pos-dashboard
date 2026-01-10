import React from 'react';

const TopProducts = () => {
    return (
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Produk Terlaris</h3>
                <button className="text-text-sub-light hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-background-light dark:bg-background-dark text-text-sub-light dark:text-text-sub-dark font-medium">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">Nama Produk</th>
                            <th className="px-6 py-3 text-right whitespace-nowrap">Terjual</th>
                            <th className="px-6 py-3 text-right whitespace-nowrap">Pendapatan</th>
                            <th className="px-6 py-3 text-center whitespace-nowrap">Tren</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">Voucher Internet 10GB</td>
                            <td className="px-6 py-4 text-right font-mono text-text-sub-light">1.200</td>
                            <td className="px-6 py-4 text-right font-mono font-medium text-text-main-light dark:text-text-main-dark">Rp 30.000.000</td>
                            <td className="px-6 py-4 text-center text-success"><span className="material-symbols-outlined text-lg">trending_up</span></td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">Casing iPhone 13</td>
                            <td className="px-6 py-4 text-right font-mono text-text-sub-light">850</td>
                            <td className="px-6 py-4 text-right font-mono font-medium text-text-main-light dark:text-text-main-dark">Rp 42.500.000</td>
                            <td className="px-6 py-4 text-center text-success"><span className="material-symbols-outlined text-lg">trending_up</span></td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">Pensil 2B (Pack)</td>
                            <td className="px-6 py-4 text-right font-mono text-text-sub-light">600</td>
                            <td className="px-6 py-4 text-right font-mono font-medium text-text-main-light dark:text-text-main-dark">Rp 12.000.000</td>
                            <td className="px-6 py-4 text-center text-danger"><span className="material-symbols-outlined text-lg">trending_down</span></td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">Kertas HVS A4 (Rim)</td>
                            <td className="px-6 py-4 text-right font-mono text-text-sub-light">450</td>
                            <td className="px-6 py-4 text-right font-mono font-medium text-text-main-light dark:text-text-main-dark">Rp 22.500.000</td>
                            <td className="px-6 py-4 text-center text-success"><span className="material-symbols-outlined text-lg">trending_up</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TopProducts;
