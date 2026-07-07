import { motion } from 'framer-motion'
import { Car, Calendar, Key, ArrowRight, Check } from 'lucide-react'
import { HOW_IT_WORKS } from '../data/index.js'
import { fadeUp, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

const ICON_MAP = { car: Car, calendar: Calendar, key: Key }

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-royal overflow-hidden relative"
      aria-label="Comment louer votre véhicule premium"
    >
      {/* ── Decorative BG ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Header — white text on blue */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Simple & Rapide</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Louer en <span className="text-gold">3 Étapes</span>
          </h2>
          <p className="text-white/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Notre processus de réservation est conçu pour être aussi élégant et efficace que nos véhicules.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative"
        >
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ originX: 0 }}
            />
          </div>

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || Car
            return (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <motion.div
                    className="w-32 h-32 rounded-full border border-gold/30 absolute inset-0 -m-2"
                    animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                  />
                  {/* Circle */}
                  <div className="w-28 h-28 rounded-full bg-white/8 border-2 border-gold/50 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5 group hover:bg-white/15 transition-all duration-300">
                    <Icon size={28} className="text-gold" />
                    <span className="text-white/50 text-xs font-bold tracking-wider">{step.step}</span>
                  </div>

                  {/* Check badge — except last */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <span className="absolute -right-2 -top-2 w-7 h-7 bg-gold rounded-full flex items-center justify-center shadow-gold">
                      <Check size={13} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-white text-lg md:text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs">
                  {step.desc}
                </p>

                {/* Arrow — mobile only */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="md:hidden mt-6 text-gold/50" aria-hidden="true">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 md:mt-20 text-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-white font-semibold text-base rounded-full shadow-gold hover:bg-gold-dark transition-all duration-300 animate-pulse-gold"
          >
            Commencer ma réservation
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-white/40 text-xs mt-4">Confirmation garantie en moins de 5 minutes</p>
        </motion.div>

      </div>
    </section>
  )
}
