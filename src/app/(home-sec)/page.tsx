"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import HeroSec from "@/components/home/hero-sec";
import About from "@/components/home/about";
import Service from "@/components/home/service";
import Technology from "@/components/home/technology";
import Projectindex from "@/common/project";
import Team from "@/components/home/team";
import ContactUs from "@/common/contact-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <HeroSec />
        <About />
        <Service />
        {/* <Technology />
        <Projectindex limitation={true} />
        <Team />
        <ContactUs />
        <Footer /> */}
      </ReactLenis>
    </>
  );
}
