import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group cursor-pointer flex flex-col">
      <Link to={`/blog/${blog.id}`}>
        <div className="w-full aspect-video bg-borderLight mb-6 overflow-hidden rounded-sm relative">
          <div className="absolute inset-0 bg-primaryText/5 group-hover:bg-transparent transition-all duration-500"></div>
        </div>
        <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-softAccent mb-3">
          <span className="text-bronze">{blog.category}</span>
          <span>•</span>
          <span>{blog.readTime} read</span>
        </div>
        <h3 className="font-heading text-2xl text-primaryText group-hover:text-bronze transition-colors mb-3 leading-snug">
          {blog.title}
        </h3>
        <p className="text-secondaryText font-light text-sm line-clamp-2">
          An exploration into the deeper meanings behind our everyday interactions with literature and art.
        </p>
      </Link>
    </motion.div>
  );
}