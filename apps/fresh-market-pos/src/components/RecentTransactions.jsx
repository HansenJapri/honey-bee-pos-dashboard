import React from 'react';

const RecentTransactions = () => {
    return (
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Transaksi Terakhir</h3>
                <button className="text-xs font-semibold text-primary hover:text-primary-dark">Lihat Semua</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-background-light dark:bg-background-dark text-text-sub-light dark:text-text-sub-dark font-medium">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">ID</th>
                            <th className="px-6 py-3 whitespace-nowrap">Waktu</th>
                            <th className="px-6 py-3 whitespace-nowrap">Tipe</th>
                            <th className="px-6 py-3 whitespace-nowrap">Status</th>
                            <th className="px-6 py-3 text-right whitespace-nowrap">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-mono font-medium text-primary">#4421</td>
                            <td className="px-6 py-4 text-text-sub-light whitespace-nowrap">10:42 AM</td>
                            <td className="px-6 py-4 text-text-main-light dark:text-text-main-dark">Penjualan</td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Selesai</span></td>
                            <td className="px-6 py-4 text-right font-mono font-bold text-text-main-light dark:text-text-main-dark">Rp 150.000</td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-mono font-medium text-primary">#4420</td>
                            <td className="px-6 py-4 text-text-sub-light whitespace-nowrap">10:38 AM</td>
                            <td className="px-6 py-4 text-text-main-light dark:text-text-main-dark">Penjualan</td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Selesai</span></td>
                            <td className="px-6 py-4 text-right font-mono font-bold text-text-main-light dark:text-text-main-dark">Rp 45.000</td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-mono font-medium text-primary">#4419</td>
                            <td className="px-6 py-4 text-text-sub-light whitespace-nowrap">10:15 AM</td>
                            <td className="px-6 py-4 text-text-main-light dark:text-text-main-dark">Pengembalian</td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">Proses</span></td>
                            <td className="px-6 py-4 text-right font-mono font-bold text-danger">-Rp 25.000</td>
                        </tr>
                        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                            <td className="px-6 py-4 font-mono font-medium text-primary">#4418</td>
                            <td className="px-6 py-4 text-text-sub-light whitespace-nowrap">09:55 AM</td>
                            <td className="px-6 py-4 text-text-main-light dark:text-text-main-dark">Penjualan</td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Selesai</span></td>
                            <td className="px-6 py-4 text-right font-mono font-bold text-text-main-light dark:text-text-main-dark">Rp 350.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default RecentTransactions;
