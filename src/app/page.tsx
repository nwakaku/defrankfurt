import AboutUs from '@/components/AboutUs'
import HomeSection from '@/components/HomeSection'
import Navbar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSection/>
      <AboutUs/>
    </div>
  )
}
