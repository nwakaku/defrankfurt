import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./images/logo.png";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#090C35] p-12 flex flex-wrap text-white">
        <div className="flex-1 pr-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Ready to get started? Contact us today for a quote or to discuss
            your construction needs.
          </p>
        </div>
        <div className="flex-1">
          <p>
            No 71 Stadium road, Port Harcourt. Rivers state. No 4 Ikwerre Road
            (Kala Building Materials) close to Kala Police Station. Mile 5, Port
            Harcourt. Rivers state. Deidei Market, Abuja.
          </p>
        </div>
      </div>

      <footer className="">
        <div className="container flex justify-center items-center space-x-12  py-4">
          <div className="">
            <Link href="/">
              <Image src={logo} width={200} height={20} alt="Logo" />
            </Link>
          </div>

          <ul className="">
            <li className="font-semibold">
              <Link href="#about us">Your Partner In Building The Future</Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
