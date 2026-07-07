// ─── Site Configuration ───────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name:    'PrestigeDrive',
  tagline: 'Location Premium à Agadir',
  phone:   '+212 528 000 000',
  email:   'contact@prestigedrive-agadir.ma',
  address: 'Boulevard Mohammed V, Agadir 80000',
  hours:   'Disponible 24h/24 — 7j/7',
  whatsapp: '212528000000',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108791.74714706624!2d-9.666938!3d30.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad6b4b%3A0x4f9c9f1f1f1f1f1f!2sAgadir!5e0!3m2!1sfr!2sma!4v1620000000000',
  socials: {
    instagram: 'https://instagram.com/prestigedrive_agadir',
    facebook:  'https://facebook.com/prestigedrive.agadir',
    tiktok:    'https://tiktok.com/@prestigedrive',
  },
}

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const STATS = [
  { value: 500,  suffix: '+',  label: 'Clients satisfaits',    icon: '👥' },
  { value: 80,   suffix: '+',  label: 'Véhicules premium',      icon: '🚗' },
  { value: 24,   suffix: '/7', label: 'Assistance disponible',  icon: '🛡' },
  { value: 10,   suffix: '+',  label: "Années d'expérience",    icon: '⭐' },
]

// ─── Vehicles ─────────────────────────────────────────────────────────────────
export const VEHICLES = [
  {
    id: 1,
    name: 'Mercedes Classe C',
    category: 'Berline',
    price: 650,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80&auto=format&fit=crop',
    badge: 'Populaire',
    specs: {
      transmission: 'Automatique',
      fuel:         'Diesel',
      seats:        5,
      ac:           true,
    },
    features: ['GPS intégré', 'Régulateur de vitesse', 'Caméra recul'],
  },
  {
    id: 2,
    name: 'BMW Série 5',
    category: 'Berline',
    price: 850,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80&auto=format&fit=crop',
    badge: 'Coup de cœur',
    specs: {
      transmission: 'Automatique',
      fuel:         'Essence',
      seats:        5,
      ac:           true,
    },
    features: ['Système BMW Live', 'Sièges chauffants', 'Ambient light'],
  },
  {
    id: 3,
    name: 'Audi A6',
    category: 'Berline Premium',
    price: 900,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=900&q=80&auto=format&fit=crop',
    badge: 'Élite',
    specs: {
      transmission: 'Automatique',
      fuel:         'Diesel',
      seats:        5,
      ac:           true,
    },
    features: ['Matrix LED', 'Virtual Cockpit', 'Bang & Olufsen'],
  },
  {
    id: 4,
    name: 'Mercedes GLC',
    category: 'SUV Premium',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&q=80&auto=format&fit=crop',
    badge: 'SUV Luxe',
    specs: {
      transmission: 'Automatique',
      fuel:         'Diesel',
      seats:        5,
      ac:           true,
    },
    features: ['MBUX System', 'Toit panoramique', 'Suspension active'],
  },
  {
    id: 5,
    name: 'BMW X5',
    category: 'SUV Haut de gamme',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80&auto=format&fit=crop',
    badge: 'Prestige',
    specs: {
      transmission: 'Automatique',
      fuel:         'Essence',
      seats:        5,
      ac:           true,
    },
    features: ['Affichage tête haute', 'xDrive AWD', 'Masseuse sièges'],
  },
  {
    id: 6,
    name: 'Range Rover Evoque',
    category: 'SUV Premium',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=900&q=80&auto=format&fit=crop',
    badge: 'Exclusif',
    specs: {
      transmission: 'Automatique',
      fuel:         'Diesel',
      seats:        5,
      ac:           true,
    },
    features: ['Terrain Response', 'Pivi Pro', 'ClearSight'],
  },
  {
    id: 7,
    name: 'Audi Q8',
    category: 'SUV Grand Tourisme',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&q=80&auto=format&fit=crop',
    badge: 'Ultra Premium',
    specs: {
      transmission: 'Automatique',
      fuel:         'Essence',
      seats:        5,
      ac:           true,
    },
    features: ['MMI Touch Response', 'Night Vision', 'Suspension pneumatique'],
  },
  {
    id: 8,
    name: 'Porsche Macan',
    category: 'SUV Sport',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80&auto=format&fit=crop',
    badge: 'Sport & Luxe',
    specs: {
      transmission: 'Automatique',
      fuel:         'Essence',
      seats:        5,
      ac:           true,
    },
    features: ['PASM actif', 'Sport Chrono', 'Bose Premium'],
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    icon: 'plane',
    title: 'Livraison Aéroport',
    desc: 'Récupérez votre véhicule directement à l\'aéroport d\'Agadir-Al Massira, à toute heure.',
  },
  {
    icon: 'shield',
    title: 'Assurance Incluse',
    desc: 'Tous nos véhicules sont entièrement assurés. Roulez l\'esprit tranquille.',
  },
  {
    icon: 'headphones',
    title: 'Assistance 24h/24',
    desc: 'Notre équipe dédiée est disponible à toute heure pour vous accompagner.',
  },
  {
    icon: 'tag',
    title: 'Prix Transparents',
    desc: 'Aucun frais caché. Le tarif annoncé est le tarif final, garanti.',
  },
  {
    icon: 'star',
    title: 'Flotte Premium',
    desc: 'Des véhicules récents, parfaitement entretenus et préparés pour chaque location.',
  },
  {
    icon: 'route',
    title: 'Kilométrage Flexible',
    desc: 'Options kilométrage illimité disponibles selon votre durée de location.',
  },
  {
    icon: 'users',
    title: 'Équipe Professionnelle',
    desc: 'Une équipe expérimentée, bilingue et passionnée par l\'excellence du service.',
  },
  {
    icon: 'zap',
    title: 'Réservation Rapide',
    desc: 'Processus de réservation simplifié — confirmation en moins de 5 minutes.',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    title: 'Transfert Aéroport',
    desc: 'Service de prise en charge et dépose à l\'aéroport d\'Agadir-Al Massira, 24h/24.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
    icon: 'plane',
  },
  {
    id: 2,
    title: 'Livraison à l\'Hôtel',
    desc: 'Votre véhicule premium livré directement devant votre hôtel ou riad.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    icon: 'building',
  },
  {
    id: 3,
    title: 'Location Entreprise',
    desc: 'Solutions de mobilité premium pour vos déplacements professionnels et équipes.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&auto=format&fit=crop',
    icon: 'briefcase',
  },
  {
    id: 4,
    title: 'Flotte Corporate',
    desc: 'Gestion de flotte dédiée pour les entreprises avec contrats long terme.',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80&auto=format&fit=crop',
    icon: 'building2',
  },
  {
    id: 5,
    title: 'Voitures de Mariage',
    desc: 'Faites de votre mariage un moment inoubliable avec nos véhicules d\'exception.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
    icon: 'heart',
  },
  {
    id: 6,
    title: 'Service VIP',
    desc: 'Chauffeur privé, conciergerie automobile et service personnalisé 5 étoiles.',
    image: 'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?w=800&q=80&auto=format&fit=crop',
    icon: 'crown',
  },
]

