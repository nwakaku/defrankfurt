import React from "react";

const AboutUs = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="80"
      data-aos-duration="1200"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
      id="about"
      className="py-12 mx-20"
    >
      <div className=" flex flex-col items-center space-y-8 py-4">
        <div className="text-xl text-gray-600 text-center relative lg:px-12">
          <h2 className="hidden  lg:block text-4xl lg:text-8xl md:text-8xl text-gray-100 font-bold absolute top-0 left-2 right-2 -z-1 ">
            ABOUT US
          </h2>
          <h2 className="text-4xl md:text-7xl text-[#676767] mt-6 lg:mt-14 font-bold mb-4 relative ">
            ABOUT US.
          </h2>
          <p className="text-gray-800 text-center mb-9 lg:px-24 lg:mx-36">
            At DeFrankFurt Global, we are dedicated to delivering top-quality
            steel rods and iron sheets to meet your project needs. With years of
            experience in the industry, we are the experts you can rely on.
          </p>
        </div>

        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 relative">
            <h2 className="hidden lg:block text-2xl lg:text-5xl text-gray-100 text-center font-bold absolute top-0 left-2 right-2 -z-1">
              OUR MISSION
            </h2>
            <h2 className="text-4xl text-[#676767] font-bold text-center lg:mt-6 relative mb-4">
              OUR MISSION.
            </h2>
            <p className="text-gray-800 lg:px-6 lg:text-left text-center">
              At DeFrankFurt Global, we are committed to providing top-notch
              steel rods and iron sheets while maintaining ethical practices and
              environmental responsibility. We strive to be the go-to partner
              for all construction needs, ensuring that every project we touch
              contributes to a better, safer, and more resilient world.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <h2 className="hidden lg:block text-5xl text-gray-100 text-center font-bold absolute top-0 left-2 right-2 -z-1">
              OUR VISION
            </h2>
            <h2 className="text-4xl text-[#676767] font-bold text-center mt-6 relative mb-4">
              OUR VISION.
            </h2>
            <p className="text-gray-800 lg:px-6 lg:text-left text-center">
              We aspire to be recognized as a global leader in construction
              materials, known for our exceptional quality, technological
              advancements, and commitment to sustainability. We envision a
              world where our materials not only build structures but also
              create opportunities, foster communities, and inspire progress.
            </p>
          </div>
        </div>
      </div>
      {/* Add JSON-LD Schema markup */}
    </section>
  );
};

export default AboutUs;
