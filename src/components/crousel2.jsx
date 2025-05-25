import React from "react";

const horizontalImages = [
  "https://i.pinimg.com/736x/79/2d/0b/792d0bd8ff7e159bd1523fe25c0ab788.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GXtHJaq_I2Q5FUDAruggmv0DA21cGHCRWaTW-p-GylNmCoHVpjFGcihgFBUo6kx7yjc&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla8wfS30Fg_CveTNPtcgRADUUI7Sz2uiLsw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGe36k6MvxgfziosXYD0U0EzSIw8WGi8gvg&s",
  "https://i.pinimg.com/736x/18/25/9c/18259c4c8f460a24f8fa674af3156fdc.jpg",
];

const verticalImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZlCR_jH62Ih06g9d1GBDFtZJ0EQIn3NLYQ&s",
  "https://m.media-amazon.com/images/I/71rtEMbFftL._AC_UF350,350_QL80_.jpg",
  "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/500x659/products/1857229/3675962/apiv80lax__46083.1626780957.jpg?c=2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgj8CsDIwe1uTAVLRUsTyIW2DiED9W7c6CbA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3oy83rypVk_ffRzOD0BlicM3Q1dSda7IG8W-cNykp_Ale_fwNCqpo-r0m0SLdeef8tE&usqp=CAU",
];

export default function TripleCarousel() {
  return (
    <div className="whitespace-nowrap relative w-full overflow-hidden space-y-1">
      {/* Row 1 - Scroll Left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="scroll-container scroll-left">
          {[...horizontalImages, ...horizontalImages].map((src, idx) => (
            <img key={`h1-${idx}`} src={src} alt="" className="w-[200px] lg:w-[400px] h-[100px] ml-1 lg:h-[200px] rounded shadow" />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="scroll-container scroll-right">
          {[...horizontalImages, ...horizontalImages].map((src, idx) => (
            <img key={`h2-${idx}`} src={src} alt="" className="w-[200px] lg:w-[400px] h-[100px] ml-1 lg:h-[200px] rounded shadow" />
          ))}
        </div>
      </div>

      {/* Row 3 - Scroll Left (vertical images) */}
      <div className="h-[100px] lg:h-[350px] overflow-hidden whitespace-nowrap">
        <div className="scroll-container scroll-left">
          {[...verticalImages, ...verticalImages].map((src, idx) => (
            <img key={`v-${idx}`} src={src} alt="" className="w-[80px] lg:w-[250px] h-[100px] ml-1 lg:h-[350px] rounded shadow" />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        .scroll-container {
          display: flex;
          width: max-content;
        }

        .scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Center Text */}
      <div className="flex flex-col p-30 items-center justify-center">
        <span className="text-3xl lg:text-6xl font-medium">
          Raw footage to
        </span>
        <span className="text-3xl lg:text-6xl font-medium">
          Cinematic masterpiece!
        </span>
      </div>
    </div>
  );
}
