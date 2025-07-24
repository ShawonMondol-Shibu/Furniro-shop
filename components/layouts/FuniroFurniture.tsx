import Image from "next/image";

const galleryImages: string[] = [
  "/images/Rectangle36.png",
  "/images/Rectangle37.png",
  "/images/Rectangle38.png",
  "/images/Rectangle39.png",
  "/images/Rectangle40.png",
  "/images/Rectangle41.png",
  "/images/Rectangle43.png",
  "/images/Rectangle44.png",
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
              fill={true}
              className="hover:scale-105 w-full h-full transition-transform duration-300 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
