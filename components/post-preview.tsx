import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  environment: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  environment,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-2">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="text-sm mb-2 text-gray-700">
        {environment && `${environment} | `}
        <DateFormatter dateString={date} />
      </div>
      <h3 className="text-2xl mb-0">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title} →</a>
        </Link>
      </h3>
      <p className="mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
