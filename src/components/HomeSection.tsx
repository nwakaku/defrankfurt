import React from "react";

const HomeSec = () => {
  return (
    <section
      className="h-max p-4 bg-cover bg-center flex flex-col justify-center border-b-10 circler"
      style={{
        backgroundImage:
          'url("https://bafybeihnmjh6hxouhelyqts5b4yvjpua5ymrzmd7ou2yick5musshbw47a.ipfs.w3s.link/homeSec.jpg")',
      }}
    >
      <div className="text-center md:text-left h-80 m-20 flex flex-col justify-center text-white  relative">
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
