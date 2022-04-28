import data from "public/en.json";

const Footer = () => {
  return (
    <footer className="py-4 font-mono text-center border-t border-nord3 border-opacity-40">
      {data.footer.body[0]}
      <a
        href="https://www.nordtheme.com/"
        rel="noreferrer"
        target="_blank"
        className="link"
      >
        Nord
      </a>
      {data.footer.body[1]} (
      <a
        href={data.links.repo}
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Source code
      </a>
      )
    </footer>
  );
};
export default Footer;
