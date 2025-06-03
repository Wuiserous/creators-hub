import PulsatingDot from "./PulsatingDot";
import { FaDiscord } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import React, {forwardRef} from "react";

const NavBar = forwardRef((props, ref) => {
  return (
    // Main container: Column layout for mobile, row for large screens
    // Added padding for large screens, and specific height
    <div ref={ref} className="flex w-full relative flex-col z-10 justify-center items-center 
                   lg:flex-row lg:justify-between lg:items-end  lg:h-40">
      
      {/* Background: Covers small area on mobile, full height on large screens */}
      <div className="w-full h-[100px] absolute top-0 bg-black -z-1 
                     lg:h-full"></div>

      {/* Profile Info Section: Logo, Name, Title, Availability */}
      {/* This section itself also changes flex direction for its children on large screens */}
      <div className="border-b-[3px] w-[90%] border-black/10 gap-2 pt-10 pb-4 flex flex-col justify-center items-center
                      lg:border-none lg:w-auto lg:pt-0 lg:pb-0 lg:flex-row lg:items-center lg:gap-4">
        
        {/* Logo */}
        <div className="w-[100px] fancy-btn h-[100px] shadow-[0_0_8px_rgba(255,255,255,0.3)] bg-black rounded-full
                       lg:w-60 lg:h-60 lg:mb-[-120px] lg:ml-[50px] lg:shadow-none"> 
          <img src="logos/creator-hub-logo.png" alt="Creators Hub Logo" className="w-full h-full object-cover rounded-full" />
        </div>
        
        {/* Text Info: Name, Subtitle, Availability */}
        <div className="flex flex-col justify-center relative lg:mb-[-30px]  items-center
                       lg:items-start">
          <div className="flex flex-col justify-center lg:text-left text-center">   
            <span className="text-2xl font-medium ml-3
                         lg:ml-0 lg:text-white lg:text-6xl">Creators Hub</span>
          </div>
          
          {/* Availability */}
          <div onMouseEnter={(e) => {
    e.currentTarget.scrollTo({ top: e.currentTarget.scrollHeight, behavior: 'smooth' });
  }}
  onMouseLeave={(e) => {
    e.currentTarget.scrollTo({ top: 0, behavior: 'smooth' });
  }} className="flex lg:overflow-auto lg:py-1 lg:h-7 flex-col">
            <div className="h-10 flex flex-col lg:flex-row items-center  lg:right-22 lg:opacity-80 justify-center w-fit
                         lg:w-auto lg:h-auto lg:justify-start">
                                      <span className="ml-2 text-black/40
                         lg:ml-0 lg:text-white/60 lg:text-sm lg:ml-2 lg:mr-1">Graphic designer, Video editor</span>
              <div className="flex flex-row gap-1 items-center justify-center
                            lg:text-sm lg:text-green-400 mt-[1px]"> {/* Changed text color for better visibility on black */}
                <span><PulsatingDot color="green" /></span> {/* Assuming PulsatingDot can take a color prop or adapts */}
                <span className="lg:mb-[0.5px]">Available</span>
              </div>
            </div>
            <button className="text-white/60 pl-2 w-fit hidden lg:block">click to see my bio</button>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex lg:mb-2 flex-row p-2 gap-2
                     lg:p-0 lg:gap-3 lg:mr-5">
        <a href="https://discord.gg/2t9NXbBk" aria-label="Discord" className="w-10 hover-up-tilt-right h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center
                                 lg:bg-white/50 lg:hover:bg-white/20 hover:text-white lg:text-black">
          <FaDiscord size={20} />
        </a>
        <a href="https://www.instagram.com/thecreatorshub.1?igsh=MWN4NXN2cGRmN2MzbA==" aria-label="Instagram" className="w-10 hover-up h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center
                                 lg:bg-white/50 lg:hover:bg-white/20 hover:text-white lg:text-black">
          <BiLogoInstagramAlt size={20} />
        </a>
        <a href="https://www.linkedin.com/in/jyoti-saini-964958363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="w-10 hover-up-tilt-left h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center
                                 lg:bg-white/50 lg:hover:bg-white/20 hover:text-white lg:text-black">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  )
})

export default NavBar