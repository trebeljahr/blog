import { UtteranceComments } from "../components/comments";
import Layout from "../components/layout";
import PostBody from "../components/post-body";
import { ToTopButton } from "../components/ToTopButton";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { NewsletterForm } from "../components/newsletter-signup";

export default function Now({ content }: { content: string }) {
  return (
    <Layout pageTitle="Now">
      <PostBody content={content} />
      <ToTopButton />
      <NewsletterForm />
      <UtteranceComments />{" "}
    </Layout>
  );
}

export async function getStaticProps() {
  const todoSrc = join(process.cwd(), "page-content", "now.md");
  const fileContents = await fs.readFile(todoSrc, "utf-8");
  return {
    props: {
      content: matter(fileContents).content || "",
    },
  };
}
