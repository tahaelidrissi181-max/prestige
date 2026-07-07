import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { SITE_CONFIG } from '../data/index.js'
import { fadeUp, fadeRight, fadeLeft, stagger, staggerItem, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

const CONTACT_CARDS = [
  {
    icon:    Phone,
    label:   'Téléphone',
    value:   SITE_CONFIG.phone,
    sub:     'Disponible 24h/24 — 7j/7',
    href:    `tel:${SITE_CONFIG.phone}`,
    cta:     'Appeler maintenant',
    accent:  'bg-royal',
    glow:    'hover:shadow-luxury',
  },
  {
    icon:    MessageCircle,
    label:   'WhatsApp',
    value:   'Chat en direct',
    sub:     'Réponse en moins de 5 min',
    href:    `https://wa.me/${SITE_CONFIG.whatsapp}`,
    cta:     'Écrire sur WhatsApp',
    accent:  'bg-[#25D366]',
    glow:    'hover:shadow-[0_4px_24px_rgba(37,211,102,0.35)]',
  },
  {
    icon:    Mail,
    label:   'Email',
    value:   SITE_CONFIG.email,
    sub:     'Réponse sous 2 heures',
    href:    `mailto:${SITE_CONFIG.email}`,
    cta:     'Envoyer un email',
    accent:  'bg-gold',
    glow:    'hover:shadow-gold',
  },
]

function ContactCard({ card, index }) {
  const Icon = card.icon
  return (
    <motion.a
      href={card.href}
      target={card.href.startsWith('http') ? '_blank' : undefined}
      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      variants={staggerItem}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`group card-luxury p-6 md:p-7 flex flex-col gap-4 cursor-pointer ${card.glow} transition-all duration-400`}
      aria-label={`${card.label}: ${card.value}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 ${card.accent} rounded-2xl flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" />
      </div>

      {/* Content */}
      <div>
        <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">{card.label}</p>
        <p className="font-display font-semibold text-text-primary text-base md:text-lg leading-snug">{card.value}</p>
        <p className="text-text-muted text-xs mt-1">{card.sub}</p>
      </div>

      {/* CTA row */}
      <div className="flex items-center justify-between pt-1 border-t border-border">
        <span className="text-royal text-sm font-semibold group-hover:text-[#163d78] transition-colors">{card.cta}</span>
        <ExternalLink size={14} className="text-text-muted group-hover:text-royal transition-colors" />
      </div>
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-white overflow-hidden"
      aria-label="Contactez PrestigeDrive Agadir"
    >
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <SectionHeader
          eyebrow="Contactez-nous"
          title={<>Parlons de Votre <span className="gradient-text">Projet</span></>}
          subtitle="Notre équipe est à votre disposition pour vous conseiller et organiser votre location premium à Agadir."
        />

        {/* ── Contact Cards ── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16"
        >
          {CONTACT_CARDS.map((card, i) => (
            <ContactCard key={card.label} card={card} index={i} />
          ))}
        </motion.div>

        {/* ── Bottom two-column: Address + Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">

          {/* Left: Address & Hours */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Address */}
            <div className="card-luxury p-6 flex flex-col gap-5">
              <h3 className="font-display font-semibold text-text-primary text-lg">Notre Bureau</h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-royal/8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-royal" />
                </div>
                <div>
                  <p className="text-text-primary font-medium text-sm mb-0.5">Adresse</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-text-primary font-medium text-sm mb-0.5">Horaires</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{SITE_CONFIG.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Livraison',  value: 'Aéroport & Hôtel',  icon: '✈' },
                { label: 'Assurance', value: 'Tous risques incl.', icon: '🛡' },
                { label: 'Paiement',  value: 'CB & Espèces',       icon: '💳' },
                { label: 'Caution',   value: 'Sans dépôt',         icon: '✓'  },
              ].map(({ label, value, icon }) => (
                <div key={label} className="p-3.5 bg-pearl rounded-2xl border border-border">
                  <span className="text-lg mb-1 block">{icon}</span>
                  <p className="text-text-muted text-xs font-medium">{label}</p>
                  <p className="text-text-primary text-xs font-semibold mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-float border border-border h-72 md:h-80 lg:h-full min-h-[300px]">
              {/* Map iframe */}
              <iframe
                title="Localisation PrestigeDrive Agadir"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214891.81264882487!2d-9.779079!3d30.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9a13dfaa7%3A0x84ee826a6c56d88c!2sAgadir%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.85) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Carte de localisation PrestigeDrive Agadir"
              />
              {/* Map overlay card */}
              <div className="absolute bottom-4 left-4 card-glass p-3.5 rounded-2xl flex items-center gap-3 shadow-float">
                <div className="w-9 h-9 bg-royal rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary text-xs">PrestigeDrive Agadir</p>
                  <p className="text-text-muted text-[10px]">Boulevard Mohammed V</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
