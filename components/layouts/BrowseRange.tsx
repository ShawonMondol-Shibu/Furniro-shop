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
        <Title> Browse The Range</Title>
        <p className="text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex items-center justify-center gap-10">
        {rangeData.map((data: dataType, i) => (
          <div key={i} className="rounded-lg ">
            <Image
              src={data.image}
              width={381}
              height={480}
              alt="range image"
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center mt-8">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
