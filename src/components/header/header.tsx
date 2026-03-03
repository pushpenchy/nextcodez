"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import MotionDrawer from "../ui/motion-drawer";
function Header() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="header md:px-10 px-2 border-b-2 border-neutral-900/10 backdrop-blur-xl absolute top-0 w-full z-99"
      >
        <div
          className={cn(
            "container mx-auto md:py-4 py-2",
            pathname.startsWith("/blogs/")
              ? "2xl:max-w-6xl xl:max-w-210 lg:max-w-178 max-w-5xl xl:px-0 sm:px-10 px-5"
              : "",
          )}
        >
          <nav className="flex justify-between items-center">
            <Link href="/" className="logo xl:w-52 sm:w-40 w-28">
              <svg
                width="152"
                height="27"
                viewBox="0 0 152 27"
                className="sm:w-fit w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7481 21.2349C34.3432 21.2349 35.7105 20.646 36.557 19.2064H40.6263C39.2916 22.6091 36.5895 24.7686 32.8783 24.7686C28.1579 24.7686 24.4792 21.0713 24.4792 16.3271C24.4792 11.7465 28.0927 7.78748 32.7155 7.78748C37.7289 7.78748 41.1797 11.8119 41.1797 16.687C41.1797 16.9488 41.1472 17.2105 41.1472 17.4723H28.3206C28.5811 19.9589 30.339 21.2349 32.7481 21.2349ZM32.7155 11.2557C30.6971 11.2557 28.9717 12.499 28.4508 14.4948H37.1429C36.4919 12.3027 34.9618 11.2557 32.7155 11.2557Z"
                  fill="white"
                />
                <path
                  d="M47.9473 11.8773L51.2786 8.08041L57.6516 0V6.30666L50.0308 15.5091L57.1602 24.7031C57.1602 24.7359 57.1928 24.7359 57.1928 24.7686L57.2253 24.8013H52.3096C52.3096 24.8013 52.3096 24.8013 52.277 24.7686L47.9147 19.1409H47.1985L40.1993 27H36.5715L45.115 15.5091L39.1207 7.88332H44.1211L44.1709 7.95107L47.1985 11.8773H47.9473Z"
                  fill="white"
                />
                <path
                  d="M66.2755 24.8325H58.0718V0H61.9458V7.68894H67.2602L66.4758 10.7318H61.9458V21.4963H66.2755V24.8325Z"
                  fill="white"
                />
                <path
                  d="M89.2266 7.75437H83.5946C82.2599 5.8894 80.3392 5.00599 78.0603 5.00599C74.0236 5.00599 70.9634 8.47419 70.9634 12.4659C70.9634 16.4903 73.8933 20.0894 78.0603 20.0894C80.2089 20.0894 82.1948 19.3696 83.4318 17.57H89.0638C86.9152 22.2816 83.3016 24.8009 78.1254 24.8009C71.1913 24.8009 66.1779 19.1733 66.1779 12.3677C66.1779 5.75852 71.5819 0.261751 78.158 0.261751C83.4318 0.261751 87.0454 2.97742 89.2266 7.75437Z"
                  fill="white"
                />
                <path
                  d="M97.2025 7.81981C101.858 7.81981 105.699 11.4516 105.699 16.1631C105.699 21.0382 102.183 24.8009 97.2676 24.8009C92.5797 24.8009 88.901 20.9401 88.901 16.2613C88.901 11.6152 92.6123 7.81981 97.2025 7.81981ZM97.3002 21.071C100.23 21.071 101.825 18.9442 101.825 16.1304C101.825 13.4475 99.9696 11.517 97.3002 11.517C94.5656 11.517 92.7425 13.5456 92.7425 16.2613C92.7425 19.0751 94.3702 21.071 97.3002 21.071Z"
                  fill="white"
                />
                <path
                  d="M105.699 16.2613C105.699 11.6152 109.345 7.81981 114.001 7.81981C115.791 7.81981 117.549 8.31059 118.949 9.52119V0H122.595V24.8009H118.949V22.9687C117.517 24.1138 115.791 24.7682 114.001 24.7682C109.248 24.7682 105.699 20.9401 105.699 16.2613ZM114.261 11.5498C111.624 11.5498 109.606 13.7092 109.606 16.3267C109.606 19.1078 111.722 21.0382 114.424 21.0382C117.061 21.0382 118.786 18.8788 118.786 16.3594C118.786 13.7092 116.963 11.5498 114.261 11.5498Z"
                  fill="white"
                />
                <path
                  d="M130.748 21.3123C132.328 21.3123 133.682 20.7256 134.52 19.2914H138.55C137.228 22.6812 134.552 24.8325 130.877 24.8325C126.202 24.8325 122.559 21.1493 122.559 16.4231C122.559 11.8599 126.137 7.91593 130.716 7.91593C135.681 7.91593 139.098 11.9251 139.098 16.7816C139.098 17.0424 139.066 17.3031 139.066 17.5639H126.363C126.621 20.0411 128.362 21.3123 130.748 21.3123ZM130.716 11.3709C128.717 11.3709 127.008 12.6095 126.492 14.5978H135.1C134.455 12.414 132.94 11.3709 130.716 11.3709Z"
                  fill="white"
                />
                <path
                  d="M152 21.8012V24.8325H137.298V22.4857L146.584 10.9146H137.782V7.88332H151.484V10.2301L142.006 21.8012H152Z"
                  fill="white"
                />
                <path
                  d="M10.9312 0H3.00399L0 8.98376H3.5881L0.834443 16.103H3.25433L1.16822 24.8325L6.75899 16.3572L9.01198 24.8325H23.5313V0H20.5273L20.4438 21.7814H11.4319L9.01198 12.7129H5.50732L8.42787 7.71247L12.0994 21.0186H19.526V0H15.6875V18.6455H14.9365L10.9312 0Z"
                  fill="white"
                />
              </svg>
            </Link>
            <ul className="lg:flex hidden xl:gap-8 gap-4 font-medium text-sm xl:text-xl">
              <li>
                <Link href="/" className={` cursor-pointer`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "bg-white p-1 px-3 rounded-full text-black"
                      : ""
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`${
                    pathname === "/services"
                      ? "bg-white p-1 px-3 rounded-full text-black"
                      : ""
                  }`}
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className={`${
                    pathname === "/projects"
                      ? "bg-white p-1 px-3 rounded-full text-black"
                      : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`${
                    pathname.startsWith("/blogs") &&
                    "bg-white p-1 px-3 rounded-full text-black"
                  }`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="lg:flex hidden gap-4 items-center">
              <Link
                href="/contact-us"
                className={` ${
                  pathname === "/contact-us" ? "active" : ""
                } flex items-center gap-2 cursor-pointer px-4 py-2 bg-linear-to-r from-neutral-200 to-neutral-300 border border-neutral-100 text-black rounded-full font-semibold`}
              >
                Contact us <Send size={16} />
              </Link>
              {/* <ModeToggle /> */}
            </div>
            {isMobile && (
              <MotionDrawer
                direction="right"
                buttonOpeningVariants="stay"
                width={300}
                className="text-black h-screen"
              >
                <ul className="flex flex-col xl:gap-8 gap-4 font-medium text-2xl">
                  <li>
                    <Link href="/" className={` cursor-pointer`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`${
                        pathname === "/about"
                          ? "bg-white p-2 rounded-full text-black"
                          : ""
                      }`}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`${
                        pathname === "/services"
                          ? "bg-white p-2 rounded-full text-black"
                          : ""
                      }`}
                    >
                      Our Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/projects"
                      className={`${
                        pathname === "/projects"
                          ? "bg-white p-2 rounded-full text-black"
                          : ""
                      }`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className={`${
                        pathname === "/blogs"
                          ? "bg-white p-2 rounded-full text-black"
                          : ""
                      }`}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/contact-us"
                  className={` ${
                    pathname === "/contact-us" ? "active" : ""
                  } mt-4 flex items-center w-fit text-2xl gap-2 cursor-pointer px-4 py-2 bg-linear-to-r from-neutral-200 to-neutral-300 border border-neutral-100 text-black rounded-full font-semibold`}
                >
                  Contact us <Send size={20} />
                </Link>
              </MotionDrawer>
            )}
          </nav>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
