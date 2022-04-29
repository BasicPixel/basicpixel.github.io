import { FiTwitter, FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import data from "public/en.json";
import SocialLink from "components/common/SocialLink";
import PageTransition from "components/common/PageTransition";

const ConnectPage = () => {
  return (
    <PageTransition className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="m-0 text-4xl">{data.connect.title}</h1>
      <p className="text-xl text-center">{data.connect.email}</p>
      <ul className="flex flex-row justify-between gap-6 p-0">
        <SocialLink href={data.links.telegram}>
          <FaTelegramPlane />
        </SocialLink>
        <SocialLink href={data.links.twitter}>
          <FiTwitter />
        </SocialLink>
        <SocialLink href={data.links.github}>
          <FiGithub />
        </SocialLink>
      </ul>
    </PageTransition>
  );
};
export default ConnectPage;
