import { Client } from "@notionhq/client";

import PageTransition from "components/common/PageTransition";
import PostCard from "components/blog/PostCard";
import CardGrid from "components/common/CardGrid";
import CtaButton from "components/common/CtaButton";
import { blogPageId, notionBlogLink } from "src/constants";

const BlogPage = ({ posts }) => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="m-0 text-4xl">Blog</h1>
          <CtaButton href={notionBlogLink}>Open in Notion</CtaButton>
        </div>

        <CardGrid>
          {posts.map((post, index) => {
            return (
              <PostCard key={post} post={post} transitionDelay={index * 0.1} />
            );
          })}
        </CardGrid>
      </div>
    </PageTransition>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: blogPageId,
  });

  // Get list of posts, by filtering children blocks to only those that are pages
  const posts = data.results
    .filter((result) => result.type === "child_page")
    .map((result) => result.child_page.title);

  return { props: { posts } };
};

export default BlogPage;
