import slugify from "slugify";
import { Client } from "@notionhq/client";
import { getServerSideSitemap } from "next-sitemap";

import { blogPageId } from "src/constants";

export const getServerSideProps = async (ctx) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: blogPageId,
  });

  // Set paths to the list of child pages of the parent blog page
  const paths = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      paths.push({
        loc: `https://pixel.is-a.dev/blog/${slugify(
          result.child_page.title
        ).toLowerCase()}`,
      });
    }
  });

  return getServerSideSitemap(ctx, paths);
};

export default function ServerSitemap() {}
