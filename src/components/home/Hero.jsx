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
      
      {/* 1. BACKGROUND IMAGE WITH PREMIUM OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/herobg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        {/* Elegant warm-dark overlay to make the white logo and text pop perfectly */}
        <div className="absolute inset-0 bg-[#2D241E]/70"></div>
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
          <img 
            src="/logo.png" 
            alt="THE PEN SPEAKS" 
            // Increased scale slightly and added a stronger drop shadow for extra pop
            className="h-36 md:h-48 lg:h-64 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* 4. SUBHEADINGS & CALL TO ACTIONS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto space-y-6"
        >
          {/* Changed text to white so it contrasts beautifully with the dark overlay */}
          <h2 className="font-heading text-4xl md:text-6xl text-white font-bold tracking-wide drop-shadow-lg">
            Every Word <span className="text-bronze italic">Tells a Story</span>
          </h2>

          {/* Changed script text to a warm cream color */}
          <p className="font-heading italic text-3xl md:text-5xl text-[#E5D9C5] font-bold pt-2 drop-shadow-md">
            “शब्द जसले भावना बोल्छ”
          </p>

          {/* Action Interaction Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link 
              to="/blog" 
              className="w-full sm:w-auto px-10 py-4 bg-bronze text-white font-body font-bold text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-primaryText transition-colors duration-300 rounded-sm shadow-xl"
            >
              Read Blogs
            </Link>
            <Link 
              to="/ebooks" 
              className="w-full sm:w-auto px-10 py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-body font-bold text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-primaryText transition-colors duration-300 rounded-sm shadow-xl"
            >
              The Library
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}