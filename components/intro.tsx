import { FunctionComponent } from "react";

const Intro = () => {
  return (
    <section className="font-mono mt-10 mb-20 md:mb-24 text-center">
      <span className="text-2xl mt-5">
        Hi, I am <h1 className="inline">François Rouault</h1> 🇫🇷
      </span>
      <h2 className="text-sm text-gray-500 mt-4">
        iOS developer @ France Télévisions,
        <br />
        NextJS fan, ex Android dev.
        <br />
        Author of{" "}
        <SocialLink href="https://resizer.dev">Resizer.dev</SocialLink> and{" "}
        <SocialLink href="https://github.com/frouo/promise-lite">
          PromiseLite
        </SocialLink>
        .
      </h2>
      <div className="flex flex-row justify-center text-gray-500 space-x-4 mt-5">
        <SocialLink href="https://github.com/frouo">Github</SocialLink>
        <SocialLink href="https://twitter.com/frouo">Twitter</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/francoisrouault/">
          Linkedin
        </SocialLink>
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
