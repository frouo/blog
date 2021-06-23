// import remark from "remark";
import html from "remark-html";
// @ts-ignore
import highlight from "remark-highlight.js";
import unified from "unified";
import markdownParse from "remark-parse";
import externalLinks from "remark-external-links";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(externalLinks, { target: "_blank" })
    .use(markdownParse)
    .use(highlight)
    .use(html)
    .process(markdown);
  return result.toString();
}
