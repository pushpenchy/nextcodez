import AboutIndex from "@/components/about";
import Header from "@/components/header/header";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.ui-layouts.com/about"),
  title: "About Us | Know More About Our Creative Agency",
  description: "Your Creative Friendly Agency",
};

function PageAbout() {
  return (
    <>
      <AboutIndex />
    </>
  );
}

export default PageAbout;
