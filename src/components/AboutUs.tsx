import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12">
  <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col items-center space-y-8">
    <div className="text-xl text-gray-600 text-center relative">
      <h2 className="text-5xl md:text-8xl text-gray-100 font-bold absolute top-0 left-2 right-2 -z-1">
        ABOUT US
      </h2>
      <h2 className="text-4xl md:text-7xl text-[#676767] mt-14 font-bold mb-4 relative z-10">
        ABOUT US.
      </h2>
      <p className="text-gray-800 text-center mb-9">
        At DeFrankFurt Global, we are dedicated to delivering top-quality steel rods and iron sheets to meet your project needs. With years of experience in the industry, we are the experts you can rely on.
      </p>
    </div>

    <div className="md:flex md:space-x-8">
      <div className="md:w-1/2 relative">
        <h2 className="text-5xl text-gray-100 text-center font-bold absolute top-0 left-2 right-2 -z-1">
          OUR MISSION
        </h2>
        <h2 className="text-4xl text-[#676767] font-bold text-center mt-6 relative mb-4">
          OUR MISSION.
        </h2>
        <p className="text-gray-800 ">
          At DeFrankFurt Global, we are committed to providing top-notch steel rods and iron sheets while maintaining ethical practices and environmental responsibility. We strive to be the go-to partner for all construction needs, ensuring that every project we touch contributes to a better, safer, and more resilient world.
        </p>
      </div>
      <div className="md:w-1/2 relative">
        <h2 className="text-5xl text-gray-100 text-center font-bold absolute top-0 left-2 right-2 -z-1">
          OUR VISION
        </h2>
        <h2 className="text-4xl text-[#676767] font-bold text-center mt-6 relative mb-4">
          OUR VISION.
        </h2>
        <p className="text-gray-800 ">
          We aspire to be recognized as a global leader in construction materials, known for our exceptional quality, technological advancements, and commitment to sustainability. We envision a world where our materials not only build structures but also create opportunities, foster communities, and inspire progress.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutUs;
