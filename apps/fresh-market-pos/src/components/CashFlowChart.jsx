import React from 'react';

const CashFlowChart = () => {
    return (
        <div className="lg:col-span-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Ringkasan Arus Kas</h3>
                    <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Pendapatan vs Pengeluaran seiring waktu</p>
                </div>
                <select className="rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-1.5 px-3 text-sm font-medium text-text-main-light dark:text-text-main-dark focus:ring-primary focus:border-primary">
                    <option>30 Hari Terakhir</option>
                    <option>7 Hari Terakhir</option>
                    <option>Tahun Ini</option>
                </select>
            </div>
            <div className="flex-1 min-h-[250px] w-full relative">
                {/* Simulated Bar Chart */}
                <div className="absolute inset-0 flex items-end justify-between gap-2 md:gap-4 px-2">
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[40%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[70%]"></div>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main-light text-white text-xs px-2 py-1 rounded font-mono transition-opacity pointer-events-none">$1,240</div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[65%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[80%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[50%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[60%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[80%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[85%]"></div>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main-light text-white text-xs px-2 py-1 rounded font-mono transition-opacity pointer-events-none">$3,540</div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[45%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[50%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[90%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[75%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[60%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[90%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[30%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[40%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[75%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[65%]"></div>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm relative group transition-all duration-300 h-[55%]">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[80%]"></div>
                    </div>
                </div>
                {/* X Axis Labels */}
                <div className="absolute -bottom-6 w-full flex justify-between px-2 text-xs font-mono text-text-sub-light dark:text-text-sub-dark mt-2">
                    <span>01</span><span>04</span><span>07</span><span>10</span><span>13</span><span>16</span><span>19</span><span>22</span><span>25</span><span>28</span>
                </div>
            </div>
            <div className="h-6"></div>
        </div>
    );
};
export default CashFlowChart;
