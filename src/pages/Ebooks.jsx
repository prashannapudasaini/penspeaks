import { motion } from 'framer-motion';
import BookCard from '../components/ebooks/BookCard';

export default function Ebooks() {
  // Only one book as requested
  const featuredBook = { 
    id: 'echoes-of-silence', 
    title: 'The Echoes of Silence', 
    author: 'The Pen Speaks', 
    category: 'Philosophy', 
    price: 'Free', 
    coverImage: '/cover.jpg' // Use your local cover image
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-[70vh]">
      <div className="mb-16 text-center">
        <h1 className="font-heading text-5xl md:text-6xl text-primaryText mb-4">The Library</h1>
        <div className="w-24 h-px bg-bronze mx-auto mb-6"></div>
        <p className="text-secondaryText font-light text-lg">Featured Masterpiece</p>
      </div>

      <div className="flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm w-full"
        >
          <BookCard book={featuredBook} />
        </motion.div>
      </div>
    </div>
  );
}