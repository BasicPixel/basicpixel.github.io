const SocialLink = ({
  href,
  children,
  targetSelf,
  iconSize = "2xl",
  label,
}) => {
  return (
    <a
      href={href}
      target={targetSelf ? "_self" : "_blank"}
      rel="noreferrer"
      className={"p-2 rounded"}
      aria-label={label}
      title={label}
    >
      <button
        className={`text-${iconSize} transition-all duration-300 hover:text-nord10 dark:hover:text-nord8`}
      >
        {children}
      </button>
    </a>
  );
};

export default SocialLink;
