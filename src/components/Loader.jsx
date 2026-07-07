import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const steps = [
      { target: 35,  delay: 100  },
      { target: 65,  delay: 400  },
      { target: 85,  delay: 700  },
      { target: 100, delay: 1000 },
    ]

    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => setProgress(target), delay)
    )

    const finishTimer = setTimeout(() => {
      setDone(true)
      setTimeout(() => onComplete?.(), 600)
    }, 1700)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(finishTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #E8ECF2 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />

          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.08, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-80 h-80 rounded-full border border-royal/20"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.05, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="w-56 h-56 rounded-full border border-gold/25"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 bg-royal rounded-2xl flex items-center justify-center shadow-luxury">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
              </div>

              <div className="text-center">
                <h1 className="font-display font-bold text-2xl text-text-primary tracking-tight">
                  PrestigeDrive
                </h1>
                <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mt-0.5">
                  Agadir
                </p>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-48 flex flex-col items-center gap-2"
            >
              <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-royal to-gold rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <span className="text-text-muted text-[10px] font-medium tabular-nums">{progress}%</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="text-text-muted text-xs tracking-widest uppercase text-center"
            >
              Location Premium · Agadir
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
