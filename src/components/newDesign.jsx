import React from "react";
import { useState } from "react";

export default function NewDesign() {
  return (
    <div className="bg-[#0a0a0a] flex flex-col items-center h-screen text-white w-full">
      <div className="w-fit h-fit">
        <div className="w-100 h-fit">
          <div className="relative h-60">
            <div className="absolute w-60 h-1 top-[23px] right-0 border-t-[1px] border-orange-500"></div>
            <div className="w-full border-b-[1px] absolute top-[111px] border-[#FF6A00] left-10"></div>
            <div className="w-5 h-3 z-10 absolute top-[99px] bg-[#0a0a0a] right-3"></div>
            <div className="w-4 h-[15px] rounded-br-sm  absolute top-[112px] bg-[#0a0a0a] left-[183px]  z-10"></div>
            <div className="absolute border border-orange-500 pb-4  rounded-bl-[0px]  pl-1 pt-[5px] pr-0 rounded-xl text-[36px] font-bold top-[116px] w-70 right-[-78px] leading-none">
              hub that takes creators from visible to{" "}
              <div className="absolute bottom-[10px] right-9 bg-orange-500 px-1 pb-1 rounded-md">
                viral
              </div>
              <div className="absolute bottom-0 left-[-1px] bg-[#0a0a0a] w-5 h-4 px-1 pb-1">
               <div className="absolute w-[200px] h-[427.5px] left-[-222px] border-r-[0px] rounded-tl-xl rounded-bl-xl top-[-207px] border border-orange-500"></div>
              </div>
            </div>
            <div id="creator" className="absolute flex flex-row">
              <div
                className="text-[85px] font-bold bg-clip-text text-transparent bg-[url('/logos/WHITE.jpg')] bg-cover bg-center text-outline"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 1, // reduce bg image intensity inside text
                  textShadow: "0px 2px 3px rgba(0, 0, 0, 0.9)", // soft depth effect
                }}
              >
                CREATOR
              </div>{" "}
              <span className="text-[85px] h-fit font-bold pb-[2px] pr-1 mt-[23px] rounded-br-xl rounded-tr-xl text-[#FF6A00] border-[1px]  border-l-0 leading-none">
                'S
              </span>
            </div>
            <div className="absolute bottom-0 flex flex-row">
              <span
                className="text-[85px] font-bold text-transparent py-0 px-2 rounded-xl rounded-tr-[0px] border border-[#FF6A00] relative"
                style={{
                  WebkitTextStroke: "2px #FF6A00",
                }}
              >
                HUB
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-fit mt-[-20px] leading-none">
        <div className="absolute w-[450px] h-50 bottom-[-45.5px] border border-orange-500 rounded-tl-xl rounded-bl-md border-r-[0px]"></div>
        <div className="absolute w-[450px] rounded-bl-[0px] h-20 bottom-[-50px] border border-orange-500 rounded-tl-xl border-l-[0px] border-t-[0px] right-[-60px] rounded-br-xl"></div>
        <div className="absolute right-[-60px] w-10 rounded-br-[0px] h-[180px] border border-orange-500 border-b-[0px] rounded-bl-[0px] rounded-xl bottom-[-30px]"></div>
        <div className="absolute right-[-21px] w-10 rounded-br-[0px] h-20 border border-orange-500 border-t-[0px] border-l-[0px] rounded-bl-[0px] rounded-t-[0px] rounded-br-xl bottom-[-45.5px]"></div>
        <div
          className="text-[180px] font-bold bg-clip-text text-transparent bg-[url('/logos/youtube.jpg')] bg-cover bg-center text-outline"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 1, // reduce bg image intensity inside text
            textShadow: "0 1px 10px rgba(0, 0, 0, 0)", // soft depth effect
          }}
        >
          200+
        </div>
      </div>
      <div className="text-[25px] text-[#FF6A00] font-bold ">
        Growing Creators & Brands Trust Us{" "}
      </div>
    </div>
  );
}
