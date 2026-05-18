import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReadingProgress from '../components/blog/ReadingProgress';

export default function BlogDetail() {
  return (
    <article className="relative w-full pb-24">
      <ReadingProgress />
      
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs uppercase tracking-widest text-bronze mb-6 block">Philosophy</span>
          <h1 className="font-heading text-4xl md:text-6xl text-primaryText leading-tight mb-8">
            The Architecture of Solitude in Modern Literature
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-secondaryText font-light">
            <span>By The Pen Speaks</span>
            <span>•</span>
            <span>Oct 12, 2023</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </motion.div>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full max-w-6xl mx-auto h-[50vh] bg-borderLight mb-16 px-6">
         <div className="w-full h-full bg-secondaryBg object-cover rounded-sm shadow-sm"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 font-body font-light text-lg text-secondaryText leading-[2.2] space-y-8">
        <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-primaryText first-letter:mr-3 first-letter:float-left">
          Solitude, often mistaken for loneliness, is the very canvas upon which the greatest literary minds have painted their masterpieces. In an era defined by constant connectivity, the quiet corners of our minds have become endangered spaces.
        </p>
        <p>
          Authors of the 21st century face a unique challenge: how to articulate the profound stillness required for self-discovery when the world outside demands constant interaction.
        </p>
        <h2 className="font-heading text-3xl text-primaryText mt-16 mb-6">The Search for Quiet</h2>
        <p>
          We see this reflected in contemporary essays where the protagonist's main conflict is no longer man versus nature, but man versus noise.
        </p>
        
        <div className="mt-16 pt-8 border-t border-borderLight/50 flex justify-between items-center">
          <Link to="/blog" className="text-sm tracking-widest uppercase text-bronze hover:text-primaryText transition-colors">
            ← Back to Editorial
          </Link>
          <div className="flex space-x-4">
             {/* Social Share Icons would go here */}
             <span className="text-xs uppercase tracking-widest text-softAccent">Share</span>
          </div>
        </div>
      </div>
    </article>
  );
}