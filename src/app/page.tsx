import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import MainLayout from '@/components/MainLayout'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
// import Image from 'next/image'

export default function Home() {
  return (
    <MainLayout>
      <Hero/>
      <Experience/>
      {/* <AboutMe/> */}
      <Projects/>
      <Skills/>
    </MainLayout>
  )
}
