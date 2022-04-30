import CustomLink from "components/common/CustomLink";
import PageTransition from "components/common/PageTransition";
import data from "public/en.json";

export default function Home() {
  return (
    <PageTransition className="flex flex-col items-center justify-center h-full max-w-3xl gap-4 mx-auto">
      <h1 className="mb-8 font-mono text-4xl font-bold text-center md:text-5xl lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40">
        {data.home.heading}
      </h1>

      <p className="text-lg text-center lg:text-xl text-secondary">
        {data.about}
      </p>

      <div className="flex items-center justify-center gap-4 text-lg md:text-xl lg:gap-6 xl:gap-8 lg:text-2xl 2xl:text-5xl dark:text-nord8">
        <CustomLink href="/projects">{data.navbar.projects}</CustomLink>
        <CustomLink href="/blog">{data.navbar.blog}</CustomLink>
      </div>
    </PageTransition>
  );
}
