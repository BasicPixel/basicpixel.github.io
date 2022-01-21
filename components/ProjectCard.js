import { ExternalLink, GitHub } from "react-feather";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded border-nord3 dark:border-opacity-100 border-opacity-50 p-4 w-full font-mono">
      <div className="flex justify-between">
        <h2 className="text-2xl dark:text-nord8 text-nord3">
          <a href={project.demo} target="_blank" rel="noreferrer">
            {project.name} <ExternalLink className="inline" />
          </a>
        </h2>
        <a href={project.repo} target="_blank" rel="noreferrer">
          <GitHub className="inline w-8 h-8" />
        </a>
      </div>
      <p className="text-md">{project.desc}</p>
      <div className="dark:text-nord4 text-nord3">
        Technologies: {project.stack}
      </div>
    </div>
  );
};

export default ProjectCard;
