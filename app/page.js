import '@/globals.css'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import LastProjects from '@/components/sections/LastProjects'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'
import ProductsSection from '@/components/sections/ProductsSection'


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductsSection />
      <LastProjects />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}