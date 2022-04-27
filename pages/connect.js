import { AtSign, Send, Twitter, PenTool, GitHub } from "react-feather";

import data from "public/en.json";

const ConnectPage = () => {
  return (
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
  );
};
export default ConnectPage;
