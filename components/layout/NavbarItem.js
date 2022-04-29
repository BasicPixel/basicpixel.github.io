import Link from "next/link";

const NavbarItem = ({ href, children, title, targetBlank = false }) => {
  return (
    <Link href={href} passHref>
      <a
        target={targetBlank ? "_blank" : "_self"}
        rel={targetBlank ? "noreferrer" : null}
        title={title}
      >
        <li
          className={
            "p-1 text-2xl duration-300 rounded dark:hover:bg-nord3 hover:bg-nord6 hover:transition-all"
          }
        >
          {children}
        </li>
      </a>
    </Link>
  );
};

export default NavbarItem;
