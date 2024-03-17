import Image from "next/image";
import ziaKhan from "./../../../public/img/ziakhan.jpeg";
import khurramTariq from "./../../../public/img/cover.png";
import azhar from "./../../../public/img/azhr.jpg";
import naveed from "./../../../public/img/naveed.png";
import usman from "./../../../public/img/usman.png";
import saif from "./../../../public/img/saif.png";
import abuhurairah from "./../../../public/img/abuhurairah.png";
import MAslam from "./../../../public/img/Mr.-Muhammad-Aslam.png";
import sajjadArshad from "./../../../public/img/Dr.-Sajjad-Arshad.png";
// import allOne from "./../../../public/img/ONE.jpg";
// import allTwo from "./../../../public/img/TWO.jpg";
import atifMunir from "./../../../public/img/Atif Munir Sheikh.jpg";
import imranMehmood from "./../../../public/img/ImranMehmood.jpg";
import abrarAhmadKhan from "./../../../public/img/Abrar Ahmad Khan.jpg";
import bilalTahir from "./../../../public/img/MuhammadBilal.jpg";
import abdulRAuf from "./../../../public/img/Abdul Rauf.jpg";
import shakeelAhmad from "./../../../public/img/shakeelAhmad.jpg";
import mShafiqKashif from "./../../../public/img/MuhammadShafiqKashif.jpg";
import gulzarAhmad from "./../../../public/img/GulzarAhmad.jpg";
import amirRaza from "./../../../public/img/amirRAza.jpg";
import mTayyab from "./../../../public/img/MuhammadTayyab.jpg";
import akbarPervez from "./../../../public/img/Akbar pervez.jpg";
import mAsghar from "./../../../public/img/Muhammad Asghar.jpg";
import mAsim from "./../../../public/img/Muhammad Asim.jpg";
import zeeshanAkram from "./../../../public/img/ZeeshanAkram.jpg";
import abdulWaheed from "./../../../public/img/Abdul Waheed.jpg";
import sanaullah from "./../../../public/img/Sana Ullah Khan Niazi.jpg";
import chKhadimHussainMaan from "./../../../public/img/khadimHussainmaan.jpg";
import zafarIqbal from "./../../../public/img/ZafarIqbal.jpg";
import ghulamHussain from "./../../../public/img/Ghulam Husaain.jpg";
import maqsoodAkhter from "./../../../public/img/MaqsoodAkhter.jpg";
import faisalAli from "./../../../public/img/faisalAli.jpg";
import manzoorMaqboolKhan from "./../../../public/img/Manzoor MaqboolKhan.jpg";
import mAsif from "./../../../public/img/MuhammadAsif.jpg";
import shafiqHussainShah from "./../../../public/img/ShafiqHussainShah.jpg";
import female from "./../../../public/img/female.jpg";
const page = () => {
  return (
    <main>
      <h1 className="my-4 mt-8 text-center text-4xl font-bold md:text-5xl">
        Meet Our Team{" "}
      </h1>
      <h2 className="mb-4 text-center text-3xl font-semibold">Leadership</h2>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 px-20 lg:grid-cols-4">
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={khurramTariq}
            alt={""}
            className="h-[300px] w-[300px] rounded-full"
          />
          <h1 className="my-4 text-center text-5xl font-bold">
            Dr. Khurram Tariq
          </h1>
          <p className="text-center font-light">
            CEO of Kay & Emms (Pvt) Limited
            <br />
            President of FCCI
          </p>
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={ziaKhan}
            alt={""}
            className="h-[300px] w-auto rounded-full"
          />
          <h1 className="my-4 text-center text-5xl font-bold">Zia Khan</h1>
          <p className="text-center font-light">
            CEO of Panacloud
            <br />
            COO PIAIC
          </p>
        </div>
      </div>

      <div className="m-auto my-8 h-0.5 w-2/3 bg-black"></div>
      <h2 className="mb-4 text-center text-3xl font-semibold">
        Proud Supportive Team{" "}
      </h2>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 px-20 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={sajjadArshad}
            alt={""}
            className="h-[300px] w-[300px] rounded-full"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Dr. Sajjad Arshad{" "}
          </h1>
          <p className="text-center font-light">Senior Vice President, FCCI</p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={MAslam}
            alt={""}
            className="aspect-square h-[300px] w-[300px] rounded-full"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Dr. Muhammad Aslam{" "}
          </h1>
          <p className="text-center font-light">Vice President, FCCI</p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={azhar}
            alt={""}
            className="h-[300px] w-auto rounded-full"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Ch. Muhammad Azhar
          </h1>
          <p className="text-center font-light">
            Executive member of FCCI, (Project Convener)
          </p>
        </div>
      </div>
      <div className="m-auto my-8 h-0.5 w-2/3 bg-black"></div>
      <h2 className="mb-4 text-center text-3xl font-semibold">Development</h2>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={naveed}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Naveed Sarwar
          </h1>
          <p className="text-center font-light">CEO of Techloset Solution</p>
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={abuhurairah}
            alt={""}
            className="h-[200px] w-auto rounded-full border"
          />
          <h1 className="my-4 text-center text-4xl font-light">Abu Hurairah</h1>
          <p className="text-center font-light">Trainer PIAIC, Freelancer</p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={usman}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            M. Usman Anwar{" "}
          </h1>
          <p className="text-center font-light">CEO Unial Solutions</p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={saif}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Saif ul Qahhar
          </h1>
          <p className="text-center font-light">Principle - Oxford College</p>
        </div>
      </div>
      <div className="m-auto my-8 h-0.5 w-2/3 bg-black"></div>
      <h2 className="mb-4 text-center text-3xl font-semibold">
        FCCI Executive Members
      </h2>
      <div className="flex flex-col px-8 lg:px-16">
        <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={atifMunir}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">Atif Munir</h1>
          </div>
          {/* <div className="col-span-1"></div> */}
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={imranMehmood}
              alt={""}
              className="h-[200px] w-auto rounded-full border"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              Imran Mehmood{" "}
            </h1>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={abrarAhmadKhan}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              Abrar Ahmad Khan{" "}
            </h1>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={bilalTahir}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              Bilal Tahir
            </h1>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col px-8 lg:px-16">
        <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={abdulRAuf}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">Abdul Rauf</h1>
          </div>
          {/* <div className="col-span-1"></div> */}
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={shakeelAhmad}
              alt={""}
              className="h-[200px] w-auto rounded-full border"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              Shakeel Ahmad{" "}
            </h1>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={mShafiqKashif}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              M. Shafiq Kashif{" "}
            </h1>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-evenly">
            <Image
              src={gulzarAhmad}
              alt={""}
              className="h-[200px] w-[200px] rounded-full object-fill"
            />
            <h1 className="my-4 text-center text-4xl font-light">
              Gulzar Ahmad
            </h1>
          </div>
        </div>
      </div>

      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={amirRaza}
            alt={""}
            className="h-[200px] w-auto rounded-full border"
          />
          <h1 className="my-4 text-center text-4xl font-light">Amir Raza </h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={mTayyab}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">M. Tayyab</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={akbarPervez}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">Akbar Perver</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={mAsghar}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">M. Asghar</h1>
        </div>
      </div>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={mAsim}
            alt={""}
            className="h-[200px] w-auto rounded-full border"
          />
          <h1 className="my-4 text-center text-4xl font-light">M. Asim</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={zeeshanAkram}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Zeeshan Akram
          </h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={abdulWaheed}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">Abdul Waheed</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={sanaullah}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Sana Ullah Khan Niazi
          </h1>
        </div>
      </div>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={chKhadimHussainMaan}
            alt={""}
            className="h-[200px] w-auto rounded-full border"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Ch. Khadim Hussain Maan
          </h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={zafarIqbal}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">Zafar Iqbal</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={ghulamHussain}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Ghulam Hussain
          </h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={maqsoodAkhter}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Maqsood Akhtar
          </h1>
        </div>
      </div>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={faisalAli}
            alt={""}
            className="h-[200px] w-auto rounded-full border"
          />
          <h1 className="my-4 text-center text-4xl font-light">Faisal Ali</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={manzoorMaqboolKhan}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Manzoor Maqbool Khan
          </h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={mAsif}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">M. Asif</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={shafiqHussainShah}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">
            Shafiq Hussain Shah
          </h1>
        </div>
      </div>
      <div className="upper_section min-h-96 mt-8 grid grid-cols-2 gap-y-4 px-20 md:grid-cols-4 lg:grid-cols-8">
        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 hidden flex-col items-center justify-evenly lg:flex"></div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={female}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">Farah Haris</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-evenly">
          <Image
            src={female}
            alt={""}
            className="h-[200px] w-[200px] rounded-full object-fill"
          />
          <h1 className="my-4 text-center text-4xl font-light">Haniah Javed</h1>
        </div>
        <div className="col-span-2 hidden flex-col items-center justify-evenly lg:flex"></div>
      </div>
    </main>
  );
};

export default page;
