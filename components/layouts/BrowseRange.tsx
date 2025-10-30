import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

interface dataType {
  title: string;
  image: string;
}
export default function BrowseRange() {
  const rangeData = [
    { title: "Dining", image: "/images/image.png" },
    { title: "Living", image: "/images/image1.png" },
    { title: "Bedroom", image: "/images/image2.png" },
  ];
  return (
    <main className="py-20">
      <div className="text-center mb-10">
        <Title className="text-[36px]"> Browse The Range</Title>
        <p className="text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {rangeData.map((data: dataType, i) => (
          <div key={i} className="rounded-lg  group overflow-hidden">
            <div className="w-[381px] h-[480px] overflow-hidden rounded-2xl">
              <Image
                src={data.image}
                width={381}
                height={480}
                alt="range image"
                className="rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center mt-8">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
