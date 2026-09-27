"use client";
import Image from "next/image";
import ContactUs from "../../common/contact-us";
import Footer from "../footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import PageTitle from "@/common/page-title";
import { MoveUpRight } from "lucide-react";

export default function AboutIndex() {
  return (
    <>
      <ReactLenis root>
        <PageTitle />
        <div className="container">
          <h1 className="2xl:text-6xl sm:text-4xl text-xl font-semibold  mx-auto text-center">
            A web studio from Chattogram that&apos;s{" "}
            <br className="lg:block hidden" /> hungry to build great things
          </h1>
          <div className="md:p-4 p-2 rounded-full my-8 relative">
            <div className="overlay-noise  rounded-full"></div>
            <div className="bg-gray-900 relative z-10 w-full rounded-full border-2 border-white">
              <Image
                src="/aboutwrap.png"
                alt="NextCodez"
                width={1200}
                height={1200}
                className="w-full object-contain"
              />
            </div>
          </div>
          <h2 className="xl:text-2xl md:text-2xl text-sm md:pt-10 pt-4">
            NextCodez is a web design and development studio based in
            Chattogram, Bangladesh. We design and build websites, web apps and
            landing pages for businesses, from corporate sites that explain what
            a company does to fast, focused pages for ad campaigns.
          </h2>
          <h2 className="xl:text-4xl md:text-2xl pt-10">
            We keep it simple: modern tools like Next.js, React and TypeScript,
            honest advice about what your project actually needs, and pages that
            load fast on any phone.
          </h2>
          <a
            href="https://www.linkedin.com/in/pushpen-chowdhury-1546652b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-14 flex w-fit items-center gap-6 rounded-xl border-2 border-gray-400 p-5 pr-8"
          >
            <span className="grid h-20 w-20 place-content-center rounded-xl bg-[#3E7AEE] text-3xl font-semibold text-white">
              PC
            </span>
            <span>
              <span className="block md:text-2xl text-xl font-semibold">
                Pushpen Chowdhury
              </span>
              <span className="block sm:text-base text-sm">
                CEO, NextCodez
              </span>
            </span>
            <MoveUpRight />
          </a>
        </div>
        <ContactUs pad={true} />
        <Footer />
      </ReactLenis>
    </>
  );
}
