import Header from "@/components/header/header";
import ProjectPageIndex from "@/components/projects";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.ui-layouts.com/projects"),
  title: "Projects | Our Most Recent Projects",
  description: "Your Creative Friendly Agency",
};
function page() {
  return (
    <>
      <ProjectPageIndex />
    </>
  );
}

export default page;
