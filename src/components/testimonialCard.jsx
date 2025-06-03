import React, { useState, useEffect, forwardRef } from "react";

const reviews = [
  {
    name: "Joe trades",
    subscribers: "658 subscribers",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid&w=740", // Replace with actual image URL
    text: `I had the pleasure of working with this video editor, They took my raw footage and turned it into a polished, professional video that perfectly tells my story. The attention to detail was amazing, Communication was easy and they were quick to make revisions when needed. The final product exceeded my expectations, and I can’t wait to work with them again on future projects. Highly recommend!`,
    stars: 5,
  },
  {
    name: "Sarah Smith",
    subscribers: "1.2K subscribers",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid&w=740",
    text: "Excellent editor, very responsive and delivered on time. Will definitely collaborate again!",
    stars: 4,
  },
  {
    name: "Gordon Ramsey",
    subscribers: "79K subscribers",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg",
    text: "Excellent editor, very responsive and delivered on time. Will definitely collaborate again!",
    stars: 4,
  },
  {
    name: "Zara Larson",
    subscribers: "1.2K subscribers",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid&w=740",
    text: "they designed by whole website, very responsive and delivered on time. Will definitely collaborate again!",
    stars: 4,
  },
  // Add more reviews as needed
];

const ReviewCarousel = forwardRef((props, ref) =>{
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % reviews.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const review = reviews[index];

  return (
    <div ref={ref} className="px-5">
        <div className="flex flex-col py-30 items-center justify-center">
        <span className="text-3xl lg:text-6xl  font-medium">
           What our clients says
        </span>
        <span className="text-center lg:text-md text-black/50 lg:mb-10 lg:mt-2">
            Feedback from clients who turned their ideas into success with our expertise
        </span>
        <div className="w-50 flex relative flex-row mt-5 h-20">
            <div className="h-20 w-20 absolute left-0 rounded-full">
                <img src={reviews[0].avatar} alt="Avatar" className="h-20 w-20 shadow-md shadow-black rounded-full" />
            </div>
            <div className="h-20 w-20 absolute left-15 rounded-full">
                <img src={reviews[1].avatar} alt="Avatar" className="h-20 w-20 shadow-md shadow-black rounded-full" />
            </div>
            <div className="h-20 w-20 absolute left-30 rounded-full">
                <img src={reviews[2].avatar} alt="Avatar" className="h-20 w-20 shadow-md shadow-black rounded-full" />
            </div>
            <span className="text-md font-medium absolute ml-5 bottom-[-25px]">Trusted by Visionaries</span>
        </div>
      </div>
        <div className="max-w-sm block mx-auto mt-10 lg:mt-[-50px] bg-white rounded-3xl shadow-lg p-1 text-center relative">
      {/* Avatar & Name */}
     <div className="p-10 bg-black/10 rounded-[20px] min-h-[420px]">
     <div className="flex items-center gap-4 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 shadow-md shadow-black rounded-full object-cover"
        />
        <div className="text-left">
          <p className="font-semibold">{review.name}</p>
          <p className="text-gray-500 text-sm">{review.subscribers}</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-800">{review.text}</p>

      {/* Stars */}
      <div className="flex justify-center mt-4 mb-2">
        {"★".repeat(review.stars)}
        {"☆".repeat(5 - review.stars)}
      </div>
     </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-2 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          ❯
        </button>
      </div>
    </div>
    </div>
  );
})

export default ReviewCarousel
