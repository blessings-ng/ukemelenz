import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Book Now', path: '/book' },
  ];

  const isActive = (path) => location.pathname === path;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. MOBILE HEADER (Only visible on Mobile) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[60] bg-brand-black/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <span className="font-heading font-bold text-xl tracking-widest text-white uppercase">
          Ukeme<span className="text-brand-gold">Lenz</span>
        </span>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-2xl text-brand-gold focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* 2. SIDEBAR OVERLAY (The Menu Itself) */}
      <aside className={`
        fixed top-0 left-0 h-screen z-50 bg-brand-black transition-transform duration-300 ease-in-out border-r border-white/5
        w-full md:w-72 flex flex-col justify-between pl-8 pr-4 py-8
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        pt-24 md:pt-8 /* Add padding top on mobile so menu doesn't hit the close button */
      `}>
        
        {/* LOGO (Desktop Only - Hidden on Mobile to avoid duplicate) */}
        <div className="hidden md:block mt-0">
           <div className="mb-12">
             <h1 className="font-heading font-bold text-2xl text-white uppercase tracking-widest">
               Ukeme<br/><span className="text-brand-gold">Lenz</span>
             </h1>
             <p className="text-[10px] text-gray-400 tracking-[0.2em] mt-2 uppercase">
               Photographer / Creative Director
             </p>
           </div>
        </div>
           
        {/* NAVIGATION LINKS */}
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  text-lg md:text-sm font-medium tracking-widest uppercase transition-all duration-300 block border-b border-transparent pb-1
                  ${isActive(link.path) 
                    ? 'text-brand-gold border-brand-gold/50 pl-2' 
                    : 'text-gray-400 hover:text-white hover:pl-2'}
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* COPYRIGHT */}
        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-sans mt-auto md:mt-0">
          © {new Date().getFullYear()} UkemeLenz
        </div>
      </aside>

      {/* WHATSAPP BUTTON (Responsive Positioning) */}
      <a 
        href="https://wa.me/234YOURNUMBER" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-[#25D366] text-white px-3 py-3 md:px-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <span className="text-sm font-bold hidden md:block">Message us</span>
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default Sidebar;