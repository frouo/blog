import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-24 lg:gap-y-20 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            environment={post.environment}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
