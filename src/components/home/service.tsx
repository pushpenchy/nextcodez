"use client";
import SectionTittle from "@/common/section-tittle";
import { ArrowBigLeft, ArrowRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "motion/react";
import { Sparkles } from "../ui/particles";

const slideDown = {
  intial: {
    y: "100px",
  },
  enter: (i: any) => ({
    y: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: any) => ({
    y: "100px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
interface ServiceTypes {
  id: string;
  title: string;
  OverlayTitle: string;
  des: string;
}
const Service = () => {
  const container = useRef<HTMLDivElement>(null);

  const servicesData: ServiceTypes[] = [
    {
      id: "01",
      title: "Design",
      OverlayTitle: "WE CREATE YOUR VISION",
      des: "Websites and brand identities that explain what you do in a few seconds",
    },
    {
      id: "02",
      title: "Development",
      OverlayTitle: "CRAFTING YOUR IMAGINATION",
      des: "Fast, reliable websites and web apps built with Next.js, React and TypeScript",
    },
    {
      id: "03",
      title: "Landing Pages",
      OverlayTitle: "BUILT TO CONVERT",
      des: "Focused pages for ads and campaigns, with tracking set up properly from day one",
    },
    {
      id: "04",
      title: "SEO & Marketing",
      OverlayTitle: "CONNECT. ENGAGE. SUCCEED.",
      des: "Technical SEO and digital marketing that bring the right people to your site",
    },
  ];

  return (
    <>
      <section className="relative py-10 md:pt-72 pt-32" id="service">
        <Image
          src="/aboutbluryy.png"
          width={800}
          height={800}
          alt="liggting image"
          className="absolute object-cover w-full top-0  -z-10"
        />
        <div className="relative -mt-64 h-96 w-screen overflow-hidden mask-[radial-gradient(80%_40%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-20 ">
          <Sparkles
            density={1000}
            speed={1.5}
            size={1.5}
            direction="bottom"
            opacitySpeed={0}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
        <div className="container mx-auto">
          <SectionTittle title="Our Services" des="Making Your Ideas Happen" />
          <p className="pb-6 lg:text-3xl sm:text-2xl text-xl lg:w-[70%]">
            We work with businesses, startups and founders who want a website
            that looks sharp, loads fast and actually brings in work.
          </p>
          <div className="hidden justify-end lg:flex">
            <Link
              href="/services"
              className="flex  gap-2 cursor-pointer px-4 py-3 hover:bg-black hover:text-white transition-all border-2 border-white bg-white text-black rounded-full font-semibold"
            >
              Know More
              <ChevronsRight />
            </Link>
          </div>
          <div className="md:pt-5 pb-20 py-4" ref={container}>
            <div
              className="
              grid  items-center 
              "
            >
              {servicesData.map((service) => {
                return (
                  <div key={service.id}>
                    <motion.article
                      key={service.id}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`
    relative border-t-2 border-white
    last:border-b-2
    group
  `}
                    >
                      <div
                        className={`
      absolute inset-0 flex items-center justify-center z-20
      bg-white text-black px-4

      [clip-path:polygon(0_53%,100%_55%,100%_55%,0_53%)]
      transition-[clip-path] duration-300 ease-out

      group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
    `}
                      >
                        <p
                          className={`
        2xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-medium cursor-default
        opacity-0 translate-y-4
        transition-all duration-300
        group-hover:opacity-100 group-hover:translate-y-0
        md:text-left text-center
      `}
                        >
                          {service.OverlayTitle}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-6 items-center px-4 py-10 md:gap-10 gap-4">
                        <span className="md:col-span-1 lg:text-4xl text-2xl font-semibold">
                          {service.id}
                        </span>
                        <p className="lg:col-span-3 md:col-span-2 2xl:text-7xl lg:text-6xl md:text-3xl sm:text-5xl text-4xl text-white font-semibold">
                          {service.title}
                        </p>
                        <p className="lg:col-span-2 md:col-span-3 2xl:text-2xl sm:text-xl text-base text-white">
                          {service.des}
                        </p>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center lg:hidden mt-4">
              <Link
                href="/services"
                className="flex gap-2 cursor-pointer px-6 py-3 hover:bg-black hover:text-white transition-all border-2 border-white bg-white text-black rounded-full font-semibold"
              >
                Know More
                <ChevronsRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
