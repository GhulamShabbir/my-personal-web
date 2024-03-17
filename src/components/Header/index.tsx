"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/img/logo.jpg";
import ChakraMenu from "../ChakraMenu";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CompulsoryData, tracks } from "@/data";

const navLinks = [
  { title: "home", link: "/", id: "1" },
  { title: "about us", link: "/about-us", id: "2" },
  { title: "result", link: "/result", id: "5" },
  { title: "FAQ's", link: "/faqs", id: "3" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-main font-medium print:hidden ${
          !open && "hidden"
        }`}
      >
        <div className="absolute right-5 top-5 ">
          <RxCross1
            className="text-white"
            size={25}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="m-auto mt-10 flex w-[90%] flex-col whitespace-nowrap text-base font-normal text-white">
          {navLinks.map((item) => (
            <Link href={item.link} onClick={() => setOpen(false)} key={item.id}>
              <div className="whitespace-nowrap border-b border-[#1468a5] py-5 capitalize">
                {item.title}
              </div>
            </Link>
          ))}

          <div
            className={`py-5 ${!showMenu && "border-b"} border-[#1468a5]`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="flex items-center justify-between">
              Courses
              <IoIosArrowDown size={16} />
            </div>
          </div>

          <div
            className={`overflow-y-auto overflow-x-hidden rounded-xl bg-[#216fa7] ${
              showMenu ? "h-[250px]" : "h-0 overflow-hidden"
            }`}
          >
            <h1 className="mt-3 px-2 text-center text-lg font-bold text-white">
              Core Courses
            </h1>
            {CompulsoryData.map((val, index) => {
              return (
                <Link
                  onClick={() => setOpen(false)}
                  key={index}
                  href={`/compulsory/${val.id}`}
                >
                  <div
                    className={`border-b border-[#3695d8] py-3 pl-2 text-sm text-white sm:text-base`}
                  >
                    {val.text}
                  </div>
                </Link>
              );
            })}
            <h1 className="mt-3 px-2 text-center text-lg font-bold text-white">
              Advanced Courses
            </h1>
            {tracks.map((val, index) => {
              return (
                <Link
                  onClick={() => setOpen(false)}
                  key={index}
                  href={`/tracks/${val.id}`}
                  className="w-full"
                >
                  <p
                    className={`w-full overflow-hidden truncate whitespace-break-spaces border-b border-[#ffffff] px-2 py-3 text-center text-sm text-white sm:text-base`}
                  >
                    <span className="font-bold">{index + 1})&nbsp;</span>
                    {val.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
        <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              className="w-[60px] rounded-full sm:w-[80px] md:w-[90px]"
            />
          </Link>
          <div className="mx-5 hidden items-center gap-5 text-[#FAF9F6] last:gap-0 sm:flex lg:gap-10">
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className="menu_btns whitespace-nowrap uppercase">
                  {item.title}
                </div>
              </Link>
            ))}

            <ChakraMenu screen="large" open={open} setOpen={setOpen} />
          </div>
          <Link href="/apply">
            <div className="apply-now-button-transition z-20 whitespace-nowrap rounded-full bg-[#b21e35] px-8 py-2.5 uppercase text-white shadow-lg">
              Apply Now
            </div>
          </Link>
          <div className="block sm:hidden">
            <FiMenu
              size={24}
              className="text-white"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
