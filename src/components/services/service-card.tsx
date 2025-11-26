"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
function ServiceCard({
  reverse,
  id,
  title,
  des,
  img,
}: {
  reverse: boolean;
  id: string;
  title: string;
  des: string;
  img: string;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid md:grid-cols-12 md:grid-rows-none grid-rows-2 gap-0 mt-4"
      >
        <div
          className={`${
            reverse
              ? "md:rounded-e-xl md:order-2  text-right"
              : "md:rounded-s-xl md:order-0 "
          } flex items-center order-1  bg-white text-black  md:col-span-8 xl:p-12 py-5 px-8`}
        >
          <div>
            <h1 className="xl:text-4xl sm:text-3xl text-2xl font-semibold">
              {id}
            </h1>
            <div className="overflow-hidden">
              <h1 className="xl:text-7xl sm:text-4xl text-3xl font-semibold uppercase">
                {title}
              </h1>
            </div>
            <p
              className={`2xl:w-[80%] xl:text-base font-medium text-sm ${
                reverse ? "ml-auto" : ""
              }`}
            >
              {des}
            </p>
            <Link
              href="/contact-us"
              className={`${reverse ? "flex justify-end" : ""}`}
            >
              <div className="flex mt-5 w-fit gap-2 cursor-pointer px-4 py-3 hover:bg-white hover:text-black transition-all border-2 border-black bg-black text-white rounded-full font-semibold">
                Contact Us
                <ChevronsRight />
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`${
            reverse ? "md:rounded-s-xl " : "md:rounded-e-xl"
          }  bg-white md:col-span-4 w-full  overflow-hidden p-1`}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className={`h-full w-full bg-black ${
              reverse ? "md:rounded-s-xl " : "md:rounded-e-xl"
            }  flex items-center justify-center md:rounded-none rounded-xl`}
          >
            <Image
              src={img}
              alt="logo"
              width={300}
              height={200}
              className={`w-[70%] mx-auto`}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default ServiceCard;
