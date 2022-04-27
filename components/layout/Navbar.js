import { GitHub, Info, Code, Mail, Type } from "react-feather";

import NavbarItem from "./NavbarItem";
import data from "public/en.json";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full p-3 overflow-hidden border-b md:px-16 border-opacity-40 backdrop-blur-md border-nord3">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Navbar title */}
        <h1 className="text-2xl dark:text-nord8 text-nord3">
          <a href="/">{data.navbar.name}</a>
        </h1>

        {/* Primary nav */}
        <ul className="flex items-center gap-2 px-4 justify-self-end">
          <NavbarItem title="About" href={"about"}>
            <Info />
          </NavbarItem>
          <NavbarItem title="Projects" href={"projects"}>
            <Code />
          </NavbarItem>
          <NavbarItem title="Connect" href={"connect"}>
            <Mail />
          </NavbarItem>
          <span className="opacity-50 select-none">|</span>
          <NavbarItem
            href={data.links.dev}
            target={"_blank"}
            rel={"noreferrer"}
            title="Blog"
          >
            <Type />
          </NavbarItem>
          <NavbarItem
            href={data.links.github}
            target={"_blank"}
            rel={"noreferrer"}
            title="GitHub"
          >
            <GitHub />
          </NavbarItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
