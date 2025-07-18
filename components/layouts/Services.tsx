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
    <section className="bg-(--bgPrimary) px-10 py-32 flex gap-20 flex-wrap items-center justify-center">
      {services.map((service: serviceType, i: number) => (
        <div key={i} className="flex items-center gap-2 ">
          <service.icon size={60} />
          <div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-xl font-medium text-(--textGray)">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
