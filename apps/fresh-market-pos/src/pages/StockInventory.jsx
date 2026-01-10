
export default function StockInventory() {
    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex">
                    <ol className="flex items-center space-x-2" role="list">
                        <li>
                            <a className="text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200" href="#">Manajemen</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                        </li>
                        <li>
                            <a aria-current="page" className="text-sm font-medium text-primary hover:text-primary-dark" href="#">Inventaris</a>
                        </li>
                    </ol>
                </nav>

                {/* Header */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Stok & Pemasok</h2>
                        <p className="text-slate-500 dark:text-slate-400">Pantau kesehatan stok dan kelola data pemasok.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="group flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">file_upload</span>
                            <span>Impor Data</span>
                        </button>
                        <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-primary/50">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Tambah Barang</span>
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-16 z-30 -mx-4 bg-background-light/95 px-4 py-4 backdrop-blur-sm dark:bg-background-dark/95 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="flex flex-col gap-4 rounded-xl bg-surface-light p-1 shadow-sm ring-1 ring-slate-200 dark:bg-surface-dark dark:ring-slate-800 lg:flex-row lg:items-center lg:justify-between lg:p-2">
                        <div className="relative w-full lg:max-w-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                            </div>
                            <input className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-primary" placeholder="Cari nama barang, SKU, atau pemasok..." type="text" />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                            <button className="whitespace-nowrap rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20 transition-colors">
                                Semua Barang
                            </button>
                            <button className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-white transition-colors">
                                Stok Rendah <span className="ml-1 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-bold text-amber-700">3</span>
                            </button>
                            <button className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-white transition-colors">
                                Pemasok A
                            </button>
                            <button className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-white transition-colors">
                                Pemasok B
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Item 1 */}
                    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-surface-light shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-surface-dark">
                        <div className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-100 bg-cover bg-center ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhemRs6Fjr4QyzHxasoN9S2qofupREPdv2pK0GbPiGhShJGtOk1n133R561BrqxRpa_of2GnMmSHmPcJJQm7rio2wflwX09OQ9tVpaIZ7H3e9jWflLm2ls7goU-b5Yk2oJnEZl711Bo6vmVE82iZNBpMV-q-x4JZUD7JdK_HqWARj8ntPuxvvNfUciPlOF8NyLHlcy8xUdejKLLZyko3nKIq6fxYcasO8ovynXGfpg2zu56TsiZVwgDAoT7rUK08AEp2jZYlTE7gkk')" }}></div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 line-clamp-1 dark:text-white">Minyak Goreng 2L</h3>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Pemasok: CV. Sejahtera</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-900/20 dark:text-emerald-400 dark:ring-emerald-500/30">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Aman
                                </span>
                                <span className="text-xs font-medium text-slate-400">SKU: MG-2001</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30">
                            <div className="flex flex-col gap-1 border-r border-slate-200 pr-4 dark:border-slate-700">
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Stok</span>
                                    <span className="text-[10px] font-medium text-slate-400">Min: 10</span>
                                </div>
                                <span className="text-xl font-bold text-slate-900 dark:text-white">58 <span className="text-sm font-normal text-slate-500">pcs</span></span>
                            </div>
                            <div className="flex flex-col gap-1 pl-4">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Harga Jual</span>
                                <span className="text-lg font-bold text-primary">Rp 28.000</span>
                                <span className="text-[10px] text-slate-400">HPP: Rp 24.500</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-surface-light shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-surface-dark">
                        <div className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-100 bg-cover bg-center ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7oBfm9nRaIxzB1HLtgr0LkCGdmuvTiswjp2PfZTzKgKXbFXOt_OV_uoC2A-URLdfObCrJzxMGJ5B8IlttFIcwQx_Q_5qcIPrn--TxKXFBoSVN5ES6nJ_c1_XkahJmzI54gnTNLBuv_c1-QkVE_IP2zOY2NZX5rGTP4rHC9Sgk17bjgqEOyTWlyZnW0gST-fDg-cEWOkMtJ2VuvwrMqXcTL3lE2KXHzdwlCtijxlx7IoevM9pLIQ5iUsCHAwb45U6UMx1CNlw-lFyF')" }}></div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 line-clamp-1 dark:text-white">Beras Premium 5kg</h3>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Pemasok: PT. Tani Makmur</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-600/20 dark:bg-amber-900/20 dark:text-amber-400 dark:ring-amber-500/30">
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Rendah
                                </span>
                                <span className="text-xs font-medium text-slate-400">SKU: BP-5002</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30">
                            <div className="flex flex-col gap-1 border-r border-slate-200 pr-4 dark:border-slate-700">
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Stok</span>
                                    <span className="text-[10px] font-medium text-slate-400">Min: 10</span>
                                </div>
                                <span className="text-xl font-bold text-amber-600 dark:text-amber-500">4 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">pcs</span></span>
                            </div>
                            <div className="flex flex-col gap-1 pl-4">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Harga Jual</span>
                                <span className="text-lg font-bold text-primary">Rp 65.000</span>
                                <span className="text-[10px] text-slate-400">HPP: Rp 58.000</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-red-200 bg-red-50/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-red-900/50 dark:bg-red-900/10">
                        <div className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-100 bg-cover bg-center ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXmcnO5myEd2hKG0-26w-qHAZbs6i5uDD6s9R16LGg3pO7ua5by5v5zBd95BPY13e2mw3aTa9ykkL5PTHE2MZiK9ndxXZy6H9UX-L-tS0YeJ8lnqc5ARY2v6v9M0jCnJYbrwnXsPK4qz_Up9RPy2Vz1x65YfqKfK-jdiuoX_yQuBxr98pmw0EnJTHS_mR5sx6qyjdOZJzOIHd3wA2aUcXRsU32zvCjv3RErCnUlD50g-50-yVW1LVQwEKMiESGDqZP00YP8ysxOnic')" }}></div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 line-clamp-1 dark:text-white">Gula Pasir 1kg</h3>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Pemasok: CV. Manis</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700 ring-1 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30">
                                    <span className="material-symbols-outlined text-[14px]">warning</span> Habis
                                </span>
                                <span className="text-xs font-medium text-slate-400">SKU: GP-1001</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30">
                            <div className="flex flex-col gap-1 border-r border-slate-200 pr-4 dark:border-slate-700">
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Stok</span>
                                    <span className="text-[10px] font-medium text-slate-400">Min: 20</span>
                                </div>
                                <span className="text-xl font-bold text-red-600 dark:text-red-400">0 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">pcs</span></span>
                            </div>
                            <div className="flex flex-col gap-1 pl-4">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Harga Jual</span>
                                <span className="text-lg font-bold text-primary">Rp 14.500</span>
                                <span className="text-[10px] text-slate-400">HPP: Rp 12.500</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-surface-light shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-surface-dark">
                        <div className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-100 bg-cover bg-center ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOy6RQnSqeOwPkdwa3tt_m_qKI4R-Kb6cv2NZuINEQukaZjd9J4Vxlr5wegQodS-R2nbfawuoaO1_PeTe6ekTIIvHC9NdniKPYf4JgAElTZC4XMMcFabkVvJryYACW39DWI9cPsp-MOp_yNx8igurjMDZ5ZTkMv601zt7To4vASeocCShwGFAyhcN88Jr3V22bJpnW3J8I_eRmXkMOLikyCwt9w52pHWlufV68oumhwpXjF6Q3fHC2RCq8NagbkJR_ngDdbf6cq78v')" }}></div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 line-clamp-1 dark:text-white">Susu UHT Full Cream</h3>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Pemasok: PT. Dairy Fresh</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-900/20 dark:text-emerald-400 dark:ring-emerald-500/30">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Aman
                                </span>
                                <span className="text-xs font-medium text-slate-400">SKU: SU-1000</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30">
                            <div className="flex flex-col gap-1 border-r border-slate-200 pr-4 dark:border-slate-700">
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Stok</span>
                                    <span className="text-[10px] font-medium text-slate-400">Min: 24</span>
                                </div>
                                <span className="text-xl font-bold text-slate-900 dark:text-white">120 <span className="text-sm font-normal text-slate-500">pcs</span></span>
                            </div>
                            <div className="flex flex-col gap-1 pl-4">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Harga Jual</span>
                                <span className="text-lg font-bold text-primary">Rp 18.000</span>
                                <span className="text-[10px] text-slate-400">HPP: Rp 15.000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Menampilkan 1-6 dari 48 barang</span>
                    <div className="flex gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-sm shadow-primary/30">
                            <span className="text-sm font-bold">1</span>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800">
                            <span className="text-sm font-bold">2</span>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800">
                            <span className="text-sm font-bold">3</span>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
