import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${isActive
            ? 'border-primary text-primary font-bold'
            : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white'
        }`;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-surface-light dark:border-slate-800 dark:bg-surface-dark shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center text-primary">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                    <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="text-xl font-bold leading-none text-slate-900 dark:text-white">Honey Bee Ponsel & Stationary</h1>
                            </div>
                        </div>
                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            <NavLink to="/dashboard" className={navLinkClass}>
                                Dashboard
                            </NavLink>
                            <NavLink to="/stok" className={navLinkClass}>
                                Stok & Pemasok
                            </NavLink>
                            <NavLink to="/transaksi" className={navLinkClass}>
                                Transaksi
                            </NavLink>
                            <NavLink to="/laporan" className={navLinkClass}>
                                Laporan
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></span>
                        </button>
                        <button className="rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-3 pl-1">
                            <div className="hidden flex-col items-end sm:flex">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Siti Aminah</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Manajer Toko</span>
                            </div>
                            <div className="h-9 w-9 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white dark:ring-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIkp1C67dvwKYgdoXhhFZgjdklCy0rDvZ3E39WnPiRFWloy3TbUMaVrFYCQThCcMJ3H4UI_vQmHb381ozByD0CjCl1OF_7rsazyey-jXUmjXEwurkgtC6YRcl_KxI-h2H2vfrArPZtN7e4liWyKL0l3-TP4dWzh55m_wd-WkQ2Ev8cmur_T21xa7fBxSd4OkRcYwY_Den_e-2mMKcxej1zBSdR14cRQZSoqTjSnKWL02uUDYddFM7sgJvRkrOHk0y7Xs0PlH_rexuB')" }}></div>
                        </div>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:hover:bg-slate-800 dark:hover:text-white" type="button">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
