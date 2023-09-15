import React from "react";

const ChooseUs = () => {
  return (
    <section className="bg-[#090C35] border-b-12 text-white circler">
      <div className="flex flex-col mx-20 py-10">
      <div className="text-xl text-gray-600 text-center relative">
          <h2 className="text-5xl md:text-8xl text-[#3F4CFE0F] font-bold absolute top-0 left-2 right-2 -z-1">
            Why Chose Us.
          </h2>
          <h2 className="text-4xl md:text-7xl text-[#FFFFFF] mt-14 font-bold mb-4 relative z-10">
            Why Chose Us.
          </h2>
        </div>
        <div className="flex flex-wrap justify-around py-6">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-[#0776E0]">Quality Assurance</h2>
            <p className="text-gray-300">
              We source our material from trusted suppliers<br/> to ensure that we
              receive the best quality.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-[#0776E0]">Expert Guidance</h2>
            <p className="text-gray-300">
              Our knowledgeable team is here to<br/> assist you with your specific
              project.
            </p>
          </div>
        </div>
        <div className="text-center p-4 ">
          <h2 className="text-2xl font-semibold mb-2 text-[#0776E0]">Timely Delivery</h2>
          <p className="text-gray-300 ">
            We understand the importance<br/> of meeting deadlines, and we<br/> strive to
            deliver on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
