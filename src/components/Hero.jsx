import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star, Shield, Clock } from 'lucide-react'
import { STATS, SITE_CONFIG } from '../data/index.js'
import { useCounter, useIntersection } from '../hooks/index.js'
import { fadeUp, stagger, staggerItem, blurReveal, viewportOnce } from '../animations/variants.js'

// ── Animated counter component ──────────────────────────────────────────────
function CounterItem({ value, suffix, label }) {
  const { count, startCounter } = useCounter(value, 2200)
  const { ref, isIntersecting } = useIntersection({ threshold: 0.4 })

  useEffect(() => {
    if (isIntersecting) startCounter()
  }, [isIntersecting, startCounter])

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="flex flex-col items-center gap-1.5 group"
    >
      <div className="flex items-end gap-0.5">
        <span className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums leading-none">
          {count}
        </span>
        <span className="font-display text-2xl md:text-3xl font-bold text-gold-light leading-none pb-0.5">
          {suffix}
        </span>
      </div>
      <span className="text-white/65 text-xs md:text-sm font-medium tracking-wide text-center leading-snug max-w-[100px]">
        {label}
      </span>
    </motion.div>
  )
}

// ── Hero image carousel ──────────────────────────────────────────────────────
const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80&auto=format&fit=crop',
    alt: 'Porsche sur route côtière - PrestigeDrive Agadir',
  },
  {
    url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80&auto=format&fit=crop',
    alt: 'BMW de luxe - Location premium Agadir',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80&auto=format&fit=crop',
    alt: 'Mercedes AMG - PrestigeDrive',
  },
]

export default function Hero() {
  const containerRef = useRef(null)
  const [currentImg, setCurrentImg] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const bgY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % HERO_IMAGES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen min-h-[700px] max-h-[1100px] flex flex-col overflow-hidden"
      aria-label="Section héro - Location voiture premium Agadir"
    >
      {/* ── Background Images ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence>
          {HERO_IMAGES.map((img, i) => (
            i === currentImg && (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  onLoad={() => setIsLoaded(true)}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchpriority="high"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* ── Gradient Overlay ── */}
        <div className="hero-overlay absolute inset-0" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-transparent to-transparent" />
      </motion.div>

      {/* ── Floating Decorative Blobs ── */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl animate-float-slow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl animate-float pointer-events-none" aria-hidden="true" />

      {/* ── Gold Corner Accent ── */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" aria-hidden="true" />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center"
      >
        <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 flex justify-center">
            <div className="max-w-3xl flex flex-col items-center text-center">

            {/* Gold badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold/30">
                <Star size={12} className="text-gold fill-gold" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  N°1 Location Premium à Agadir
                </span>
                <Star size={12} className="text-gold fill-gold" />
              </div>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                Location de Voitures<br />
                <span className="gradient-text-gold">Premium</span>{' '}
                <span className="text-white">à Agadir</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-white/75 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-10"
            >
              Découvrez Agadir avec élégance grâce à notre flotte de véhicules premium.
              Service haut de gamme, tarifs transparents, expérience exceptionnelle.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-14 md:mb-16"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold text-sm md:text-base px-7 md:px-8 py-3.5 md:py-4 shadow-gold animate-pulse-gold"
              >
                Réserver Maintenant
              </motion.button>

              <motion.button
                onClick={scrollToFleet}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 md:px-8 py-3.5 md:py-4 rounded-full border-2 border-white/40 text-white text-sm md:text-base font-semibold backdrop-blur-sm bg-white/8 hover:bg-white/15 hover:border-white/60 transition-all duration-300"
              >
                Découvrir la Flotte
                <ChevronDown size={16} className="animate-bounce" />
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              {[
                { icon: Shield, text: 'Assurance incluse' },
                { icon: Clock, text: 'Disponible 24h/24' },
                { icon: Star, text: '4.9/5 — 487 avis' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-gold-light flex-shrink-0" />
                  <span className="text-white/70 text-xs md:text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Statistics Bar ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 pb-6 md:pb-8"
      >
        <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            variants={stagger(0.12, 1.4)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-around md:justify-start md:gap-12 lg:gap-16 py-5 px-6 md:px-8 rounded-2xl md:rounded-3xl bg-white/8 backdrop-blur-md border border-white/15"
          >
            {STATS.map((stat) => (
              <CounterItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Carousel Dots ── */}
      <div className="absolute bottom-6 right-6 md:right-12 flex gap-2 z-20" role="tablist" aria-label="Images héro">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentImg}
            aria-label={`Image ${i + 1}`}
            onClick={() => setCurrentImg(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentImg
                ? 'w-8 h-2 bg-gold'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 scroll-indicator"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase">Défiler</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}
