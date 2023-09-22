import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/NavBar";
import OurService from "@/components/OurService";
import WhatPeople from "@/components/WhatPeople";
// import Aos from "aos";
// import "aos/dist/aos.css";

export default function Home() {

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "About Us Page",
    description:
      "Information about DeFrankFurt Global and its mission and vision",
    url: "https://www.defrankfurtglobal.com/",
    mainEntityOfPage: {
      "@type": "AboutPage",
      name: "About DeFrankFurt Global",
      description: "Learn about DeFrankFurt Global and its mission and vision",
    },
    author: {
      "@type": "Organization",
      name: "DeFrankFurt Global",
      description: "Top-quality steel rods and iron sheets supplier",
      url: "https://www.defrankfurtglobal.com/",
      logo: "https://bafybeidgj5wql5ko4b3bldr3ldgupgexohhatp5gbpbc6mm4hqxhlrfoxm.ipfs.w3s.link/DeFrankfurt%20Global%20icon.png",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HomeSection />
      <AboutUs />
      <OurService />
      <ChooseUs />
      <WhatPeople />
      <Footer />
    </>
  );
}
