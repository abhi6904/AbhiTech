import React, {useEffect }from 'react'
import { useGlobalContext } from '../Context'
import HeroSection from './HeroSection'

export default function About() {

  // const data ={
  //   name: "Abhi Yadav",
  //   images: "https://img.freepik.com/premium-vector/freelancer-young-boy-sitting-chair-working-with-laptop-home-flat-illustration-vector_726768-18.jpg?w=2000"
  // }
  const {updateAboutPage } = useGlobalContext();

useEffect(() => { updateAboutPage();}, [])
  return (
    <HeroSection />
  )
}
