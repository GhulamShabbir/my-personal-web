"use client";

import Image from "next/image";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image3 from "../../../public/slideShow2.jpg";
import Image2 from "../../../public/slideShow3.jpg";
import Image4 from "../../../public/slideShow4.jpg";
import Image5 from "../../../public/slideShow5.jpg";
import Image6 from "../../../public/slideshow.jpg";
import Image7 from "../../../public/slideShow7.jpg";
import Image8 from "../../../public/slideShow8.jpg";
import Image9 from "../../../public/slideShow9.jpg";
import Image10 from "../../../public/slideshow10.png";
import Image11 from "./../../../public/slideshow11.jpg";
import Image12 from "./../../../public/slideshow12.jpg";
import Image13 from "./../../../public/salideshow13.jpg";
import Image14 from "./../../../public/slideshow14a.jpg";
import Image15 from "./../../../public/slideshow15.jpg";
import Image16 from "./../../../public/slideshow16.jpg";

export default class ImagesCaurosel extends Component {
  render() {
    let data = [
      {
        img: Image2,
        title: "First meeting with the President.",
        text: "First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).",
      },
      {
        img: Image3,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image4,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image5,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image6,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image7,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image8,
        title: "President launching the PIAIC website.",
        text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).",
      },
      {
        img: Image9,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image11,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image12,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image13,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image15,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image14,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image10,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
      {
        img: Image16,
        title: "Starting PIAIC classed for the first time in FSD",
        text: "Starting",
      },
    ];
    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],

      customPaging: (i: number) => (
        <div className="-mt-2 text-xs opacity-0">{i}</div>
      ),
    };
    return (
      <div className="mt-10 w-full">
        <Slider {...settings} className="w-full">
          {data.map((val, index) => {
            return (
              <div
                className="group relative mb-2 cursor-pointer overflow-hidden  px-3 outline-none md:mb-5 xl-lg:px-1"
                key={index}
              >
                <div className="relative overflow-hidden rounded-lg bg-slate-900">
                  <Image
                    src={val.img}
                    className="h-[300px] w-full  object-cover md:h-[600px]"
                    alt={val.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
