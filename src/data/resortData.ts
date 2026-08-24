import { Room, Amenity, GalleryItem, MenuItem, Review } from '../types';

// Asset imports from real resort photography (14 real resort photos)
import entranceSignImg from '../assets/images/resort_entrance_sign_1787601225225.jpg'; // WA0039: Welcome to GALLINES PARADISE entrance wall & stone paved drive
import estateDrivewayImg from '../assets/images/resort_estate_driveway_1787601245876.jpg'; // WA0028: Paved estate avenue with chalets, planters & turf
import receptionDeskImg from '../assets/images/resort_reception_desk_1787601265561.jpg'; // WA0036: Front desk with Orange Money & SLCB QR Payment signs
import thatchedGazebosImg from '../assets/images/resort_thatched_gazebos_1787601285116.jpg'; // WA0033: Conical thatched dining gazebos in tropical palm grove
import sportsArenaImg from '../assets/images/resort_sports_arena_1787601301684.jpg'; // WA0035: All-weather turf sports arena with high perimeter netting
import fitnessGymImg from '../assets/images/resort_fitness_gym_1787601322008.jpg'; // WA0037: Cardio & fitness gym room with treadmills, bikes & gym ball
import presidentialLoungeImg from '../assets/images/resort_presidential_lounge_1787601340719.jpg'; // WA0040: Presidential suite living room with red sectional sofa & dining
import stoneBedroomImg from '../assets/images/resort_stone_bedroom_1787601357223.jpg'; // WA0032: Luxury suite bedroom with stone accent wall & art frame
import stripedWardrobeImg from '../assets/images/resort_striped_wardrobe_1787601374877.jpg'; // WA0031: Room interior with wardrobe, safe, mini-fridge & striped wall
import deluxeBedroomImg from '../assets/images/resort_deluxe_bedroom_1787601391609.jpg'; // WA0034: Deluxe king bedroom with patterned drapery & split AC
import modernBathroomImg from '../assets/images/resort_modern_bathroom_1787601410497.jpg'; // WA0038: Clean ensuite bathroom with porcelain tub & shower curtain
import eventsHallImg from '../assets/images/resort_events_hall_1787601428209.jpg'; // WA0030: Conference & Events Hall facade with grand white arched portico
import nightViewImg from '../assets/images/resort_night_view_1787601445191.jpg'; // WA0029: Modern multi-story building & illuminated gate at night
import tropicalPalmsImg from '../assets/images/resort_tropical_palms_1787601462038.jpg'; // WA0041: Tropical coconut palms, gardens and resort villa estate

export const RESORT_IMAGES = {
  hero: estateDrivewayImg,
  entranceSign: entranceSignImg,
  driveway: estateDrivewayImg,
  suite: stoneBedroomImg,
  suiteLounge: presidentialLoungeImg,
  suiteWardrobe: stripedWardrobeImg,
  deluxeSuite: deluxeBedroomImg,
  pool: estateDrivewayImg,
  dining: thatchedGazebosImg,
  gazeboGarden: thatchedGazebosImg,
  bathroom: modernBathroomImg,
  sports: sportsArenaImg,
  reception: receptionDeskImg,
  gym: fitnessGymImg,
  eventsHall: eventsHallImg,
  nightView: nightViewImg,
  tropicalExterior: tropicalPalmsImg,
  exteriorEstate: eventsHallImg
};

export const RESORT_INFO = {
  name: "Gallines Paradise Resort",
  formalName: "Gallines Paradise Hotel & Luxury Resort",
  tagline: "Your Tropical Sanctuary of Comfort, Elegance & Leisure",
  description: "Nestled in a lush tropical oasis, Gallines Paradise Resort blends serene nature with presidential comfort. Featuring executive suites with private lounges, traditional thatched garden gazebos, an all-weather sports complex, state-of-the-art fitness gym, and seamless hospitality with modern mobile payment integration.",
  address: "Paradise Avenue, Palm Grove Enclave, Bo / Southern Province, Sierra Leone",
  phone: "+232 76 000 888 / +232 88 555 222",
  whatsapp: "+232 76 000 888",
  email: "reservations@gallinesparadiseresort.com",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  rating: 4.9,
  totalReviews: 248,
  currencyRate: 23.5, // 1 USD = 23.50 NLE
};

