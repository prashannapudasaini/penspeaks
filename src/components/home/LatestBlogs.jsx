import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from '../blog/BlogCard';

export default function LatestBlogs() {
  const latestBlogs = [
    { id: 1, title: 'The Architecture of Solitude in Modern Literature', category: 'Philosophy', date: 'Oct 12', readTime: '6 min' },
    { id: 2, title: 'Echoes of the Modern Muse', category: 'Poetry', date: 'Oct 08', readTime: '3 min' },
    { id: 3, title: 'Rethinking Digital Minimalism', category: 'Society', date: 'Oct 01', readTime: '8 min' },
  ];

  return (
    <section className="w-full py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-primaryBg border-t border-borderLight/30">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-heading text-4xl text-primaryText">The Editorial</h2>
          <p className="text-secondaryText mt-2 font-light text-lg">Recent thoughts and essays.</p>
        </div>
        <Link to="/blog" className="hidden md:block text-sm uppercase tracking-widest text-bronze border-b border-transparent hover:border-bronze transition-all pb-1">
          Read All Entries →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {latestBlogs.map((blog, index) => (
          <motion.div 
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link to="/blog" className="text-sm uppercase tracking-widest text-bronze border-b border-transparent hover:border-bronze transition-all pb-1">
          Read All Entries →
        </Link>
      </div>
    </section>
  );
}