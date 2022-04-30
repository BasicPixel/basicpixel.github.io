import { useRouter } from "next/router";

import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";
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
            <SocialLink
              label="Telegram link"
              iconSize="2xl"
              href={data.links.telegram}
            >
              <FaTelegramPlane />
            </SocialLink>
            <SocialLink
              label="Twitter link"
              iconSize="2xl"
              href={data.links.twitter}
            >
              <FiTwitter />
            </SocialLink>
            <SocialLink
              label="GitHub link"
              iconSize="2xl"
              href={data.links.github}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              label="Send mail"
              iconSize="2xl"
              href={data.links.email}
            >
              <FiMail />
            </SocialLink>
          </ul>
        </div>
      )}

      <p className="px-4">
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
      </p>
    </footer>
  );
};
export default Footer;
