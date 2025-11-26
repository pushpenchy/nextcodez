"use client";
import { motion, stagger } from "motion/react";
import { slide } from "../home/page-loader";
import Earth from "../../common/globe/globe";
import Image from "next/image";
import ContactUs from "../../common/contact-us";
import Footer from "../footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import PageTitle from "@/common/page-title";
import { TeamMember } from "./team-member";
import { AnimatedNumber } from "../ui/animated-number";

interface AchieveMentArray {
  id: number;
  count: number;
  title: string;
}
const achivements: AchieveMentArray[] = [
  { id: 1, count: 200, title: "Projects Done" },
  { id: 2, count: 10, title: "Talented Member" },
  { id: 3, count: 100, title: "Happy Clients" },
];

export default function AboutIndex() {
  return (
    <>
      <ReactLenis root>
        <PageTitle />
        <div className="container">
          <h1 className="2xl:text-6xl sm:text-4xl text-xl font-semibold  mx-auto text-center">
            A Creative Digital Agency that&apos;s hungry{" "}
            <br className="lg:block hidden" /> for make creative things
          </h1>
          <div className="md:p-4 p-2 rounded-full my-8 relative">
            <div className="overlay-noise  rounded-full"></div>
            <div className="bg-gray-900 relative z-10 w-full rounded-full border-2 border-white">
              <Image
                src="/aboutwrap.png"
                alt="newlight"
                width={1200}
                height={1200}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="w-full md:p-10 p-5 rounded-xl bg-white text-black md:my-20 my-10 ">
            <div className="relative z-2 flex flex-col md:flex-row md:justify-between items-center">
              {achivements.map(({ count, title, id }) => {
                return (
                  <div className="text-center md:py-0 py-4" key={id}>
                    <h1 className="xl:text-8xl text-7xl md:font-medium font-semibold ">
                      <AnimatedNumber
                        className="inline-flex items-center font-mono font-light"
                        springOptions={{
                          bounce: 0,
                          duration: 10000,
                        }}
                        value={count}
                      />
                      +
                    </h1>
                    <span className="md:text-2xl text-xl  font-semibold tracking-widest">
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <h1 className="xl:text-2xl md:text-2xl text-sm">
            At our core, we aspire to become the driving force behind your
            digital success. Our mission is to seamlessly merge the diverse
            realms of web development, digital marketing, search engine
            optimization (SEO), video editing, voiceovers, and a wide array of
            other cutting-edge services into a dynamic and unified journey.
            We&apos;re committed to helping your brand thrive in the digital
            landscape, crafting engaging websites, implementing effective
            digital marketing strategies, enhancing your online visibility
            through SEO, creating captivating videos, and providing professional
            voiceovers.
          </h1>
          <h1 className="xl:text-4xl md:text-2xl pt-10">
            Our aim is to offer a comprehensive suite of services that empowers
            your business, guiding you through the ever-evolving digital
            ecosystem with expertise, innovation, and creativity
          </h1>
          <TeamMember className="py-10" />
        </div>
        <ContactUs pad={true} />
        <Footer />
      </ReactLenis>
    </>
  );
}
