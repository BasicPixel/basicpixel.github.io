import PageTransition from "components/common/PageTransition";
// import { motion } from "framer-motion";
import data from "public/en.json";

const AboutPage = () => {
  return (
    <PageTransition className="flex flex-col justify-center h-full gap-4 px-4 text-2xl">
      <h1 className="m-0 text-4xl">About me</h1>

      {data.about.body.map((paragraph, index) => (
        <p key={index}>{paragraph.content}</p>
      ))}
    </PageTransition>
  );
};
export default AboutPage;
