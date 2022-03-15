import { AtSign, Heart, Send, Twitter, PenTool, GitHub } from "react-feather";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home({ data }) {
  return (
    <>
      <Navbar data={data} />

      <main className="container p-4 mx-auto xl:w-1/2 md:w-2/3 sm:w-screen">
        {/* Home / Header */}
        <section
          id="home"
          className="flex flex-col items-center justify-center py-4 border-b-2 border-opacity-50 border-nord3 xl:flex-row"
        >
          <h1 className="px-16 mb-8 text-5xl font-bold text-center lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40 xl:text-left">
            {data.home.heading}
          </h1>
          <div className="flex items-center justify-center gap-4 px-24 text-xl xl:text-2xl xl:gap-6 xl:flex-col xs:flex-col sm:flex-row 2xl:text-4xl dark:text-nord8">
            <a href="#about" className="p-1 link-underline">
              {data.navbar.about}
            </a>{" "}
            <span className="hidden lg:hidden sm:block">&middot;</span>{" "}
            <a href="#projects" className="p-1 link-underline">
              {data.navbar.projects}
            </a>{" "}
            <span className="hidden lg:hidden sm:block">&middot;</span>{" "}
            <a href="#connect" className="p-1 link-underline">
              {data.navbar.connect}
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about">
          {data.about.body.map((paragraph, index) => (
            <p key={index}>{paragraph.content}</p>
          ))}
        </section>

        {/* Projects */}
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

        {/* Connect */}
        <section id="connect" className="mt-8">
          <h1 className="text-4xl">{data.connect.title}</h1>
          <ul className="flex flex-col gap-4 p-0">
            <li>
              <AtSign className="inline mr-4" />
              {data.connect.email}
            </li>
            <li>
              <Send className="inline mr-4" />
              <a
                href={data.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.connect.telegram}
              </a>
            </li>
            <li>
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
            <li>
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
            <li>
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
        <footer className="py-4 font-mono text-center border-t border-nord3 border-opacity-30">
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
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch(
    `https://raw.githubusercontent.com/BasicPixel/basicpixel.github.io/main/public/en.json`
  );
  const data = await req.json();

  return {
    props: { data: data },
  };
}
