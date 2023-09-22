import Image from "next/image";
import React from "react";
import approve from "./images/approved.png";
import backi from "./images/backi.png";

const OurService = () => {
  // Define Schema markup for the products/services

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="80"
      data-aos-duration="1200"
      id="services"
      className="bg-[#E9E9E9] pt-4 border-t-12 rounded-t-3xl circle"
    >
      <div className="flex-col items-center space-y-8">
        <div className="text-xl text-gray-600 text-center p-1 relative">
          <h2 className="text-4xl md:text-7xl text-gray-100 font-bold absolute top-0 left-2 right-2 -z-1">
            OUR SERVICES
          </h2>
          <h2 className="text-3xl md:text-6xl text-[#676767] mt-8 font-bold mb-4 relative ">
            OUR SERVICES.
          </h2>
          <p className="text-gray-800 text-center mb-9">
            Major distributors, Importer, General Contractor, Dealers and
            Suppliers of
          </p>
        </div>

        <div className="flex justify-center md:space-x-12 sm:space-x-6 flex-wrap md:flex-nowrap">
          <div className="mr-4 mb-4 md:mb-0">
            <ul className="list">
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Rods
              </li>
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Flat Sheets
              </li>
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Angle iron
              </li>
              <li className="mb-4 flex items-center justify-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Galvanized Pipes
              </li>
            </ul>
          </div>
          <div>
            <ul className="list">
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Round Pipes
              </li>
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Binding Wire
              </li>
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                Universal Beam
              </li>
              <li className="mb-4 flex items-center font-bold">
                <Image
                  src={approve}
                  height={28}
                  width={28}
                  alt="approve"
                  className="mr-2"
                />
                BRC Mesh Wire
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full ">
          <Image src={backi} alt="background" />
        </div>
      </div>
    </section>
  );
};

export default OurService;