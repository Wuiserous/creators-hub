import React from "react";

const steps = [
  {
    number: 1,
    title: "Define Your Project Goals",
    desc: "Identify what you need (logo, website graphics, social media posts, etc.). Determine the purpose and audience for the design. Set a budget and timeline."
  },
  {
    number: 2,
    title: "Discuss Timeline & Budget",
    desc: "Collaborate to define a realistic timeline and budget. Ensure all expectations are aligned before starting."
  },
  {
    number: 3,
    title: "Finalize Project & Get Files",
    desc: "Review the final output. Once approved, receive all project files in required formats, ready to use."
  }
];

const ProcessSteps = () => {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center justify-center px-4 ">
      <div className="mb-20 px-4 text-center">
        <h2 className="text-3xl font-bold lg:w-[700px] lg:text-6xl lg:text-4xl text-black mt-2">Getting your projects done has never been easier</h2>
        <p className="text-gray-600 mt-1">The Easy Way to Get Projects Done!</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>

        {/* Steps */}
        <div className="flex flex-col gap-6 ml-8.25">
          {steps.map((step, i) => (
            <div key={i} className="relative block flex items-start gap-4">
              {/* Dot */}
              <div className="w-4 h-4 bg-black rounded-full absolute -left-6 top-2"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm">
                <h4 className="font-bold text-gray-800">Step #{step.number}</h4>
                <h5 className="font-semibold text-black mb-2">{step.title}</h5>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
