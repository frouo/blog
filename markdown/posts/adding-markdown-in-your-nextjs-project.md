---
title: "Adding markdown in your nextjs project - in seconds"
excerpt: "Introducing `next-markdown` allowing you to start fast with markdown files in your nextjs project, without all the hassle."
environment: "Nextjs"
coverImage: "/assets/blog/next-markdown/cover.jpg"
date: "2022-04-07"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/next-markdown/cover.jpg"
---

This is not an n-th tutorial on how to use `remark-html` to render markdown in your nextjs project. Nextjs provide a good [example ↗](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) that covers this.

Instead I would like to present you `next-markdown`

`next-markdown` is a npm package that wraps all the complexity of reading your local markdown files, converting them into markdown, create paths in getStaticPaths and getStaticProps.

If you want to start fast with markdown in your nextjs project, without all the hassle, continue the reading 👇

_disclaimer: I am the author of this package_ =)

## Get Started with next-markdown

It only takes few seconds to get ready with `next-markdown`:

### Step 1

Install next-markdown

```bash
npm install next-markdown
```

### Step 2

Create a `[...nextmd].jsx` file in your nextjs project `pages/` folder and paste this code:

```typescript
import NextMarkdown from "next-markdown";

const nextmd = NextMarkdown({ pathToContent: "./my-markdown-files-demo" });

export const getStaticPaths = nextmd.getStaticPaths;
export const getStaticProps = nextmd.getStaticProps;

export default function MarkdownPage({ frontMatter, html, posts }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} /> 👈 design your own layout 🧑‍🎨
}
```

### Usage

Create a folder `my-markdown-files-demo/` at the root of your nextjs project.

Drop a file called `hello.md` in that folder.

```markdown
# Hello World

This is **awesome**
```

Run your nextjs project and see the magic in http://localhost:3000/hello.

## The best part of it

`next-markdown` automatically parse your markdown folder and create paths accordingly, eg:

- `hello.md` will create `/hello`
- `hello/world.md` will create `/hello/world`
- `foo/index.md` will create `/foo`

In other words `next-markdown` mimics the way nextjs works with `pages/` (aka dynamic routes).

## Features and Examples

All the features are listed in the [next-markdown github repo ↗](https://github.com/frouo/next-markdown#features-)

Among others:

- 100% Typescript
- blog aware
- front matter
- mdx
- etc.

We also provide [examples here ↗](https://github.com/frouo/next-markdown/tree/master/examples)

I invite you to read more from there. And drop a star ⭐ to show your support 🙏

---

Thank you,

Cheers,

François.
