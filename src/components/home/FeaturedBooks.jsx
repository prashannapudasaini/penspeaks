import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookCard from '../ebooks/BookCard';

export default function FeaturedBooks() {
  const featuredBooks = [
    { id: '1', title: 'The Echoes of Silence', author: 'The Pen Speaks', category: 'Philosophy', price: 'Free' },
    { id: '2', title: 'Modern Stoicism', author: 'The Pen Speaks', category: 'Society', price: 'Premium' },
    { id: '3', title: 'Whispers in the Gray', author: 'The Pen Speaks', category: 'Poetry', price: 'Free' },
  ];

  return (
    <section className="w-full py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-borderLight/30">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-heading text-4xl text-primaryText">Curated Library</h2>
          <p className="text-secondaryText mt-2 font-light text-lg">Extended prose for the quiet mind.</p>
        </div>
        <Link to="/ebooks" className="hidden md:block text-sm uppercase tracking-widest text-bronze border-b border-transparent hover:border-bronze transition-all pb-1">
          Explore All Books →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBooks.map((book, index) => (
          <motion.div 
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BookCard book={book} />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <Link to="/ebooks" className="text-sm uppercase tracking-widest text-bronze border-b border-transparent hover:border-bronze transition-all pb-1">
          Explore All Books →
        </Link>
      </div>
    </section>
  );
}