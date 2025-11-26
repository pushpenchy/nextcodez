"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";
import PageTitle from "@/common/page-title";
import ContactUs from "@/common/contact-us";
import Footer from "../footer";
function ContactIndex() {
  return (
    <>
      <ReactLenis root>
        {/* <PageTitle /> */}
        <ContactUs hideMarquie={true} />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default ContactIndex;
