import React from "react";
import Solo1 from "../../../public/imageWebsite.jpg";
import Solo2 from "../../../public/imageWebsite2.jpg";
import Solo3 from "../../../public/imageWebsite3.jpg";
import Image from "next/image";
import Slider from "../Slider";

function Text() {
  return (
    <div className="m-auto mt-10 w-[95%] border-b border-zinc-300 pb-10 sm:mt-20 lg:w-[90%] xl:w-[1300px]">
      {/* <h1 className="m-auto text-center text-xl font-extrabold leading-[1.75rem] text-main sm:text-[32px] sm:leading-[2.5rem] md:w-[95%] xl:text-[36px]">
        Bridging Sectors with GenAI <br />
      </h1> */}
      <h1 className="m-auto text-center text-2xl font-normal leading-[1.75rem] text-main sm:text-[36px] sm:leading-[2.5rem] md:w-[95%] xl:text-[48px]">
        <span className="font-bold">Unleashing Creativity</span> <br />
        <div className="mb-2 h-1" />
        <span>The Marvels of Generative AI Across Industries</span>{" "}
      </h1>
      <p className="mb-8 mt-7 text-justify text-[1rem] font-medium tracking-normal text-black sm:mt-10 sm:text-[1.2rem] sm:tracking-wider xl:text-[1.15rem] ">
        With the introduction of OpenAI&apos;s &nbsp;
        <a href="https://openai.com/gpt-4" className="text-blue-600">
          ChatGPT 4{" "}
        </a>
        &nbsp;and Google&apos;s&nbsp;
        <a
          href="https://deepmind.google/technologies/gemini/ "
          className="text-blue-600"
        >
          Gemini{" "}
        </a>
        , Generative AI is poised to completely transform our lives and work
        landscape. McKinsey & Company estimates that generative AI could add
        $2.6 trillion to $4.4 trillion in economic benefits annually across
        various industries. This will be achieved through increased automation,
        improved decision-making, and personalized experiences. It is
        transformative for tech, businesses, and jobs. It&apos;s critical for
        our survival, that we adopt these technologies. For the first time in
        the history of PAKISTAN, we are Breaking Barriers Between Technologists
        and Venture Capitalists under the leadership of Faisalabad Chamber of
        Commerce and Industry. We will first train you, and then mentor and fund
        you to build world class AI applications across textile and
        other industries.
      </p>
      {/* <div className="m-3 mt-10 grid grid-cols-1 gap-5 sm:m-0 sm:grid-cols-3">
        <Image
          src={Solo1}
          alt="solo1"
          className=" h-[300px] w-full rounded-lg object-cover shadow-2xl shadow-black transition-all duration-200 hover:scale-105"
        />
        <Image
          src={Solo2}
          alt="solo2"
          className=" h-[300px] w-full rounded-lg shadow-2xl shadow-black  transition-all duration-500 hover:scale-105"
        />
        <Image
          src={Solo3}
          alt="solo3"
          className=" h-[300px] w-full rounded-lg object-cover shadow-2xl shadow-black transition-all duration-500 hover:scale-105"
        />
      </div> */}
      <Slider />
    </div>
  );
}

export default Text;
