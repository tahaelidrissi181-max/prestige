import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { FAQ_ITEMS } from '../data/index.js'
import { fadeUp, fadeRight, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-royal/30 shadow-luxury bg-white'
          : 'border-border bg-white hover:border-royal/20 hover:shadow-card'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <div className="flex items-start gap-4">
          {/* Number badge */}
          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
            isOpen ? 'bg-royal text-white' : 'bg-pearl text-text-secondary group-hover:bg-royal/10 group-hover:text-royal'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className={`font-display font-semibold text-sm md:text-base leading-snug transition-colors duration-300 ${
            isOpen ? 'text-royal' : 'text-text-primary group-hover:text-royal'
          }`}>
            {item.q}
          </span>
        </div>

        {/* Toggle icon */}
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-royal text-white rotate-0' : 'bg-pearl text-text-secondary group-hover:bg-royal/10 group-hover:text-royal'
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 ml-11">
              {/* Accent line */}
              <div className="h-px bg-gradient-to-r from-royal/20 to-transparent mb-4" />
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(prev => prev === i ? -1 : i)

  return (
    <section
      id="faq"
      className="section-padding bg-gradient-to-b from-white to-pearl"
      aria-label="Questions fréquemment posées"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── Left: Header ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="gold-label">FAQ</span>
            </div>
            <h2 className="heading-lg text-text-primary mb-4">
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Toutes les réponses à vos questions sur nos services, conditions de location et véhicules.
            </p>

            {/* Contact prompt */}
            <div className="p-5 bg-white rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-royal/8 rounded-xl flex items-center justify-center">
                  <HelpCircle size={18} className="text-royal" />
                </div>
                <p className="font-display font-semibold text-text-primary text-sm">Besoin d'aide ?</p>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Notre équipe est disponible 24h/24 pour répondre à toutes vos questions.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full justify-center py-3 text-sm"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>

          {/* ── Right: Accordion ── */}
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
