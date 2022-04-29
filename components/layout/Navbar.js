import Link from "next/link";

import { FiGithub, FiInfo, FiCode, FiMail, FiFileText } from "react-icons/fi";

import NavbarItem from "./NavbarItem";
import data from "public/en.json";

const Navbar = () => {
  return (
    <nav className="sticky flex items-center top-0 w-full p-3 border-b md:px-16 border-opacity-40 backdrop-blur-md border-nord3 min-h-[4em]">
      {/* Flex container */}
      <div className="flex items-center justify-between w-full">
        {/* Navbar title */}
        <h1 className="text-2xl dark:text-nord8 text-nord3">
          <Link href="/">{data.navbar.name}</Link>
        </h1>

        {/* Primary nav */}
        <ul className="flex gap-2">
          <NavbarItem title="About" href={"/about"}>
            <FiInfo />
          </NavbarItem>
          <NavbarItem title="Projects" href={"/projects"}>
            <FiCode />
          </NavbarItem>
          <NavbarItem title="Connect" href={"/connect"}>
            <FiMail />
          </NavbarItem>
          <NavbarItem href={"/blog"} title="Blog">
            <FiFileText />
          </NavbarItem>
          <NavbarItem href={data.links.github} title="GitHub" targetBlank>
            <FiGithub />
          </NavbarItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
