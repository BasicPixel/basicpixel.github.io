import { useRouter } from "next/router";

import { FiTwitter, FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import SocialLink from "components/common/SocialLink";
import data from "public/en.json";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="flex flex-col gap-2 py-4 font-mono text-sm text-center border-t border-nord3 border-opacity-40">
      {router.asPath !== "/connect" && (
        <div>
          <ul className="flex flex-row justify-center gap-2 p-0">
            <SocialLink iconSize="2xl" href={data.links.telegram}>
              <FaTelegramPlane />
            </SocialLink>
            <SocialLink iconSize="2xl" href={data.links.twitter}>
              <FiTwitter />
            </SocialLink>
            <SocialLink iconSize="2xl" href={data.links.github}>
              <FiGithub />
            </SocialLink>
          </ul>
        </div>
      )}

      <div>
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
      </div>
    </footer>
  );
};
export default Footer;
