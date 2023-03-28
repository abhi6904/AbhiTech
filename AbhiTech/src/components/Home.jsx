import { useEffect } from 'react';
import { useGlobalContext } from '../Context'
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection'
import Services from './Services';

export default function Home() {
  
  // const data= {
  // name: "ABHI TECHINCAL",
  // images: "https://ouch-cdn2.icons8.com/Km4RGGsEmhal7eo6i5lDA4hYpIBm3CCjZ6z3aGXqNPQ/rs:fit:386:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTc4/LzY0OWQ3MzY3LWVk/ZDktNDM0MC04MGNk/LTAyZTFiMTM2MWVi/My5wbmc.png"
  // }
const {updateHomePage }= useGlobalContext();

useEffect(() => {updateHomePage();}, [])

  return (
    <>
    <HeroSection/>
    <Services />
    <Contact />
    </>
  )
}
