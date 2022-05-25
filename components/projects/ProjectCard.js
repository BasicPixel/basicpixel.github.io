import { FiExternalLink, FiGithub } from "react-icons/fi";

import Card from "components/common/Card";

const ProjectCard = ({ project, delay }) => {
  const name =
    project.owner.login !== "BasicPixel" ? project.full_name : project.name;

  return (
    <Card transitionDelay={delay}>
      <div className="flex justify-between">
        <h2 className="text-2xl">{name}</h2>
        <span className="flex flex-row items-center gap-2 text-2xl">
          <a
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:text-nord8"
            aria-label={`${name} project homepage`}
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
    </Card>
  );
};

export default ProjectCard;
