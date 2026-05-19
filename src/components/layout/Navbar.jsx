import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import { NAV_LINKS, BRAND_LINKS } from '../../utils/constants';

export default function Navbar() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AppContext);
  const location = useLocation();

  // Dynamic date tracking
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#E5D9C5] border-b border-[#D4C4A8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center font-body text-secondaryText tracking-wide">
        
        {/* Left: Current Date Context */}
        <div className="flex items-center space-x-2 font-medium">
          <span className="text-[#9A3B3B] font-bold text-sm md:text-base">🇳🇵</span>
          <span className="text-[#7A3B3B] font-semibold text-xs md:text-sm hidden sm:inline-block">
            {formattedDate}
          </span>
        </div>

        {/* Center: Main Navigation Links (Home, About, eBooks, etc.) */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 uppercase tracking-widest text-[11px] md:text-xs font-bold text-[#5C4F45]">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative hover:text-[#9A3B3B] transition-colors duration-200 
                  ${isActive ? 'text-[#9A3B3B]' : ''}
                `}
              >
                {link.name}
                {/* Subtle dot indicator for the active page */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9A3B3B]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Social Hub & Mobile Hamburger */}
        <div className="flex items-center space-x-5 text-[#7A3B3B]">
          {/* Socials (Hidden on tiny screens to save space) */}
          <div className="hidden sm:flex space-x-4 items-center">
            <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#F0EBE1] border-b border-[#D4C4A8] absolute w-full shadow-lg"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-[#5C4F45] font-heading font-bold text-lg tracking-widest uppercase hover:text-[#9A3B3B]"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Socials */}
              <div className="flex space-x-6 pt-4 border-t border-[#D4C4A8] w-1/2 justify-center">
                <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="text-[#7A3B3B] hover:text-[#B67332]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-[#7A3B3B] hover:text-[#B67332]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}