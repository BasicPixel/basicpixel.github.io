import { Client } from "@notionhq/client";
import NotionExporter from "notion-exporter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import slugify from "slugify";

import PageTransition from "components/common/PageTransition";
import { blogPageId } from "src/constants";
import CtaButton from "components/common/CtaButton";

const PostPage = ({ post }) => {
  return (
    <PageTransition>
      <div className="flex flex-col max-w-xl gap-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl">{post.title}</h1>
          <CtaButton href={post.url}>View in Notion</CtaButton>
        </div>
        <ul>
          <li>
            <span className="text-secondary">Posted:</span>{" "}
            {new Date(post.created_at).toDateString()}
          </li>
        </ul>
        <article className="prose dark:prose-invert">
          {/* Render Github-flavored markdown */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {
              // Display content after (not including) the title
              post.content.split(`# ${post.title}\n\n`)[1]
            }
          </ReactMarkdown>
        </article>
      </div>
    </PageTransition>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
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

  // Get the list of blog pages from notion
  const data = await notion.blocks.children.list({
    block_id: blogPageId,
  });

  // Get the requested page id from the slug
  const id = data.results.find((result) => {
    if (result.type === "child_page") {
      const { title } = result.child_page;
      const resultSlug = slugify(title).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  })?.id;

  // Get page data from notion
  const pageData = await notion.pages.retrieve({ page_id: id });

  // Notion token for getting a markdown export
  const token = process.env.NOTION_TOKEN_V2;

  let post = {
    url: pageData.url,
    title: pageData.properties.title.title[0].text.content,
    created_at: pageData.created_time,
    page: pageData,
    content: "",
  };

  try {
    // Get a markdown export of the blog page from notion for easier post display
    post.content = await new NotionExporter(token).getMdString(id);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      post,
    },
  };
};
