import { motion } from 'framer-motion';
import BlogGrid from '../components/blog/BlogGrid';
import { CATEGORIES } from '../utils/constants';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h1 className="font-heading text-5xl text-primaryText mb-4">The Editorial</h1>
          <p className="text-secondaryText font-light text-lg">Essays, poetry, and modern thought.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map(cat => (
            <button key={cat} className="text-sm tracking-widest uppercase text-secondaryText hover:text-bronze transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </div>
      <BlogGrid />
    </div>
  );
}