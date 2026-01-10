import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import TransactionInput from './pages/TransactionInput';
import FinancialReport from './pages/FinancialReport';
import StockInventory from './pages/StockInventory';
import SignIn from './pages/SignIn';

import CreateAccount from './pages/CreateAccount';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/transaksi" element={<Layout><TransactionInput /></Layout>} />
        <Route path="/laporan" element={<Layout><FinancialReport /></Layout>} />
        <Route path="/stok" element={<Layout><StockInventory /></Layout>} />
        <Route path="/pengaturan" element={<Layout><div className="p-10 text-center text-gray-500">Pengaturan Page (Coming Soon)</div></Layout>} />
        <Route path="*" element={<div className="p-10 text-center">Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
