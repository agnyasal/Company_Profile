import Image from "next/image";
import React from "react";

const CompanyHistory = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-12">
          <h1
            className="text-5xl text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
font-bold text-orange-600 p-7 mb-5"
          >
            Welcome to Lets Travel
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-justify indent-7">
                Welcome to Lets Travel, where our narrative mirrors the
                enchanting destinations of Indonesia we passionately explore.
                Our journey commenced in 2020 with a visionary founder, Agnya
                Salsabila Setiadi, driven by the desire to redefine the travel
                experience. From the outset, Lets Travel has been built upon
                principles of excellence, innovation, and an unwavering
                commitment to crafting unforgettable journeys in Indonesia.
              </p>
              <p className="text-gray-600 mb-6 text-justify indent-7">
                Lets Travel has emerged as a trailblazer in the Indonesian
                travel industry, leaving an indelible mark on the landscape.
                From modest beginnings to becoming a cornerstone of exceptional
                travel services in Indonesia, our achievements narrate a story
                of dedication to excellence.
              </p>
              <p className="text-gray-600 mb-6 text-justify indent-7">
                Our professional team, consisting of experts across various
                Indonesian destinations, takes pride in creating personalized
                travel experiences that surpass expectations. Leveraging
                innovative technology, we ensure efficiency in every aspect of
                your journey - from the initial planning stages to the seamless
                execution and your safe return home.
              </p>
              <p className="text-gray-600 mb-6 text-justify indent-7">
                As you embark on your adventure with Lets Travel, you aren't
                merely selecting a travel agency; you're choosing a legacy of
                passion, expertise, and a commitment to making each journey
                extraordinary in Indonesia. Join us as we continue to script the
                next chapters of Lets Travel's remarkable story on this
                archipelagic nation. Discover more with Lets Travel.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/Company.jpeg"
                width={500}
                height={0}
                alt="Company"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyHistory;
