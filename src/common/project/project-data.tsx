"use client";
import Image from "next/image";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
interface ProjectDataType {
  name: string;
  client: string;
  description: string;
  src: string;
  link?: string;
}
interface DoubleProps {
  projectData: [ProjectDataType, ProjectDataType];
  reversed?: Boolean;
}
export default function ProjectData({ projectData, reversed }: DoubleProps) {
  const projects = projectData;

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <motion.a
          target="_blank"
          href={projects[0].link}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut" }}
          viewport={{ once: false }}
          className={`${
            reversed
              ? " lg:col-span-7 sm:col-span-6 col-span-12"
              : "lg:col-span-5 sm:col-span-6 col-span-12"
          } relative mb-8 sm:h-96`}
        >
          <div className="w-full h-full">
            <Image
              src={projects[0].src}
              alt={`${projects[0].name} website`}
              height={600}
              width={1200}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 text-black w-full p-4 flex justify-between items-center">
            <h3 className="sm:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
              {projects[0].name}
            </h3>
            <div className="w-12 h-12 text-white grid place-content-center rounded-full bg-black">
              <MoveUpRight />
            </div>
          </div>
        </motion.a>
        <motion.a
          target="_blank"
          href={projects[1].link}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className={`${
            reversed
              ? " lg:col-span-5 sm:col-span-6 col-span-12"
              : "lg:col-span-7 sm:col-span-6 col-span-12"
          } relative mb-6 sm:h-96`}
        >
          <div className="w-full h-full">
            <Image
              src={projects[1].src}
              alt={`${projects[1].name} website`}
              height={600}
              width={1200}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 text-black w-full p-4 flex justify-between items-center">
            <h3 className="sm:text-xl text-sm font-medium bg-black text-white rounded-xl p-2 px-4">
              {projects[1].name}
            </h3>
            <div className="w-12 h-12 text-white grid place-content-center rounded-full bg-black">
              <MoveUpRight />
            </div>
          </div>
        </motion.a>
      </div>
    </>
  );
}
