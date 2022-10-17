import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkToc from "remark-toc";
import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";

import remarkMath from "remark-math";

const withMDX = nextMDX({
  options: {
    extension: /\.mdx$/,
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkToc,
      remarkMath,
    ],
    rehypePlugins: [rehypeHighlight, rehypeMathjax],
  },
});

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
