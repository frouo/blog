import NextMarkdown from "next-markdown";
import { FrontMatter } from "./types";

const nextmd = NextMarkdown<FrontMatter>({
  pathToContent: "./markdown",
  remarkPlugins: [require("remark-prism")],
});

export default nextmd;
