import React from "react";

const WhatPeople = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col items-center space-y-8">
        <div className="text-xl text-gray-600 text-center p-2 my-4 relative">
          <h2 className="text-4xl md:text-7xl text-gray-100 font-bold absolute top-0 left-2 right-2 -z-1">
            What Do People Say
          </h2>
          <h2 className="text-3xl md:text-6xl text-[#676767] mt-8 font-bold mb-4 relative z-10">
            What Do People Say.
          </h2>
        </div>

        <div className="md:flex md:space-x-8 ">
          <div className="flex-col bg-[#E6E6E6] p-12 space-y-4 text-center mb-2 rounded-3xl">
            <p>
              "We've been using DeFrankFurt Global for years, and they never
              disappoint. Their steel rods are of the highest quality, and their
              service is outstanding."
            </p>
            <p className="bg-[#090C35] p-2 rounded-full text-white">
              - Olusegun, Contractor
            </p>
          </div>
          <div className="flex-col bg-[#E6E6E6] p-12 space-y-4 text-center mb-2 rounded-3xl">
            <p>
              "Thanks to DeFrankFurt Global, our roofing project turned out
              perfect. The iron sheets they supplied were exceptional, and their
              support was invaluable."
            </p>
            <p className="bg-[#090C35] p-2 rounded-full text-white ">
              {" "}
              - Bridget, Architect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeople;
