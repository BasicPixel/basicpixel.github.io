import { motion } from "framer-motion";

const SocialLink = ({
  href,
  children,
  targetSelf,
  iconSize = "2xl",
  label,
}) => {
  return (
    <motion.li whileHover={{ scale: 1.2 }}>
      <a
        href={href}
        target={targetSelf ? "_self" : "_blank"}
        rel="noreferrer"
        className={
          "p-2 rounded transition-all duration-300 hover:text-nord10 dark:hover:text-nord8"
        }
        title={label}
      >
        <button className={`text-${iconSize} `} aria-label={label}>
          {children}
        </button>
      </a>
    </motion.li>
  );
};

export default SocialLink;
