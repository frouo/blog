import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import {
  HOME_DESCRIPTION,
  HOME_OG_IMAGE_URL,
  HOME_TITLE,
  WEBSITE_URL,
} from "../lib/constants";

const meta = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  imageUrl: HOME_OG_IMAGE_URL,
  url: WEBSITE_URL,
};

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          {/*<!-- Primary Meta Tags -->*/}
          <title>{meta.title}</title>
          <meta name="title" content={meta.title} />
          <meta name="description" content={meta.description} />
          {/*<!-- Open Graph / Facebook -->*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={meta.url} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.imageUrl} />
          {/*<!-- Twitter -->*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={meta.url} />
          <meta property="twitter:title" content={meta.title} />
          <meta property="twitter:description" content={meta.description} />
          <meta property="twitter:image" content={meta.imageUrl} />
          {/*<!-- End Meta Tags -->*/}
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "environment",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