// ─── Destinations ─────────────────────────────────────────────────────────────
export const DESTINATIONS = [
  {
    id: 1,
    name: 'Plage d\'Agadir',
    desc: '10 km de plage dorée, la plus belle côte du Maroc',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop',
    distance: '5 min',
  },
  {
    id: 2,
    name: 'Marina d\'Agadir',
    desc: 'Port de plaisance moderne aux restaurants gastronomiques',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80&auto=format&fit=crop',
    distance: '10 min',
  },
  {
    id: 3,
    name: 'Taghazout',
    desc: 'Village de surf authentique, paradis des surfeurs',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop',
    distance: '25 min',
  },
  {
    id: 4,
    name: 'Paradise Valley',
    desc: 'Oasis de verdure et palmiers au cœur de l\'Atlas',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80&auto=format&fit=crop',
    distance: '45 min',
  },
  {
    id: 5,
    name: 'Tamraght',
    desc: 'Village côtier pittoresque aux eaux cristallines',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=900&q=80&auto=format&fit=crop',
    distance: '20 min',
  },
  {
    id: 6,
    name: 'Parc Souss Massa',
    desc: 'Réserve naturelle avec flamants roses et paysages sauvages',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=900&q=80&auto=format&fit=crop',
    distance: '35 min',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jean-Marc Dubois',
    role: 'Voyageur d\'affaires, Paris',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    text: 'Service exceptionnel du début à la fin. La Mercedes GLC était immaculée et livrée à l\'heure à l\'aéroport. L\'équipe de PrestigeDrive est d\'un professionnalisme rare. Je recommande vivement.',
    date: 'Mars 2024',
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    role: 'Touriste, Lyon',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    text: 'Notre road trip vers Paradise Valley avec le BMW X5 était magique. Voiture parfaite, prix transparents, assistance réactive. On reviendra définitivement avec PrestigeDrive.',
    date: 'Février 2024',
  },
  {
    id: 3,
    name: 'Karim Benali',
    role: 'Entrepreneur, Casablanca',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    text: 'La Porsche Macan était dans un état parfait. Réservation ultra rapide, équipe souriante et très professionnelle. Le service VIP vaut vraiment son prix. Bravo à toute l\'équipe !',
    date: 'Janvier 2024',
  },
  {
    id: 4,
    name: 'Amélie Rousseau',
    role: 'Photographe, Bordeaux',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    text: 'J\'avais besoin d\'un Range Rover pour explorer les paysages du Souss. PrestigeDrive a tout géré à la perfection. Véhicule superbe, prix honnêtes. Une vraie expérience premium.',
    date: 'Décembre 2023',
  },
  {
    id: 5,
    name: 'Thomas Müller',
    role: 'Cadre dirigeant, Zurich',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    text: 'Troisième fois que je loue chez PrestigeDrive. Toujours le même niveau d\'excellence. L\'Audi Q8 était parfaite pour mes réunions d\'affaires. Service 5 étoiles, sans hésitation.',
    date: 'Novembre 2023',
  },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choisissez votre véhicule',
    desc: 'Parcourez notre flotte premium et sélectionnez le véhicule qui correspond à vos besoins et votre style.',
    icon: 'car',
  },
  {
    step: '02',
    title: 'Réservez en ligne',
    desc: 'Remplissez votre demande en ligne ou appelez-nous. Confirmation garantie en moins de 5 minutes.',
    icon: 'calendar',
  },
  {
    step: '03',
    title: 'Récupérez & Profitez',
    desc: 'Récupérez votre véhicule à l\'aéroport, à votre hôtel ou dans nos locaux. Et découvrez Agadir avec style.',
    icon: 'key',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: 'Quels documents sont nécessaires pour louer un véhicule ?',
    a: 'Vous aurez besoin d\'un permis de conduire valide (depuis au moins 2 ans), d\'une pièce d\'identité ou passeport, et d\'une carte de crédit au nom du conducteur principal. Pour les véhicules premium, un permis de 3 ans minimum est requis.',
  },
  {
    q: 'Proposez-vous la livraison à l\'aéroport d\'Agadir ?',
    a: 'Oui, nous livrons votre véhicule directement à l\'aéroport Agadir-Al Massira, 24 heures sur 24. Un chauffeur vous accueillera avec une pancarte à votre nom à la sortie des arrivées.',
  },
  {
    q: 'L\'assurance est-elle incluse dans le prix ?',
    a: 'Tous nos tarifs incluent l\'assurance responsabilité civile obligatoire. Nous proposons également des options complémentaires : assurance tous risques, couverture zero franchise, et protection des occupants.',
  },
  {
    q: 'Puis-je voyager en dehors d\'Agadir avec le véhicule loué ?',
    a: 'Oui, vous pouvez circuler librement dans tout le Maroc avec nos véhicules. Pour les voyages à l\'étranger, une autorisation préalable est nécessaire. Des frais supplémentaires peuvent s\'appliquer.',
  },
  {
    q: 'Quelle est votre politique d\'annulation ?',
    a: 'Annulation gratuite jusqu\'à 48 heures avant la prise en charge. Pour les annulations entre 24 et 48 heures, 50% du montant est retenu. Passé ce délai, la totalité de la réservation est due.',
  },
  {
    q: 'Y a-t-il un âge minimum pour louer un véhicule premium ?',
    a: 'L\'âge minimum est de 21 ans pour les véhicules standards et de 25 ans pour les véhicules premium (BMW X5, Audi Q8, Porsche Macan). Une majoration jeune conducteur peut s\'appliquer pour les conducteurs de moins de 25 ans.',
  },
  {
    q: 'Proposez-vous des contrats de longue durée ?',
    a: 'Oui, nous proposons des formules de location longue durée (1 mois, 3 mois, 6 mois ou plus) avec des tarifs préférentiels. Contactez-nous pour une offre personnalisée adaptée à vos besoins.',
  },
]

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Accueil',       href: '#home' },
  { label: 'Notre Flotte',  href: '#fleet' },
  { label: 'Services',      href: '#services' },
  { label: 'À Propos',      href: '#about' },
  { label: 'Avis Clients',  href: '#testimonials' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]
