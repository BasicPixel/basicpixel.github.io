import Link from "next/link";

const NavbarItem = ({ href, children, title, targetBlank = false }) => {
  return (
    <li
      className={
        "p-1 text-2xl duration-300 rounded dark:hover:bg-nord3 hover:bg-nord6 hover:transition-all cursor-pointer"
      }
    >
      <Link href={href} passHref>
        <a
          target={targetBlank ? "_blank" : "_self"}
          rel={targetBlank ? "noreferrer" : null}
          title={title}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavbarItem;
