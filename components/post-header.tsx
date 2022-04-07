import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
  environment: string;
};

const PostHeader = ({ title, date, environment }: Props) => {
  return (
    <>
      <div className="mb-12">
        <div className="mb-6 text-sm text-gray-500">
          <DateFormatter dateString={date} />
          <br />
          {environment}
        </div>
        <div className="mt-12 md:mt-20 mb-14 md:mb-20">
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
