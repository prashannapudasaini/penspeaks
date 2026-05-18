import { motion } from 'framer-motion';

export default function QuoteReveal({ text }) {
  return (
    <section className="w-full py-24 bg-secondaryBg px-6 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl text-primaryText italic leading-relaxed text-balance">
          "{text}"
        </h2>
        <div className="mt-8 w-12 h-[1px] bg-bronze mx-auto"></div>
      </motion.div>
    </section>
  );
}