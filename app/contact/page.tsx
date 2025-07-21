import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import Services from "@/components/layouts/Services";
import { Clock, LocationEditIcon, Phone } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

interface contactType {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export default function Page() {
  const contacts = [
    {
      icon: LocationEditIcon,
      title: "Address",
      desc: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      icon: Phone,
      title: "Phone",
      desc: "Mobile: +(84) 546-6789 \n Hotline: +(84) 456-6789",
    },
    {
      icon: Clock,
      title: "Working Time",
      desc: "Monday-Friday: 9:00 - 22:00 \n Saturday-Sunday: 9:00 - 21:00",
    },
  ];
  return (
    <div>
      <HeaderBreadCrumb
        title="Contact"
        breadCrumbPage="Home"
        breadCrumbLink="Contact"
      />

      <main className="mt-20">
        <div className="w-xl text-center m-auto">
          <h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
          <p className="text-base font-normal">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <section className="m-auto mt-30 mb-20 flex gap-40 items-start justify-center">
          <div className="space-y-10">
            {contacts.map((contact: contactType, i) => (
              <div key={i} className="flex gap-5 items-start">
                <contact.icon size={23} />
                <div className="w-56">
                  <h4 className="text-2xl font-semibold">{contact.title}</h4>
                  <p className="text-base font-normal">{contact.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </section>
        <Services />
      </main>
    </div>
  );
}
