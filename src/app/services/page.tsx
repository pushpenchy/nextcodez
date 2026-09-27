import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import ServiceCard from "@/components/services/service-card";
import ContactUs from "@/common/contact-us";
import PageTitle from "@/common/page-title";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, web development, landing pages, brand identity and digital marketing from NextCodez.",
};

function page() {
  return (
    <>
      <PageTitle
        title={true}
        heading1={"What We Do"}
        moto={"Digital Services"}
      />
      <div className="container my-2">
        <ServiceCard
          reverse={false}
          id={"01"}
          title={"Brand & Logo Design"}
          des={
            "A logo and a simple brand system that look right everywhere your business shows up: your website, social profiles, packaging and pitch decks. Whether it's a fresh start or a refresh, we keep it clean and easy to recognise."
          }
          img={"/service/logo.svg"}
        />
        <ServiceCard
          reverse={true}
          id={"02"}
          title={"Web Design"}
          des={
            "Layouts that make it obvious what you do and what a visitor should do next. Every design is responsive from the start, so it works on a cheap Android phone as well as a large desktop screen."
          }
          img={"/service/webDesign.svg"}
        />
        <ServiceCard
          reverse={false}
          id={"03"}
          title={"Web Development"}
          des={
            "Corporate websites, web apps and online tools built with Next.js, React and TypeScript, or plain HTML, CSS and JavaScript when a project doesn't need a framework. Fast to load, easy to update, and deployed properly."
          }
          img={"/service/development.svg"}
        />
        <ServiceCard
          reverse={true}
          id={"04"}
          title={"Landing Pages & Tracking"}
          des={
            "Focused pages for ad campaigns and paid traffic. We build them to load fast, match the ad that sent the visitor, and pass tracking data through correctly, so you can see which clicks actually earn."
          }
          img={"/service/webDesign.svg"}
        />
        <ServiceCard
          reverse={false}
          id={"05"}
          title={"SEO & DIGITAL MARKETING"}
          des={
            "Technical SEO that helps search engines understand your site, plus digital marketing that brings the right people to it. We start from your goals, whether that's more enquiries, more sales or a stronger brand."
          }
          img={"/service/seo.svg"}
        />
      </div>
      <ContactUs />

      <Footer />
    </>
  );
}

export default page;
