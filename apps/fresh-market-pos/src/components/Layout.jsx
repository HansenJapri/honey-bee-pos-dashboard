import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark text-[#111816] dark:text-white transition-colors duration-300 font-display">
            <Navbar />
            <main className="flex-1 overflow-y-auto h-full relative scroll-smooth">
                <div className="w-full h-full">
                    {children || <Outlet />}
                </div>
            </main>
        </div>
    );
}
