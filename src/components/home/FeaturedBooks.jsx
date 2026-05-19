import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FeaturedBooks() {
  const featuredBook = { 
    id: 'echoes-of-silence', 
    title: 'The Echoes of Silence', 
    author: 'The Pen Speaks', 
    category: 'Philosophy', 
    price: 'Free', 
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80' // Moody open book
  };

  return (
    <section className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto bg-[#FAF7F2]">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl text-[#2D241E] font-bold">Curated Library</h2>
        <div className="w-16 h-1 bg-[#B67332] my-6"></div>
        <p className="text-[#7A3B3B] font-body text-lg italic">Extended prose for the quiet mind.</p>
      </div>

      <div className="flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-sm w-full group flex flex-col bg-white p-6 rounded-sm shadow-[0_10px_30px_rgba(45,36,30,0.08)] border border-[#E3DCD2]"
        >
          {/* Book Cover */}
          <div className="w-full aspect-[2/3] mb-8 relative overflow-hidden rounded-sm shadow-md flex items-center justify-center bg-[#E5D9C5]">
            <img 
              src={featuredBook.coverImage} 
              alt={featuredBook.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            />
          </div>

          <div className="flex flex-col flex-grow text-center">
            <div className="text-xs uppercase tracking-widest mb-3 font-semibold text-[#B67332]">
              {featuredBook.category}
            </div>
            
            <h3 className="font-heading text-3xl text-[#2D241E] group-hover:text-[#7A3B3B] transition-colors mb-2 font-bold leading-tight">
              {featuredBook.title}
            </h3>
            <p className="text-[#5C4F45] font-medium mb-8 italic">
              By {featuredBook.author}
            </p>

            <Link 
              to={`/reader/${featuredBook.id}`} 
              className="inline-block w-full py-4 border-2 border-[#2D241E] text-[#2D241E] font-bold text-sm tracking-widest uppercase hover:bg-[#2D241E] hover:text-white transition-all duration-300 rounded-sm"
            >
              Read Now
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-16 text-center">
        <Link to="/ebooks" className="text-sm uppercase tracking-widest text-[#B67332] border-b border-transparent hover:border-[#B67332] transition-all pb-1 font-semibold">
          Explore All Publications →
        </Link>
      </div>
    </section>
  );
}