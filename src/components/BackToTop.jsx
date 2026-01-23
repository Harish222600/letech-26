import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className="fixed right-4 bottom-8 z-[9000] w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/30 hover:shadow-neon-purple/40 focus:outline-none"
      aria-label="Back to top"
    >
      <HiArrowUp className="mx-auto" size={22} />
    </motion.button>
  );
};

export default BackToTop;
