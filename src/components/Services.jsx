import { motion } from 'framer-motion'
import { Plane, Building, Briefcase, Building2, Heart, Crown, ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/index.js'
import { fadeUp, fadeLeft, fadeRight, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

const ICON_MAP = {
  plane:     Plane,
  building:  Building,
  briefcase: Briefcase,
  building2: Building2,
  heart:     Heart,
  crown:     Crown,
}

// ── Service Card — alternating layout for first 2, grid for rest ─────────────
function ServiceCardLarge({ service, reversed }) {
  const Icon = ICON_MAP[service.icon] || Briefcase

  return (
    <motion.article
      variants={reversed ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 img-zoom rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
        <img
          src={service.image}
          alt={`${service.title} — PrestigeDrive Agadir`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-royal/8 rounded-2xl flex items-center justify-center">
            <Icon size={20} className="text-royal" />
          </div>
          <span className="gold-label">Service Premium</span>
        </div>

        <h3 className="heading-md text-text-primary">{service.title}</h3>
        <p className="text-text-secondary text-base leading-relaxed">{service.desc}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          {['Disponible 24/7', 'Sans surcharge', 'Confirmation immédiate'].map(tag => (
            <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-pearl border border-border text-text-secondary font-medium">
              ✓ {tag}
            </span>
          ))}
        </div>

        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-royal font-semibold text-sm mt-2 group"
        >
          En savoir plus
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </motion.article>
  )
}

function ServiceCardSmall({ service }) {
  const Icon = ICON_MAP[service.icon] || Briefcase
  return (
    <motion.article
      variants={staggerItem}
      className="group card-luxury overflow-hidden"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="img-zoom h-44 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} — PrestigeDrive`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-royal/8 rounded-xl flex items-center justify-center group-hover:bg-royal transition-colors duration-300">
            <Icon size={16} className="text-royal group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-display font-semibold text-text-primary text-base">{service.title}</h3>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const [first, second, ...rest] = SERVICES

  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-label="Nos services de location premium"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <SectionHeader
          eyebrow="Nos Services"
          title={<>Une Expérience <span className="gradient-text">Sur Mesure</span></>}
          subtitle="De la livraison à l'aéroport aux services VIP les plus exclusifs, nous créons chaque expérience autour de vos besoins."
        />

        {/* ── Large alternating cards ── */}
        <div className="flex flex-col gap-20 md:gap-28 mb-20 md:mb-28">
          <ServiceCardLarge service={first}  reversed={false} />
          <ServiceCardLarge service={second} reversed={true}  />
        </div>

        {/* ── Small grid ── */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {rest.map(service => (
            <ServiceCardSmall key={service.id} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
