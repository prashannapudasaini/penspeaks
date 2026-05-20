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
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#F7F3EB] via-[#EAE0D5] to-[#F7F3EB] border-b-2 border-[#C7B59A] shadow-md">
      {/* Decorative top line — like the edge of a notebook */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#9A3B3B] to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center font-body text-secondaryText tracking-wide">
        
        {/* Left: Current Date Context — with quill/pen icon */}
        <div className="flex items-center space-x-3 font-medium">
          {/* Quill/Pen icon for literary vibe */}
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9A3B3B] rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span className="text-[#9A3B3B] font-bold text-sm md:text-base">🇳🇵</span>
          <span className="text-[#5C4B3A] font-semibold text-sm md:text-base hidden sm:inline-block italic">
            {formattedDate}
          </span>
        </div>

        {/* Center: Main Navigation Links (Home, About, eBooks, etc.) — larger literary font */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 uppercase tracking-[0.2em] text-sm md:text-base font-serif font-bold text-[#4A3B2C]">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative hover:text-[#9A3B3B] transition-all duration-300 
                  ${isActive ? 'text-[#9A3B3B]' : ''}
                `}
              >
                {link.name}
                {/* Underline flourish for active page — like a pen stroke */}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#9A3B3B] to-[#D4A373] rounded-full"
                  />
                )}
                {/* Hover underline effect */}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4A373] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            );
          })}
        </div>

        {/* Right: Social Hub & Mobile Hamburger */}
        <div className="flex items-center space-x-6 text-[#7A3B3B]">
          {/* Socials (Hidden on tiny screens to save space) */}
          <div className="hidden sm:flex space-x-5 items-center">
            <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden focus:outline-none p-2 rounded-full hover:bg-[#D4C4A8]/50 transition-all" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="md:hidden overflow-hidden bg-[#F7F3EB] border-t-2 border-[#D4C4A8] absolute w-full shadow-xl"
          >
            <div className="flex flex-col items-center py-8 space-y-7">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-[#4A3B2C] font-serif font-bold text-xl tracking-widest uppercase hover:text-[#9A3B3B] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Socials */}
              <div className="flex space-x-8 pt-6 border-t-2 border-[#D4C4A8] w-2/3 justify-center">
                <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="text-[#7A3B3B] hover:text-[#B67332] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-[#7A3B3B] hover:text-[#B67332] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative bottom edge — like the footer of a manuscript page */}
      <div className="h-px w-full bg-gradient-to-r from-[#C7B59A] via-[#9A3B3B]/30 to-[#C7B59A]"></div>
    </nav>
  );
}