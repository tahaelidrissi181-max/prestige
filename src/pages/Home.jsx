import { motion } from 'framer-motion'
import Hero         from '../components/Hero.jsx'
import Fleet        from '../components/Fleet.jsx'
import WhyUs        from '../components/WhyUs.jsx'
import Services     from '../components/Services.jsx'
import About        from '../components/About.jsx'
import Destinations from '../components/Destinations.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTABanner    from '../components/CTABanner.jsx'
import HowItWorks   from '../components/HowItWorks.jsx'
import FAQ          from '../components/FAQ.jsx'
import Contact      from '../components/Contact.jsx'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      id="main-content"
      role="main"
      aria-label="Contenu principal — PrestigeDrive Agadir"
    >
      <Hero />
      <Fleet />
      <WhyUs />
      <Services />
      <About />
      <Destinations />
      <Testimonials />
      <CTABanner />
      <HowItWorks />
      <FAQ />
      <Contact />
    </motion.main>
  )
}
