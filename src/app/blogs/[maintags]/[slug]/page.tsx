import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs";
import { Blogs } from "@/lib/blogs-data";
import Image from "next/image";
import Footer from "@/components/footer";

export async function generateMetadata({ params }: any) {
  const { maintags, slug } = await params;

  const blog = await getBlogBySlug(maintags, slug);
  if (!blog) return {};

  const front = blog.frontmatter;

  const blogStatic = Blogs.find((b) => b.link === slug);
  //@ts-ignore
  const title = front?.title || blogStatic?.title;
  //@ts-ignore
  const description = front?.description || blogStatic?.description;
  //@ts-ignore
  const keywords = front?.keywords || blogStatic?.tags || [];

  const ogImage = blogStatic?.blogImg || "/default-og.jpg";

  const url = `https://nextcodez.ui-layouts.com/blogs/${maintags}/${slug}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "UI Layouts",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@naymur_dev",
    },

    metadataBase: new URL("https://nextcodez.ui-layouts.com"),

    authors: [{ name: "Naymur Rahman", url: "https://twitter.com/naymur_dev" }],
    publisher: "UI Layouts",

    category: maintags,
  };
}

export async function generateStaticParams() {
  return Blogs.map((b) => ({
    maintags: b.maintags,
    slug: b.link,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ maintags: string; slug: string }>;
}) {
  const { maintags, slug } = await params;

  const blog = await getBlogBySlug(maintags, slug);

  if (!blog) return notFound();

  const { Component } = blog;

  const meta = Blogs.find((b) => b.link === slug);

  return (
    <section className="2xl:max-w-6xl xl:max-w-210 lg:max-w-178 max-w-5xl xl:px-0 sm:px-10 px-5 mx-auto pt-28 w-full ">
      <p>{meta?.date}</p>
      <h1 className="text-4xl font-bold">{meta?.title}</h1>

      <Image
        src={meta?.blogImg || ""}
        width={1200}
        height={700}
        alt={meta?.title || ""}
        className="rounded-xl my-6"
      />

      <div className="prose">
        <Component />
      </div>
      <Footer className="mt-16" />
    </section>
  );
}
