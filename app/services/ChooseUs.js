import React from "react";

const ChooseUs = () => {
  return (
    <section>
      <div className="bg-white text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us? </h2>
        <p className="mt-4 text-lg text-gray-600">
          Because we redefine travel, ensuring your journeys are marked by{" "}
          <br />
          unparalleled comfort, reliable transportation, and the guidance of
          expert tour companions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mx-4 my-4 max-w-5">
            <div className="p-6 shadow-lg rounded-lg bg-gray-100">
              <img
                src="/Affordable_prices.jpeg"
                alt="Affordable Price"
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
              <h1 className="text-xl font-semibold my-4">AFFORDABLE PRICE</h1>
              <p>Providing services at prices that do not disappoint you</p>
            </div>
          </div>
          <div className="mx-4 my-4">
            <div className="p-6 shadow-lg rounded-lg bg-gray-100">
              <img
                src="/Top.jpeg"
                alt="Best Destination"
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
              <h1 className="text-xl font-semibold my-4">BEST DESTINATION</h1>
              <p>Many beautiful places await your arrival</p>
              <br />
            </div>
          </div>
          <div className="mx-4 my-4">
            <div className="p-6 shadow-lg rounded-lg bg-gray-100 ">
              <img
                src="/Personal.jpeg"
                alt="Personal Service"
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
              <h1 className="text-xl font-semibold my-4">PERSONAL SERVICE</h1>
              <p>24-hour service for your happiness</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
