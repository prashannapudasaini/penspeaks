import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BRAND_LINKS } from '../../utils/constants';

export default function YoutubeSlider() {
  const scrollRef = useRef(null);

  const videos = [
    { id: '1', title: 'The Philosophy of Modern Writing', category: 'Literature', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Why We Read: A Deep Dive into Escapism', category: 'Thought', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'The Solitude of the Author', category: 'Motivation', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section className="relative w-full py-24 bg-[#E5D9C5]/30 border-y border-[#D4C4A8]">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#2D241E] font-bold">Visual Storytelling</h2>
            <p className="text-[#7A3B3B] mt-2 font-body text-lg italic">Cinematic poetry and discussions.</p>
          </div>
          <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hidden md:block text-sm uppercase tracking-widest text-[#B67332] hover:text-[#7A3B3B] transition-colors font-semibold">
            Subscribe Channel →
          </a>
        </div>
        
        {/* Horizontal Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {videos.map((video) => (
            <motion.a 
              href={BRAND_LINKS.YOUTUBE} 
              target="_blank" 
              rel="noreferrer"
              key={video.id}
              whileHover={{ y: -5 }}
              className="min-w-[300px] md:min-w-[450px] snap-center bg-white rounded-sm overflow-hidden shadow-md hover:shadow-[0_15px_30px_rgba(45,36,30,0.1)] border border-[#E3DCD2] cursor-pointer group flex-shrink-0"
            >
              <div className="w-full aspect-video relative overflow-hidden flex items-center justify-center bg-[#2D241E]">
                 <img src={video.image} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                 
                 {/* Play Button Icon */}
                 <div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#B67332]/80 transition-colors duration-300 border border-white/50">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                 </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] text-[#B67332] font-bold uppercase tracking-widest mb-2 block">{video.category}</span>
                <h4 className="font-heading text-xl md:text-2xl text-[#2D241E] mb-2 font-bold group-hover:text-[#7A3B3B] transition-colors line-clamp-2">
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