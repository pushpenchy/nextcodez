"use client";
import SectionTittle from "@/common/section-tittle";
import React from "react";
import { projects } from "@/lib/projects-data";
import ProjectData from "./project-data";
import { ChevronsRight } from "lucide-react";
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
              des="A few things we've built"
            />
          ) : (
            <></>
          )}

          <ProjectData projectData={[projects[0], projects[1]]} />
          <ProjectData
            projectData={[projects[2], projects[3]]}
            reversed={true}
          />
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
