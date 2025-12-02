import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      // THE "POP/SLIDE" ANIMATION
      initial={{ opacity: 0, y: 20, scale: 0.98 }} // Starts slightly lower and smaller
      animate={{ opacity: 1, y: 0, scale: 1 }}     // Slides up to normal
      exit={{ opacity: 0, y: -20, scale: 0.98 }}   // Fades out upward
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth timing
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;