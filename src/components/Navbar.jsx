import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { useScrollY } from '../hooks/index.js'
import { NAV_LINKS, SITE_CONFIG } from '../data/index.js'

export default function Navbar() {
  const { isScrolled } = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setActiveLink(href)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-nav border-b border-border/50'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-18 md:h-20">

            {/* ── Logo ── */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              aria-label="PrestigeDrive Agadir - Accueil"
            >
              <div className="relative">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? 'bg-royal'
                    : 'bg-white/15 backdrop-blur-sm border border-white/30'
                }`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                  </svg>
                </div>
                {/* Gold dot accent */}
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gold rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-lg leading-none tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}>
                  PrestigeDrive
                </span>
                <span className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-gold' : 'text-gold-light'
                }`}>
                  Agadir
                </span>
              </div>
            </motion.a>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeLink === link.href
                      ? isScrolled
                        ? 'text-royal bg-royal/8'
                        : 'text-white bg-white/15'
                      : isScrolled
                        ? 'text-text-secondary hover:text-royal hover:bg-pearl'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={activeLink === link.href ? 'page' : undefined}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href={`tel:${SITE_CONFIG.phone}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-text-secondary hover:text-royal' : 'text-white/80 hover:text-white'
                }`}
                aria-label="Nous appeler"
              >
                <Phone size={15} />
                <span className="hidden xl:block">{SITE_CONFIG.phone}</span>
              </motion.a>

              <motion.button
                onClick={() => handleNavClick('#contact')}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="btn-primary text-sm px-6 py-2.5 animate-pulse-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Réserver
              </motion.button>
            </div>

            {/* ── Mobile Burger ── */}
            <motion.button
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-text-primary hover:bg-pearl'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[320px] bg-white shadow-float lg:hidden flex flex-col"
              role="dialog"
              aria-label="Menu navigation mobile"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-royal rounded-lg flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>
                  </div>
                  <span className="font-display font-bold text-base text-text-primary">PrestigeDrive</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl text-text-secondary hover:text-royal hover:bg-pearl transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-6 py-6 overflow-y-auto" aria-label="Navigation mobile">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${
                        activeLink === link.href
                          ? 'bg-royal/8 text-royal'
                          : 'text-text-secondary hover:bg-pearl hover:text-text-primary'
                      }`}
                    >
                      {link.label}
                      {activeLink === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Panel Footer */}
              <div className="px-6 py-6 border-t border-border space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-pearl text-text-primary text-sm font-medium hover:bg-border/50 transition-colors"
                >
                  <span className="w-8 h-8 bg-royal/10 rounded-xl flex items-center justify-center">
                    <Phone size={14} className="text-royal" />
                  </span>
                  {SITE_CONFIG.phone}
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full btn-primary justify-center py-3.5"
                >
                  Réserver Maintenant
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
