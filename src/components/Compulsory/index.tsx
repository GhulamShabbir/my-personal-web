import Link from "next/link";
import React from "react";
import programmingFundamentals from "../../../public/img/programming.jpg";
import nextjsCourse from "../../../public/img/web.jpg";
import GenAi from "../../../public/img/GenAi.jpg";

import Image from "next/image";

function Compulsory() {
  return (
    <div className="m-auto mb-10 mt-10 w-[95%] lg:w-[90%] xl:w-[1300px]">
      <h1 className="mt-10 text-center text-2xl font-extrabold text-main sm:text-left sm:text-4xl lg:text-4xl">
        Core Courses Sequence
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 xl-lg:grid-cols-4 xl-lg:gap-10">
        <Link
          href={"/compulsory/1"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="programming fundamentals"
                src={programmingFundamentals}
                className=" aspect-video w-full"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>Typescript and Python Programming</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/compulsory/2"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className="box_shadow flex h-full flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="nextjs"
                src={nextjsCourse}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>Web Application development NextJS</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/compulsory/3"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className="box_shadow flex h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div className="w-full">
              <Image
                alt="nextjs"
                src={GenAi}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>GenAI, Database, Cloud Development, and DevOps</text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Compulsory;
