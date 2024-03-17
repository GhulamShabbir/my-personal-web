import { Hero, Compulsory, Advance, Text } from "@/components";
import OfferingCard from "@/components/offeringCard/OfferingCard";
import { offeringData } from "@/data/Data";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Text />
      <div className="">
        <h1 className="text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none lg:text-6xl">
          We are proud to offer
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
          {offeringData.map((data, i) => (
            <OfferingCard data={data} key={i} />
          ))}
        </div>
      </div>
      <Compulsory />
      <Advance />
    </main>
  );
}
