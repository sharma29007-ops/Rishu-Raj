export interface VenueSpace {
  id: string;
  title: string;
  subtitle: string;
  capacity: string;
  area: string;
  description: string;
  image: string;
  features: string[];
  dimensions?: string;
  idealFor?: string;
}

export interface Facility {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlightText?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lawn' | 'banquet' | 'mandap' | 'dining';
  image: string;
  featured?: boolean;
}

export interface WeddingPackage {
  id: string;
  name: string;
  subtitle: string;
  guestRange: string;
  highlights: string[];
  includedSpaces: string[];
  badge?: string;
}

export const initialVenueConfig = {
  brandName: "ROYAL PALACE",
  subtitle: "WEDDING LAWN & BANQUET",
  location: "Katihar, Bihar, India",
  fullAddress: "Near NH-31 Bypass Road, Katihar, Bihar 854105, India",
  phone: "+91 90000 12345",
  whatsappPhone: "919000012345",
  email: "hello@example.com",
  heroHeadline: "Your Dream Wedding Begins Here",
  heroSubtext: "An elegant setting for unforgettable celebrations, cherished traditions and royal Indian hospitality in Katihar.",
  aboutTitle: "A Beautiful Beginning to Your Forever",
  aboutText: "Royal Palace Wedding Lawn & Banquet offers a grand, welcoming setting for weddings, receptions, engagements, Sangeet ceremonies, and cherished family gatherings. Surrounded by open skies and manicured greenery, our venue combines traditional Bihar hospitality with modern luxury to turn your special day into a timeless memory.",
};

export const venueSpaces: VenueSpace[] = [
  {
    id: "wedding-lawn",
    title: "The Wedding Lawn",
    subtitle: "Spacious Outdoor Lawn & Royal Stage",
    capacity: "Up to 1,500 Guests",
    area: "25,000 sq. ft. Open Lawn",
    dimensions: "250 ft x 100 ft",
    idealFor: "Grand Evening Weddings, Jai Mala Ceremonies, Open-Sky Receptions",
    description: "An expansive, lush green open-air lawn featuring an elevated 40ft wide royal mandap stage, surrounding festoon lights, and manicured landscaping. Designed for grand evening celebrations under starlit skies.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Open-air capacity for 1,500+ guests",
      "Elevated 40ft wide grand main stage",
      "Ambient festoon & fairy lighting setup",
      "Separate bride & groom entrance pathways",
      "Dedicated power generator backup"
    ]
  },
  {
    id: "banquet-hall",
    title: "The Grand Banquet Hall",
    subtitle: "Air-Conditioned Royal Indoor Hall",
    capacity: "Up to 600 Guests",
    area: "10,000 sq. ft. Covered Hall",
    dimensions: "125 ft x 80 ft",
    idealFor: "AC Indoor Receptions, Sangeet Nights, Monsoon Celebrations",
    description: "A climate-controlled, fully air-conditioned indoor banquet decorated with crystal chandeliers, acoustic ceiling drapery, plush gold chiavari seating, and high-speed ventilation for year-round comfort.",
    image: "https://images.unsplash.com/photo-1545232979-fbf34f5ce722?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High-capacity centralized air conditioning",
      "Opulent crystal chandelier illumination",
      "Integrated sound system & LED display screens",
      "2 AC bridal green rooms with attached bath",
      "Acoustically insulated ceiling setup"
    ]
  },
  {
    id: "reception-space",
    title: "The Celebration & Dining Pavilion",
    subtitle: "Covered Dining Lawn & Mandap Plaza",
    capacity: "Up to 800 Dining Guests",
    area: "12,000 sq. ft. Pavilion",
    dimensions: "150 ft x 80 ft",
    idealFor: "Multi-Cuisine Buffet Dining, Live Stalls, Phere Rituals",
    description: "A dedicated covered dining pavilion and Mandap courtyard designed for seamless guest flow, multi-cuisine live food counters, grand wedding buffets, and comfortable seated dining.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Designated multi-cuisine buffet counters",
      "Weather-protected covered dining layout",
      "Hygiene-focused kitchen preparation area",
      "Dedicated hand-wash and guest lounge plazas",
      "Direct service access for catering staff"
    ]
  }
];

