import React from "react";
import { PhoneCall} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="flex block flex-col min-h-fit items-center justify-between w-full px-4  pb-6 text-center">
      {/* Call Card */}
      <div className="w-full max-w-sm border-[10px] border-white bg-[#f5f5f5] rounded-3xl shadow-xl py-10 px-6 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Book a call</h2>
        <p className="text-sm text-gray-500">Book a free 15-minute call with me</p>

        <div className="bg-black fancy-btn  hover:scale-[1.1] text-white p-4 rounded-2xl shadow-lg">
          <PhoneCall size={32} />
        </div>

        <p className="text-gray-600 text-sm">Let's Connect</p>

        <p className="text-black font-semibold text-[15px] break-all">
          Contact@thecreatorshub.in
        </p>

        {/* Socials */}
      <div className="flex flex-row p-2 gap-2">
          <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center hover-up-tilt-right"><FaDiscord size={20} /></div>
          <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center hover-up"><BiLogoInstagramAlt size={20} /></div>
          <div className="w-10 h-10 bg-black/10 shadow-md rounded-lg flex items-center justify-center hover-up-tilt-left"><FaLinkedinIn size={20} />
          </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-600 text-center leading-tight">
        <p>Beastcreatives © 2025 All Rights Reserved</p>
        <p className="pt-1">Made by Wuis</p>
      </footer>
    </div>
  );
};

export default ContactCard;
