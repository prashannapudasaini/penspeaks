import { motion, useScroll } from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-bronze origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}