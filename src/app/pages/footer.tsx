import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="border-box w-full h-56 bg-[#f8f8f8] mt-20 md:mt-40">
        <div className="h-40 flex  flex-col text-center  gap-10 md:gap-5  justify-between py-2 md:py-4">
          <h1 className="font-normal text-[16px] md:text-[21px]"></h1>
          <div className="flex mx-auto gap-4 text-[16px] md:text-[21px]">
            <a href="#" className="hover:text-orange-300">
              Home
            </a>
            <a href="#services" className="hover:text-orange-300">
              Services
            </a>
            <a href="#about" className="hover:text-orange-300">
              About
            </a>
            <a href="#contact" className="hover:text-orange-300">
              Contact
            </a>
          </div>
          <div className="self-center">
            <div className="flex text-[21px] gap-4">
              <a href="https://github.com/oguzhannonal" target="_blank">
                <FaGithub className="hover:fill-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/oguzhanonal/"
                target="_blank"
              >
                <FaLinkedin className="hover:fill-slate-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-box h-16 bg-[#545454] flex text-white ">
          <p className="margin-auto self-center mx-auto text-[16px] md:text-[21px]">
            © 2024 Oguzhan Onal All Rights Reserved , Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
