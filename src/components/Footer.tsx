import React from "react";
import logo from "./images/logo.png";
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="contact">
      <div className="bg-[#090C35] ">
        <div
          className="mx-24 py-10
         flex flex-wrap text-white"
        >
          <div className="lg:flex-1 lg:text-left text-center mb-2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              Ready to get started? Contact us today for a quote or to discuss
              your construction needs.
            </p>
            <br />
            <div className="lg:hidden flex justify-center space-x-4 lg:space-x-4  mb-4 font-bold  text-4xl">
              <a href="tel:+234 803 342 6326">
                <FaPhoneSquareAlt
                // onClick={() => window.open("tel:+234 803 342 6326")}
                />
              </a>

              <a href="mailto:Frankfurtsteels@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            <div className="hidden lg:flex space-x-4 lg:space-x-4 mb-4 font-bold text-4xl">
              <a href="tel:+234 803 342 6326">
                <FaPhoneSquareAlt />
              </a>

              <a href="mailto:Frankfurtsteels@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="lg:flex-1 lg:text-left text-center mb-2">
            <p>
              No 71 Stadium road, Port Harcourt. Rivers state.
              <br />
              <br /> No 4 Ikwerre Road (Kala Building Materials) close to Kala
              Police Station. Mile 5, Port Harcourt. Rivers state. <br />
              <br /> Deidei Market, Abuja.
            </p>
          </div>
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
