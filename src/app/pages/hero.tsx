import Image from "next/image";
import profile from "@/app/public/images/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="md:col-span-2">
          <div className="font-semibold text-[21px] md:text-[24px]">
            Hi I am{" "}
          </div>
          <div className="font-semibold text-[21px] md:text-[24px] text-orange-400">
            Oguzhan Onal
          </div>
          <div className="flex flex-col max-w-[300px]  md:max-w-[700px]">
            <div className=" font-bold text-[40px] md:text-[100px] ">
              Fullstack
            </div>
            <div className="self-end font-bold text-[40px] md:text-[100px]">
              Developer
            </div>
          </div>
          <div className="flex flex-col">
            <p className="my-3 text-[16px] md:text-[21px] ">
              Design and code frontend, backend applications with passion
            </p>
            <div className="self-start">
              <button className="bg-orange-500 text-white rounded p-2   grow-0  w-max hover:bg-orange-400 transition-colors duration-300  self-end ">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 ">
          <div className="max-h-[420px] max-w-[420px] min-h-">
            <Image src={profile} alt="profile" className="rounded-full" />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-[21px]">
            <a href="https://github.com/oguzhannonal" target="_blank">
              <FaGithub className="hover:fill-slate-700" />
            </a>
            <a href="https://www.linkedin.com/in/oguzhanonal/" target="_blank">
              <FaLinkedin className="hover:fill-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
