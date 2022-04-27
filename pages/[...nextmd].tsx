import { NextMarkdownProps } from "next-markdown";
import { useRouter } from "next/router";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/stackoverflow-dark.css";
import { WEBSITE_URL } from "../lib/constants";
import Script from "next/script";
import "prismjs/themes/prism-tomorrow.css";
import { FrontMatter } from "../lib/types";
import nextmd from "../lib/nextmd";

export const getStaticPaths = nextmd.getStaticPaths;
export const getStaticProps = nextmd.getStaticProps;

export default function MarkdownPage(props: NextMarkdownProps<FrontMatter>) {
  const router = useRouter();

  const post = props.frontMatter;
  const html = props.html;
  const mdxSource = props.mdxSource;

  const meta = {
    title: post.title,
    description: post.excerpt,
    imageUrl: post.ogImage.url.startsWith("http")
      ? post.ogImage.url
      : `${WEBSITE_URL}${post.ogImage.url}`,
    url: `${WEBSITE_URL}${router.asPath}`,
  };

  return (
    <Layout>
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
              {html && <PostBody content={html} />}
              {mdxSource && <MDXRemote {...mdxSource} />}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}
