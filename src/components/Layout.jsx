import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    // PERMANENT DARK BACKGROUND
    <div className="flex min-h-screen bg-brand-surface text-white">
      
      {/* 1. SIDEBAR */}
      <Sidebar />

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen relative">
        
        {/* Page Content */}
        <div className="flex-grow w-full">
          {children}
        </div>

        {/* Footer (Hidden on Home) */}
        {!isHome && <Footer />}
        
      </main>
    </div>
  );
};

export default Layout;