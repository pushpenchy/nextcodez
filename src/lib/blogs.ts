import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blogs } from "@/lib/blogs-data";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

type BlogFrontmatter = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export async function getBlogBySlug(maintags: string, slug: string) {
  const filePath = path.join(blogsDirectory, maintags, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file) as {
    data: BlogFrontmatter;
    content: string;
  };

  const metadataMatch = content.match(
    /export const metadata\s*=\s*(\{[\s\S]*?\});/
  );

  let extracted = {};

  if (metadataMatch) {
    // Convert the JS object string into a real object
    const fullObj = eval("(" + metadataMatch[1] + ")");

    extracted = {
      title: fullObj.title || "",
      description: fullObj.description || "",
      keywords: fullObj.keywords || [],
    };
  }

  const mdxModule = await import(`../content/blogs/${maintags}/${slug}.mdx`);
  const { default: Component } = mdxModule;
  return {
    slug,
    maintags,
    frontmatter: extracted || data,
    Component, // <--- This is the MDX React component
  };
}

export async function getAllBlogs() {
  return Blogs.map((b) => ({
    maintags: b.maintags,
    slug: b.link,
  }));
}
