import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex min-h-screen bg-brand-black">
      
      {/* COLUMN 1: Fixed Sidebar (Width 72) */}
      <Sidebar />

      {/* COLUMN 2: Main Content (Takes remaining space) */}
      {/* md:ml-72 ensures it starts to the right of the sidebar */}
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen relative">
        
        {/* Page Content */}
        {/* We use flex-grow so it pushes the footer down if content is short */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer Info (Attached to bottom of Content Column) */}
        {!isHome && <Footer />}
        
      </main>
    </div>
  );
};

export default Layout;