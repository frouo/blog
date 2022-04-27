export type FrontMatter = {
  publish: boolean;
  title: string;
  excerpt: string;
  environment: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: { url: string };
};
