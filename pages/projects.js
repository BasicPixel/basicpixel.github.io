import PageTransition from "components/common/PageTransition";
import ProjectCard from "components/projects/ProjectCard";
import data from "public/en.json";
import CardGrid from "components/common/CardGrid";
import CtaButton from "components/common/CtaButton";

const ProjectsPage = ({ projects }) => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-6 py-4">
        <h1 className="m-0 text-4xl">Some things I've built</h1>
        <CardGrid>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} delay={index * 0.1} />
          ))}
        </CardGrid>

        <div className="text-center">
          <CtaButton href={data.links.github}>More on GitHub</CtaButton>
        </div>
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
            Authorization: `token ${process.env.API_OAUTH_TOKEN}`,
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
