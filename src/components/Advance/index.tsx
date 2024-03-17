import Link from "next/link";
import React from "react";
import Blockchain from "../../../public/img/Blockchain1.webp";
import Metaverse from "../../../public/img/metaverse.jpg";
import HealthCare from "../../../public/img/healthcare.webp";
import Banking from "../../../public/img/banking.jpeg";
import Engineering from "../../../public/img/aiInEngineering.jpg";
import Sales from "../../../public/img/ai-marketing-sales-blog.webp";
import IOT from "../../../public/img/IoT-with-AI-1-1.png";
import CyberSecurity from "../../../public/img/cybersecurity.jpeg";
import Image from "next/image";

function Advance() {
  return (
    <div className="m-auto mb-10 mt-20 w-[95%] lg:w-[90%] xl:w-[1300px]">
      <h1 className="mt-10 text-center text-2xl font-extrabold text-main sm:text-left sm:text-4xl lg:text-4xl">
        Advanced Courses with GenAI Integration
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 xl-lg:grid-cols-4 xl-lg:gap-10">
        <Link
          href={"/tracks/wbg"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className="box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Artificial Intelligence"
                src={Blockchain}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>Web 3.0 and Blockchain with AI Integration</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/m3g/"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Web 3 and Metaverse"
                src={Metaverse}
                className="aspect-video  w-full object-fill"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>Metaverse and 3D with AI Integration</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/hmg"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Cloud-Native Computing"
                src={HealthCare}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center px-4">
              <text>Health Care & Medical GenAI</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/gfbs"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Ambient Computing and IoT"
                src={Banking}
                className=" aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>GenAI for Accounting, Finance,</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/ges"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center  overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Genomics and Bioinformatics"
                src={Engineering}
                className="aspect-video  w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>GenAI for Engineers Specializations</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/gsms"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Network Programmability and Automation"
                src={Sales}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>GenAI for Sales and Marketing Specialization</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/gaits"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div>
              <Image
                alt="Network Programmability and Automation"
                src={IOT}
                className="aspect-video w-full object-cover"
                height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center   px-4">
              <text>GenAI for Automation and IoT Specialization</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/gcs"}
          className="transition-all duration-200 hover:scale-105"
        >
          <div className=" box_shadow flex  h-fit flex-col items-center justify-center overflow-hidden rounded-lg text-center text-lg font-bold text-zinc-600 ">
            <div className="w-full">
              <Image
                alt="Network Programmability and Automation"
                src={CyberSecurity}
                className="aspect-video w-full object-cover"
                // height={"300"}
              />
            </div>
            <div className="flex h-[70px] items-center justify-center px-4">
              <text>GenAI for Cyber Security</text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Advance;
