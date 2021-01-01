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
} from "../lib/constants";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{HOME_TITLE}</title>
          <meta name="title" content={HOME_TITLE} />
          <meta name="description" content={HOME_DESCRIPTION} />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
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
