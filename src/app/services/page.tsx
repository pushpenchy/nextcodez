import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import ServiceCard from "@/components/services/service-card";
import ContactUs from "@/common/contact-us";
import PageTitle from "@/common/page-title";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.ui-layouts.com/services"),
  title: "Services | Check All of our Services",
  description: "Your Creative Friendly Agency",
};

function page() {
  return (
    <>
      <PageTitle
        title={true}
        heading1={"Discover Our Comprehensive Range of"}
        moto={"Digital Services"}
      />
      <div className="container my-2">
        <ServiceCard
          reverse={false}
          id={"01"}
          title={"Logo Design"}
          des={
            " Your logo is your brand's visual ambassador, and we're here to make it unforgettable. Our expert designers craft logos that resonate with your audience, ensuring your brand stands out. Whether it's a fresh start or a logo revamp, let us bring your brand's story to life. Elevate your brand identity with us."
          }
          img={"/service/logo.svg"}
        />
        <ServiceCard
          reverse={true}
          id={"02"}
          title={"Web Design"}
          des={
            "Web design is the process of creating and arranging elements on a web page to deliver an engaging and visually appealing experience for website visitors. Our expert designers combine aesthetics with user-friendly navigation to create websites that not only look great but also provide an exceptional user experience. We design websites that are responsive, meaning they adapt seamlessly to different devices and screen sizes, ensuring your site looks fantastic on desktops, tablets, and smartphones."
          }
          img={"/service/webDesign.svg"}
        />
        <ServiceCard
          reverse={false}
          id={"03"}
          title={"Web Development"}
          des={
            "Web development involves turning web design concepts into functional websites. Our team of developers specializes in transforming your vision into a fully operational website. We use the latest web technologies to ensure your site is not only visually impressive but also robust and secure. Whether it's a simple blog, e-commerce platform, or a complex web application, we have the expertise to bring your ideas to life."
          }
          img={"/service/development.svg"}
        />
        <ServiceCard
          reverse={true}
          id={"04"}
          title={"Video Editing & Motion Graphics"}
          des={
            "Video editing and motion graphics are essential for creating engaging and professional video content. Our video editors can take your raw footage and transform it into polished, eye-catching videos. Whether you're looking to create promotional videos, tutorials, or social media content, we can add special effects, animations, and transitions to make your videos stand out."
          }
          img={"/service/videoEditing.svg"}
        />
        <ServiceCard
          reverse={false}
          id={"05"}
          title={"SEO & DIGITAL MARKETING"}
          des={
            "Search Engine Optimization (SEO) and digital marketing are crucial for increasing your online visibility and reaching a wider audience. Our team of SEO experts ensures that your website ranks higher in search engine results, driving more organic traffic. Additionally, our digital marketing services include strategies like pay-per-click advertising, social media marketing, email marketing, and content marketing to help your business thrive in the digital landscape. We tailor our approach to your specific goals, whether it's increasing brand awareness, driving traffic, or boosting conversions."
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
