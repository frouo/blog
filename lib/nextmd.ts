import NextMarkdown from "next-markdown";

const nextmd = NextMarkdown({
  pathToContent: "./markdown",
  remarkPlugins: [require("remark-prism")],
});

export default nextmd;
