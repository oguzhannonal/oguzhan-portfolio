import Image from "next/image";
import profile from "@/app/public/images/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hire() {
  return (
    <div className="mt-[120px] flex justify-between ">
      <div className="flex flex-col pr-[148px]">
        <div className="font-semibold text-2xl">Hi I am</div>
        <div className="font-semibold text-[32px]">Oguzhan Onal</div>
        <div>
          <div className="font-bold text-8xl self-start">Fullstack</div>

          <div className="font-bold text-8xl ml-32">Developer</div>
        </div>
        <div className="mt-7 text-[21px] font-regular">
          Design and code frontend, backend applications with passion
        </div>
        <button className="bg-orange-500 text-white rounded-[5px] px-4 py-2  grow-0 w-max  mt-5 hover:bg-orange-400 transition-colors duration-300">
          Contact Me
        </button>
      </div>
      <div className="flex flex-col">
        <Image
          src={profile}
          alt={"Image of Oguzhan Onal"}
          width={598}
          height={617}
          className="rounded-full"
        ></Image>
        <div className="flex mx-auto mt-9 gap-6 ">
          <FaGithub className="text-3xl"></FaGithub>
          <FaLinkedin className="text-3xl"></FaLinkedin>
        </div>
      </div>
    </div>
  );
}
