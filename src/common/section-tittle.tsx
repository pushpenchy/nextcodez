"use client";
import React from "react";
import { motion } from "motion/react";
interface SectionTitleProps {
  title: string;
  des: string | void;
}

function SectionTittle({ title, des }: SectionTitleProps) {
  return (
    <>
      <motion.h1
        className="md:text-4xl sm:text-3xl text-xl font-semibold py-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}>
        {title}
      </motion.h1>

      {des && (
        <motion.p
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className=" md:text-6xl sm:text-5xl text-4xl pb-12 w-[80%] font-medium font-rubintek">
          {des}
        </motion.p>
      )}
    </>
  );
}

export default SectionTittle;
