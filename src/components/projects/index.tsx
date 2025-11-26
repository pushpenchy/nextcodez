"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";
import PageTitle from "@/common/page-title";
import Footer from "../footer";
import ContactUs from "@/common/contact-us";
import Projectindex from "../../common/project";

function ProjectPageIndex() {
  return (
    <>
      <ReactLenis root>
        <PageTitle
          title={true}
          heading1={"Some Of Our Most Recent"}
          moto="Creative Projects"
          heading2="That Makes Us Proud"
        />
        <Projectindex />
        <ContactUs />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default ProjectPageIndex;
