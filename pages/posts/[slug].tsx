import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getPostSlugs } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import "highlight.js/styles/stackoverflow-dark.css";
import { WEBSITE_URL } from "../../lib/constants";
import path from "path";
import Script from "next/script";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const meta = {
    title: post.title,
    description: post.excerpt,
    imageUrl: post.ogImage.url.startsWith("http")
      ? post.ogImage.url
      : `${WEBSITE_URL}${post.ogImage.url}`,
    url: `${WEBSITE_URL}${router.asPath}`,
  };
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
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
                <meta
                  property="twitter:description"
                  content={meta.description}
                />
                <meta property="twitter:image" content={meta.imageUrl} />
                {/*<!-- End Meta Tags -->*/}
                <Script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                />
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                environment={post.environment}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "excerpt",
    "coverImage",
    "environment",
  ]);
  const content = await markdownToHtml(
    post.content || "",
    post.coverImage.replace(path.basename(post.coverImage), "")
  );

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
