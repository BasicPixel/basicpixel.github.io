import data from "public/en.json";

const AboutPage = () => {
  return (
    <section id="about">
      {data.about.body.map((paragraph, index) => (
        <p key={index}>{paragraph.content}</p>
      ))}
    </section>
  );
};
export default AboutPage;
