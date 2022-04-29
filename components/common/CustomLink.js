import Link from "next/link";

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="p-1 link-underline">{children}</a>
    </Link>
  );
};
export default CustomLink;
