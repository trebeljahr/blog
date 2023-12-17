import matter from "gray-matter";
import { sortedNewsletters } from "./sortedNewsletters.js";
import { sluggify } from "../lib/sluggify.js";
import { readFile } from "fs/promises";
import path from "path";

export async function generateRedirects() {
  const redirects = await Promise.all(
    sortedNewsletters.map(async (newsletter) => {
      const number = newsletter.replace(".md", "");
      const mdFileRaw = await readFile(
        path.join(
          process.cwd(),
          "src",
          "content",
          "newsletters",
          `${number}.md`
        ),
        "utf-8"
      );

      const { data } = matter(mdFileRaw);

      const slugTitle = sluggify(data.title);

      return {
        source: `/newsletters/${newsletter.replace(".md", "")}`,
        destination: `/newsletters/${slugTitle}`,
        permanent: true,
      };
    })
  );

  // console.log(redirects);

  return redirects;
}
