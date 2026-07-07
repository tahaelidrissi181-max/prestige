import { motion } from 'framer-motion'
import {
  Plane, Shield, Headphones, Tag, Star, Route,
  Users, Zap, CheckCircle
} from 'lucide-react'
import { WHY_US } from '../data/index.js'
import { fadeUp, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

const ICON_MAP = {
  plane:       Plane,
  shield:      Shield,
  headphones:  Headphones,
  tag:         Tag,
  star:        Star,
  route:       Route,
  users:       Users,
  zap:         Zap,
}

function WhyCard({ item, index }) {
  const Icon = ICON_MAP[item.icon] || CheckCircle

  return (
    <motion.div
      variants={staggerItem}
      className="group relative flex flex-col items-start p-6 md:p-7 bg-white rounded-3xl border border-border/70 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      {/* Hover glow bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/4 via-transparent to-gold/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/12 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-royal/8 rounded-2xl flex items-center justify-center group-hover:bg-royal group-hover:shadow-luxury transition-all duration-400">
          <Icon
            size={22}
            className="text-royal group-hover:text-white transition-colors duration-400"
          />
        </div>
        {/* Small gold dot */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-text-primary text-base md:text-lg mb-2.5 group-hover:text-royal transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* Bottom line indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-royal to-gold rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '0%' }}
        viewport={viewportOnce}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-padding bg-gradient-to-b from-pearl via-white to-pearl"
      aria-label="Pourquoi choisir PrestigeDrive"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <SectionHeader
          eyebrow="Nos Engagements"
          title={<>Pourquoi Choisir <span className="gradient-text">PrestigeDrive</span></>}
          subtitle="Nous ne nous contentons pas de louer des voitures. Nous créons des expériences de mobilité d'exception, avec le souci du détail à chaque étape."
        />

        {/* ── Cards Grid ── */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {WHY_US.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>

        {/* ── Bottom Trust Row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {[
            { value: '4.9/5',  label: 'Note moyenne clients' },
            { value: '487',    label: 'Avis vérifiés' },
            { value: '100%',   label: 'Taux de satisfaction' },
            { value: '48h',    label: 'Garantie remboursement' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display font-bold text-2xl md:text-3xl text-royal">{value}</span>
              <span className="text-text-muted text-xs md:text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
