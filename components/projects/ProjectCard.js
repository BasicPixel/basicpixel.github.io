import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full gap-2 p-4 font-mono text-lg border-2 border-opacity-50 rounded shadow-lg border-nord3 dark:border-opacity-100"
      initial={{
        y: 50,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between">
        <h2 className="font-sans text-2xl">{project.name} </h2>
        <span className="flex flex-row items-center gap-2 text-2xl">
          <a
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:text-nord8"
          >
            <FiExternalLink />
          </a>
          <a
            href={project.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`link to ${project.name} project`}
            className="transition-all duration-300 hover:text-nord8"
          >
            <FiGithub />
          </a>
        </span>
      </div>
      <p className="text-secondary">{project.description}</p>
      <div className="text-secondary">{project.language}</div>
    </motion.div>
  );
};

export default ProjectCard;
