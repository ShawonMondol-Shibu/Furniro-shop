// components/SetupCard.tsx
import Image from "next/image";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
}

export default function SetupCard({ title, imgSrc, description }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Image
        src={imgSrc}
        alt={title}
        width={600}
        height={400}
        className="rounded-md object-cover"
      />
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
