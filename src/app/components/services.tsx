import Image, { StaticImageData } from "next/image";
import backend from "@/app/public/images/backend.png";
import web from "@/app/public/images/web.png";

interface ServiceCardProps {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}
const servicesData = [
  {
    src: backend,
    alt: "Backend",
    title: "Backend",
    description: "Database interaction, server-side logic, and API services.",
  },
  {
    src: web,
    alt: "Frontend",
    title: "Frontend",
    description: "Pixel perfect, responsive, and interactive web applications.",
  },
  {
    src: backend,
    alt: "Python",
    title: "Python",
    description: "Scripting, automation, and data processing with Python.",
  },
];

function ServiceCard({ src, alt, title, description }: ServiceCardProps) {
  return (
    <div className="box-border h-[20rem] w-[20rem] bg-[#f8f8f8] rounded-[14px]">
      <div className="px-4 py-12">
        <div className="w-[72px] h-[82px]">
          <Image
            src={src}
            alt={alt}
            width={72}
            height={82}
            className="object-cover"
          />
        </div>
        <h1 className="font-semibold text-2xl  text-start mt-6">{title}</h1>
        <p className="text-start font-regular text-[19px] mt-6">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="mt-[70px] text-center font-regular text-[21px] self-center">
      <h1 className="text-[65px] font-semibold">Services</h1>
      <p>I can help you with the following services:</p>

      <div className="grid grid-cols-3 gap-4 justify-items-center mt-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.src}
            alt={service.alt}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