export const ROOMS_DATA: Room[] = [
  {
    id: "presidential-executive-suite",
    name: "Presidential Executive Living Suite",
    category: "Executive Suite",
    tagline: "Ultra-luxurious suite featuring expansive private living lounge with crimson sofa, dining suite & stone feature wall bedroom",
    priceUSD: 165,
    priceNLE: 3875,
    size: "78 m² / 840 sq ft",
    capacity: { adults: 2, children: 2 },
    bedType: "Master Queen Bed + Luxury Red Sectional Lounge",
    description: "The crown jewel of Gallines Paradise. Features a magnificent private living lounge furnished with deep crimson sectional seating, patterned throw cushions, matching ottoman, dining/work conference table, wall-mounted satellite TV, and a master bedroom with stone-textured feature wall, bedside reading lamps, digital security safe, mini refrigerator, and deep soaking porcelain bathtub.",
    image: presidentialLoungeImg,
    gallery: [
      presidentialLoungeImg,
      stoneBedroomImg,
      modernBathroomImg,
      stripedWardrobeImg
    ],
    features: [
      "Expansive Private Lounge with Red Sectional Sofa & Ottoman",
      "Executive Dining & Work Table Area with Office Seating",
      "Master Bedroom with Slate Stone Textured Accent Wall",
      "Ensuite Bathroom with Porcelain Bathtub & Hot Shower",
      "Dual High-Capacity Split Air Conditioners",
      "In-Room Electronic Digital Safe & Mini Refrigerator",
      "Dual Bedside Nightstands with Ambient Lighting",
      "High-Speed Fiber WiFi & Flat Screen Satellite TV"
    ],
    amenities: [
      "24/7 Room Service & Butler Assistance",
      "Complimentary Paradise Breakfast",
      "Unlimited Sports Arena & Fitness Gym Access",
      "Bathrobes & Luxury Toiletries",
      "Daily Housekeeping Refresh",
      "Secure Digital Safe"
    ],
    featured: true
  },
  {
    id: "royal-stone-master-suite",
    name: "Royal Stone Master Bedroom Suite",
    category: "Executive Suite",
    tagline: "Elegantly appointed bedroom suite featuring artisanal stone-brick accent wall, fine art & ensuite bath",
    priceUSD: 135,
    priceNLE: 3170,
    size: "52 m² / 560 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed with Premium White Linens",
    description: "Designed for ultimate relaxation and executive tranquility. Centered around a carved white headboard against a rustic stone-brick feature wall, framed fine art, bedside nightstands with vintage gold-fringed reading lamps, remote-controlled split air conditioning, and a spotless ensuite bathroom with bathtub.",
    image: stoneBedroomImg,
    gallery: [
      stoneBedroomImg,
      modernBathroomImg,
      stripedWardrobeImg,
      thatchedGazebosImg
    ],
    features: [
      "Artisanal Stone-Brick Textured Feature Wall",
      "White Carved Bed with Crisp High-Thread Linens",
      "Ensuite Bathroom with Porcelain Bathtub & Shower",
      "Bedside Tables with Vintage Gold-Fringed Lamp",
      "Whisper-Quiet Remote Split Air Conditioning",
      "Mini Refrigerator & In-Room Tea/Coffee Station",
      "High-Speed Wi-Fi & Satellite Television",
      "Complimentary Daily Bottled Spring Water"
    ],
    amenities: [
      "Complimentary Hot Breakfast",
      "Full Fitness Center & Sports Arena Access",
      "High-Speed WiFi Across the Estate",
      "Daily Room Refresh & Towel Service",
      "Free Secured Onsite Parking"
    ],
    featured: true
  },
  {
    id: "deluxe-striped-bedroom",
    name: "Deluxe Striped Bedroom Suite",
    category: "Deluxe King",
    tagline: "Iconic black & white vertical striped feature wall, spacious wardrobe, digital safe & ensuite bath",
    priceUSD: 110,
    priceNLE: 2585,
    size: "48 m² / 516 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed with Designer Striped Accents",
    description: "Elegantly finished with clean ceramic tile flooring, signature black and white vertical striped accent wall, full-sized dark wood wardrobe, compact electronic security safe, mini-refrigerator, bedside reading lamp, split air conditioning, and a private ensuite bathroom with bathtub.",
    image: stripedWardrobeImg,
    gallery: [
      stripedWardrobeImg,
      deluxeBedroomImg,
      modernBathroomImg,
      estateDrivewayImg
    ],
    features: [
      "Signature Black & White Vertical Striped Wall",
      "Double-Door Dark Wood Wardrobe with Drawer Storage",
      "Electronic Security Safe & Bedside Mini Refrigerator",
      "Plush Queen Bed with Gold & Black Striped Runner",
      "Ensuite Bathroom with Full Bathtub & Vanity",
      "Split Air Conditioning with Remote Control",
      "Bedside Nightstand with Reading Light",
      "Satellite TV with Sports & International Channels"
    ],
    amenities: [
      "Complimentary Breakfast Daily",
      "Unlimited Access to Fitness Gym & Turf Sports Arena",
      "High-Speed WiFi",
      "Daily Housekeeping",
      "24/7 Front Desk Support"
    ],
    featured: true
  },
  {
    id: "deluxe-paradise-king",
    name: "Deluxe Paradise Bedroom Suite",
    category: "Deluxe King",
    tagline: "Tranquil sanctuary with damask drape curtains, white bed & ensuite bath",
    priceUSD: 95,
    priceNLE: 2235,
    size: "44 m² / 473 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed with Cozy Throw",
    description: "A bright and peaceful accommodation finished in neutral tones with crown molding, elegant burgundy and gold geometric window drapery, quiet split air-conditioning, clean tiled flooring, and an ensuite bathroom with bathtub.",
    image: deluxeBedroomImg,
    gallery: [
      deluxeBedroomImg,
      modernBathroomImg,
      thatchedGazebosImg,
      estateDrivewayImg
    ],
    features: [
      "Queen Size Bed with Hypoallergenic Bedding",
      "Rich Burgundy & Gold Geometric Window Curtains",
      "Ensuite Bathroom with Porcelain Bathtub & Shower",
      "Wall-Mounted Remote Split Air Conditioner",
      "Bedside Reading Lamp & Tiled Flooring",
      "High-Speed Fiber WiFi & Flat Screen TV"
    ],
    amenities: [
      "Complimentary Breakfast",
      "Sports Arena & Fitness Gym Access",
      "High-Speed Wi-Fi",
      "Daily Room Refresh",
      "Free Secured Parking"
    ],
    featured: false
  },
  {
    id: "garden-bungalow-chalet",
    name: "Private Garden Chalet Villa",
    category: "Garden Chalet",
    tagline: "Detached chalet along the paved palm avenue surrounded by raised planters and tropical flora",
    priceUSD: 85,
    priceNLE: 1995,
    size: "40 m² / 430 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed",
    description: "Located along the serene paved driveway of the resort estate. Steps from the outdoor thatched gazebos, fitness gym, and sports court, offering quiet privacy, covered entrance, full air-conditioning, and immediate garden strolls.",
    image: estateDrivewayImg,
    gallery: [
      estateDrivewayImg,
      thatchedGazebosImg,
      tropicalPalmsImg,
      modernBathroomImg
    ],
    features: [
      "Direct Estate Paved Driveway & Garden Access",
      "Private Covered Front Porch Entrance",
      "Queen Size Bed with Fresh Linens",
      "Ensuite Bathroom with Bathtub & Hot Shower",
      "Split Air Conditioning Unit",
      "Satellite TV & High-Speed WiFi"
    ],
    amenities: [
      "Daily Breakfast Included",
      "Sports Arena & Fitness Center Access",
      "Free Parking Outside Chalet",
      "24/7 Security Guard Patrol"
    ],
    featured: false
  },
  {
    id: "executive-delegation-residence",
    name: "Executive Delegation Multi-Room Residence",
    category: "Executive Suite",
    tagline: "Multi-level accommodations for diplomatic delegates, visiting families & corporate teams",
    priceUSD: 190,
    priceNLE: 4465,
    size: "110 m² / 1184 sq ft",
    capacity: { adults: 4, children: 3 },
    bedType: "Multiple Queen Beds + Living Lounge",
    description: "Set in the modern multi-story wing of the resort estate, overlooking the illuminated entrance gate and gardens. Includes multiple bedrooms, private lounge, ensuite porcelain bathrooms, and conference room access.",
    image: nightViewImg,
    gallery: [
      nightViewImg,
      presidentialLoungeImg,
      stoneBedroomImg,
      eventsHallImg
    ],
    features: [
      "Multiple Air-Conditioned Bedrooms",
      "Private Living Room Lounge with Red Sectional",
      "Multiple Ensuite Bathrooms with Bathtubs",
      "Digital Safes & Refrigerators",
      "Direct Access to Events Hall & Dining Gazebos"
    ],
    amenities: [
      "Full VIP Breakfast Package",
      "Priority Events Hall Booking",
      "Sports Arena & Fitness Gym Pass",
      "Dedicated Concierge Support"
    ],
    featured: false
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "garden-gazebos",
    title: "Tropical Thatched Gazebos & Garden Bar",
    category: "Dining",
    shortDesc: "Handcrafted conical thatched cabanas nestled amongst lush palm trees for private open-air dining.",
    longDesc: "Immerse yourself in authentic tropical tranquility. Our handcrafted thatched conical gazebos provide the perfect shaded sanctuary for romantic candlelit dinners, chilled coconut drinks, afternoon teas, or celebratory barbecue gatherings with friends.",
    iconName: "Palmtree",
    image: thatchedGazebosImg,
    badge: "Signature Oasis",
    highlights: ["Conical Thatched Roof Cabanas", "Lush Palm & Flowerbed Setting", "Full Waiter Service", "Evening Lantern Ambiance"]
  },
  {
    id: "sports-arena",
    title: "All-Weather Sports Court & Mini-Pitch",
    category: "Sports",
    shortDesc: "Full fenced turf court for tennis, five-a-side soccer, volleyball & fitness drills.",
    longDesc: "Our perimeter-fenced sports arena features high-grade artificial turf, regulation boundary netting, and nighttime illumination. Perfect for competitive tennis matches, recreational football, morning cardio drills, or group team building.",
    iconName: "Activity",
    image: sportsArenaImg,
    badge: "Sports & Fitness",
    highlights: ["Tennis & Football Netting", "High Perimeter Safety Fence", "Night Floodlighting", "Equipment Available at Front Desk"]
  },
  {
    id: "fitness-gym",
    title: "State-of-the-Art Fitness Center",
    category: "Wellness",
    shortDesc: "Complete gym featuring modern treadmills, stationary cardio bikes, free weights & exercise balls.",
    longDesc: "Stay energized throughout your stay in our spacious, air-conditioned workout hall. Equipped with motorized running treadmills, cycling machines, strength benches, dumbbells, yoga mats, resistance balls, and vibrant motivational decor.",
    iconName: "Dumbbell",
    image: fitnessGymImg,
    badge: "Complimentary for Guests",
    highlights: ["Motorized Running Treadmills", "Cardio Spin & Stationary Bikes", "Full Free Weights & Benches", "Stability Balls & Yoga Floor Mats"]
  },
  {
    id: "estate-grounds",
    title: "Private Estate Chalets & Paved Avenue",
    category: "Services",
    shortDesc: "Quiet paved cobblestone avenue lined with snake plant planter boxes, chalets, and 24/7 security.",
    longDesc: "Our secure gated estate features paved cobblestone avenues, elegant single-story guest chalets, manicured garden planter boxes with green sansevieria plants, artificial turf borders, and generous on-site secured parking.",
    iconName: "ShieldCheck",
    image: estateDrivewayImg,
    badge: "Gated & Secure",
    highlights: ["24/7 Security Patrol & Guards", "Secure On-Site Guest Parking", "Lush Landscaped Avenues", "Quiet Residential Atmosphere"]
  },
  {
    id: "reception-desk",
    title: "24/7 Front Desk & Mobile Payment Hub",
    category: "Services",
    shortDesc: "Polished gold reception counter with instant Orange Money & SLCB QR Payment checkout.",
    longDesc: "Experience seamless arrival and departure at our front desk. Equipped with crystal chandelier illumination, professional concierge staff, and instant local mobile money integrations including Orange Money and Sierra Leone Commercial Bank (SLCB) QR Payment.",
    iconName: "Sparkles",
    image: receptionDeskImg,
    badge: "Instant Mobile Checkout",
    highlights: ["Orange Money Supported", "SLCB QR Code Payments", "24/7 Multilingual Concierge", "Luggage Storage & Wake-up Calls"]
  },
  {
    id: "events-hall",
    title: "Grand Events & Conference Hall",
    category: "Services",
    shortDesc: "Stately classical building with white arched portico entrance for weddings, summits & galas.",
    longDesc: "Our grand event facility features a classical white arched entrance with round columns, seating for up to 300 delegates, professional audio-visual setup, private bridal preparation suite, and dedicated event catering.",
    iconName: "Crown",
    image: eventsHallImg,
    badge: "Up to 300 Guests",
    highlights: ["Classical Columned Entrance", "High-Fidelity Sound & Projector", "Custom Gala & Buffet Catering", "VIP Reserved Parking"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Welcome to Gallines Paradise Entrance",
    category: "facilities",
    image: entranceSignImg,
    caption: "Official resort entrance wall and stone-paved driveway emblazoned with royal crest emblems and tropical palms."
  },
  {
    id: "gal-2",
    title: "Paved Estate Avenue & Chalets",
    category: "facilities",
    image: estateDrivewayImg,
    caption: "The peaceful cobblestone avenue and guest chalets flanked by raised dark stone planter boxes and green turf."
  },
  {
    id: "gal-3",
    title: "Presidential Suite Living Lounge",
    category: "suites",
    image: presidentialLoungeImg,
    caption: "Spacious private living lounge featuring plush crimson sectional sofa, ottoman, dining table, and TV console."
  },
  {
    id: "gal-4",
    title: "Royal Stone Master Bedroom",
    category: "suites",
    image: stoneBedroomImg,
    caption: "Executive master bedroom with rustic stone-brick feature wall, framed artwork, and vintage gold bedside lamp."
  },
  {
    id: "gal-5",
    title: "Tropical Thatched Dining Gazebos",
    category: "gardens",
    image: thatchedGazebosImg,
    caption: "Handcrafted conical thatched gazebos set in a lush palm grove for peaceful outdoor dining and cocktails."
  },
  {
    id: "gal-6",
    title: "All-Weather Sports Arena",
    category: "sports",
    image: sportsArenaImg,
    caption: "Full artificial turf sports court with perimeter safety mesh fence for tennis, soccer, and volleyball."
  },
  {
    id: "gal-7",
    title: "Cardio & Fitness Gym Hall",
    category: "facilities",
    image: fitnessGymImg,
    caption: "Air-conditioned workout hall with running treadmills, cardio spin bikes, exercise balls, and free weights."
  },
  {
    id: "gal-8",
    title: "Front Desk & Mobile Payment Hub",
    category: "facilities",
    image: receptionDeskImg,
    caption: "Lobby reception desk with crystal chandelier and official Orange Money & SLCB QR Payment integrations."
  },
  {
    id: "gal-9",
    title: "Spotless Ensuite Bathroom & Bathtub",
    category: "suites",
    image: modernBathroomImg,
    caption: "Sparkling clean ensuite bathroom with deep porcelain soaking tub, white shower curtain, and modern toilet."
  },
  {
    id: "gal-10",
    title: "Executive Room Wardrobe & Safe",
    category: "suites",
    image: stripedWardrobeImg,
    caption: "Dark wood double-door wardrobe, in-room digital safe, mini-fridge, and signature striped accent wall."
  },
  {
    id: "gal-11",
    title: "Deluxe King Bedroom Suite",
    category: "suites",
    image: deluxeBedroomImg,
    caption: "Deluxe bedroom featuring damask window drapes, crisp white bed linens, and split air conditioning."
  },
  {
    id: "gal-12",
    title: "Grand Events & Conference Hall",
    category: "facilities",
    image: eventsHallImg,
    caption: "Stately building facade with classical white arched portico entrance columns and tropical gardens."
  },
  {
    id: "gal-13",
    title: "Illuminated Multi-Story Building at Night",
    category: "facilities",
    image: nightViewImg,
    caption: "Modern multi-level hotel building with glowing balconies and illuminated entrance gate in the evening."
  },
  {
    id: "gal-14",
    title: "Tropical Coconut Palms & Villa Estate",
    category: "gardens",
    image: tropicalPalmsImg,
    caption: "Lush tropical palm tree canopies framing the covered walkways and villa grounds at Gallines Paradise."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m-1",
    name: "Gallines Paradise Special Grilled Snapper",
    category: "Garden Grill & BBQ",
    description: "Whole fresh Atlantic snapper marinated in native spices, garlic herb butter, char-grilled over hardwood and served with fried plantains (aloco) and jollof rice.",
    priceUSD: 18,
    priceNLE: 420,
    isChefSpecial: true
  },
  {
    id: "m-2",
    name: "Royal Sierra Leonean Jollof & Suya Platter",
    category: "Traditional Specialties",
    description: "Fragrant seasoned basmati jollof rice served with tender spicy beef suya skewers, roasted peppers, and tangy house coleslaw.",
    priceUSD: 14,
    priceNLE: 330,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "m-3",
    name: "Traditional Cassava Leaf Stew with Assorted Meats",
    category: "Traditional Specialties",
    description: "Slow-simmered rich cassava leaf gravy with tender beef cuts, smoked fish, and peanut butter reduction over steamed white rice.",
    priceUSD: 12,
    priceNLE: 280,
    isChefSpecial: true
  },
  {
    id: "m-4",
    name: "Pepper Soup with Fresh Local Fish",
    category: "Traditional Specialties",
    description: "Aromatic West African broth infused with wild alligator pepper, ginger, garlic, and fresh catch fish fillet.",
    priceUSD: 10,
    priceNLE: 235,
    isSpicy: true
  },
  {
    id: "m-5",
    name: "Executive Prime T-Bone Steak",
    category: "Signature Mains",
    description: "Charred 350g prime beef steak with rosemary garlic butter, served with crisp french fries and garden salad.",
    priceUSD: 24,
    priceNLE: 565
  },
  {
    id: "m-6",
    name: "Wood-Fired Garden BBQ Chicken",
    category: "Garden Grill & BBQ",
    description: "Half-chicken marinated in tangy citrus herb glaze, smoked over wood charcoal with roasted potato wedges.",
    priceUSD: 15,
    priceNLE: 350
  },
  {
    id: "m-7",
    name: "Tropical Coconut Paradise Cocktail",
    category: "Cocktails & Beverages",
    description: "Fresh coconut water, dark rum, pineapple juice, and a splash of lime served chilled inside a fresh green coconut.",
    priceUSD: 7,
    priceNLE: 165,
    isChefSpecial: true
  },
  {
    id: "m-8",
    name: "Fresh Hibiscus (Bissap / Wonjo) Cooler",
    category: "Cocktails & Beverages",
    description: "Chilled organic hibiscus tea infused with fresh crushed mint, ginger, and raw natural cane sugar.",
    priceUSD: 4,
    priceNLE: 95
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Alhaji Ibrahim S.",
    location: "Freetown, Sierra Leone",
    rating: 5,
    date: "August 2026",
    title: "Unmatched Hospitality and Pristine Facilities",
    comment: "Gallines Paradise is genuinely the benchmark for comfort in the province. The presidential suite living room gave us ample space for our team meetings, and having the Orange Money QR payment made check-in effortless. The sports court is fantastic!",
    stayType: "Executive Business Stay",
    verified: true
  },
  {
    id: "rev-2",
    author: "Dr. Evelyn K.",
    location: "London, United Kingdom",
    rating: 5,
    date: "July 2026",
    title: "A Peaceful Tropical Oasis",
    comment: "I spent 5 days here during my mission trip. The thatched gazebos in the garden are magical in the evening with the cool breeze and fresh grilled fish. Power and AC were 100% reliable 24/7, and the staff treated us like royalty.",
    stayType: "Holiday Vacation",
    verified: true
  },
  {
    id: "rev-3",
    author: "Mohamed Conteh",
    location: "Bo, Sierra Leone",
    rating: 5,
    date: "June 2026",
    title: "Best Gym and Sports Court in Town",
    comment: "We hosted our corporate sports weekend and dinner here. The turf tennis court and the indoor fitness center with running treadmills are top quality. The grilled snapper at the gazebo was five-star.",
    stayType: "Group Event & Recreation",
    verified: true
  },
  {
    id: "rev-4",
    author: "Sarah & David M.",
    location: "Maryland, USA",
    rating: 5,
    date: "May 2026",
    title: "Clean, Safe, and Super Welcoming",
    comment: "From the grand entrance to the bathtub in the room, everything was immaculately clean. The security is tight and polite, the bed was very comfortable, and waking up to palm trees outside our room was so restful.",
    stayType: "Couple's Getaway",
    verified: true
  }
];
