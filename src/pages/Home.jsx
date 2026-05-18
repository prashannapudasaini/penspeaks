import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedBooks from '../components/home/FeaturedBooks';
import YoutubeSlider from '../components/home/YoutubeSlider';
import LatestBlogs from '../components/home/LatestBlogs';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full bg-primaryBg"
    >
      {/* 1. Brand Header (Logo & Topbar) */}
      <Hero />

      {/* 2. Elegant Animated Divider */}
      <div className="w-full flex justify-center items-center py-12 bg-primaryBg">
        <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="mx-4 text-bronze text-xl"
        >
          ✧
        </motion.div>
        <div className="w-1/3 h-px bg-gradient-to-r from-bronze/50 via-transparent to-transparent"></div>
      </div>

      {/* 3. Latest Editorial Content */}
      <LatestBlogs />

      {/* 4. Visual Storytelling / Video Integration */}
      <YoutubeSlider />

      {/* 5. The Library (Featured Books) */}
      <FeaturedBooks />

      {/* 6. Footer / Newsletter */}
      <Newsletter />
    </motion.div>
  );
}