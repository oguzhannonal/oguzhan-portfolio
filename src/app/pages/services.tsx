import Image, { StaticImageData } from "next/image";
import backend from "@/app/public/images/backend.png";
import web from "@/app/public/images/web.png";

export default function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-[1400px] p-4 text-[16px] md:text-[21px] mt-20 md:mt-40">
        <h1 className="font-bold text-[40px] text-center md:text-[65px]">
          Services
        </h1>
        <p>
          My expetise areas are listed below. I can help you with your projects
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3 text-[14px] md:text-[16px]">
          <div className="box-border bg-[#f8f8f8] rounded-[14px]">
            <div className="px-4 py-12 ">
              <div className="w-[72px] h-[82px] mb-4">
                <Image
                  src={backend as StaticImageData}
                  alt="backend"
                  width={72}
                  height={82}
                  className=" object-cover"
                />
              </div>

              <h1 className="font-semibold mb-4 text-[16px] md:text-[21px]">
                Backend Development
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>
          </div>
          <div className="box-border bg-[#f8f8f8] rounded-[14px]">
            <div className="px-4 py-12 ">
              <div className="w-[72px] h-[82px] mb-4">
                <Image
                  src={web as StaticImageData}
                  alt="web"
                  width={72}
                  height={82}
                  className="object-fit"
                />
              </div>
              <h1 className="font-semibold mb-4 text-[16px] md:text-[21px]">
                Frontend Development
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>
          </div>
          <div className="box-border bg-[#f8f8f8] rounded-[14px]">
            <div className="px-4 py-12 ">
              <div className="w-[72px] h-[82px] mb-4">
                <Image
                  src={backend as StaticImageData}
                  alt="python"
                  width={72}
                  height={82}
                  className="object-cover"
                />
              </div>
              <h1 className="font-semibold mb-4 text-[16px] md:text-[21px]">
                Python
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
