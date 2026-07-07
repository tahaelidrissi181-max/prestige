import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// ── Back to Top Button ────────────────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="back-to-top group"
          aria-label="Retour en haut de page"
        >
          <ArrowUp
            size={18}
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ── Scroll Progress Bar ───────────────────────────────────────────────────────
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-royal via-gold to-royal z-[60] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

// ── Floating WhatsApp Button ──────────────────────────────────────────────────
export function FloatingWhatsApp({ phone }) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] flex items-center justify-center hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-shadow duration-300 animate-pulse-gold"
      aria-label="Contacter PrestigeDrive sur WhatsApp"
      style={{ animation: 'floatPulseGreen 2.5s ease-in-out infinite' }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.86.5 3.61 1.42 5.13L2 22l5.13-1.55a9.87 9.87 0 0 0 4.91 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.76 14.07c-.24.67-1.4 1.3-1.92 1.38-.5.08-1.13.12-1.81-.11-.43-.14-.97-.33-1.67-.65-2.94-1.27-4.86-4.24-5.01-4.44-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.57-.36.76-.36.19 0 .38.01.55.01.17 0 .41-.07.64.49.23.56.78 1.93.85 2.07.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.28.3-.12.58.16.29.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.28.13.44.11.6-.06.16-.17.68-.79.87-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.28.14.46.2.53.31.07.11.07.67-.17 1.34z"/>
      </svg>
    </motion.a>
  )
}
