import { FunctionComponent } from "react";

const Intro = () => {
  return (
    <section className="mt-10 mb-16 md:mb-20 text-sm">
      <div className="text-center">
        <span className="font-mono text-2xl mt-5">
          Hi, I am <h1 className="inline">François Rouault</h1>{" "}
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
        <h2 className="text-sm text-gray-500 mt-4 ">
          iOS developer @ France Télévisions,
          <br />
          NextJS fan, ex Android dev.
          <br />
          Author of{" "}
          <SocialLink href="https://resizer.dev">
            Resizer.dev
          </SocialLink> and{" "}
          <SocialLink href="https://github.com/frouo/promise-lite">
            PromiseLite
          </SocialLink>
          .
        </h2>
        {/* <div className="flex flex-row justify-center text-gray-500 space-x-4 mt-5">
        <SocialLink href="https://github.com/frouo">Github</SocialLink>
        <SocialLink href="https://twitter.com/frouo">Twitter</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/francoisrouault/">
          Linkedin
        </SocialLink>
      </div> */}
      </div>
      <div className="mt-8 font-sans">
        <p className="mb-0">
          I want my posts to be concise and to the point. Quick to read with
          sample codes rather than thousand words. For more details or to form
          your opinion, you will find my sources at the bottom of each article.
        </p>
        <p className="mt-2">
          Here are my findings, tips and other configs. It's all about
          development, mostly front-end.
        </p>
      </div>
    </section>
  );
};

type SocialLinkProps = { href: string };

const SocialLink: FunctionComponent<SocialLinkProps> = ({ href, children }) => {
  return (
    <a className="underline" target="blank" href={href}>
      {children}
    </a>
  );
};

export default Intro;
