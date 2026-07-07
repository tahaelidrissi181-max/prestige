import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data/index.js'
import { fadeUp, scaleIn, viewportOnce } from '../animations/variants.js'
import { SectionHeader } from './Fleet.jsx'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note: ${rating} sur 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="h-full flex flex-col">
      <div className="card-glass p-7 md:p-8 rounded-3xl h-full flex flex-col gap-5 hover:shadow-card-hover transition-shadow duration-500">

        {/* Quote icon */}
        <div className="w-10 h-10 bg-gold/12 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Quote size={18} className="text-gold" />
        </div>

        {/* Stars */}
        <StarRating rating={testimonial.rating} />

        {/* Text */}
        <blockquote className="flex-1">
          <p className="text-text-primary text-sm md:text-base leading-relaxed font-medium italic">
            "{testimonial.text}"
          </p>
        </blockquote>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/20 via-border to-transparent" />

        {/* Author */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex-shrink-0">
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name} — avis client PrestigeDrive`}
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-card"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-white flex items-center justify-center">
              <Star size={7} className="text-white fill-white" />
            </span>
          </div>
          <div>
            <p className="font-display font-semibold text-text-primary text-sm">{testimonial.name}</p>
            <p className="text-text-muted text-xs mt-0.5">{testimonial.role}</p>
          </div>
          <div className="ml-auto">
            <span className="text-text-muted text-xs">{testimonial.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-pearl via-[#F0F4FA] to-pearl overflow-hidden"
      aria-label="Avis de nos clients"
    >
      {/* Background decoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-0 w-72 h-72 bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div className="md:max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="gold-label">Témoignages</span>
            </div>
            <h2 className="heading-lg text-text-primary">
              Ce Que Disent<br />
              Nos <span className="gradient-text">Clients</span>
            </h2>
          </div>

          {/* Custom navigation */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-card flex items-center justify-center text-text-secondary hover:text-royal hover:border-royal hover:shadow-luxury transition-all duration-300 group"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-royal text-white border border-royal shadow-luxury flex items-center justify-center hover:bg-[#163d78] transition-all duration-300 group"
              aria-label="Avis suivant"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── Swiper ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            pagination={{ clickable: true, el: '.testi-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="testi-pagination flex justify-center gap-2 mt-2" />
        </motion.div>

        {/* ── Overall Rating ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 py-6 px-8 bg-white rounded-3xl border border-border shadow-card max-w-lg mx-auto"
        >
          <div className="text-center">
            <p className="font-display font-bold text-5xl text-royal">4.9</p>
            <StarRating rating={5} />
            <p className="text-text-muted text-xs mt-1">Note globale</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display font-bold text-3xl text-text-primary">487</p>
            <p className="text-text-muted text-sm mt-1">Avis vérifiés</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display font-bold text-3xl text-text-primary">99%</p>
            <p className="text-text-muted text-sm mt-1">Recommandent</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
