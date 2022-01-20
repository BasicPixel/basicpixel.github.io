const NavbarItem = ({ href, content, className, target, rel }) => {
  return (
    <a href={href} target={target} rel={rel}>
      <li
        className={
          "p-2 duration-300 rounded dark:hover:bg-nord3 hover:bg-nord6 hover:transition-all " +
          className
        }
      >
        {content}
      </li>
    </a>
  );
};

export default NavbarItem;
