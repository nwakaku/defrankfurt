import React from "react";

const ChooseUs = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="80"
      data-aos-duration="1200"
      className="bg-[#090C35] border-b-12 text-white circler"
    >
      <div className="flex flex-col mx-20 py-10">
        <div className="text-xl text-gray-600 text-center relative">
          <h2 className="text-5xl md:text-8xl text-[#3F4CFE0F] font-bold absolute top-0 left-2 right-2 -z-1">
            Why Choose Us.
          </h2>
          <h2 className="text-4xl md:text-7xl text-[#FFFFFF] mt-14 font-bold mb-4 relative ">
            Why Choose Us.
          </h2>
        </div>
        <div className="flex flex-wrap justify-between p-6">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-[#0776E0]">
              Quality Assurance
            </h2>
            <p className="text-gray-300">
              We source our material from trusted suppliers to ensure that we
              receive the best quality.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-[#0776E0]">
              Expert Guidance
            </h2>
            <p className="text-gray-300">
              Our knowledgeable team is here to assist you with your specific
              project.
            </p>
          </div>
        </div>
        <div className="lg:text-center text-left lg:p-4 ">
          <h2 className="text-2xl px-6 font-semibold mb-2 text-[#0776E0]">
            Timely Delivery
          </h2>
          <p className="text-gray-300 px-6 lg:px-12">
            We understand the importance of meeting deadlines, and we
            <br /> strive to deliver on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;