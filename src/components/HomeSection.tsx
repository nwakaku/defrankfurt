import React from "react";
import homeb from "./images/homeSec.jpg";
import Image from "next/image";

const HomeSec = () => {
  return (
    <section className="h-max p-4 bg-cover bg-center flex flex-col justify-center border-b-10 circler relative">
      <Image
        src={homeb} // Replace with the correct path to your image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="border-b-10 circler"
      />
      <div className="text-center md:text-left h-80 m-20 flex flex-col justify-center text-white relative">
        <h1 className="text-6xl lg:text-12xl md:text-8xl font-bold mb-2 md:mb-4">
          Quality & <br /> Integrity
        </h1>
        <p className="text-lg md:text-2xl mb-4 md:mb-6">
          Welcome to DeFrankfurt Global Resources
        </p>
      </div>
      {/* Your content goes here */}
    </section>
  );
};

export default HomeSec;
