export const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};
