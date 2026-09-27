import AboutIndex from "@/components/about";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "NextCodez is a web design and development studio in Chattogram, Bangladesh.",
};

function PageAbout() {
  return (
    <>
      <AboutIndex />
    </>
  );
}

export default PageAbout;
