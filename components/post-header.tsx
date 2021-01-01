import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  environment: string;
};

const PostHeader = ({ title, coverImage, date, environment }: Props) => {
  return (
    <>
      <div className="mb-12">
        <div className="mb-6 text-sm text-gray-500">
          <DateFormatter dateString={date} />
          <br />
          {environment}
        </div>
        <div className="mt-12 md:mt-20">
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