export const venueFacilities: Facility[] = [
  {
    id: "f1",
    iconName: "Maximize2",
    title: "Spacious Event Areas",
    description: "Over 45,000 total sq. ft. combining lush open lawns, indoor banquet hall, and separate dining pavilion.",
    highlightText: "45,000+ Total Sq. Ft."
  },
  {
    id: "f2",
    iconName: "Car",
    title: "Guest Parking",
    description: "Ample paved parking area capable of hosting over 150 four-wheelers and two-wheelers with security attendants.",
    highlightText: "150+ Vehicles"
  },
  {
    id: "f3",
    iconName: "Sparkles",
    title: "Wedding Decoration Options",
    description: "Flexible decor setup options for traditional marigold mandaps, modern pastel themes, LED lightings, and floral gates.",
    highlightText: "Custom Themes"
  },
  {
    id: "f4",
    iconName: "UtensilsCrossed",
    title: "Catering Arrangements",
    description: "Spacious, well-ventilated kitchen space for external caterers with multi-counter buffet layout options.",
    highlightText: "Covered Stalls"
  },
  {
    id: "f5",
    iconName: "Users",
    title: "Guest Seating",
    description: "Comfortable banquet chair inventory, sofa lounges, VIP round-table seating, and family seating setups.",
    highlightText: "Luxury Furniture"
  },
  {
    id: "f6",
    iconName: "MapPin",
    title: "Convenient Location",
    description: "Easily accessible from major Katihar transit roads, providing a peaceful yet well-connected event setting.",
    highlightText: "Katihar Highway"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Evening Wedding Lawn at Dusk",
    category: "lawn",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "g2",
    title: "Royal Mandap with Marigold & Rose Floral Decor",
    category: "mandap",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g3",
    title: "Air-Conditioned Banquet Hall with Chandeliers",
    category: "banquet",
    image: "https://images.unsplash.com/photo-1545232979-fbf34f5ce722?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g4",
    title: "Outdoor Dining & Buffet Lighting Setup",
    category: "dining",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "g5",
    title: "Festive Evening Fairy Light Entrance Gate",
    category: "lawn",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g6",
    title: "Traditional Floral Canopy for Jai Mala Ceremony",
    category: "mandap",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g7",
    title: "Elegantly Draped Banquet Interior",
    category: "banquet",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g8",
    title: "Live Catering Counters & Seating Lounge",
    category: "dining",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
  }
];

export const weddingPackages: WeddingPackage[] = [
  {
    id: "p1",
    name: "Classic Sangeet & Engagement",
    subtitle: "Ideal for Intimate Family Ceremonies",
    guestRange: "200 - 400 Guests",
    badge: "Popular for Pre-Wedding",
    includedSpaces: ["Air-Conditioned Banquet Hall", "2 AC Green Rooms", "Paved Parking Area"],
    highlights: [
      "8-hour exclusive hall rental",
      "Centralized AC with acoustic drapery",
      "Chandelier lighting & basic stage backdrop setup",
      "Banquet chairs with covers & ties",
      "Full DG generator power backup"
    ]
  },
  {
    id: "p2",
    name: "Royal Wedding & Reception Combo",
    subtitle: "Our Signature Grand Celebration Setup",
    guestRange: "500 - 1200 Guests",
    badge: "Most Popular",
    highlights: [
      "24-hour full venue access (Lawn + Hall + Dining)",
      "Elevated 40ft Jai Mala stage setup",
      "Festoon & fairy light canopy across main lawn",
      "Covered dining pavilion with live counter stalls",
      "VIP bridal suite & groom room",
      "Parking management attendants included"
    ],
    includedSpaces: ["Grand Outdoor Lawn", "Air-Conditioned Banquet Hall", "Covered Dining Pavilion", "All Bridal Suites"]
  },
  {
    id: "p3",
    name: "Imperial Mega Wedding",
    subtitle: "For Grand Indian Weddings & Receptions",
    guestRange: "1200+ Guests",
    badge: "Exclusive Flagship",
    highlights: [
      "Complete 45,000 sq. ft. venue exclusivity",
      "Dual stage setup option (Jai Mala Lawn + Mandap Courtyard)",
      "Dedicated multi-counter dining plaza layout",
      "Illuminated entrance archway & garden walkway",
      "Valet parking assistant coordination",
      "Dedicated venue operations manager"
    ],
    includedSpaces: ["Full Venue Exclusivity", "Lawn, Hall, Pavilion & Parking"]
  }
];

export const visitSteps = [
  {
    step: "01",
    title: "Share Your Event Date",
    description: "Provide your preferred wedding or ceremony dates so we can check open lawn and banquet hall availability."
  },
  {
    step: "02",
    title: "Discuss Your Celebration",
    description: "Tell us about your estimated guest count, preferred stage decor, and dining layout preferences."
  },
  {
    step: "03",
    title: "Arrange a Venue Visit",
    description: "Walk through the lawn, banquet hall, bridal rooms, and parking areas in person with our venue manager."
  }
];
