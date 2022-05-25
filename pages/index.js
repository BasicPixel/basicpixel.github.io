import { motion } from "framer-motion";

import CustomLink from "components/common/CustomLink";
import PageTransition from "components/common/PageTransition";
import data from "public/en.json";
import { fadeInUp } from "src/animations";

export default function Home() {
  return (
    <PageTransition className="flex flex-col items-center justify-center h-full max-w-3xl gap-4 p-8 mx-auto">
      <motion.h1
        className="text-5xl font-bold text-center md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-gradient bg-nord-gradient selection:bg-opacity-40"
        id="headline"
      >
        {data.home.heading}
      </motion.h1>

      <motion.p
        className="font-sans text-lg text-center lg:text-xl 2xl:text-2xl text-secondary"
        initial={"initial"}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        exit={"exit"}
        variants={fadeInUp}
      >
        {data.about}
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-4 text-lg md:text-xl lg:gap-6 xl:gap-8 lg:text-2xl 2xl:text-4xl dark:text-nord8"
        initial={"initial"}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        exit={"exit"}
        variants={fadeInUp}
      >
        <CustomLink href="/projects">{data.navbar.projects}</CustomLink>
        <CustomLink href="/blog">{data.navbar.blog}</CustomLink>
      </motion.div>
    </PageTransition>
  );
}
