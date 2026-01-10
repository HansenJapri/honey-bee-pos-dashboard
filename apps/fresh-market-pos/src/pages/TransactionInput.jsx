import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function TransactionInput() {
    const [trxType, setTrxType] = useState('income');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(5000);

    const isExpense = trxType === 'expense';

    // Expense Categories (Existing)
    const expenseCategories = [
        { id: 'stock', name: 'Beli Stok', icon: 'inventory' },
        { id: 'electric', name: 'Listrik', icon: 'electric_bolt' },
        { id: 'salary', name: 'Gaji', icon: 'payments' },
        { id: 'rent', name: 'Sewa', icon: 'storefront' },
        { id: 'other', name: 'Lainnya', icon: 'more_horiz' },
    ];

    // Income Categories (New Design)
    const incomeCategories = [
        { id: 'veg', name: 'Sayuran', icon: 'nutrition' },
        { id: 'fruit', name: 'Buah', icon: 'grocery' },
        { id: 'drink', name: 'Minuman', icon: 'local_drink' },
        { id: 'staple', name: 'Sembako', icon: 'kitchen' },
        { id: 'other', name: 'Lainnya', icon: 'category' }
    ];

    // --- Income View (New HTML Design) ---
    if (!isExpense) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                        <div className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                            <span className="material-symbols-outlined text-[18px]">home</span>
                            <NavLink to="/">Dashboard</NavLink>
                        </div>
                        <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                        <div className="hover:text-primary transition-colors cursor-pointer">Transaksi</div>
                        <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                        <span className="text-slate-900 dark:text-white font-semibold">Input Baru</span>
                    </nav>

                    {/* Header & Toggle */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Input Transaksi</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Catat pemasukan dan pengeluaran harian toko secara real-time.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 inline-flex">
                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="trx_type"
                                    value="income"
                                    checked={!isExpense}
                                    onChange={() => setTrxType('income')}
                                    className="peer sr-only"
                                />
                                <div className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-500 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                                    Pemasukan
                                </div>
                            </label>
                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="trx_type"
                                    value="expense"
                                    checked={isExpense}
                                    onChange={() => setTrxType('expense')}
                                    className="peer sr-only"
                                />
                                <div className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-500 transition-all peer-checked:bg-red-500 peer-checked:text-white peer-checked:shadow-md hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">trending_down</span>
                                    Pengeluaran
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Main Form Content */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mt-2">
                        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Column: Form Fields */}
                            <div className="lg:col-span-8 flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tanggal Transaksi</label>
                                        <div className="relative">
                                            <input className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-3 focus:ring-primary focus:border-primary pl-10" type="date" defaultValue="2023-10-27" />
                                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400 pointer-events-none">calendar_month</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">ID Transaksi</label>
                                        <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50 text-slate-500 cursor-not-allowed p-3 font-mono text-sm" readOnly type="text" value="TRX-20231027-0042" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Kategori Produk</label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                        {incomeCategories.map((cat, idx) => (
                                            <label key={cat.id} className="cursor-pointer group">
                                                <input className="peer sr-only" name="category" type="radio" defaultChecked={idx === 0} />
                                                <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-500 hover:border-slate-200 dark:hover:border-slate-600 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
                                                    <span className="material-symbols-outlined mb-1">{cat.icon}</span>
                                                    <span className="text-xs font-semibold">{cat.name}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Produk</label>
                                    <input className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 focus:ring-primary focus:border-primary" placeholder="Contoh: Bayam Organik Ikat Besar" type="text" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Jumlah (Qty)</label>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => setQty(Math.max(1, qty - 1))}
                                                className="size-11 flex items-center justify-center rounded-l-xl border border-r-0 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" type="button">
                                                <span className="material-symbols-outlined text-sm">remove</span>
                                            </button>
                                            <input
                                                className="h-11 w-full border-x-0 border-slate-300 dark:border-slate-600 text-center text-slate-900 dark:text-white focus:ring-0 focus:border-slate-300 dark:focus:border-slate-600 bg-white dark:bg-slate-800"
                                                min="1"
                                                type="number"
                                                value={qty}
                                                onChange={(e) => setQty(parseInt(e.target.value) || 0)}
                                            />
                                            <button
                                                onClick={() => setQty(qty + 1)}
                                                className="size-11 flex items-center justify-center rounded-r-xl border border-l-0 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" type="button">
                                                <span className="material-symbols-outlined text-sm">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Harga Satuan (Rp)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-slate-400 font-medium">Rp</span>
                                            <input
                                                className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 pl-10 focus:ring-primary focus:border-primary text-right font-mono"
                                                placeholder="0"
                                                type="number"
                                                value={price}
                                                onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                                        Catatan
                                        <span className="text-slate-400 font-normal text-xs">Opsional</span>
                                    </label>
                                    <textarea className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 focus:ring-primary focus:border-primary resize-none" placeholder="Tambahkan detail transaksi..." rows="3"></textarea>
                                </div>
                            </div>

                            {/* Right Column: Sidebar */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700 flex flex-col gap-6 h-full sticky top-24">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Total Transaksi</span>
                                        <div className="text-4xl font-bold text-primary tracking-tight">Rp {(price * qty).toLocaleString('id-ID')}</div>
                                        <span className="text-xs text-slate-400">Harga sudah termasuk pajak jika berlaku.</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Metode Pembayaran</label>
                                        <div className="flex flex-col gap-2">
                                            <label className="relative flex items-center p-3 rounded-lg border cursor-pointer transition-all hover:bg-white dark:hover:bg-slate-800 border-primary bg-primary/5">
                                                <input checked readOnly className="peer sr-only" name="payment" type="radio" />
                                                <span className="material-symbols-outlined text-primary mr-3">payments</span>
                                                <span className="text-sm font-semibold text-slate-900 dark:text-white flex-1">Tunai / Cash</span>
                                                <span className="size-4 rounded-full border border-primary bg-primary flex items-center justify-center">
                                                    <span className="size-1.5 rounded-full bg-white"></span>
                                                </span>
                                            </label>
                                            <label className="relative flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-600 cursor-pointer transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-primary/50">
                                                <input className="peer sr-only" name="payment" type="radio" />
                                                <span className="material-symbols-outlined text-slate-400 mr-3">account_balance</span>
                                                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex-1">Transfer Bank</span>
                                                <span className="size-4 rounded-full border border-slate-300 dark:border-slate-500"></span>
                                            </label>
                                            <label className="relative flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-600 cursor-pointer transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-primary/50">
                                                <input className="peer sr-only" name="payment" type="radio" />
                                                <span className="material-symbols-outlined text-slate-400 mr-3">qr_code_scanner</span>
                                                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex-1">QRIS</span>
                                                <span className="size-4 rounded-full border border-slate-300 dark:border-slate-500"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex flex-col gap-3 pt-6">
                                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined">save</span>
                                            Simpan Transaksi
                                        </button>
                                        <button className="w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                            Reset Form
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-400 py-4">
                        © 2023 GroceryStore Admin System. All rights reserved.
                    </div>
                </div>
            </div>
        );
    }

    // --- Expense View (New Structure Match) ---
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-5xl mx-auto flex flex-col gap-6">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                    <div className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">home</span>
                        <NavLink to="/">Dashboard</NavLink>
                    </div>
                    <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                    <div className="hover:text-primary transition-colors cursor-pointer">Transaksi</div>
                    <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Input Baru</span>
                </nav>

                {/* Header & Toggle */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Catat Transaksi</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Catat pemasukan dan pengeluaran harian toko secara real-time.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 inline-flex">
                        <label className="relative cursor-pointer">
                            <input
                                type="radio"
                                name="trx_type"
                                value="income"
                                checked={!isExpense}
                                onChange={() => setTrxType('income')}
                                className="peer sr-only"
                            />
                            <div className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-500 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                                Pemasukan
                            </div>
                        </label>
                        <label className="relative cursor-pointer">
                            <input
                                type="radio"
                                name="trx_type"
                                value="expense"
                                checked={isExpense}
                                onChange={() => setTrxType('expense')}
                                className="peer sr-only"
                            />
                            <div className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-500 transition-all peer-checked:bg-red-500 peer-checked:text-white peer-checked:shadow-md hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">trending_down</span>
                                Pengeluaran
                            </div>
                        </label>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mt-2">
                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Form Fields */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Jenis Pengeluaran</label>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                    {expenseCategories.map((cat, idx) => (
                                        <label key={cat.id} className="cursor-pointer group">
                                            <input className="peer sr-only" name="expense_category" type="radio" defaultChecked={idx === 0} />
                                            <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-500 hover:border-slate-200 dark:hover:border-slate-600 transition-all peer-checked:border-red-500 peer-checked:bg-red-50 dark:peer-checked:bg-red-900/10 peer-checked:text-red-600">
                                                <span className="material-symbols-outlined mb-1">{cat.icon}</span>
                                                <span className="text-xs font-semibold">{cat.name}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nominal Pengeluaran</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3 text-slate-400 font-medium">Rp</span>
                                        <input
                                            className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 pl-10 focus:ring-red-500 focus:border-red-500 font-bold text-lg"
                                            placeholder="0"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tanggal Transaksi</label>
                                    <div className="relative">
                                        <input className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-3 focus:ring-red-500 focus:border-red-500 pl-10" type="date" defaultValue="2023-10-27" />
                                        <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400 pointer-events-none">calendar_month</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    Supplier
                                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">Wajib untuk Stok</span>
                                </label>
                                <div className="relative">
                                    <select className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 appearance-none focus:ring-red-500 focus:border-red-500">
                                        <option value="">Pilih Supplier...</option>
                                        <option value="pt-wings">PT. Wings Surya</option>
                                        <option value="pt-indofood">PT. Indofood Sukses Makmur</option>
                                        <option value="unilever">Unilever Indonesia</option>
                                        <option value="other">Supplier Lainnya</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Catatan (Opsional)</label>
                                    <textarea className="w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 focus:ring-red-500 focus:border-red-500 resize-none h-[140px]" placeholder="Tulis detail pengeluaran..." rows="4"></textarea>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bukti Transaksi</label>
                                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800/50 h-[140px] flex flex-col items-center justify-center text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-red-500 transition-colors text-3xl mb-2">cloud_upload</span>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            <span className="text-red-600 dark:text-red-400 font-medium">Upload file</span> atau drag & drop
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                                <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    Reset Form
                                </button>
                                <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg shadow-red-500/20 bg-red-600 hover:bg-red-700 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">save</span>
                                    Simpan Pengeluaran
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700 flex flex-col gap-6 sticky top-24">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ringkasan Hari Ini</h3>

                                <div className="p-4 rounded-xl border bg-white dark:bg-slate-800 border-red-100 dark:border-red-900/30 shadow-sm relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-1">Total Pengeluaran</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">Rp 2.500.000</p>
                                    </div>
                                    <span className="absolute right-2 top-2 p-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                                        <span className="material-symbols-outlined">trending_down</span>
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="p-1 rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                                    <span className="material-symbols-outlined text-[16px]">inventory</span>
                                                </span>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Stok Barang</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Rp 1.2jt</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full rounded-full" style={{ width: '48%' }}></div>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="p-1 rounded-md bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                    <span className="material-symbols-outlined text-[16px]">electric_bolt</span>
                                                </span>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Operasional</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Rp 800rb</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-yellow-500 h-full rounded-full" style={{ width: '32%' }}></div>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="p-1 rounded-md bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                                    <span className="material-symbols-outlined text-[16px]">payments</span>
                                                </span>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Gaji</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Rp 500rb</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-purple-500 h-full rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex gap-3">
                                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                                    <p className="text-xs leading-relaxed text-blue-800 dark:text-blue-300">
                                        <span className="font-bold block mb-1">Tips Hemat</span>
                                        Selalu cek ulang harga supplier sebelum restock barang dalam jumlah besar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
