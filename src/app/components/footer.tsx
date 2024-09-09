import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="box-border bg-[#f8f8f8] h-[23rem] mt-52">
      <div className="h-4/6 bg-[#f8f8f8] flex flex-col items-center">
        <div className="text-center pt-14 self-center font-regular text-[21px]">
          My Logo
        </div>
        <div className="flex mt-10 font-regular text-[21px]">
          <div className="px-4 py-2">Home</div>
          <div className="px-4 py-2">About Me</div>
          <div className="px-4 py-2">Services</div>
          <div className="px-4 py-2">Projects</div>
          <div className="px-4 py-2">Contact</div>
        </div>
        <div className="flex mx-auto mt-9 gap-6 ">
          <FaGithub className="text-3xl"></FaGithub>
          <FaLinkedin className="text-3xl"></FaLinkedin>
        </div>
      </div>
      <div className="h-2/6 bg-black font-regular text-[21px] pt-6">
        <span className="table mx-auto">
          <span className="text-white ">© 2023 </span>
          <span className="text-orange-400">Oguzhan ONAL </span>
          <span className="text-white">All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}
