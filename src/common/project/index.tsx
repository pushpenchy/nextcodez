"use client";
import SectionTittle from "@/common/section-tittle";
import React from "react";
import { projects } from "@/lib/projects-data";
import ProjectData from "./project-data";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronsRight, MoveUpRight } from "lucide-react";
import Link from "next/link";

const Projectindex = ({ limitation }: { limitation?: boolean }) => {
  return (
    <>
      <section
        className={`${limitation ? "py-20" : "pt-0 pb-4"}`}
        id="portfolio"
      >
        <div className="container mx-auto">
          {limitation ? (
            <SectionTittle
              title="Our Projects"
              des="Take a look at Our most succesful projects"
            />
          ) : (
            <></>
          )}

          <ProjectData projectData={[projects[0], projects[1]]} />
          <ProjectData
            projectData={[projects[2], projects[3]]}
            reversed={true}
          />
          {limitation ? (
            <></>
          ) : (
            <>
              <ProjectData projectData={[projects[4], projects[5]]} />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className={`
        relative mb-6 `}
              >
                <div className="w-full  h-full">
                  <Image
                    src="/projects/profitableslogo.jpg"
                    alt={"image"}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute bottom-0 text-black w-full p-4 flex justify-between items-center">
                  <h3 className="text-xl bg-black text-white rounded-xl p-2 px-4">
                    Profitables Logo
                  </h3>
                  <a
                    href="#"
                    className="w-12 h-12 text-white grid place-content-center rounded-full bg-black"
                  >
                    <MoveUpRight />
                  </a>
                </div>
              </motion.div>
            </>
          )}
          {limitation && (
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="flex gap-2 w-fit cursor-pointer px-6 py-3 hover:bg-black hover:text-white transition-all border-2 border-white bg-white text-black rounded-full font-semibold"
              >
                View More
                <ChevronsRight />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projectindex;
