import PostPreview from "./post-preview";
import { NextMarkdownFile } from "next-markdown";
import { FrontMatter } from "../lib/types";

type Props = {
  posts: NextMarkdownFile<FrontMatter>[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-24 lg:gap-y-20 mb-32">
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            title={post.frontMatter.title}
            coverImage={post.frontMatter.coverImage}
            date={post.frontMatter.date}
            environment={post.frontMatter.environment}
            slug={post.nextmd.join("/")}
            excerpt={post.frontMatter.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
