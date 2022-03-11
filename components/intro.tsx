import { FunctionComponent } from "react";

const Intro = () => {
  return (
    <section className="mt-10 mb-12 text-sm">
      <div className="text-center">
        <span className="font-mono text-2xl mt-5">
          Hi, I am <h1 className="inline">François Rouault</h1>
          <br />
          <a
            className="hover:underline"
            target="blank"
            title="Paris"
            href="https://www.google.fr/maps/place/Paris"
          >
            🇫🇷
          </a>{" "}
          <a
            className="hover:underline"
            target="blank"
            title="Twitter"
            href="https://twitter.com/frouo"
          >
            🐦
          </a>{" "}
          <a
            className="hover:underline"
            target="blank"
            title="Github"
            href="https://github.com/frouo"
          >
            🐙
          </a>{" "}
          <a
            className="hover:underline"
            target="blank"
            title="Linkedin"
            href="https://www.linkedin.com/in/francoisrouault/"
          >
            👔
          </a>
        </span>
        <h2 className="text-sm text-gray-400 mt-4">
          iOS developer @ France Télévisions,
          <br />
          Next.js fan, ex Android dev.
        </h2>
        <div className="mt-10">
          <p className="font-mono text-2xl">Projects</p>
          <p className="text-gray-400 mt-4">
            <SocialLink href="https://lembot.com">Lembot</SocialLink>, a
            micro-SaaS that automatically exports your Lemlist campaign results to your Google Sheets
            <br />
            <SocialLink href="https://resizer.dev">Resizer.dev</SocialLink>, a
            webapp to visualize and share responsive design.
            <br />
            <SocialLink href="https://github.com/frouo/promise-lite">
              PromiseLite
            </SocialLink>
            , a Swift library that simplifies asynchronous programming.
            <br />
            <SocialLink href="https://www.raycast.com/frouo/google-chrome-profiles">
              Google Chrome Profile
            </SocialLink>
            , a <a href="https://raycast.com/">Raycast</a> extension that lists your Chrome Profiles and bookmarks so it's super easy to open and navigate between them.
            <br />
            <SocialLink href="https://github.com/frouo/next-markdown">
            next-markdown
            </SocialLink>
            , a nextjs library to generate pages from markdown files with 0 effort and dynamic routes.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="font-mono text-2xl">Blog</p>
        <p className="text-gray-400 mt-4">
          It's all about development, mostly front-end. I want my blog posts to
          be concise, quick to read, with sample codes rather than thousand
          words. For more details or to form your opinion, you will find my
          sources at the bottom of each article.
        </p>
      </div>
    </section>
  );
};

type SocialLinkProps = { href: string };

const SocialLink: FunctionComponent<SocialLinkProps> = ({ href, children }) => {
  return (
    <a
      className="font-bold hover:underline text-gray-300"
      target="blank"
      href={href}
    >
      {children}
    </a>
  );
};

export default Intro;
