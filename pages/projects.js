import ProjectCard from "components/ProjectCard";
import data from "public/en.json";

const ProjectsPage = () => {
  return (
    <section id="projects">
      <h1 className="text-4xl">Projects</h1>
      <div className="flex flex-wrap justify-between gap-2">
        {data.projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <p>
        ... and more on my{" "}
        <a
          href={data.links.github}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          {data.connect.github}
        </a>
      </p>
    </section>
  );
};

export default ProjectsPage;
