import { motion } from "framer-motion";

import PageTransition from "components/common/PageTransition";
import ProjectCard from "components/projects/ProjectCard";
import data from "public/en.json";

const ProjectsPage = ({ projects }) => {
  return (
    <PageTransition>
      <h1 className="text-4xl">Some things I've built</h1>
      <motion.div
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        animate={{ transition: { staggerChildren: 0.2 } }}
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </motion.div>

      <div className="mt-6 mb-2 text-center">
        <a href={data.links.github} target="_blank" rel="noreferrer">
          <button className="px-4 py-2 text-lg rounded text-nord3 outline-nord3 dark:text-nord8 outline outline-1 dark:outline-nord8">
            More on GitHub
          </button>
        </a>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  let projects = [];

  for (let i in data.projects) {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${data.projects[i]}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_OAUTH_TOKEN}`,
          },
        }
      );

      const project = await response.json();

      projects.push(project);
    } catch (err) {
      console.error(err);
    }
  }

  return { props: { projects } };
}
