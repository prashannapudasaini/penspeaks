import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header Section - Full Width */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-primaryText">Our Story</h1>
          <p className="text-secondaryText font-light text-xl max-w-3xl mx-auto leading-relaxed">
            The Pen Speaks was born from a singular belief: in a world of fleeting noise, deep, intentional storytelling is our most vital anchor.
          </p>
        </div>

        <div className="w-full h-px bg-borderLight/50 max-w-6xl mx-auto"></div>

        {/* Featured Writer Section - Image Left, Text Right, Full Width */}
        <div className="w-full bg-backgroundLight/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image - Left Side */}
            <div className="flex justify-center md:justify-end">
              <img 
                src="/pen.jpg" 
                alt="Prakash Pant- Poet & Writer" 
                className="w-full max-w-md rounded-2xl shadow-xl object-cover aspect-square border-2 border-borderLight/30"
              />
            </div>
            
            {/* Text - Right Side */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
              
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-primaryText">Prakash Pant</h2>
              <p className="text-primary text-lg md:text-xl font-medium">Poet & Writer</p>
              <div className="space-y-4 text-secondaryText font-light leading-relaxed text-base md:text-lg">
                <p>
                  Prakash Pant is a voice that echoes through the quiet corners of the soul. His poetry—a delicate balance of raw emotion and refined craft—explores themes of identity, longing, and the human condition in ways that resonate deeply with readers across generations.
                </p>
                <p>
                  With words that bleed honesty and metaphors that linger long after the page is turned, Prakash has established himself as one of the most compelling literary voices of his generation. His work transcends boundaries, touching hearts across cultures and continents.
                </p>
                <p>
                
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section - Horizontally Extended */}
        <div className="space-y-8 font-body font-light text-secondaryText leading-relaxed md:text-lg max-w-6xl mx-auto">
          <p className="text-xl">
            We are a digital sanctuary designed for the modern reader and thinker. Our platform strips away the neon distractions of the internet to provide a calm, minimalist environment where ideas can breathe.
          </p>
          
          <h2 className="font-heading text-4xl md:text-5xl text-primaryText mt-12 mb-6">The Philosophy</h2>
          
          <p className="text-lg">
            Every article, poem, and book featured here is curated with the utmost respect for the reader's time. We believe that literature should not just entertain, but challenge, comfort, and elevate. Our aesthetic—muted grays, soft shadows, and classic typography—is an intentional choice to let the words themselves provide the color and vibrancy that modern design often overshadows with noise and distraction.
    
            Join us on our journey across our digital library, our editorial blogs, and our visual explorations on YouTube. Whether you're a lifelong lover of literature or just beginning to discover the transformative power of words, The Pen Speaks welcomes you to a space where every sentence matters and every story finds its home.
          </p>
        </div>
      </motion.div>
    </div>
  );
}