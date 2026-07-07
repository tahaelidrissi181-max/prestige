import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Fuel, Settings, Wind, ChevronRight, Zap } from 'lucide-react'
import { VEHICLES } from '../data/index.js'
import { fadeUp, stagger, staggerItem, scaleIn, viewportOnce } from '../animations/variants.js'

// ── Section Header reusable ──────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-14 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="gold-line" />
        <span className="gold-label">{eyebrow}</span>
        <span className="gold-line" />
      </div>
      <h2 className="heading-lg text-text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

// ── Vehicle Card ─────────────────────────────────────────────────────────────
function VehicleCard({ vehicle, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleReserve = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.article
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card-luxury overflow-hidden group cursor-pointer"
      whileHover={{ y: -8, transition: { duration: 0.35, ease: 'easeOut' } }}
      aria-label={`${vehicle.name} — ${vehicle.price} MAD par jour`}
    >
      {/* ── Image Zone ── */}
      <div className="relative h-52 md:h-56 overflow-hidden bg-gradient-to-br from-pearl to-[#EEF2F7]">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + 0.3 }}
          className="badge-gold absolute top-4 left-4 z-10"
        >
          <Zap size={10} className="text-gold" />
          {vehicle.badge}
        </motion.span>

        {/* Category pill */}
        <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-text-secondary border border-border/50">
          {vehicle.category}
        </span>

        <motion.img
          src={vehicle.image}
          alt={`${vehicle.name} — Location à Agadir`}
          loading="lazy"
          className="w-full h-full object-cover object-center"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover overlay CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button
            onClick={handleReserve}
            className="px-5 py-2.5 bg-white text-royal font-semibold text-sm rounded-full shadow-lg hover:bg-royal hover:text-white transition-all duration-300"
            aria-label={`Réserver ${vehicle.name}`}
          >
            Réserver ce véhicule
          </button>
        </motion.div>
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 md:p-6">
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="heading-sm text-text-primary text-base md:text-lg mb-0.5">{vehicle.name}</h3>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-end gap-1">
              <span className="font-display font-bold text-royal text-xl md:text-2xl">
                {vehicle.price.toLocaleString('fr-MA')}
              </span>
              <span className="text-text-muted text-xs font-medium pb-0.5">MAD</span>
            </div>
            <span className="text-text-muted text-xs">/ jour</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {[
            { icon: Settings, label: vehicle.specs.transmission },
            { icon: Fuel,     label: vehicle.specs.fuel },
            { icon: Users,    label: `${vehicle.specs.seats} places` },
            { icon: Wind,     label: 'Climatisation' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-2 bg-pearl rounded-xl border border-border/60 group-hover:border-royal/20 transition-colors duration-300"
            >
              <Icon size={13} className="text-navy flex-shrink-0" />
              <span className="text-xs font-medium text-text-secondary truncate">{label}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {vehicle.features.map(feature => (
            <span
              key={feature}
              className="text-[10px] px-2.5 py-1 rounded-full bg-royal/6 text-royal border border-royal/12 font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-5" />

        {/* CTA */}
        <motion.button
          onClick={handleReserve}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-royal text-white text-sm font-semibold rounded-2xl transition-all duration-300 hover:bg-[#163d78] hover:shadow-luxury group"
          aria-label={`Réserver ${vehicle.name}`}
        >
          <span>Réserver Maintenant</span>
          <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </motion.article>
  )
}

// ── Main Section ─────────────────────────────────────────────────────────────
const CATEGORIES = ['Tous', 'Berlines', 'SUV', 'Premium']

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered = VEHICLES.filter(v => {
    if (activeFilter === 'Tous') return true
    if (activeFilter === 'Berlines') return v.category.toLowerCase().includes('berline')
    if (activeFilter === 'SUV')     return v.category.toLowerCase().includes('suv')
    if (activeFilter === 'Premium') return v.price >= 1500
    return true
  })

  return (
    <section id="fleet" className="section-padding bg-white" aria-label="Notre flotte de véhicules premium">
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <SectionHeader
          eyebrow="Notre Flotte"
          title={<>Véhicules d'<span className="gradient-text">Exception</span></>}
          subtitle="Une sélection exclusive des berlines et SUV les plus emblématiques du marché. Chaque véhicule est méticuleusement entretenu pour vous offrir une expérience irréprochable."
        />

        {/* ── Filter Tabs ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center justify-center gap-2 md:gap-3 mb-10 md:mb-12 flex-wrap"
          role="tablist"
          aria-label="Filtrer par catégorie"
        >
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-royal text-white shadow-luxury'
                  : 'bg-pearl text-text-secondary border border-border hover:border-royal/30 hover:text-royal hover:bg-royal/5'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.span
                  layoutId="filterActive"
                  className="absolute inset-0 bg-royal rounded-full -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Vehicle Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={stagger(0.08)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {filtered.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 md:mt-16 text-center"
        >
          <p className="text-text-muted text-sm mb-6">
            Vous recherchez un véhicule spécifique ? Contactez-nous pour une offre personnalisée.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline"
          >
            Demander un devis personnalisé
            <ChevronRight size={15} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

// Export SectionHeader for reuse in other components
export { SectionHeader }
