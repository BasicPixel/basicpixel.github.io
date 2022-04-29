import CustomLink from "components/common/CustomLink";
import PageTransition from "components/common/PageTransition";
import data from "public/en.json";

export default function Home() {
  return (
    <PageTransition className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="mb-8 font-mono text-4xl font-bold text-center md:text-5xl lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40">
        {data.home.heading}
      </h1>
      <div className="flex items-center justify-center gap-4 text-xl lg:gap-6 xl:gap-8 lg:text-2xl 2xl:text-5xl dark:text-nord8">
        <CustomLink href="/about">{data.navbar.about}</CustomLink>
        <CustomLink href="/projects">{data.navbar.projects}</CustomLink>
        <CustomLink href="/connect">{data.navbar.connect}</CustomLink>
        <CustomLink href="/blog">{data.navbar.blog}</CustomLink>
      </div>
    </PageTransition>
  );
}
