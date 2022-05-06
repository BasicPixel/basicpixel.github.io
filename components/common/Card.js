import { motion } from "framer-motion";

import { fadeInUp } from "src/animations";

const Card = ({ children, transitionDelay }) => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full gap-2 p-4 text-lg border-2 border-opacity-50 rounded shadow-lg border-nord3 dark:border-opacity-100"
      initial={"initial"}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: transitionDelay,
        },
      }}
      exit={"exit"}
      variants={fadeInUp}
      whileHover={{
        scale: 1.02,
      }}
    >
      {children}
    </motion.div>
  );
};
export default Card;
