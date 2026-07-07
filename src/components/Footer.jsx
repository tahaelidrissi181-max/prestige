import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight, Heart } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, VEHICLES } from '../data/index.js'
import { fadeUp, stagger, staggerItem, viewportOnce } from '../animations/variants.js'

const FOOTER_FLEET = VEHICLES.slice(0, 5).map(v => ({
  name: v.name,
  price: `${v.price.toLocaleString('fr-MA')} MAD / jour`,
}))

const LEGAL_LINKS = [
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'Conditions générales',          href: '#' },
  { label: 'Mentions légales',              href: '#' },
]

function FooterColumn({ title, children, delay = 0 }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col gap-5"
    >
      <div>
        <h3 className="font-display font-semibold text-white text-base mb-2">{title}</h3>
        <div className="h-0.5 w-8 bg-gold rounded-full" />
      </div>
      {children}
    </motion.div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0D1B2A] text-white" role="contentinfo" aria-label="Pied de page PrestigeDrive Agadir">

      {/* ── Top Divider ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* ── Main Footer Content ── */}
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
        >

          {/* ── Col 1: Brand ── */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="PrestigeDrive Agadir - Retour à l'accueil"
            >
              <div className="w-10 h-10 bg-royal rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none block">PrestigeDrive</span>
                <span className="text-gold text-xs font-medium tracking-widest uppercase">Agadir</span>
              </div>
            </a>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              La référence de la location de véhicules premium à Agadir depuis 2014.
              Service d'exception, flotte exclusive, satisfaction garantie.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { href: SITE_CONFIG.socials.instagram, icon: Instagram, label: 'Instagram PrestigeDrive' },
                { href: SITE_CONFIG.socials.facebook,  icon: Facebook,  label: 'Facebook PrestigeDrive' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-royal hover:border-royal transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
              <motion.a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp PrestigeDrive"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.86.5 3.61 1.42 5.13L2 22l5.13-1.55a9.87 9.87 0 0 0 4.91 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.76 14.07c-.24.67-1.4 1.3-1.92 1.38-.5.08-1.13.12-1.81-.11-.43-.14-.97-.33-1.67-.65-2.94-1.27-4.86-4.24-5.01-4.44-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.57-.36.76-.36.19 0 .38.01.55.01.17 0 .41-.07.64.49.23.56.78 1.93.85 2.07.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.28.3-.12.58.16.29.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.28.13.44.11.6-.06.16-.17.68-.79.87-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86 0.89.28.14.46.2.53.31.07.11.07.67-.17 1.34z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* ── Col 2: Navigation ── */}
          <FooterColumn title="Navigation">
            <nav aria-label="Navigation pied de page">
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200"
                    >
                      <ArrowRight size={12} className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          {/* ── Col 3: Fleet ── */}
          <FooterColumn title="Notre Flotte">
            <ul className="flex flex-col gap-3">
              {FOOTER_FLEET.map((v) => (
                <li key={v.name}>
                  <a
                    href="#fleet"
                    onClick={(e) => { e.preventDefault(); scrollTo('#fleet') }}
                    className="group flex items-center justify-between text-sm"
                  >
                    <span className="flex items-center gap-2 text-white/55 hover:text-white transition-colors duration-200 group">
                      <ArrowRight size={12} className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      {v.name}
                    </span>
                    <span className="text-gold/70 text-xs font-medium ml-2 flex-shrink-0">{v.price}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#fleet"
                  onClick={(e) => { e.preventDefault(); scrollTo('#fleet') }}
                  className="text-gold text-xs font-semibold hover:text-gold-light transition-colors duration-200 flex items-center gap-1 mt-1"
                >
                  Voir toute la flotte →
                </a>
              </li>
            </ul>
          </FooterColumn>

          {/* ── Col 4: Contact ── */}
          <FooterColumn title="Contactez-nous">
            <address className="not-italic flex flex-col gap-3.5">
              {[
                { icon: Phone,  text: SITE_CONFIG.phone,   href: `tel:${SITE_CONFIG.phone}` },
                { icon: Mail,   text: SITE_CONFIG.email,   href: `mailto:${SITE_CONFIG.email}` },
                { icon: MapPin, text: SITE_CONFIG.address,  href: '#' },
                { icon: Clock,  text: SITE_CONFIG.hours,    href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-white/8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={13} className="text-gold" />
                  </div>
                  {href && href !== '#' ? (
                    <a
                      href={href}
                      className="text-white/55 hover:text-white text-sm leading-relaxed transition-colors duration-200"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-white/55 text-sm leading-relaxed">{text}</span>
                  )}
                </div>
              ))}
            </address>

            {/* Reserve button */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-5 bg-gold text-white text-sm font-semibold rounded-2xl hover:bg-gold-dark transition-all duration-300 shadow-gold"
            >
              Réserver Maintenant
              <ArrowRight size={14} />
            </motion.button>
          </FooterColumn>

        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-white/8 mx-4 sm:mx-6 lg:mx-8 xl:mx-12" />

      {/* ── Bottom Bar ── */}
      <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-white/35 text-xs text-center sm:text-left flex items-center gap-1.5 flex-wrap justify-center">
            © {currentYear} PrestigeDrive Agadir. Tous droits réservés.
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Fait avec <Heart size={10} className="text-gold/70 fill-gold/70 mx-0.5" /> au Maroc
            </span>
          </p>

          {/* Legal links */}
          <nav aria-label="Liens légaux" className="flex items-center gap-4 flex-wrap justify-center">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/30 hover:text-white/70 text-xs transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  )
}
