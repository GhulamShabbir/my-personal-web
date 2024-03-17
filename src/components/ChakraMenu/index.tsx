"use client";

import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CompulsoryData, tracks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ChakraMenu({
  screen,
  open,
  setOpen,
}: {
  screen: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <Menu>
      <div
        className={`${screen === "small" && "border-b border-[#1468a5] py-5"}`}
      >
        <MenuButton className="" as={Button} rightIcon={<ChevronDownIcon />}>
          COURSES
        </MenuButton>
      </div>
      <MenuList
        className={`box_shadow h-[300px] overflow-y-auto bg-zinc-50 p-7 text-zinc-800 sm:h-auto sm:p-4 ${
          screen === "small" && "w-[90vw]"
        }`}
      >
        <div className="border-b border-zinc-300 pb-5">
          <h1 className="mb-2 text-lg font-bold text-zinc-800 sm:text-xl">
            Core Courses
          </h1>
          {CompulsoryData.map((val, index) => {
            let active = pathname.startsWith(`/compulsory/${val.id}`);
            return (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                href={`/compulsory/${val.id}`}
              >
                <MenuItem
                  className={`text-sm text-zinc-600 sm:text-base ${
                    active ? "bg-zinc-200" : "hover:text-main"
                  } py-[5px] pl-2`}
                >
                  {val.text}
                </MenuItem>
              </Link>
            );
          })}
        </div>
        <div className="mt-5">
          <h1 className="mb-2 text-lg font-bold text-zinc-800 sm:text-xl">
            Advanced Courses
          </h1>
          {tracks.map((val, index) => {
            let active = pathname.startsWith(`/tracks/${val.id}`);
            return (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                href={`/tracks/${val.id}`}
              >
                <MenuItem
                  className={`text-sm text-zinc-600 sm:text-base ${
                    active ? "bg-zinc-200" : "hover:text-main"
                  } py-[5px] pl-2`}
                >
                  {val.name}
                </MenuItem>
              </Link>
            );
          })}
        </div>
      </MenuList>
    </Menu>
  );
}

export default ChakraMenu;
