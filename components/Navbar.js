import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Twitter, GitHub, Menu } from "react-feather";
import NavbarItem from "./NavbarItem";

const Navbar = ({ data }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className="sticky top-0 w-full p-3 border-b border-opacity-40 backdrop-blur-md border-nord3">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Navbar title */}
        <h1 className="text-2xl dark:text-nord8 text-nord3">
          <a href="#home">{data.navbar.name}</a>
        </h1>

        {/* Mobile expand button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navbar"
        >
          <Menu />
        </button>

        {/* Primary nav */}
        <ul className="items-center hidden gap-4 px-4 md:flex justify-self-end">
          <NavbarItem href={"#about"} content={data.navbar.about} />
          <NavbarItem href={"#projects"} content={data.navbar.projects} />
          <NavbarItem href={"#contact"} content={data.navbar.contact} />
          <li className="select-none">|</li>
          <NavbarItem
            href={data.links.dev}
            content={"Blog"}
            target={"_blank"}
            rel={"noreferrer"}
          />
          <NavbarItem
            href={data.links.twitter}
            content={<Twitter />}
            target={"_blank"}
            rel={"noreferrer"}
          />
          <NavbarItem
            href={data.links.github}
            content={<GitHub />}
            target={"_blank"}
            rel={"noreferrer"}
          />
        </ul>
      </div>

      {/* Mobile menu */}
      <Transition
        show={showMobileMenu}
        enter="transition-transform ease-out duration-500 origin-top transform"
        enterFrom="transform scale-y-0 h-0"
        enterTo="transform scale-y-100 h-auto"
        leave="transition-transform ease-in duration-200"
        leaveFrom="transform scale-y-100 h-auto"
        leaveTo="transform scale-y-0 h-0"
      >
        <ul className="mt-2" onClick={toggleMobileMenu}>
          <NavbarItem href={"#about"} content={data.navbar.about} />
          <NavbarItem href={"#projects"} content={data.navbar.projects} />
          <NavbarItem href={"#contact"} content={data.navbar.contact} />
          <li className="my-2 border-t border-nord3 border-opacity-30" />
          <NavbarItem
            href={data.links.dev}
            content={"Blog"}
            target={"_blank"}
            rel={"noreferrer"}
          />
          <NavbarItem
            href={data.links.twitter}
            content={<Twitter />}
            target={"_blank"}
            rel={"noreferrer"}
          />
          <NavbarItem
            href={data.links.github}
            content={<GitHub />}
            target={"_blank"}
            rel={"noreferrer"}
          />
        </ul>
      </Transition>
    </nav>
  );
};

export default Navbar;
