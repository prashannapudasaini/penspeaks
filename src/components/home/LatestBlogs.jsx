import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LatestBlogs() {
  const latestBlogs = [
    { 
      id: 1, 
      title: 'The Architecture of Solitude in Modern Literature', 
      category: 'Philosophy', 
      date: 'Oct 12', 
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80' // Typewriter
    },
    { 
      id: 2, 
      title: 'Echoes of the Modern Muse: A Study of Silence', 
      category: 'Poetry', 
      date: 'Oct 08', 
      readTime: '3 min',
      image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&w=800&q=80' // Leaves/Book
    },
  ];

  return (
    <section className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#D4C4A8] pb-6 gap-4">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2D241E] font-bold">The Editorial</h2>
          <p className="text-[#7A3B3B] mt-2 font-body text-lg italic">Recent thoughts, essays, and poetry.</p>
        </div>
        <Link to="/blog" className="text-sm uppercase tracking-widest text-[#B67332] hover:text-[#7A3B3B] transition-colors font-semibold">
          Read All Entries →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {latestBlogs.map((blog, index) => (
          <motion.div 
            key={blog.id} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col"
          >
            <Link to={`/blog/${blog.id}`} className="flex flex-col h-full">
              {/* Image Container */}
              <div className="w-full aspect-[16/10] mb-6 overflow-hidden rounded-sm relative shadow-md">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#2D241E]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Meta Data */}
              <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-[#7A3B3B] mb-3 font-semibold">
                <span>{blog.category}</span>
                <span>•</span>
                <span className="text-[#5C4F45]">{blog.readTime} read</span>
              </div>
              
              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl text-[#2D241E] font-bold group-hover:text-[#B67332] transition-colors mb-3 leading-snug">
                {blog.title}
              </h3>
              
              <p className="text-[#5C4F45] font-body text-base line-clamp-3 leading-relaxed">
                An exploration into the deeper meanings behind our everyday interactions with literature, art, and the quiet spaces in between.
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}