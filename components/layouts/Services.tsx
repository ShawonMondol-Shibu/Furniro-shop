import React, { ElementType } from "react";
import { BadgeCheck, Headset, Trophy, Truck } from "lucide-react";
interface serviceType {
  icon: ElementType;
  title: string;
  desc: string;
}
export default function Services() {
  const services = [
    { icon: Trophy, title: "High Quality", desc: "crafted from top materials" },
    { icon: BadgeCheck, title: "Warranty Protection", desc: "Over 2 years" },
    { icon: Truck, title: "Free Shipping", desc: "Order over 150 $" },
    { icon: Headset, title: "24 / 7 Support", desc: "Dedicated support" },
  ];
  return (
    <section className="bg-(--bgPrimary) px-5 py-32 grid gap-10 lg:grid-cols-4 md:grid-cols-2 items-center justify-center ">
      {services.map((service: serviceType, i: number) => (
        <div key={i} className="flex items-center gap-2 m-auto">
          <service.icon size={60} />
          <div>
            <h3 className="xl:text-2xl md:text-xl font-semibold">{service.title}</h3>
            <p className="xl:text-xl md:text-lg font-medium text-(--textGray)">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
