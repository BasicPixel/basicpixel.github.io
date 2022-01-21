import {
  AtSign,
  Heart,
  MessageCircle,
  Twitter,
  PenTool,
  GitHub,
} from "react-feather";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home({ data }) {
  console.log(data);

  return (
    <div className="w-screen">
      <Navbar data={data} />

      <div className="container p-4 mx-auto xl:w-1/2 md:w-2/3 sm:w-screen">
        {/* Home / Header */}
        <main
          id="home"
          className="flex flex-col items-center justify-center xl:flex-row xl:mb-10 max-h-screen min-h-[85vh] max-w-screen"
        >
          <h1 className="px-16 mb-8 text-5xl font-bold lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40">
            {data.home.heading}
          </h1>
          <div className="flex items-center justify-center gap-2 px-24 text-xl xl:text-2xl xl:gap-6 xl:flex-col xs:flex-col sm:flex-row 2xl:text-4xl dark:text-nord8">
            <a
              href="#about"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.about}
            </a>{" "}
            <span className="lg:hidden hidden sm:block">&middot;</span>{" "}
            <a
              href="#projects"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.projects}
            </a>{" "}
            <span className="lg:hidden hidden sm:block">&middot;</span>{" "}
            <a
              href="#connect"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.connect}
            </a>
          </div>
        </main>

        {/* About */}
        <section id="about">
          <h1 className="text-4xl">About Me</h1>
          {data.about.body.map((paragraph, index) => (
            <p key={index}>{paragraph.content}</p>
          ))}
        </section>

        {/* Projects */}
        <section id="projects">
          <h1 className="text-4xl">Projects</h1>
          <div className="flex justify-between flex-wrap gap-2">
            {data.projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="mt-8">
          <h1 className="text-4xl">{data.connect.title}</h1>
          <p>{data.connect.info}</p>
          <ul>
            <li className="my-3">
              <AtSign className="inline mr-4" />
              {data.connect.email}
            </li>
            <li className="my-3">
              <MessageCircle className="inline mr-4" />
              <a
                href={data.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.connect.telegram}
              </a>
            </li>
            <li className="my-3">
              <Twitter className="inline mr-4" />
              <a
                href={data.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.connect.twitter}
              </a>
            </li>
            <li className="my-3">
              <PenTool className="inline mr-4" />
              <a
                href={data.links.dev}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.connect.blog}
              </a>
            </li>
            <li className="my-3">
              <GitHub className="inline mr-4" />
              <a
                href={data.links.github}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.connect.github}
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center border-t border-nord3 border-opacity-30">
          {data.footer.body[0]}
          <a
            href="https://www.nordtheme.com/"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Nord <Heart className="inline" />
          </a>
          {data.footer.body[1]}{" "}
          <a
            href={data.links.repo}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </footer>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/en.json`);
  const data = await req.json();

  return {
    props: { data: data },
  };
}
