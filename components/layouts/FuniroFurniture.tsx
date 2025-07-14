import Image from "next/image";

const galleryImages = [
  "/images/Rectangle 36.png",
  "/images/Rectangle 37.png",
  "/images/Rectangle 38.png",
  "/images/Rectangle 39.png",
  "/images/Rectangle 40.png",
  "/images/Rectangle 41.png",
  "/images/Rectangle 43.png",
  "/images/Rectangle 44.png",
  "/images/Rectangle45.png",
];

export default function FuniroFurniture() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Share your setup with <br />
        <span className="text-gray-300">#FuniroFurniture</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className={`relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md`}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
