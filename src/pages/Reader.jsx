import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: "The Awakening",
    content: "The city was asleep, wrapped in a blanket of soft gray fog that clung to the streetlamps like spun sugar. In the silence of the early hour, a single typewriter clacked rhythmically against the hush. It was a mechanical heartbeat in a world that had seemingly forgotten how to feel."
  },
  {
    title: "The Echoes",
    content: "She paused, letting the ink dry on the parchment. Every word felt heavy, laden with the weight of untold stories. The pen, she often thought, was not merely an instrument; it was a conduit for the soul. When it spoke, it demanded to be heard."
  },
  {
    title: "The Silence",
    content: "Outside her window, the first warm tones of dawn began to bleed through the overcast sky, painting the rooftops in muted bronze. It was time to begin again. The echoes of silence were finally starting to fade."
  }
];

export default function Reader() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
    else setCurrentPage(0); // Loop back for demo
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#E7E5E4] overflow-hidden flex flex-col items-center">
      
      {/* Header */}
      <motion.div 
        animate={{ y: isMenuOpen ? 0 : -100 }}
        className="fixed top-0 w-full bg-[#1C1917]/90 backdrop-blur-md border-b border-[#44403C] px-8 py-5 flex justify-between items-center z-50 shadow-2xl"
      >
        <Link to="/ebooks" className="text-bronze hover:text-white text-sm tracking-widest uppercase transition-all">← Back to Library</Link>
        <div className="flex items-center space-x-8">
          <button onClick={() => setFontSize(f => Math.max(16, f - 2))} className="text-accent hover:text-white transition-colors uppercase tracking-tighter">A-</button>
          <button onClick={() => setFontSize(f => Math.min(32, f + 2))} className="text-accent hover:text-white transition-colors uppercase tracking-tighter">A+</button>
        </div>
      </motion.div>

      {/* 3D Page Container */}
      <div 
        className="relative w-full max-w-4xl mt-32 px-6 flex-grow flex items-center justify-center perspective-1000"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          nextPage();
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0, transformOrigin: "left" }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full bg-[#1C1917] p-10 md:p-20 rounded-sm shadow-[20px_0_50px_rgba(0,0,0,0.5)] border-l-4 border-bronze/20"
          >
            <h2 className="font-heading text-bronze text-sm tracking-[0.3em] uppercase mb-12 text-center">
              The Echoes of Silence — {pages[currentPage].title}
            </h2>
            
            <div 
              className="font-body font-light leading-[2.2] text-[#D6D3D1] text-justify selection:bg-bronze/30"
              style={{ fontSize: `${fontSize}px` }}
            >
              <p className="indent-12">
                {pages[currentPage].content}
              </p>
            </div>
            
            <div className="mt-20 text-center text-[#44403C] text-xs tracking-widest italic">
              Click anywhere to turn the page
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Progress */}
      <motion.div 
        animate={{ y: isMenuOpen ? 0 : 100 }}
        className="fixed bottom-0 w-full bg-[#1C1917]/90 backdrop-blur-md border-t border-[#44403C] px-8 py-4 flex justify-between items-center z-50 text-[10px] text-softAccent tracking-[0.4em] uppercase"
      >
        <span>The Pen Speaks</span>
        <div className="flex space-x-2">
            {pages.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentPage ? 'bg-bronze w-6' : 'bg-borderLight'}`}></div>
            ))}
        </div>
        <span>Page {currentPage + 1} of {pages.length}</span>
      </motion.div>

      {/* CSS for 3D Perspective */}
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 2000px;
        }
      `}} />
    </div>
  );
}