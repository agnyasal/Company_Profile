import React from "react";

const VisionMission = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden max-w-5xl mt-5 mx-auto">
      <div className="md:flex-none w-full md:w-1/2 relative">
        <img
          src="/VisionMision.png"
          alt="Travel"
          className="h-120 md:h-auto md:w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-12 text-[#0a47ba]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">VISI</h2>
        <p className="mb-6 text-black">
          become a leading travel service provider that connects people with
          world-class experiences.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">MISI</h2>
        <ul className="list-disc space-y-4 pl-6 text-black">
          <li>
            Understanding and fulfilling diverse travel needs for every
            customer.
          </li>
          <li>
            Utilizing technology to make planning and travel easy and enjoyable.
          </li>
          <li>Providing memorable experiences that enrich lives.</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
