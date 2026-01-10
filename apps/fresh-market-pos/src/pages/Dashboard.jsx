import Header from '../components/Header'
import StatsGrid from '../components/StatsGrid'
import CashFlowChart from '../components/CashFlowChart'
import LowStockAlerts from '../components/LowStockAlerts'
import TopProducts from '../components/TopProducts'
import RecentTransactions from '../components/RecentTransactions'

export default function Dashboard() {
    return (
        <div className="mx-auto max-w-7xl flex flex-col gap-8 p-6 lg:p-8">
            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">Selamat Pagi, Sarah 👋</h2>
                <p className="text-text-sub-light dark:text-text-sub-dark mt-1">Berikut adalah perkembangan toko Anda hari ini.</p>
            </div>
            {/* Stats Cards */}
            <StatsGrid />
            {/* Main Chart & Top Products Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cash Flow Chart (Takes up 2/3 on large screens) */}
                <CashFlowChart />
                {/* Low Stock Alerts */}
                <LowStockAlerts />
            </div>
            {/* Bottom Section: Top Products & Recent Transactions */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <TopProducts />
                <RecentTransactions />
            </div>
        </div>
    )
}
