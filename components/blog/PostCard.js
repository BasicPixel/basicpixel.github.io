import Link from "next/link";

import slugify from "slugify";

import Card from "components/common/Card";

const PostCard = ({ post, transitionDelay }) => {
  const slug = slugify(post).toLowerCase();

  return (
    <Card transitionDelay={transitionDelay}>
      <Link href={`/blog/${slug}`}>
        <a className="block text-xl">{post}</a>
      </Link>
    </Card>
  );
};
export default PostCard;
