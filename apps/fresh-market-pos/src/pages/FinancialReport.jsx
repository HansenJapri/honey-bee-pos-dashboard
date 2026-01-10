import { useState } from 'react';

export default function FinancialReport() {
    const [month, setMonth] = useState('Desember 2025');

    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-text-main-light dark:text-text-main-dark">LAPORAN KEUANGAN</h2>
                        <p className="text-text-sub-light dark:text-text-sub-dark mt-1">Financial Analysis & Business Trends</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="appearance-none pl-10 pr-10 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm font-semibold text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer shadow-sm"
                            >
                                <option>Desember 2025</option>
                                <option>November 2025</option>
                                <option>Oktober 2025</option>
                            </select>
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-sub-light">
                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                            </div>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-sub-light pointer-events-none">
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm font-semibold text-text-main-light dark:text-text-main-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                            <span>PDF</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm font-semibold text-text-main-light dark:text-text-main-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-lg">table_view</span>
                            <span>Excel</span>
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6 border-b border-border-light dark:border-border-dark pb-4">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                        <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark uppercase">RINGKASAN RUGI LABA</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <p className="text-sm font-medium text-text-sub-light mb-2">Pendapatan Total</p>
                            <p className="font-mono text-2xl font-bold text-text-main-light dark:text-text-main-dark">Rp 485.250.000</p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-success">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span>+8.5% vs bulan lalu</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <p className="text-sm font-medium text-text-sub-light mb-2">Harga Pokok Penjualan (HPP)</p>
                            <p className="font-mono text-2xl font-bold text-text-main-light dark:text-text-main-dark">Rp 310.500.000</p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-danger">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span>+2.1% (Biaya naik)</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <p className="text-sm font-medium text-text-sub-light mb-2">Biaya Operasional</p>
                            <p className="font-mono text-2xl font-bold text-text-main-light dark:text-text-main-dark">Rp 45.200.000</p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-success">
                                <span className="material-symbols-outlined text-sm">trending_down</span>
                                <span>-1.5% vs bulan lalu</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                            <p className="text-sm font-medium text-primary-dark dark:text-primary mb-2">Laba Bersih</p>
                            <p className="font-mono text-2xl font-bold text-primary-dark dark:text-primary">Rp 129.550.000</p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-primary-dark dark:text-primary">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span>Margin: 26.7%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Line Chart */}
                    <div className="lg:col-span-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">show_chart</span>
                                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark uppercase">GRAFIK TREND LABA</h3>
                            </div>
                            <span className="text-xs font-medium px-2 py-1 rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-sub-light">6 Bulan Terakhir</span>
                        </div>
                        <div className="flex-1 w-full relative h-[300px] flex items-end px-4 gap-8">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 pt-4">
                                <div className="w-full h-px bg-border-light dark:bg-border-dark border-dashed border-b"></div>
                                <div className="w-full h-px bg-border-light dark:bg-border-dark border-dashed border-b"></div>
                                <div className="w-full h-px bg-border-light dark:bg-border-dark border-dashed border-b"></div>
                                <div className="w-full h-px bg-border-light dark:bg-border-dark border-dashed border-b"></div>
                                <div className="w-full h-px bg-border-light dark:bg-border-dark"></div>
                            </div>

                            {/* Chart SVG */}
                            <svg className="absolute inset-0 w-full h-full pb-8 pt-4 px-4 overflow-visible" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradientArea" x1="0%" x2="0%" y1="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#10b77f', stopOpacity: 0.2 }}></stop>
                                        <stop offset="100%" style={{ stopColor: '#10b77f', stopOpacity: 0 }}></stop>
                                    </linearGradient>
                                </defs>
                                <path className="w-full" d="M0,220 L120,180 L240,200 L360,100 L480,120 L600,40 L750,40 L750,280 L0,280 Z" fill="url(#gradientArea)" style={{ width: '100%', height: '100%', vectorEffect: 'non-scaling-stroke' }}></path>
                                <polyline fill="none" points="0,220 120,180 240,200 360,100 480,120 600,40 750,40" stroke="#10b77f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{ vectorEffect: 'non-scaling-stroke' }}></polyline>
                                <circle cx="16.6%" cy="220" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                                <circle cx="33.2%" cy="180" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                                <circle cx="49.8%" cy="200" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                                <circle cx="66.4%" cy="100" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                                <circle cx="83%" cy="120" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                                <circle cx="99%" cy="40" fill="#ffffff" r="4" stroke="#10b77f" strokeWidth="2"></circle>
                            </svg>

                            {/* X-Axis Labels */}
                            <div className="absolute bottom-0 w-full flex justify-between px-4 text-xs font-mono font-medium text-text-sub-light">
                                <span>Jul</span>
                                <span>Agu</span>
                                <span>Sep</span>
                                <span>Okt</span>
                                <span>Nov</span>
                                <span>Des</span>
                            </div>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="lg:col-span-1 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">pie_chart</span>
                            <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark uppercase">DISTRIBUSI PENGELUARAN</h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="relative w-48 h-48 rounded-full mb-6" style={{
                                background: `conic-gradient(
                                    #10b77f 0% 65%, 
                                    #3b82f6 65% 80%, 
                                    #f59e0b 80% 92%, 
                                    #ef4444 92% 100%
                                 )` }}>
                                <div className="absolute inset-4 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center flex-col">
                                    <span className="text-xs text-text-sub-light">Total Expenses</span>
                                    <span className="font-mono font-bold text-lg text-text-main-light dark:text-text-main-dark">Rp 355.7jt</span>
                                </div>
                            </div>
                            <div className="w-full space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                        <span className="text-text-main-light dark:text-text-main-dark font-medium">Purchase Stock</span>
                                    </div>
                                    <span className="font-mono text-text-sub-light">65%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <span className="text-text-main-light dark:text-text-main-dark font-medium">Salary</span>
                                    </div>
                                    <span className="font-mono text-text-sub-light">15%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <span className="text-text-main-light dark:text-text-main-dark font-medium">Electricity</span>
                                    </div>
                                    <span className="font-mono text-text-sub-light">12%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <span className="text-text-main-light dark:text-text-main-dark font-medium">Other</span>
                                    </div>
                                    <span className="font-mono text-text-sub-light">8%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center text-xs text-text-sub-light dark:text-text-sub-dark">
                    <p>Report generated on 31 December 2025 at 23:59 WIB. All figures are in IDR (Rupiah).</p>
                </div>
            </div>
        </div>
    );
}
