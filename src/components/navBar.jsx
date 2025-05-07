import PulsatingDot from "./PulsatingDot";
import { FaDiscord } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";


export default function NavBar() {
  return (
    <div className="flex w-full relative flex-col z-10 justify-center items-center">
        <div className="w-full h-25 absolute top-0 bg-black -z-1"></div>
        <div className=" border-b-[3px] w-[90%] border-black/10 gap-2 pt-10 flex flex-col justify-center items-center">
            <div className="w-[100px] h-[100px] shadow-[0_0_8px_rgba(255,255,255,0.3)] bg-black rounded-full"> <img src="logos/creator-hub-logo.png" alt="" /></div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-medium ml-3">Creators Hub</span>
                <span className="ml-2 text-black/40">Graphic designer, Video editor</span>
                <div className="h-10  flex items-center justify-center w-full">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <span><PulsatingDot /></span>
                        <span>Available</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row p-2 gap-2">
            <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center"><FaDiscord size={20} /></div>
            <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center"><BiLogoInstagramAlt size={20} /></div>
            <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center"><FaLinkedinIn size={20} />
            </div>
        </div>
    </div>
  )
}   