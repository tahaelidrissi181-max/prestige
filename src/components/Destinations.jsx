import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '../data/index.js'
import { fadeUp, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

function DestinationCard({ dest, large = false }) {
  return (
    <motion.article
      variants={staggerItem}
      className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-card hover:shadow-float transition-all duration-500 ${large ? 'row-span-2' : ''}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.35 } }}
    >
      {/* Image */}
      <div className={`img-zoom overflow-hidden ${large ? 'h-full min-h-[400px]' : 'h-52 md:h-60'}`}>
        <img
          src={dest.image}
          alt={`${dest.name} — Explorer avec PrestigeDrive Agadir`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Distance badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
        <Clock size={11} className="text-gold-light" />
        <span className="text-white text-xs font-semibold">{dest.distance}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <MapPin size={13} className="text-gold-light flex-shrink-0" />
              <span className="text-gold-light text-xs font-semibold tracking-wide uppercase">Destination</span>
            </div>
            <h3 className={`font-display font-bold text-white leading-tight mb-1 ${large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
              {dest.name}
            </h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2">{dest.desc}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="flex-shrink-0 w-9 h-9 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ArrowRight size={15} className="text-white" />
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-gold to-transparent rounded-full mt-3"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.article>
  )
}

export default function Destinations() {
  const [d1, d2, d3, d4, d5, d6] = DESTINATIONS

  return (
    <section
      id="destinations"
      className="section-padding bg-white"
      aria-label="Destinations populaires autour d'Agadir"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <SectionHeader
          eyebrow="Explorez la Région"
          title={<>Destinations <span className="gradient-text">Incontournables</span></>}
          subtitle="Agadir et sa région regorgent de merveilles. Explorez-les à votre rythme, au volant de nos véhicules premium."
        />

        {/* ── Masonry-style grid ── */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {/* Large card */}
          <div className="md:col-span-1 lg:col-span-1 md:row-span-2">
            <DestinationCard dest={d1} large />
          </div>

          {/* Regular cards */}
          <DestinationCard dest={d2} />
          <DestinationCard dest={d3} />
          <DestinationCard dest={d4} />
          <DestinationCard dest={d5} />
          <DestinationCard dest={d6} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm mb-4">
            Besoin d'un itinéraire personnalisé ? Notre équipe vous conseille.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Planifier mon voyage
            <ArrowRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
