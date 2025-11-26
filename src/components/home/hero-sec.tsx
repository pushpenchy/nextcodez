"use client";
import ScheduleMeeting from "@/common/schedule-button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PageLoader from "./page-loader";
import gsap from "gsap";
import { SpinningText } from "../ui/spinning-text";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Sparkles } from "../ui/particles";

const HeroSec = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const titleSplit = (name: string) => {
    return name.split("").map((char, i) => (
      <span key={i} className="font-rubintek inline-block">
        {char}
      </span>
    ));
  };
  const [finishIntro, setFinishIntro] = useState(false);

  const handleHeroTittleAnimation = () => {
    window.scrollTo(0, 0);
    setFinishIntro(true);
    let tl = gsap.timeline();
    tl.fromTo(
      ".slide-image",
      {
        y: 1000,
      },
      { y: 0, delay: 0.1, stagger: 0.02, ease: "expo.out" }
    )
      .fromTo(
        ".title-text span",
        {
          y: 1000,
        },
        { y: 0, delay: 0.1, stagger: 0.02, ease: "expo.out" }
      )
      .fromTo(
        ".slide-line .path",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, stagger: 0.1, ease: "expo.out" },
        "a"
      )
      .fromTo(
        ".slide-anime ",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, stagger: 0.1, ease: "expo.out" },
        "a"
      )
      .fromTo(
        ".spining-text ",
        {
          scale: 0,
          opacity: 0,
        },
        { scale: 1, opacity: 1, stagger: 0.1, ease: "expo.out" }
      );
  };

  return (
    <>
      <PageLoader
        setFinishIntro={setFinishIntro}
        finishIntro={finishIntro}
        handleHeroTittleAnimation={handleHeroTittleAnimation}
      />
      <section className="herosec relative h-screen overflow-hidden" id="home">
        <div className="container mx-auto h-full">
          <div className=" hero-title  text-center h-full  grid place-content-center place-items-center relative">
            <div className="relative z-2">
              <div className="2xl:text-10xl lg:text-8xl md:text-7.5xl sm:text-7xl text-5xl">
                <div className="flex px-4 lg:gap-10 gap-5 justify-center lg:-translate-x-20  md:-translate-x-6 overflow-hidden">
                  <div className="title-text">{titleSplit("Your")}</div>
                  <div className="title-text">{titleSplit("Creative")}</div>
                </div>
                <div className="flex justify-center lg:gap-10 gap-5 text-right transform md:translate-x-20 overflow-hidden">
                  <div className="title-text">{titleSplit("Friendly")}</div>
                  <div className="title-text">{titleSplit("Agency")}</div>
                </div>
              </div>
              <p className="slide-anime md:text-3xl sm:text-lg text-sm py-6">
                We specialize increaming visual identites for{" "}
                <br className="sm:block hidden" /> your compnay&apos;s, products
                and brands{" "}
              </p>

              <div className="flex sm:flex-row flex-col-reverse items-center sm:pt-0 pt-10  gap-5 justify-center">
                {/* <Fade direction="up" cascade> */}
                <div className="sm:block flex justify-center">
                  <ScheduleMeeting
                    btnContent="Let's Connect"
                    className="border-neutral-300 border"
                  />
                </div>
                <Link
                  href="/projects"
                  className="w-fit cursor-pointer slide-anime  border border-neutral-700 px-5 py-3 rounded-full text-xl bg-neutral-900 text-white flex gap-4 items-center font-semibold"
                >
                  Check Our Work
                </Link>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </div>
        <svg
          width="1728"
          height="477"
          viewBox="0 0 1728 477"
          fill="none"
          className="slide-line absolute w-full lg:bottom-0 -bottom-20 -z-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M389 509C994.522 121.517 1346 -19 2066.5 73"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="2"
            className="path"
          />
          <path
            d="M213.5 480.5C624.5 137 1297.5 -54 2058 149"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="2"
            className="path"
          />
          <path
            d="M1.5 448.5C432 -55.9999 1440.5 -24 2090.5 234.5"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="2"
            className="path"
          />
          <circle
            cx="1394.5"
            cy="70.5"
            r="69.5"
            className="path"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
        </svg>

        {!isMobile && (
          <div className="spining-text absolute sm:right-40 right-28 bottom-26 w-12 grid place-items-center">
            <Image
              src="/newlighting.svg"
              width={400}
              height={500}
              alt="liggting image"
              className="w-full absolute"
            />
            <SpinningText
              radius={6}
              fontSize={1.2}
              className="font-medium leading-none top-0 w-full h-full text-black"
            >
              {`brand-building  • developement • marketing • `}
            </SpinningText>
          </div>
        )}
        <Image
          src="/bgbluryy.png"
          width={800}
          height={800}
          alt="liggting image"
          className="slide-image absolute object-contain w-full bottom-0 sm:right-0 -z-10"
        />
        <div className="relative -mt-96 h-96 w-screen overflow-hidden mask-[radial-gradient(80%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-20 ">
          <Sparkles
            density={1000}
            speed={1.5}
            size={1.5}
            direction="top"
            opacitySpeed={0}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
      </section>
    </>
  );
};

export default HeroSec;
