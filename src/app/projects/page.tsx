import ProjectPageIndex from "@/components/projects";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Websites and web apps built by NextCodez, including Alpha BD Packaging, Pixel ADX and ToolsBucket.",
};
function page() {
  return (
    <>
      <ProjectPageIndex />
    </>
  );
}

export default page;
