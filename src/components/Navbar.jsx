import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Icons
import { MdDarkMode, MdLightMode } from 'react-icons/md'; // Theme Toggle

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // The 8 Pages from your Sitemap
 const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Book Now', path: '/book' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-bold tracking-widest uppercase">
          Ukeme<span className="text-brand-gold">Lenz</span>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(0, 5).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl hover:text-brand-gold">
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* Call to Action */}
          <Link to="/book" className="bg-brand-gold text-white px-6 py-2 rounded-none font-heading uppercase tracking-wider hover:bg-brand-goldHover transition-all">
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl">
             {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (The Climax Style) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-brand-black text-brand-white flex flex-col items-center justify-center space-y-8 md:hidden">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-heading font-light hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;