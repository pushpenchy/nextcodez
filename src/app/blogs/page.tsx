import BlogsSecindex from "@/components/blogs";
import Header from "@/components/header/header";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.ui-layouts.com/blogs"),
  title: "Blogs | Read More, Know More",
  description: "Your Creative Friendly Agency",
};
function BlogPage() {
  return (
    <>
      <BlogsSecindex />
    </>
  );
}

export default BlogPage;
