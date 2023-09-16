import Image from 'next/image';
import React from 'react';
import backg from './images/homeSec.jpg';

const HomeSection = () => {
  return (
    <section
      className="h-max p-4 bg-cover bg-center flex flex-col justify-center  relative" // Added relative class
    >
      {/* Use Next.js Image component for the background image */}
      <Image
        src={backg} // Replace with the actual path to your image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className=' circler'
      />
      <div className="text-center md:text-left h-96 m-10 flex flex-col justify-center text-white p-5 md:px-10 relative">
        <h1 className="text-4xl md:text-8xl font-bold mb-2 md:mb-4">
          Quality & <br /> Integrity
        </h1>
        <p className="text-lg md:text-2xl mb-4 md:mb-6">
          Welcome to the Frankfurt Global
        </p>
      </div>
      {/* Your content goes here */}
    </section>
  );
};

export default HomeSection;
