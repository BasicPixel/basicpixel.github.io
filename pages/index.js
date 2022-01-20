import { AtSign, Heart, MessageCircle, Twitter } from "react-feather";
import Navbar from "../components/Navbar";

export default function Home({ data }) {
  console.log(data);

  return (
    <div>
      <Navbar data={data} />

      <div className="container p-4 mx-auto">
        {/* Home */}
        <main
          id="home"
          className="flex flex-col items-center justify-center xl:pb-24 xl:flex-row"
        >
          <h1 className="px-16 mb-8 text-6xl font-bold lg:text-8xl 2xl:text-9xl text-gradient bg-nord-gradient selection:bg-opacity-40">
            {data.home.heading}
          </h1>
          <div className="flex items-center justify-center gap-2 px-24 text-2xl lg:gap-6 lg:flex-col 2xl:text-4xl dark:text-nord8">
            <a
              href="#about"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.about}
            </a>{" "}
            <span className="lg:hidden">&middot;</span>{" "}
            <a
              href="#projects"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.projects}
            </a>{" "}
            <span className="lg:hidden">&middot;</span>{" "}
            <a
              href="#contact"
              className="p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all"
            >
              {data.navbar.contact}
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
        </section>

        {/* Contact */}
        <section id="contact">
          <h1 className="text-4xl">Contact me</h1>
          <p>{data.contact.info}</p>
          <ul>
            <li className="my-2">
              <AtSign className="inline mr-4" />
              {data.contact.email}
            </li>
            <li className="my-2">
              <MessageCircle className="inline mr-4" />
              <a
                href={data.contact.tgLink}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.contact.telegram}
              </a>
            </li>
            <li className="my-2">
              <Twitter className="inline mr-4" />
              <a
                href={data.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {data.contact.twitter}
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="py-2 text-center border-t border-nord3 border-opacity-30">
          {data.footer.body[0]}
          <a
            href="https://www.nordtheme.com/"
            rel="noreferrer"
            target="_blank"
            className="text-nord10"
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
