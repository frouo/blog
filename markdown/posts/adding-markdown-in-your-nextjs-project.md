---
publish: "true"
title: "Adding markdown in your nextjs project - in seconds"
excerpt: "Introducing `next-markdown` allowing you to start fast with markdown files in your nextjs project, without all the hassle."
environment: "Nextjs"
coverImage: "/assets/blog/next-markdown/cover.jpg"
date: "2022-04-07T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/next-markdown/cover.jpg"
---

This is not an n-th tutorial on how to use `remark-html` to render markdown in your nextjs project.

There are plenty very good how-to on the web, just Google "nextjs markdown".

In a nutshell, here are the steps:

- use `fs` to read and list your markdown files
- slugify the markdown file name
- implement `getStaticPaths` to tell nextjs the paths for your markdown files
- install [remark / rehype ↗](https://github.com/remarkjs/remark-html) to convert markdown to HTML
- implement `getStaticProps` to design your layout

To be honest it's a lot of boilerplate code.

I recommand at least you check the [blog example code ↗](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) provided by the nextjs for the curiosity.

## Or,

If you want to start fast with markdown in your nextjs project, without all the hassle, may I suggest you take a look at `next-markdown` 🤩 _(disclaimer: I am the author of this package)_

## Use next-markdown

I am pleased to introduce a package called `next-markdown` that brings markdown support in your nextjs project - **in seconds**. Really.

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

### Dynamic route based on the file path

`next-markdown` automatically parse your markdown folder and create paths accordingly, eg:

- `hello.md` will create `/hello`
- `hello/world.md` will create `/hello/world`
- `foo/index.md` will create `/foo`

In other words `next-markdown` mimics the way nextjs works with `pages/` (aka dynamic routes).

### Features and Examples

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
