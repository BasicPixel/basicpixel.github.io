import { motion } from "framer-motion";

const CtaButton = ({ href, children }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        <motion.button
          className="px-4 py-2 text-lg rounded text-nord3 outline-nord3 dark:text-nord8 outline outline-1 dark:outline-nord8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.button>
      </a>
    </div>
  );
};
export default CtaButton;
