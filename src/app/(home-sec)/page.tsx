"use client";
import HeroSec from "@/components/home/hero-sec";
import About from "@/components/home/about";
import Service from "@/components/home/service";
import Technology from "@/components/home/technology";
import Projectindex from "@/common/project";
import ContactUs from "@/common/contact-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSec />
      <About />
      <Service />
      <Technology />
      <Projectindex limitation={true} />
      <ContactUs />
      <Footer />
    </>
  );
}
