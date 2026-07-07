import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE_CONFIG } from '../data/index.js'
import { fadeUp, scaleIn, viewportOnce } from '../animations/variants.js'

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Réservez votre véhicule premium"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a5e]/95 via-royal/88 to-[#0a2a5e]/80" />
        {/* Gold shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/15 animate-spin-slow" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 w-40 h-40 rounded-full border border-gold/10" />
      </div>

      <div className="relative max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Offre Premium</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
          >
            Prêt à Vivre une<br />
            Expérience <span className="text-gold">Inoubliable</span> ?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Réservez dès maintenant et profitez de la livraison gratuite à votre hôtel ou à l'aéroport d'Agadir. Confirmation immédiate garantie.
          </motion.p>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold text-base rounded-full shadow-gold hover:bg-gold-dark transition-all duration-300 animate-pulse-gold"
            >
              Réserver Maintenant
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              href={`tel:${SITE_CONFIG.phone}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone size={17} />
              {SITE_CONFIG.phone}
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
