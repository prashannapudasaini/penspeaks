import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group flex flex-col h-full bg-card p-4 rounded-sm shadow-sm hover:shadow-elegant transition-all duration-500 border border-borderLight/30"
    >
      <div className="w-full aspect-[2/3] bg-primaryBg mb-6 relative overflow-hidden flex items-center justify-center rounded-sm">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-primaryBg/20 group-hover:bg-transparent transition-all duration-500"></div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center text-xs uppercase tracking-widest mb-3">
          <span className="text-bronze">{book.category}</span>
          <span className={`px-2 py-1 rounded-sm bg-primaryBg border border-borderLight/30 ${book.price === 'Free' ? 'text-bronze' : 'text-primaryText'}`}>
            {book.price}
          </span>
        </div>
        
        <h3 className="font-heading text-2xl text-primaryText group-hover:text-bronze transition-colors mb-2 leading-tight">
          {book.title}
        </h3>
        <p className="text-sm text-secondaryText font-light mb-6 flex-grow">
          {book.author}
        </p>

        <Link 
          to={`/reader/${book.id}`} 
          className="inline-block text-center w-full py-3 border border-borderLight text-primaryText text-sm tracking-widest uppercase hover:bg-bronze hover:text-primaryBg hover:border-bronze transition-all duration-300 rounded-sm"
        >
          Read Now
        </Link>
      </div>
    </motion.div>
  );
}