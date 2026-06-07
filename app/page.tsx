import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Works } from '@/components/works'
import { Services } from '@/components/services'
import { Workflow } from '@/components/workflow'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Workflow />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
