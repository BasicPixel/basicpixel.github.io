import data from "public/en.json";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-full xl:flex-row"
    >
      <h1 className="px-16 mb-8 text-5xl font-bold text-center lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40 xl:text-left">
        {data.home.heading}
      </h1>
      <div className="flex items-center justify-center gap-4 px-24 text-xl xl:text-2xl xl:gap-6 xl:flex-col xs:flex-col sm:flex-row 2xl:text-4xl dark:text-nord8">
        <a href="about" className="p-1 link-underline">
          {data.navbar.about}
        </a>{" "}
        <span className="hidden lg:hidden sm:block">&middot;</span>{" "}
        <a href="projects" className="p-1 link-underline">
          {data.navbar.projects}
        </a>{" "}
        <span className="hidden lg:hidden sm:block">&middot;</span>{" "}
        <a href="connect" className="p-1 link-underline">
          {data.navbar.connect}
        </a>
      </div>
    </section>
  );
}
