import ContactIndex from "@/components/contact";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell NextCodez about your website, web app or landing page project.",
};
function page() {
  return (
    <>
      <ContactIndex />
    </>
  );
}

export default page;
