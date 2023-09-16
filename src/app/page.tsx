import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/NavBar";
import OurService from "@/components/OurService";
import WhatPeople from "@/components/WhatPeople";


export default function Home() {
  return (
    <>
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
