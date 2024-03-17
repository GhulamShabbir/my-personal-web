import { IAdmitCard } from "@/types";
import govtLogo from "../../../public/img/logo.png";
import Image from "next/image";

export default function PrintableAdmitCard({ data }: { data: IAdmitCard }) {
  return (
    <div className="hidden w-[800px] border-2 border-gray-800 bg-red-400 p-10 print:block">
      <div className="flex items-center">
        <Image
          src={govtLogo}
          alt="govt sindh logo"
          width={90}
          className="w-[70px] sm:w-[80px] md:w-[90px]"
        />
        <h1 className="text-center text-3xl font-bold text-main">
          Cyberabad Initiative for
          <br />
          Artificial Intelligence, Web 3.0 & Cybersecurity
        </h1>
      </div>
      <h2 className="my-7 text-center text-3xl font-bold text-black">
        Entry Test Admit Card
      </h2>
      <div className="mb-6 flex items-center justify-evenly border-b border-zinc-500 pb-6">
        <div className="fields">
          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Student Name :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">
              {data.fullName}
            </p>
          </div>

          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Father&apos;s Name :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">
              {data.fatherName}
            </p>
          </div>

          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Student CNIC Number :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">
              {data.cnic}
            </p>
          </div>

          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Student Reg Number :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">
              {`${data.studentId}`.padStart(8, "0")}
            </p>
          </div>

          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Date of Registration :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">
              {`${new Date(data.dateOfRegistration).toLocaleDateString()}`}
            </p>
          </div>

          <div className="my-1 flex text-lg">
            <h6 className="w-52 font-bold">Venue :</h6>
            <p className="w-60 border-b-2 border-gray-700 capitalize">FCCI </p>
          </div>
        </div>
        <div className="image order-last flex h-40 w-40 items-center justify-center border-2 border-dotted border-gray-900 text-center">
          Paste
          <br />
          Photograph
          <br />1 X 1
        </div>
      </div>

      <h2 className="my-2 text-lg font-bold">Instructions :</h2>
      <ul className="my-2 pl-6">
        <li>
          Please bring your original CNIC or B-Form and admit card hard copy.
        </li>
        <li>Details and date of the entrance exam will be emailed to you.</li>
      </ul>
    </div>
  );
}
