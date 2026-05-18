import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRAND_LINKS } from '../../utils/constants';

export default function Hero() {
  // Using today's date context
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  return (
    <section className="relative w-full flex flex-col min-h-screen">
      
      {/* 1. GUARANTEED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/herobg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
        />
        {/* Lighter gradient so the image is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-primaryBg/60 via-secondaryBg/70 to-primaryBg"></div>
      </div>

      {/* 2. TOP EDITORIAL BAR (Like the reference picture) */}
      <div className="relative z-10 w-full border-b border-borderLight/50 bg-primaryBg/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center font-body text-secondaryText tracking-wide">
          
          {/* Left: Date */}
          <div className="flex items-center space-x-2 text-sm md:text-base font-medium mb-3 md:mb-0">
            <span className="text-burgundy text-lg">📅</span>
            <span>{formattedDate}</span>
          </div>

          {/* Center: Quick Links (Larger Text) */}
          <div className="flex space-x-8 uppercase tracking-widest text-sm md:text-base font-semibold">
            <Link to="/about" className="hover:text-bronze transition-colors">Our Team</Link>
            <Link to="/contact" className="hover:text-bronze transition-colors">Contact</Link>
            <Link to="/ebooks" className="hover:text-bronze transition-colors">Publications</Link>
          </div>

          {/* Right: Socials (Larger Icons) */}
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="text-burgundy hover:text-bronze transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-burgundy hover:text-bronze transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* 3. GIANT LOGO MASTHEAD */}
      <div className="relative z-10 w-full pt-16 pb-8 md:pt-24 md:pb-12 flex justify-center items-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/logo.png" 
          alt="The Pen Speaks Logo" 
          // Dramatically increased logo size
          className="h-48 md:h-72 lg:h-96 object-contain drop-shadow-2xl"
        />
      </div>

      {/* 4. HERO TYPOGRAPHY */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 pb-24"
      >
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-primaryText leading-tight drop-shadow-lg mb-6">
          Every Word <br className="hidden md:block"/><span className="text-bronze italic">Tells a Story</span>
        </h1>

        <p className="font-heading italic text-3xl md:text-5xl lg:text-6xl text-burgundy font-medium drop-shadow-md">
          “शब्द जसले भावना बोल्छ”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
          <Link to="/blog" className="px-12 py-5 bg-bronze text-primaryBg font-bold text-base md:text-lg tracking-widest uppercase hover:bg-white transition-all duration-300 rounded-sm shadow-xl">
            Read Blogs
          </Link>
          <Link to="/ebooks" className="px-12 py-5 border-2 border-primaryText text-primaryText font-bold text-base md:text-lg tracking-widest uppercase hover:bg-primaryText hover:text-white transition-all duration-300 rounded-sm shadow-lg">
            The Library
          </Link>
        </div>
      </motion.div>

    </section>
  );
}