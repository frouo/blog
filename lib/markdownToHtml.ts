// import remark from "remark";
import html from "remark-html";
// @ts-ignore
import highlight from "remark-highlight.js";
import unified from "unified";
import markdownParse from "remark-parse";
import externalLinks from "remark-external-links";
// @ts-ignore
import mermaid from "remark-mermaid";
import path from "path";

export default async function markdownToHtml(
  markdown: string,
  assetPath: string
) {
  const result = await unified()
    .use(mermaid, { simple: false, imageDir: assetPath })
    .use(externalLinks, { target: "_blank" })
    .use(markdownParse)
    .use(highlight, { exclude: "mermaid" })
    .use(html)
    .process({
      contents: markdown,
      data: { destinationDir: path.join(process.cwd(), "public") },
    });

  return result.toString();
}
