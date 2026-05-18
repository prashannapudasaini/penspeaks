import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        <div className="text-center space-y-6">
          <h1 className="font-heading text-5xl md:text-6xl text-primaryText">Our Story</h1>
          <p className="text-secondaryText font-light text-lg max-w-2xl mx-auto leading-relaxed">
            The Pen Speaks was born from a singular belief: in a world of fleeting noise, deep, intentional storytelling is our most vital anchor.
          </p>
        </div>

        <div className="w-full h-px bg-borderLight/50"></div>

        <div className="space-y-8 font-body font-light text-secondaryText leading-relaxed md:text-lg">
          <p>
            We are a digital sanctuary designed for the modern reader and thinker. Our platform strips away the neon distractions of the internet to provide a calm, minimalist environment where ideas can breathe.
          </p>
          <h2 className="font-heading text-3xl text-primaryText mt-12 mb-6">The Philosophy</h2>
          <p>
            Every article, poem, and book featured here is curated with the utmost respect for the reader's time. We believe that literature should not just entertain, but challenge, comfort, and elevate. Our aesthetic—muted grays, soft shadows, and classic typography—is an intentional choice to let the words themselves provide the color.
          </p>
          <p>
            Join us on our journey across our digital library, our editorial blogs, and our visual explorations on YouTube.
          </p>
        </div>
      </motion.div>
    </div>
  );
}