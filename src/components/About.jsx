import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, TrendingUp, Heart } from 'lucide-react'
import { fadeRight, fadeLeft, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { useCounter, useIntersection } from '../hooks/index.js'
import { SectionHeader } from './Fleet.jsx'

const ABOUT_STATS = [
  { value: 10,  suffix: '+', label: "Années d'excellence",    icon: Award },
  { value: 500, suffix: '+', label: 'Clients satisfaits',     icon: Heart },
  { value: 80,  suffix: '+', label: 'Véhicules premium',      icon: TrendingUp },
  { value: 99,  suffix: '%', label: 'Taux de satisfaction',   icon: CheckCircle },
]

const HIGHLIGHTS = [
  'Fondée en 2014, PrestigeDrive est reconnue comme la référence de la location premium à Agadir.',
  'Notre flotte est renouvelée chaque année avec les modèles les plus récents de Mercedes, BMW, Audi et Porsche.',
  'Chaque véhicule est inspecté et préparé par nos techniciens certifiés avant chaque location.',
  'Un service concierge disponible 24h/24 pour répondre à toutes vos demandes.',
]

function AnimatedStat({ stat }) {
  const { count, startCounter } = useCounter(stat.value, 2000)
  const { ref, isIntersecting } = useIntersection({ threshold: 0.5 })
  const Icon = stat.icon

  useEffect(() => {
    if (isIntersecting) startCounter()
  }, [isIntersecting, startCounter])

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-border shadow-card text-center group hover:shadow-card-hover hover:border-royal/20 transition-all duration-300"
    >
      <div className="w-10 h-10 bg-royal/8 rounded-xl flex items-center justify-center mb-1 group-hover:bg-royal transition-colors duration-300">
        <Icon size={18} className="text-royal group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="flex items-end gap-0.5">
        <span className="font-display font-bold text-2xl md:text-3xl text-royal tabular-nums">{count}</span>
        <span className="font-display font-bold text-lg text-gold pb-0.5">{stat.suffix}</span>
      </div>
      <span className="text-text-secondary text-xs font-medium text-center leading-snug">{stat.label}</span>
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-pearl to-white overflow-hidden"
      aria-label="À propos de PrestigeDrive Agadir"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Images ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Main image */}
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-float img-zoom aspect-[4/5] max-w-[480px]">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80&auto=format&fit=crop"
                alt="Équipe PrestigeDrive Agadir — Service premium"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal/30 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 md:-right-10 z-20 card-glass p-4 rounded-2xl shadow-float w-48"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-text-primary text-sm">N°1 Agadir</p>
                  <p className="text-text-muted text-xs">Location Premium</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 md:-left-8 z-20 card-glass p-4 rounded-2xl shadow-float w-52"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" loading="lazy" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#C8A96A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-xs mt-0.5">4.9 • 487 avis</p>
                </div>
              </div>
            </motion.div>

            {/* Background blob */}
            <div className="absolute -z-10 inset-0 translate-x-8 translate-y-8">
              <div className="w-full h-full bg-gradient-to-br from-royal/10 to-gold/8 rounded-4xl blob-1" />
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="gold-label">Notre Histoire</span>
              </div>
              <h2 className="heading-lg text-text-primary mb-5">
                Une Décennie d'<span className="gradient-text">Excellence</span> à Agadir
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                Depuis 2014, PrestigeDrive s'est imposée comme la référence incontournable de la location de véhicules premium à Agadir. Notre mission : vous offrir une expérience automobile d'exception, à la hauteur de vos exigences les plus élevées.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3.5">
              {HIGHLIGHTS.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-3 mt-4"
            >
              {ABOUT_STATS.map(stat => (
                <AnimatedStat key={stat.label} stat={stat} />
              ))}
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Nous contacter
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ghost"
              >
                Voir la flotte
              </motion.button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
