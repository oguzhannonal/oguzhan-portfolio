import Image from "next/image";
import backend from "@/app/public/images/backend.png";
import web from "@/app/public/images/web.png";
export default function Services() {
  return (
    <div className="mt-[70px] text-center font-regular text-[21px]">
      <h1 className="text-[65px] font-semibold">Services</h1>
      <p>I can help you with the following services:</p>

      <div className="grid grid-cols-3 justify-items-center">
        <div className="box-border h-[21.5rem] w-[20rem] bg-neutral-800" >
          <div className="flex flex-col items-start">
            <Image src={backend} alt={"Backend"} width={72} height={82} ></Image>
            <h1 className="font-bold text-2xl mt-3">Backend</h1>
          </div>
        </div>
        <div className="box-border h-[21.5rem] w-[20rem] bg-slate-300">
          <div >
            <Image src={web} alt={"web"} width={72} height={82}></Image>
            <h1>Frontend</h1>
          </div>
        </div>
        <div className="box-border h-[21.5rem] w-[20rem] bg-zinc-500">
          <div>
            <Image src={backend} alt={"Backend"} width={72} height={82}></Image>
            <h1>Python</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
