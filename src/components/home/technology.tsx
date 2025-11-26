"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "../ui/particles";
const Technology = () => {
  const container = useRef<HTMLDivElement>(null);
  const technology = [
    { img: "/icons/adobe-illustrator.svg" },
    { img: "/icons/figma.svg" },
    { img: "/icons/adobe-photoshop.svg" },
    { img: "/icons/js.svg" },
    { img: "/icons/ts.svg" },
    { img: "/icons/reactjs.svg" },
    { img: "/icons/next-js.svg" },
    { img: "/icons/redux.svg" },
    { img: "/icons/nodejs.svg" },
    { img: "/icons/mongoDB.svg" },
    { img: "/icons/mySQL.png" },
    { img: "/icons/wordpress.svg" },
    { img: "/icons/adobe-premier.svg" },
    { img: "/icons/Adobe_After_Effects.svg" },
  ];
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "=-200top center",
            end: `bottom center`,
            // markers: true,
            // toggleActions: "start none none none",
          },
        })
        .from(".techlogo", {
          opacity: 0,
          ease: "expo.out",
        })
        .from(".techline path", {
          opacity: 0,
          ease: "expo.out",
          stagger: 0.05,
        })
        .from(
          ".stack",
          {
            opacity: 0,
            ease: "expo.out",
          },
          "=-.8"
        )
        .from(
          ".stack .imgbox",
          {
            y: 40,
            opacity: 0,
            ease: "expo.out",
            stagger: 0.05,
          },
          "=-.8"
        );
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        className="pt-2 pb-20 w-full relative"
        id="technology"
        ref={container}
      >
        <Image
          src="/technlogies.svg"
          width={800}
          height={800}
          alt="liggting image"
          className="techbg absolute object-contain w-full top-0 -z-3"
        />
        <div className="absolute top-0 h-96 -z-8 w-screen overflow-hidden mask-[radial-gradient(80%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-0 ">
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
        <div className="container mx-auto">
          <div className="flex justify-center relative">
            <svg
              width="269"
              height="328"
              viewBox="0 0 269 328"
              className="techline absolute top-20 -z-3 sm:w-full w-52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M142.54 0.771122L140.617 0.783121L141.06 71.6586L191.175 121.152L191.979 250.022L193.902 250.01L193.093 120.344L142.977 70.8502L142.54 0.771122Z"
                fill="#fff"
              />
              <path
                d="M107.583 70.7895L66.6949 112.191L67.3486 216.942L57.2694 227.148L57.4415 254.721L82.4623 279.432L82.7583 326.862L84.681 326.85L84.38 278.623L59.3592 253.913L59.1971 227.932L69.2762 217.727L68.6225 112.975L108.951 72.1406L107.583 70.7895Z"
                fill="#fff"
              />
              <path
                d="M59.2822 1.29071L57.3595 1.30271L57.5706 35.1286L11.3316 81.9482L11.5045 109.649L13.4272 109.637L13.2593 82.7326L59.4983 35.9129L59.2822 1.29071Z"
                fill="#fff"
              />
              <path
                d="M60.4138 92.4706L50.6092 102.398L50.8699 144.185L19.7447 175.701L19.931 205.553L21.8537 205.541L21.6724 176.486L52.7976 144.97L52.5368 103.183L61.7819 93.8217L60.4138 92.4706Z"
                fill="#fff"
              />
              <path
                d="M181.618 0.527263L179.696 0.539262L180.017 52.0449L242.635 113.886L243.078 184.913L264.512 206.081L265.863 204.713L244.996 184.105L244.553 113.078L181.935 51.2365L181.618 0.527263Z"
                fill="#fff"
              />
              <path
                d="M63.0339 95.2861L96.8567 61.0385L96.4824 1.05853L92.637 1.08253L93.0014 59.4697L59.1786 93.7173L59.7474 184.862L32.5171 212.435L32.8875 271.785C29.3019 272.675 26.6455 275.931 26.6696 279.784C26.6978 284.3 30.3952 287.951 34.9109 287.923C39.4266 287.895 43.0783 284.198 43.0501 279.682C43.026 275.828 40.3293 272.606 36.7328 271.761L36.3724 214.003L63.6027 186.431L63.0339 95.2861ZM34.8207 273.466C38.2774 273.444 41.1058 276.237 41.1274 279.694C41.1489 283.151 38.3557 285.979 34.8989 286.001C31.4422 286.022 28.6138 283.229 28.5923 279.772C28.5707 276.315 31.364 273.487 34.8207 273.466Z"
                fill="#fff"
              />
              <path
                d="M153.927 146.777L110.392 103.782L109.751 0.975785L105.905 0.999781L107.305 225.392C104.252 226.254 102.022 229.068 102.043 232.393C102.068 236.385 105.325 239.602 109.317 239.577C113.309 239.552 116.525 236.295 116.501 232.303C116.48 228.977 114.215 226.191 111.151 225.368L110.426 109.22L150.092 148.394L150.161 159.545C146.576 160.435 143.919 163.691 143.943 167.544C143.972 172.06 147.669 175.712 152.185 175.683C156.701 175.655 160.352 171.958 160.324 167.442C160.3 163.589 157.603 160.366 154.007 159.521L153.927 146.777ZM152.095 161.226C155.551 161.204 158.38 163.997 158.401 167.454C158.423 170.911 155.63 173.739 152.173 173.761C148.716 173.782 145.888 170.989 145.866 167.532C145.845 164.075 148.638 161.247 152.095 161.226Z"
                fill="#fff"
              />
              <path
                d="M207.333 153.81C210.397 154.634 212.662 157.42 212.683 160.745C212.708 164.737 209.491 167.995 205.499 168.02C201.507 168.044 198.25 164.828 198.225 160.836C198.204 157.51 200.434 154.696 203.488 153.834L203.245 114.891L155.356 67.5962L154.938 0.693816L158.784 0.669819L159.191 65.9794L207.08 113.274L207.333 153.81Z"
                fill="#fff"
              />
              <path
                d="M176.699 214.013L136.311 254.909L136.669 312.328C139.732 313.151 141.998 315.937 142.018 319.263C142.043 323.255 138.827 326.512 134.835 326.537C130.843 326.562 127.586 323.345 127.561 319.353C127.54 316.028 129.77 313.213 132.823 312.352L132.455 253.34L172.844 212.444L172.294 124.36L123.779 76.4466L123.308 0.891151L127.153 0.867155L127.615 74.8297L176.13 122.743L176.699 214.013Z"
                fill="#fff"
              />
              <path
                d="M42.0434 105.801L14.3409 133.851C15.9251 136.6 15.5569 140.172 13.2199 142.538C10.4148 145.378 5.83699 145.407 2.99662 142.602C0.156352 139.797 0.127782 135.219 2.93292 132.379C5.2699 130.012 8.83684 129.6 11.6049 131.149L38.188 104.232L38.0278 78.5617L71.564 44.6044L71.2933 1.21571L75.1387 1.19171L75.4194 46.1732L41.8832 80.1305L42.0434 105.801Z"
                fill="#fff"
              />
              <path
                d="M267.988 300.777C267.964 296.924 265.267 293.701 261.671 292.856L261.359 242.916L230.123 212.067L229.495 111.476L175.728 58.3766L175.367 0.566269L171.522 0.590266L171.893 59.9934L225.659 113.093L226.287 213.684L257.524 244.533L257.826 292.88C254.24 293.77 251.584 297.026 251.608 300.879C251.636 305.395 255.333 309.047 259.849 309.018C264.365 308.99 268.016 305.293 267.988 300.777ZM266.066 300.789C266.087 304.246 263.294 307.074 259.837 307.096C256.38 307.117 253.552 304.324 253.53 300.867C253.509 297.41 256.302 294.582 259.759 294.561C263.216 294.539 266.044 297.332 266.066 300.789Z"
                fill="#fff"
              />
            </svg>
            <svg
              width="227"
              height="227"
              viewBox="0 0 227 227"
              fill="none"
              className="techlogo md:w-52 w-40 md:translate-y-0 md:translate-x-0 -translate-y-10 -translate-x-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="113.5" cy="113.5" r="113.5" fill="#fff" />
              <path
                d="M110.17 57H73.7872L60 97.8805H76.4681L63.8298 130.276H74.9362L65.3617 170L91.0213 131.433L101.362 170H168V57H154.213L153.83 156.116H112.468L101.362 114.85H85.2766L98.6809 92.0956L115.532 152.645H149.617V57H132V141.846H128.553L110.17 57Z"
                fill="#3E7AEE"
              />
            </svg>
          </div>
          <div className="stack md:mt-16 mt-0 lg:p-10 p-5 lg:w-[90%] w-[80%] mx-auto bg-white rounded-xl">
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 grid-cols-3 2xl:gap-6 md:gap-2 gap-2 flex-wrap">
              {technology.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="imgbox sm:w-full xl:h-32 md:h-28 sm:h-24 sm:p-4  p-3 bg-[#07111D] rounded-xl grid place-content-center"
                  >
                    <Image
                      src={img.img}
                      width={100}
                      height={100}
                      alt="demo"
                      className=" object-contain w-20"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
