import Image from "next/image";
import React from "react";
import Link from "next/link";
import Cover from "../../../public/img/cover.png";

function Hero() {
  return (
    <div
      className={` relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/img/building1.jpeg')] bg-cover`}
    >
      <div className="absolute inset-0 -z-50 h-full w-full bg-gradient-to-b from-zinc-100 via-zinc-100 to-transparent lg:bg-gradient-to-r"></div>

      <div className="col-span-2 h-fit w-full">
        <div className="w-full bg-zinc-100 py-8">
          <h1 className="leading-1 text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none lg:text-6xl">
            Faisalabad&apos;s&nbsp;
            <br className="block md:hidden" />
            <span className="text-[1.75rem] font-normal sm:text-4xl lg:text-5xl">
              Journey towards
            </span>
            <br className="block md:hidden" />
            &nbsp;Cyberabad
          </h1>

          <h1 className="mt-2 whitespace-normal text-center text-[1.25rem] font-normal leading-[2rem]  tracking-wider text-sub1 sm:text-4xl sm:leading-[3rem] lg:text-[2.5rem]">
            Where threads weave innovation through GenAI.
          </h1>
        </div>
        <div className="z-10 mx-auto block h-[1px] w-11/12 rounded bg-main" />
      </div>
      <div className="z-50 m-auto grid h-full w-[95%] lg:w-[90%]  lg:grid-cols-3 xl:w-[1300px]">
        <div className="col-span-1 h-fit w-full pt-5 md:py-4 lg:col-span-2">
          <h1 className="mt-5 w-full text-center text-[1.5rem] font-semibold leading-[2rem] text-main sm:text-4xl sm:leading-[3rem] lg:text-left lg:text-[2.5rem]">
            Initiative for Cloud Applied Generative AI
            <span className="text-sub1">&nbsp;by&nbsp;</span>
            <span className="tracking-normal">
              Faisalabad Chamber of Commerce and Industry (FCCI)
            </span>
          </h1>

          <div className="mb-7 flex flex-col items-center sm:mt-10 sm:gap-5 lg:mb-0">
            <p className="w-full text-center text-lg font-medium text-sub1 sm:text-xl lg:text-left">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Advanced Specializations
              Available for Computer Science, Medical, Healthcare, Engineering,
              Marketing, Accounting, Finance, Banking and Cybersecurity
              Professionals. For the first time in the history of PAKISTAN,
              Breaking Barriers Between Technologists and Venture Capitalists
              with the leadership of Faisalabad Chamber of Commerce and
              Industry.
            </p>
            <Link href="/apply">
              <div className="apply-now-button-transition z-20 whitespace-nowrap rounded-full bg-[#b21e35] px-8 py-2.5 uppercase text-white shadow-lg">
                Apply For Training Now
              </div>
            </Link>
            {/* <Counter /> */}
          </div>
        </div>
        <div className="relative flex h-full w-full items-center justify-center px-5 py-10 md:m-auto lg:col-span-1">
          <div className="relative h-auto sm:min-w-[70%]">
            <div className="z-10 flex h-auto items-center justify-center overflow-hidden rounded-xl border-2 border-main sm:min-w-[70%]">
              <Image
                src={Cover}
                alt="FCCI"
                className="z-10 h-auto sm:min-w-[70%]"
              />
            </div>
            <div
              className="right-50% absolute -bottom-5 left-[35%] z-50 h-auto w-48 origin-center rounded-lg bg-white lg:left-10 xl:left-24"
              title="Faisalabad Chamber of Commerce & Industry"
            >
              <p className="text-center text-lg font-semibold text-main">
                Dr. Khurram Tariq
              </p>
              <p className="text-center font-medium text-sub1">
                President of{" "}
                <abbr title="Faisalabad Chamber of Commerce & Industry">
                  FCCI
                </abbr>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
