"use client";
import ScheduleMeeting from "@/common/schedule-button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PageLoader from "./page-loader";
import { motion, AnimatePresence } from "motion/react";
import { SpinningText } from "../ui/spinning-text";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Sparkles } from "../ui/particles";

const HeroSec = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const titleSplit = (name: string) => {
    return name.split("").map((char, i) => (
      <span key={i} className="font-rubintek inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <section className="herosec relative h-screen overflow-hidden" id="home">
        <div className="container mx-auto h-full">
          <motion.div
            className="hero-title text-center h-full grid place-content-center place-items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative z-2">
              <h1 className="2xl:text-10xl lg:text-8xl md:text-7.5xl sm:text-7xl text-5xl">
                <motion.span className="flex px-4 justify-center lg:-translate-x-20 md:-translate-x-6 overflow-hidden">
                  {titleSplit("Your Creative").map((char, i) => (
                    <motion.span
                      className="inline-block"
                      key={i}
                      initial={{ y: -1000 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.19, 1, 0.22, 1],
                        delay: 0.5 + i * 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span className="flex justify-center text-right transform md:translate-x-20 overflow-hidden">
                  {titleSplit("Friendly Agency").map((char, i) => (
                    <motion.span
                      className="inline-block"
                      key={i}
                      initial={{ y: 1000 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.19, 1, 0.22, 1],
                        delay: 0.8 + i * 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
              <motion.p
                className="slide-anime md:text-3xl sm:text-lg text-sm py-6"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 1.0,
                }}
              >
                We specialize increaming visual identites for{" "}
                <br className="sm:block hidden" /> your compnay&apos;s, products
                and brands{" "}
              </motion.p>

              <motion.div
                className="flex sm:flex-row flex-col-reverse items-center sm:pt-0 pt-10  gap-5 justify-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 1.1,
                }}
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1],
                    delay: 1.2,
                  }}
                >
                  <ScheduleMeeting
                    btnContent="Let's Connect"
                    className="border-neutral-300 border"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1],
                    delay: 1.3,
                  }}
                >
                  <Link
                    href="/projects"
                    className="w-fit cursor-pointer slide-anime  border border-neutral-700 px-5 py-3 rounded-full text-xl bg-neutral-900 text-white flex gap-4 items-center font-semibold"
                  >
                    Check Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* <motion.svg
          width="1728"
          height="477"
          viewBox="0 0 1728 477"
          fill="none"
          className="slide-line absolute w-full lg:bottom-0 -bottom-20 -z-3"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1.4 }}
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
        </motion.svg> */}

        {!isMobile && (
          <motion.div
            className="spining-text absolute sm:right-40 right-28 bottom-26 w-12 grid place-items-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1.5 }}
          >
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
          </motion.div>
        )}

        <motion.div
          className="slide-image absolute object-contain w-full bottom-0 sm:right-0 -z-10"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
        >
          <Image
            src="/bgbluryy.png"
            width={800}
            height={800}
            alt="liggting image"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.5 }}
          className="relative -mt-96 h-96 w-screen overflow-hidden mask-[radial-gradient(80%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-20 "
        >
          <Sparkles
            density={1000}
            speed={1.5}
            size={1.5}
            direction="top"
            opacitySpeed={0}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSec;
