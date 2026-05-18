import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AppContext);

  return (
    <nav className="sticky top-0 z-50 bg-primaryBg/80 backdrop-blur-md border-b border-borderLight/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl font-semibold tracking-wide text-primaryText">
          The Pen Speaks.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} to={link.path} className="relative text-secondaryText hover:text-primaryText transition-colors duration-300 group">
              <span className="text-sm uppercase tracking-widest">{link.name}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primaryText focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-secondaryBg border-b border-borderLight"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-primaryText font-heading text-xl tracking-wide">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}