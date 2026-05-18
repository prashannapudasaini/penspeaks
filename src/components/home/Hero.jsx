import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRAND_LINKS } from '../../utils/constants';

export default function Hero() {
  // Dynamic date tracking
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  return (
    <section className="relative w-full flex flex-col min-h-screen">
      
      {/* 1. TOTALLY CLEAR BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Removed opacity and blend modes so the image is 100% clear */}
        <img 
          src="/herobg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        {/* A subtle gradient only at the very bottom so the buttons remain readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-primaryBg via-transparent to-transparent opacity-80"></div>
      </div>

      {/* 2. SOLID TOP EDITORIAL STRIP (Exactly like Sahityapost) */}
      {/* Replaced transparent background with a solid warm tan color */}
      <div className="relative z-10 w-full bg-[#E5D9C5] border-b border-[#D4C4A8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col sm:flex-row justify-between items-center font-body text-secondaryText text-xs md:text-sm tracking-wide gap-3 sm:gap-0">
          
          {/* Left: Current Date Context */}
          <div className="flex items-center space-x-2 font-medium">
            <span className="text-[#9A3B3B] font-bold text-sm">🇳🇵</span>
            <span className="text-[#7A3B3B] font-semibold">{formattedDate}</span>
          </div>

          {/* Center: Primary Navigation Quicklinks */}
          <div className="flex space-x-6 md:space-x-8 uppercase tracking-widest text-[11px] md:text-xs font-bold text-[#5C4F45]">
            <Link to="/about" className="hover:text-[#9A3B3B] transition-colors duration-200">Our Team</Link>
            <Link to="/contact" className="hover:text-[#9A3B3B] transition-colors duration-200">Contact</Link>
            <Link to="/ebooks" className="hover:text-[#9A3B3B] transition-colors duration-200">Publications</Link>
          </div>

          {/* Right: Social Hub Channels */}
          <div className="flex space-x-5 items-center text-[#7A3B3B]">
            <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-[#B67332] transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* 3. CENTERED MASTHEAD HEADER */}
      <div className="relative z-10 w-full flex-grow flex flex-col items-center justify-center pt-10 pb-20 px-6 text-center">
        
        {/* Main Logo Banner Placement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center items-center"
        >
          {/* Ensure your logo file is in the /public folder and named logo.png */}
          <img 
            src="/logo.png" 
            alt="THE PEN SPEAKS" 
            className="h-32 md:h-44 lg:h-56 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 4. SUBHEADINGS & CALL TO ACTIONS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto space-y-6"
        >
          {/* Primary English Tagline */}
          <h2 className="font-heading text-4xl md:text-6xl text-primaryText font-bold tracking-wide drop-shadow-md">
            Every Word <span className="text-bronze italic">Tells a Story</span>
          </h2>

          {/* Secondary Script Subtext */}
          <p className="font-heading italic text-3xl md:text-5xl text-burgundy font-bold pt-2 drop-shadow-md">
            “शब्द जसले भावना बोल्छ”
          </p>

          {/* Action Interaction Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link 
              to="/blog" 
              className="w-full sm:w-auto px-10 py-4 bg-[#7A3B3B] text-white font-body font-bold text-sm md:text-base tracking-widest uppercase hover:bg-primaryText transition-colors duration-300 rounded-sm shadow-xl"
            >
              Read Blogs
            </Link>
            <Link 
              to="/ebooks" 
              className="w-full sm:w-auto px-10 py-4 border-2 border-primaryText bg-white/80 backdrop-blur-sm text-primaryText font-body font-bold text-sm md:text-base tracking-widest uppercase hover:bg-primaryText hover:text-white transition-colors duration-300 rounded-sm shadow-xl"
            >
              The Library
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}