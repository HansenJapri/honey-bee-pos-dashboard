import React from 'react';

const Header = () => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-6">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-3xl">storefront</span>
                    <h1 className="text-xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Honey Bee Ponsel & Stationary</h1>
                </div>
                <div className="hidden md:flex items-center gap-4 text-sm font-medium text-text-sub-light dark:text-text-sub-dark">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        <span className="font-mono text-xs font-semibold tracking-tight">Tue, Oct 24, 2023</span>
                    </div>
                </div>
                <div className="hidden lg:flex w-full max-w-sm items-center">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-sub-light dark:text-text-sub-dark">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input className="block w-full rounded-lg border-none bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm text-text-main-light dark:text-text-main-dark placeholder-text-sub-light dark:placeholder-text-sub-dark focus:ring-1 focus:ring-primary" placeholder="Search products, orders..." type="text" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-semibold text-primary" href="#">Dashboard</a>
                    <a className="text-sm font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" href="#">Inventory</a>
                    <a className="text-sm font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" href="#">Sales</a>
                    <a className="text-sm font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" href="#">Reports</a>
                </nav>
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add</span>
                        <span>New Sale</span>
                    </button>
                    <div className="h-9 w-9 overflow-hidden rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark cursor-pointer">
                        <div className="bg-center bg-no-repeat bg-cover h-full w-full" data-alt="User profile picture showing a smiling manager" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5VPx5r0gBFbQTVQEzyN1-50WFamGmJd1GP2oWu43zFv_xDf-oQCB4UEosNva5vaZ_oh9lKAEpwK4h5lVu-yU5GJiFDJeFm4QadhckPUfbeV4fcdEzdeCEJ7W1pq3irWvqalMGm5jEi6dDx-LDUdOsAuTteqls3chILdDMdLA0i3lLUqLqa0cx81cKTDM8XNeCfuCqBP0BQsZezB_uSSTyU8d85MuOIM18jewJNqRO0jkcE6yCDpwplMLJevipaoc3zRobiSKAClMI")' }}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
