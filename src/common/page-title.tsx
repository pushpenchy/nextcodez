"use client";
import React from "react";
import { motion, stagger } from "motion/react";
import { slide } from "@/components/home/page-loader";
import Earth from "@/common/globe/globe";
import MobileGlobe from "./globe/mobile";
import { Sparkles } from "@/components/ui/particles";

function PageTitle({
  title,
  heading1,
  moto,
  heading2,
}: {
  title?: boolean;
  heading1?: string;
  moto?: string;
  heading2?: string;
}) {
  return (
    <div
      className={`${
        title ? "2xl:h-[86vh] sm:h-screen h-[70vh] " : "sm:h-screen h-[70vh]"
      } flex items-center justify-center z-10  relative`}
    >
      {!title && (
        <motion.svg
          width="2478"
          height="438"
          viewBox="0 0 2478 438"
          className="w-full p-16  sm:-z-3 z-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial="start"
            variants={slide}
            animate={"open"}
            custom={1}
            d="M178.207 0H48.973L0 145.737H58.4955L13.6036 261.226H53.0541L19.0451 402.838L110.189 265.351L146.919 402.838H383.622V0H334.649L333.289 353.342H186.37L146.919 206.231H89.7839L137.397 125.113L197.252 340.969H318.325V0H255.748V302.472H243.505L178.207 0Z"
            fill="#fff"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={2}
            d="M533.88 344.478C559.885 344.478 582.176 334.924 595.975 311.57H662.316C640.556 366.77 596.505 401.801 536.003 401.801C459.047 401.801 399.075 341.824 399.075 264.862C399.075 190.554 457.986 126.33 533.349 126.33C615.081 126.33 671.338 191.615 671.338 270.7C671.338 274.947 670.807 279.193 670.807 283.439H461.701C465.947 323.778 494.606 344.478 533.88 344.478ZM533.349 182.592C500.444 182.592 472.315 202.761 463.824 235.139H605.528C594.913 199.577 569.969 182.592 533.349 182.592Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={3}
            d="M781.666 192.677L835.975 131.082L939.873 0V102.308L815.633 251.593L931.862 400.74C931.862 401.271 932.393 401.271 932.393 401.801L932.924 402.332H852.784C852.784 402.332 852.784 402.332 852.253 401.801L781.136 310.508H769.46L655.354 438H596.212L735.493 251.593L637.771 127.885H719.291L720.102 128.984L769.46 192.677H781.666Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={4}
            d="M1080.47 402.838H946.723V0H1009.88V124.732H1096.52L1083.73 174.093H1009.88V348.718H1080.47V402.838Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={5}
            d="M1454.63 125.793H1362.81C1341.05 95.5391 1309.74 81.2082 1272.59 81.2082C1206.78 81.2082 1156.89 137.47 1156.89 202.224C1156.89 267.51 1204.66 325.895 1272.59 325.895C1307.62 325.895 1339.99 314.218 1360.16 285.025H1451.97C1416.95 361.456 1358.04 402.326 1273.65 402.326C1160.61 402.326 1078.87 311.033 1078.87 200.632C1078.87 93.416 1166.97 4.24618 1274.18 4.24618C1360.16 4.24618 1419.07 48.3003 1454.63 125.793Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={6}
            d="M1584.66 126.855C1660.55 126.855 1723.18 185.77 1723.18 262.202C1723.18 341.287 1665.86 402.326 1585.72 402.326C1509.29 402.326 1449.32 339.695 1449.32 263.794C1449.32 188.424 1509.82 126.855 1584.66 126.855ZM1586.25 341.818C1634.01 341.818 1660.02 307.317 1660.02 261.671C1660.02 218.148 1629.77 186.832 1586.25 186.832C1541.67 186.832 1511.95 219.74 1511.95 263.794C1511.95 309.441 1538.48 341.818 1586.25 341.818Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={7}
            d="M1723.18 263.794C1723.18 188.424 1782.62 126.855 1858.51 126.855C1887.7 126.855 1916.36 134.816 1939.18 154.455V0H1998.62V402.326H1939.18V372.603C1915.83 391.18 1887.7 401.795 1858.51 401.795C1781.03 401.795 1723.18 339.695 1723.18 263.794ZM1862.76 187.363C1819.77 187.363 1786.86 222.394 1786.86 264.856C1786.86 309.971 1821.36 341.287 1865.41 341.287C1908.4 341.287 1936.53 306.256 1936.53 265.386C1936.53 222.394 1906.81 187.363 1862.76 187.363Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={8}
            d="M2131.53 345.732C2157.29 345.732 2179.36 336.215 2193.03 312.949H2258.73C2237.18 367.94 2193.55 402.838 2133.64 402.838C2057.42 402.838 1998.03 343.089 1998.03 266.419C1998.03 192.393 2056.37 128.414 2131.01 128.414C2211.95 128.414 2267.66 193.451 2267.66 272.235C2267.66 276.465 2267.14 280.695 2267.14 284.925H2060.05C2064.26 325.111 2092.64 345.732 2131.53 345.732ZM2131.01 184.462C2098.42 184.462 2070.56 204.555 2062.15 236.809H2202.49C2191.98 201.382 2167.27 184.462 2131.01 184.462Z"
            fill="#3E7AEE"
          />
          <motion.path
            variants={slide}
            initial="start"
            animate={"open"}
            custom={9}
            d="M2478 353.664V402.838H2238.33V364.767L2389.7 177.059H2246.21V127.885H2469.59V165.955L2315.06 353.664H2478Z"
            fill="#3E7AEE"
          />
        </motion.svg>
      )}
      <div className="absolute sm:block hidden ">
        <Earth />
      </div>
      <div className="absolute sm:hidden block ">
        <MobileGlobe />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#07111d_100%)]"></div>
      {title && (
        <>
          <div className="absolute flex items-center text-center bg-black/30 w-full h-full">
            <h1 className="2xl:text-4xl xl:text-4xl lg:text-2xl mx-auto font-medium">
              {heading1}
              <br />
              <span className="bg-linear-to-r from-[#3179FF] via-[#88e3ff] to-[#3179FF] bg-size-[200%_auto] bg-clip-text text-transparent inline-block animate-background-gradient 2xl:text-9xl lg:text-8xl sm:text-6xl text-4xl leading-[115%] font-semibold">
                {moto}
              </span>

              <br />
              {heading2}
            </h1>
          </div>
          <div className="absolute bottom-0 h-80 w-screen overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40">
            <Sparkles
              density={800}
              speed={1.2}
              size={1.2}
              direction="top"
              opacitySpeed={2}
              color="#2282ff"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PageTitle;
