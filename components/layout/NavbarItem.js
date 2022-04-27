const NavbarItem = ({ href, className, target, rel, children, title }) => {
  return (
    <a href={href} target={target} rel={rel} title={title}>
      <li
        className={
          "p-1 duration-300 rounded dark:hover:bg-nord3 hover:bg-nord6 hover:transition-all " +
          className
        }
      >
        {children}
      </li>
    </a>
  );
};

export default NavbarItem;
