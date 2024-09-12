/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// component/layout/Header

"use client";

import { cn } from "@/app/utils/merger";
import { menuData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLanguage, setIsLanguage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenu(false);
  };
  return (
    <div
      className={cn(
        "z-30 fixed top-0 left-0 right-0 w-full",
        scrollPosition >= 30 ? "backdrop-blur-md" : "bg-white bg-opacity-5"
      )}
    >
      <div className="w-full sm:px-14 px-7 mobile:h-20 h-16 flex items-center justify-between relative">
        <div className="w-full sm:w-fit flex items-center lg:justify-start justify-between gap-5">
          <Link href="/home">
            <div className="mobile:w-40 w-32 mobile:h-20 h-14">
              <img
                src={ImageExport.LOGO}
                className="w-full h-full"
                alt="United Ai"
              />
            </div>
          </Link>
          <div className="h-full lg:block hidden">
            <img src={ImageExport.MENUBORDER} className="h-full" />
          </div>
          <div
            className="lg:hidden block mobile:size-9 size-8"
            onClick={() => setIsMobileMenu(true)}
          >
            <img
              src={ImageExport.HMBURGER}
              alt="hmburger"
              className="size-full"
            />
          </div>
          <div
            className={cn(
              "lg:flex items-center gap-5 lg:relative absolute top-0 bg-black lg:bg-transparent lg:w-auto h-screen lg:h-auto py-7 lg:py-0 right-0 rounded transition-all duration-500 ease-in-out z-20",
              isMobileMenu ? "w-64 pl-10 lg:pl-0" : "w-0"
            )}
          >
            <div
              className={cn(
                "lg:hidden block size-7 absolute right-3 top-2",
                isMobileMenu ? "block" : "hidden"
              )}
              onClick={() => setIsMobileMenu(false)}
            >
              <img
                src={ImageExport.CROSSICON}
                alt="close"
                className="size-full"
              />
            </div>
            {menuData?.map((data) => {
              return (
                <Link
                  href={data.path}
                  className="flex items-center gap-5 mb-5 lg:mb-0"
                  key={data.id}
                  onClick={handleMobileMenuClose}
                >
                  <h2
                    className={cn(
                      "group flex items-center mobile:text-base text-sm font-Public_Sans cursor-pointer hover:text-lightGreen transition-all duration-300 ease-in",
                      data.path === pathname
                        ? "text-lightGreen font-semibold"
                        : "text-white font-normal text-opacity-80"
                    )}
                  >
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-10p mr-2p transition-all duration-300 ease-in-out",
                        data.path === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-18p mr-1 transition-all duration-300 ease-in-out",
                        data.path === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    {data.menu}
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-10p ml-1 transition-all duration-300 ease-in-out",
                        data.path === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-18p ml-2p transition-all duration-300 ease-in-out",
                        data.path === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                  </h2>
                  <div className="h-full lg:block hidden">
                    <img src={ImageExport.MENUBORDER} className="h-full" />
                  </div>
                </Link>
              );
            })}
            <div className="relative block sm:hidden mb-5">
              <div
                className="border border-white rounded-xl px-4 w-fit h-10 flex gap-2 items-center justify-center bg-transparent text-sm text-white font-medium font-Public_Sans cursor-pointer"
                onClick={() => setIsLanguage(!isLanguage)}
              >
                English
                <img
                  src={ImageExport.BOTTOMARROW}
                  className=""
                  alt="bottom arrow"
                />
              </div>
              <div
                className={cn(
                  "absolute top-12 border rounded-xl w-full border-lightGreen px-5 flex flex-col gap-5 py-3",
                  isLanguage ? "block" : "hidden"
                )}
              >
                <p className="text-white font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300">
                  French
                </p>
              </div>
            </div>
            <Link
              href="/contactUs"
              onClick={handleMobileMenuClose}
              className="border border-lightGreen rounded-xl px-4 w-fit h-10 flex items-center justify-center bg-transparent hover:bg-lightGreen hover:text-white text-sm text-lightGreen font-medium font-Public_Sans transition-all duration-300 ease-out sm:hidden"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5 absolute sm:right-14 right-7">
          <div className="relative sm:block hidden">
            <div
              className="border border-white rounded-xl px-4 w-fit h-10 flex gap-2 items-center justify-center bg-transparent text-sm text-white font-medium font-Public_Sans cursor-pointer"
              onClick={() => setIsLanguage(!isLanguage)}
            >
              English
              <img
                src={ImageExport.BOTTOMARROW}
                className=""
                alt="bottom arrow"
              />
            </div>
            <div
              className={cn(
                "absolute top-12 border rounded-xl w-full border-lightGreen px-5 flex flex-col gap-5 py-3",
                isLanguage ? "block" : "hidden"
              )}
            >
              <p className="text-white font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300">
                French
              </p>
            </div>
          </div>
          <Link
            href="/contactUs"
            className="border border-lightGreen rounded-xl px-4 w-fit h-10 sm:flex hidden items-center justify-center bg-transparent hover:bg-lightGreen hover:text-white text-sm text-lightGreen font-medium font-Public_Sans transition-all duration-300 ease-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
