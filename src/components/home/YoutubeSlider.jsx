import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BRAND_LINKS } from '../../utils/constants';

export default function YoutubeSlider() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect on the background shapes
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const videos = [
    { id: '1', title: 'The Philosophy of Modern Writing', category: 'Literature' },
    { id: '2', title: 'Why We Read: A Deep Dive into Escapism', category: 'Thought' },
    { id: '3', title: 'The Solitude of the Author', category: 'Motivation' },
    { id: '4', title: 'Poetry in the Digital Age', category: 'Poetry' },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-secondaryBg overflow-hidden">
      {/* Decorative background element */}
      <motion.div 
        style={{ y }} 
        className="absolute top-0 right-0 w-96 h-96 bg-primaryBg rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" 
      />

      <div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl text-primaryText">Visual Storytelling</h2>
            <p className="text-secondaryText mt-2 font-light text-lg">Latest from our channel.</p>
          </div>
          <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest text-bronze border-b border-transparent hover:border-bronze transition-all pb-1">
            Subscribe →
          </a>
        </div>
        
        {/* Horizontal Slider */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {videos.map((video) => (
            <motion.a 
              href={BRAND_LINKS.YOUTUBE} 
              target="_blank" 
              rel="noreferrer"
              key={video.id}
              whileHover={{ y: -5 }}
              className="min-w-[300px] md:min-w-[400px] snap-center bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-elegant border border-borderLight/30 cursor-pointer group flex-shrink-0"
            >
              <div className="w-full aspect-video bg-borderLight relative overflow-hidden flex items-center justify-center">
                 {/* Placeholder for YT Thumbnail */}
                 <div className="absolute inset-0 bg-primaryText/10 group-hover:bg-transparent transition-all duration-500"></div>
                 <svg className="w-12 h-12 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                 </svg>
              </div>
              <div className="p-6">
                <span className="text-xs text-softAccent uppercase tracking-widest mb-2 block">{video.category}</span>
                <h4 className="font-heading text-xl text-primaryText mb-3 group-hover:text-bronze transition-colors line-clamp-2">
                  {video.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}