import { motion } from "framer-motion";
import { fadeInUp } from "src/animations";

const PageTransition = ({ children, className }) => {
  return (
    <motion.section
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
};
export default PageTransition;
