import { Client } from "@notionhq/client";

import PageTransition from "components/common/PageTransition";

const BlogPage = ({ posts }) => {
  return (
    <PageTransition>
      <h1 className="text-4xl">Blog</h1>
      <p className="text-xl text-secondary">Coming soon...</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </PageTransition>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const posts = [];

  data.results
    .filter((result) => result.type === "child_page")
    .forEach((result) => posts.push(result.child_page.title));

  return { props: { posts } };
};

export default BlogPage;
