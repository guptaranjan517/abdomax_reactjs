/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// component/layout/Header

"use client";

import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import BottomArrow from "../svg/BottomArrow";
import TopArrow from "../svg/TopArrow";
import { menuData } from "@/shared/config";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";
import useClickOutside from "@/shared/lib/useClickOutside";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();
  const t = useTranslations("Index");

  const router = useRouter();

  const { language, setLanguage } = useGlobalStore();

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

  const handleLanguageChange = (nextLocale: "en" | "fr") => {
    if (language !== nextLocale) {
      setLanguage(nextLocale);

      const segments = pathname.split("/");
      segments[1] = nextLocale; // Replace the current locale with the next one
      const newPath = segments.join("/");

      router.replace(newPath); // Then navigate
    }
    setIsLanguageDropdownOpen(false); // Close dropdown after selection
  };

  const homeLink = {
    en: "/en/home",
    fr: "/fr/home",
  };

  const contactLink = {
    en: "/en/contact-us",
    fr: "/fr/contact-us",
  };

  type Language = "en" | "fr";

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsLanguageDropdownOpen(false));

  return (
    <div
      className={cn(
        "z-30 fixed top-0 left-0 right-0 w-full",
        scrollPosition >= 30 ? "backdrop-blur-md" : "bg-white bg-opacity-5"
      )}
    >
      <div className="w-full sm:px-14 px-5 mobile:h-20 h-16 flex items-center justify-between relative">
        <div className="w-full sm:w-fit flex items-center lg:justify-start justify-between gap-5">
          <Link href={homeLink[language as Language]}>
            <div className="mobile:w-40 w-28 mobile:h-20 h-14">
              <img src={ImageExport.LOGO} className="w-full h-full" alt="" />
            </div>
          </Link>
          <div
            className={cn(
              "h-16 lg:block hidden",
              (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) &&
                (pathname.includes("privacy-policy") ||
                  pathname.includes("terms-condition") ||
                  pathname.includes("about-us"))
                ? "whiteMenuBorder"
                : "blackMenuBorder"
            )}
          ></div>
          <div
            className={cn(
              "lg:hidden block mobile:size-9 size-8",
              (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) &&
                (pathname.includes("privacy-policy") ||
                  pathname.includes("terms-condition") ||
                  pathname.includes("about-us"))
                ? "bg-black rounded-lg"
                : ""
            )}
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
            {menuData?.map((data: any) => {
              return (
                <Link
                  href={data.path[language]}
                  className="flex items-center gap-5 mb-5 lg:mb-0"
                  key={data.id}
                  onClick={handleMobileMenuClose}
                >
                  <h2
                    className={cn(
                      "group flex items-center mobile:text-base text-sm font-Public_Sans cursor-pointer hover:text-lightGreen transition-all duration-100 ease-in",
                      data.path[language] === pathname
                        ? "text-lightGreen font-medium"
                        : "text-white font-normal text-opacity-80",
                      data.menu[language] === "Progress" ? "w-[90px]" : "",
                      data.menu[language] === "List of price"
                        ? "w-[120px]"
                        : "",
                      data.menu[language] === "Medical notice"
                        ? "w-[132px]"
                        : "",
                      (pathname.startsWith("/en/") ||
                        pathname.startsWith("/fr/")) &&
                        (pathname.includes("privacy-policy") ||
                          pathname.includes("terms-condition") ||
                          pathname.includes("about-us"))
                        ? "lg:text-txtBlack"
                        : ""
                    )}
                  >
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-10p mr-2p transition-all duration-300 ease-in-out",
                        data.path[language] === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-18p mr-1 transition-all duration-300 ease-in-out",
                        data.path[language] === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    {data.menu[language]}
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-10p ml-1 transition-all duration-300 ease-in-out",
                        data.path[language] === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-l-2 group-hover:border-lightGreen h-18p ml-2p transition-all duration-300 ease-in-out",
                        data.path[language] === pathname
                          ? "border-lightGreen"
                          : "border-transparent"
                      )}
                    ></span>
                  </h2>
                  <div
                    className={cn(
                      "h-16 lg:block hidden",
                      (pathname.startsWith("/en/") ||
                        pathname.startsWith("/fr/")) &&
                        (pathname.includes("privacy-policy") ||
                          pathname.includes("terms-condition") ||
                          pathname.includes("about-us"))
                        ? "whiteMenuBorder"
                        : "blackMenuBorder"
                    )}
                  ></div>
                </Link>
              );
            })}
            <Link
              href={contactLink[language as Language]}
              onClick={handleMobileMenuClose}
              className="border hover:border-lightGreen rounded-xl px-4 w-fit h-10 flex items-center justify-center bg-transparent text-white text-sm hover:text-lightGreen font-medium font-Public_Sans transition-all duration-300 ease-out sm:hidden"
            >
              {t("contact")}
            </Link>
            <div className="relative block sm:hidden mt-5" ref={dropdownRef}>
              <div
                className={cn(
                  "border rounded-xl px-4 w-fit h-10 flex gap-2 items-center justify-center text-sm bg-transparent font-medium font-Public_Sans cursor-pointer",
                  (pathname.startsWith("/en/") ||
                    pathname.startsWith("/fr/")) &&
                    (pathname.includes("privacy-policy") ||
                      pathname.includes("terms-condition") ||
                      pathname.includes("about-us"))
                    ? "border-white text-white"
                    : "border-white text-white"
                )}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                {language === "fr" ? "Français" : "English"}
                {isLanguageDropdownOpen ? <TopArrow /> : <BottomArrow />}
              </div>
              <div
                className={cn(
                  "absolute top-12 border rounded-xl w-fit border-lightGreen px-7 flex flex-col gap-5 py-3",
                  isLanguageDropdownOpen ? "block" : "hidden"
                )}
              >
                <p
                  className={cn(
                    "font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300 mb-5",
                    (pathname.startsWith("/en/") ||
                      pathname.startsWith("/fr/")) &&
                      (pathname.includes("privacy-policy") ||
                        pathname.includes("terms-condition") ||
                        pathname.includes("about-us"))
                      ? "text-white"
                      : " text-white"
                  )}
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </p>
                <p
                  className={cn(
                    "font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300",
                    (pathname.startsWith("/en/") ||
                      pathname.startsWith("/fr/")) &&
                      (pathname.includes("privacy-policy") ||
                        pathname.includes("terms-condition") ||
                        pathname.includes("about-us"))
                      ? "text-white"
                      : " text-white"
                  )}
                  onClick={() => handleLanguageChange("fr")}
                >
                  Français
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 absolute sm:right-14 right-7">
          <div className="relative sm:block hidden" ref={dropdownRef}>
            <div
              className={cn(
                "border rounded-xl px-4 w-32 h-10 flex gap-2 items-center justify-center text-sm bg-transparent font-medium font-Public_Sans cursor-pointer",
                (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) &&
                  (pathname.includes("privacy-policy") ||
                    pathname.includes("terms-condition") ||
                    pathname.includes("about-us"))
                  ? "border-black text-black"
                  : "border-white text-white"
              )}
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              {language === "fr" ? "Français" : "English"}
              {isLanguageDropdownOpen ? <TopArrow /> : <BottomArrow />}
            </div>
            <div
              className={cn(
                "absolute top-12 border rounded-xl w-full border-lightGreen px-5 flex flex-col gap-5 py-3",
                isLanguageDropdownOpen ? "block" : "hidden"
              )}
            >
              <p
                className={cn(
                  "font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300 mb-5",
                  (pathname.startsWith("/en/") ||
                    pathname.startsWith("/fr/")) &&
                    (pathname.includes("privacy-policy") ||
                      pathname.includes("terms-condition") ||
                      pathname.includes("about-us"))
                    ? "text-black"
                    : " text-white"
                )}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </p>
              <p
                className={cn(
                  "font-medium font-Public_Sans text-sm cursor-pointer hover:text-lightGreen transition-colors duration-300",
                  (pathname.startsWith("/en/") ||
                    pathname.startsWith("/fr/")) &&
                    (pathname.includes("privacy-policy") ||
                      pathname.includes("terms-condition") ||
                      pathname.includes("about-us"))
                    ? "text-black"
                    : " text-white"
                )}
                onClick={() => handleLanguageChange("fr")}
              >
                Français
              </p>
            </div>
          </div>
          <Link
            href={contactLink[language as Language]}
            className={cn(
              "border hover:border-lightGreen rounded-xl px-4 w-36 h-10 sm:flex hidden items-center justify-center bg-transparent hover:text-lightGreen text-sm font-medium font-Public_Sans transition-all duration-300 ease-out",
              (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) &&
                pathname.includes("contact-us")
                ? "!border-lightGreen !text-lightGreen"
                : "",
              (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) &&
                (pathname.includes("privacy-policy") ||
                  pathname.includes("terms-condition") ||
                  pathname.includes("about-us"))
                ? "border-black text-black"
                : "border-white text-white"
            )}
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
