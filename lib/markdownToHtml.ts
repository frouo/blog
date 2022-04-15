// import remark from "remark";
import html from "remark-html";
// @ts-ignore
import highlight from "remark-highlight.js";
import unified from "unified";
// @ts-ignore
import mermaid from "remark-mermaid";
import path from "path";

export default async function markdownToHtml(
  markdown: string,
  assetPath: string
) {
  const result = await unified()
    .use(mermaid, { simple: false, imageDir: assetPath })
    .use(require("remark-external-links"), { target: "_blank" })
    .use(require("remark-parse"))
    // .use(highlight, { exclude: ["mermaid"] })
    .use(html)
    .process({
      contents: markdown,
      data: { destinationDir: path.join(process.cwd(), "public") },
    });

  const res = result.toString();
  console.log("RESULT: ", res);
  return res;
}
