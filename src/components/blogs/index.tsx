"use client";
import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Blogs } from "@/lib/blogs-data";
import Link from "next/link";
import Header from "../header/header";
import Footer from "../footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import * as Avatar from "@radix-ui/react-avatar";
function BlogsSecindex() {
  return (
    <>
      <ReactLenis root>
        <div className="container mx-auto pt-24">
          {/* <h1 className="xl:text-7xl md:text-5xl text-3xl text-center pb-4 font-medium">
            Welcome to our Daily Blogs
          </h1> */}
          <div className="w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1200}
              height={1200}
              alt="image"
              className="w-full rounded-xl h-120 object-cover"
            />
            <div className="absolute xl:bottom-4 sm:block hidden bottom-2 w-full  z-10 ">
              <div className="bg-black/10 z-10 backdrop-blur-lg w-[98%] mx-auto h-full rounded-xl grid xl:grid-cols-2  p-4 xl:gap-16">
                <div className="xl:block hidden">
                  <h1 className="xl:text-xl  text-sm font-semibold text-white">
                    Exclusive Blogs That Help You Know More About Front-End and
                    Back-End Development, Along With Web Animation using
                    motion/react, Gsap, react-three-fiber, lenis etc
                  </h1>
                </div>
                <div className="xl:flex xl:items-end">
                  <div>
                    <p className="text-white font-semibold">
                      Types of Blogs That we&apos;ll about to post:
                    </p>
                    <div className="flex xl:gap-2 gap-1 flex-wrap pt-2">
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        HTML & CSS
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        JS & TS
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        REACT.JS & NEXT.JS
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        ANIMATION
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        MONGODB
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        PRISMA
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em]">
                        MONGOOSE
                      </span>
                      <span className="border-2 border-neutral-800 bg-neutral-950 font-semibold text-white rounded-full px-5 py-1 lg:text-sm text-[0.6em] ">
                        POST
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-white/40 my-6" />

          <div className="grid xl:grid-cols-3 pt-16 sm:grid-cols-2 grid-cols-1 xl:gap-6 gap-4 pb-20 sm:pt-0">
            {Blogs?.map((blog, index) => {
              return (
                <>
                  <div className="card" key={index}>
                    <AspectRatio.Root ratio={16 / 9}>
                      <div className="w-full relative">
                        <Image
                          src={blog?.blogImg || ""}
                          width={1200}
                          height={1200}
                          alt="image"
                          className=" w-full rounded-xl"
                        />
                      </div>
                    </AspectRatio.Root>
                    <Link
                      href={`/blogs/${blog?.maintags}/${blog?.link}`}
                      key={blog.id}
                    >
                      <h1 className="xl:text-2xl text-xl font-semibold pb-1 py-1">
                        {blog?.title}
                      </h1>
                      <p className="line-clamp-3 xl:leading-5 leading-4 xl:text-neutral-200 text-sm ">
                        {blog?.description}
                      </p>
                      {blog?.tags && (
                        <div className="flex gap-2 py-2 flex-wrap pt-5">
                          {blog?.tags?.map((tag, index) => {
                            return (
                              <>
                                <span
                                  className="border-2 border-white bg-white xl:text-sm text-[0.6em] font-semibold text-black rounded-full xl:px-3 px-2 py-1"
                                  key={index}
                                >
                                  {tag}
                                </span>
                              </>
                            );
                          })}
                        </div>
                      )}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </ReactLenis>
    </>
  );
}

export default BlogsSecindex;
