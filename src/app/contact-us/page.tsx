import ContactIndex from "@/components/contact";
import Header from "@/components/header/header";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.ui-layouts.com/contact-us"),
  title: "Contact Us | Fill All The Form To Contact Us",
  description: "Your Creative Friendly Agency",
};
function page() {
  return (
    <>
      <ContactIndex />
    </>
  );
}

export default page;
