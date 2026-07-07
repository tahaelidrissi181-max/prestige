import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar   from './components/Navbar.jsx'
import Footer   from './components/Footer.jsx'
import Loader   from './components/Loader.jsx'
import Home     from './pages/Home.jsx'
import { BackToTop, ScrollProgress, FloatingWhatsApp } from './components/ui/ScrollUtils.jsx'
import { SITE_CONFIG } from './data/index.js'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* ── Loading Screen ── */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* ── App Shell ── */}
      {!loading && (
        <>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Skip to content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-royal focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Aller au contenu principal
          </a>

          {/* Navigation */}
          <Navbar />

          {/* Page Routes */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* 404 fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>

          {/* Footer */}
          <Footer />

          {/* Floating utilities */}
          <BackToTop />
          <FloatingWhatsApp phone={SITE_CONFIG.whatsapp} />
        </>
      )}
    </>
  )
}
