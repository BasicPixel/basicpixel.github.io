import { Client } from "@notionhq/client";
import NotionExporter from "notion-exporter";
import slugify from "slugify";

import PageTransition from "components/common/PageTransition";

const PostPage = ({ post }) => {
  return (
    <PageTransition>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </PageTransition>
  );
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const paths = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      paths.push({
        params: {
          slug: slugify(result.child_page.title).toLowerCase(),
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const page = data.results.find((result) => {
    if (result.type === "child_page") {
      const { title } = result.child_page;
      const resultSlug = slugify(title).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  // fetch details for post
  const token = process.env.NOTION_TOKEN_V2;

  let post = "";

  try {
    post = await new NotionExporter(token).getMdString(page.id);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
