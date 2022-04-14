import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "markdown/posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((e) => e.endsWith(".md"))
    .map((file) => encodeURIComponent(file.replace(/\.md$/, "")));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, `${decodeURIComponent(slug)}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((value) => value["publish"] === "true")
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // sort posts by date in descending order
  return posts;
}
