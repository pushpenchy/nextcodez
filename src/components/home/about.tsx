"use client";
import React, { useLayoutEffect, useRef } from "react";
import SectionTittle from "@/common/section-tittle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/ui/marquee";
interface ServiceDataType {
  id: number;
  title: string;
}
const About = () => {
  const container = useRef<HTMLDivElement>(null);

  const services: ServiceDataType[] = [
    { id: 1, title: "Web Design" },
    { id: 2, title: "Web Development" },
    { id: 3, title: "Landing Pages" },
    { id: 4, title: "Brand Identity" },
  ];

  const phrase =
    "We want to be the NEXT driving force behind your digital success, with design, development and digital marketing under one roof.";
  const splitWords = phrase.split(" ").map((word, index) => (
    <p className="word md:px-2 px-1" key={index}>
      {word.split("").map((char, index) => (
        <span key={index} className=" opacity-20">
          {char}
        </span>
      ))}
    </p>
  ));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.to(".word span", {
        opacity: 1,
        duration: 0.3,
        ease: "expo.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: `+=${window.innerHeight / 2}`,
          scrub: true,
          // markers: true,
          // toggleActions: "play play reverse reverse",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="h-fit w-screen py-10 pt-0  bg-cover bg-[#ffffff] text-black relative"
        ref={container}
        id="about"
      >
        <div className="w-full bg-black text-white">
          <Marquee className="[--duration:20s]">
            {services.map((service) => (
              <div key={service.id}>
                <p className="md:text-2xl text-xl font-semibold flex items-center gap-5">
                  {service.title}
                  <svg
                    width="57"
                    height="58"
                    viewBox="0 0 57 58"
                    className="w-8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.8594 30.7899C56.6918 31.2008 56.5637 32.4255 55.6643 32.6554L35.9311 37.6987C35.6484 37.771 35.4113 37.9632 35.2821 38.2249L26.2655 56.4879C25.8546 57.3203 24.6299 57.1922 24.4 56.2928L19.3567 36.5596C19.2844 36.2768 19.0922 36.0397 18.8305 35.9105L0.567514 26.894C-0.264878 26.483 -0.136811 25.2583 0.762591 25.0285L20.4958 19.9851C20.7786 19.9129 21.0157 19.7207 21.1449 19.459L30.1614 1.19598C30.5724 0.363587 31.7971 0.491654 32.0269 1.39106L37.0703 21.1243C37.1425 21.407 37.3347 21.6441 37.5964 21.7733L55.8594 30.7899Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="container mx-auto pt-14">
          <SectionTittle title="Our Vision" des="" />
          <div className="2xl:text-7xl xl:text-6xl lg:text-6xl sm:text-5xl text-3xl font-medium md:pt-4 pt-2 md:pb-20 pb-10 flex flex-wrap  ">
            {splitWords}
          </div>
        </div>

        <svg
          width="1728"
          height="679"
          viewBox="0 0 1728 679"
          fill="none"
          className="absolute w-full  object-contain  bottom-0 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2233.5 1.00639C1291.5 502 390.999 793.001 -696.501 633.99"
            stroke="#8b8b8b"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <path
            d="M2029.5 107.99C1632 538.49 220.496 823.988 -490.504 422.49"
            stroke="#8b8b8b"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <path
            d="M2211.5 145.5C1781.2 650.172 297 767.5 -503 363"
            stroke="#8b8b8b"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <circle
            cx="630.171"
            cy="603.043"
            r="69.5"
            transform="rotate(179.977 630.171 603.043)"
            stroke="#8b8b8b"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
        </svg>
      </section>
    </>
  );
};

export default About;
