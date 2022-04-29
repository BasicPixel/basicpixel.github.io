const SocialLink = ({ href, children, targetSelf, iconSize = "2xl" }) => {
  return (
    <a
      href={href}
      target={targetSelf ? "_self" : "_blank"}
      rel="noreferrer"
      className="p-2 transition-all duration-200 rounded hover:bg-nord2"
    >
      <button className={`text-${iconSize}`}>{children}</button>
    </a>
  );
};

export default SocialLink;
