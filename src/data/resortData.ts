import { Room, Amenity, GalleryItem, MenuItem, Review } from '../types';

// Asset imports
import heroImg from '../assets/images/resort_hero_luxury_1787582141420.jpg';
import suiteImg from '../assets/images/resort_suite_luxury_1787582156831.jpg';
import diningImg from '../assets/images/resort_dining_garden_1787582173483.jpg';
import sportsImg from '../assets/images/resort_sports_court_1787582192421.jpg';

export const RESORT_IMAGES = {
  hero: heroImg,
  suite: suiteImg,
  dining: diningImg,
  sports: sportsImg,
  // High fidelity visual representations of actual resort spaces
  reception: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  suiteLounge: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  gazeboGarden: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  exteriorEstate: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  driveway: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
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
    name: "Presidential Executive Suite",
    category: "Executive Suite",
    tagline: "Spacious multi-room luxury featuring private VIP salon & dining boardroom",
    priceUSD: 165,
    priceNLE: 3875,
    size: "78 m² / 840 sq ft",
    capacity: { adults: 2, children: 2 },
    bedType: "King Master Bed + Plush Sectional Lounge",
    description: "The crown jewel of Gallines Paradise. Includes a massive separate private living room furnished with custom red sectional sofa seating, dedicated conference dining table, large flat-screen smart TV, private wet bar refrigerator, quiet split air-conditioning, and ensuite master bath with deep soaking tub.",
    image: suiteImg,
    gallery: [
      suiteImg,
      RESORT_IMAGES.suiteLounge,
      RESORT_IMAGES.bathroom,
      heroImg
    ],
    features: [
      "Separate VIP Living Room & Salon",
      "Executive Dining & Boardroom Table",
      "Master King Bed with Ornate Drape Accents",
      "Deep Soaking Porcelain Bathtub & Rain Shower",
      "Dual Smart Flat Screen TVs with Satellite Channels",
      "Private High-Capacity Split AC in all rooms",
      "Mini Refrigerator & Coffee/Tea Station",
      "High-Speed Fiber WiFi & Executive Desk"
    ],
    amenities: [
      "24/7 Room Service",
      "Complimentary Paradise Breakfast",
      "Unlimited Gym & Sports Arena Access",
      "Bathrobes & Luxury Toiletries",
      "Daily Housekeeping",
      "Secure Digital Safe"
    ],
    featured: true
  },
  {
    id: "deluxe-paradise-king",
    name: "Deluxe Paradise King Suite",
    category: "Deluxe King",
    tagline: "Sophisticated tranquil sanctuary with king bed and private ensuite bath",
    priceUSD: 110,
    priceNLE: 2585,
    size: "48 m² / 516 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Super King Bed",
    description: "Elegantly finished with cool ceramic tile flooring, warm ambient wall sconces, imported drape curtains, whisper-quiet air conditioning, and a private ensuite bathroom with bathtub and vanity station. Perfect for business travelers and vacationing couples.",
    image: RESORT_IMAGES.suiteLounge,
    gallery: [
      RESORT_IMAGES.suiteLounge,
      suiteImg,
      RESORT_IMAGES.bathroom
    ],
    features: [
      "Plush Super King Mattress with High-Thread Linens",
      "Ensuite Bathroom with Bathtub & Hot Water Shower",
      "Whisper-Quiet Remote Split Air Conditioning",
      "Wall-Mounted Satellite Flat Screen TV",
      "Work Desk with Ergonomic Chair",
      "In-Room Mini Fridge & Kettle"
    ],
    amenities: [
      "Complimentary Breakfast",
      "Full Fitness Center Access",
      "High-Speed Wi-Fi",
      "Daily Room Refresh",
      "Free Onsite Secured Parking"
    ],
    featured: true
  },
  {
    id: "garden-bungalow-chalet",
    name: "Private Garden Chalet Villa",
    category: "Garden Chalet",
    tagline: "Tranquil detached chalet surrounded by swaying palms and tropical flowerbeds",
    priceUSD: 85,
    priceNLE: 1995,
    size: "40 m² / 430 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed",
    description: "Located along the serene paved driveway of the resort estate. Steps from the outdoor thatched gazebos and sports court, offering quiet privacy, individual entrance porch, full air-conditioning, and immediate garden strolls.",
    image: heroImg,
    gallery: [
      heroImg,
      RESORT_IMAGES.gazeboGarden,
      RESORT_IMAGES.driveway
    ],
    features: [
      "Direct Garden & Driveway Access",
      "Private Covered Front Veranda",
      "Queen Size Bed with Premium Bedding",
      "Ensuite Bathroom with Fresh Towels & Amenities",
      "Split Air Conditioning",
      "Satellite TV & High-Speed WiFi"
    ],
    amenities: [
      "Daily Breakfast Included",
      "Sports Court & Gym Access",
      "Free Parking Outside Unit",
      "24/7 Security Patrol"
    ],
    featured: false
  },
  {
    id: "family-twin-residence",
    name: "Paradise Family Twin Suite",
    category: "Family Suite",
    tagline: "Two comfortable beds with spacious floorplan ideal for families or teams",
    priceUSD: 135,
    priceNLE: 3170,
    size: "56 m² / 600 sq ft",
    capacity: { adults: 3, children: 2 },
    bedType: "2 Queen Beds or 1 King + 2 Singles",
    description: "Designed for families, sports teams, or traveling colleagues. Ample closet storage, large sitting area, dual beds, modern bathroom, and direct access to resort sports facilities and gazebos.",
    image: RESORT_IMAGES.exteriorEstate,
    gallery: [
      RESORT_IMAGES.exteriorEstate,
      suiteImg,
      RESORT_IMAGES.sports
    ],
    features: [
      "Two Comfortable Beds with Hypoallergenic Linens",
      "Spacious Sitting Area with Armchairs",
      "Ensuite Full Bathroom with Bathtub",
      "Split System Air Conditioning",
      "Multi-device High Speed WiFi",
      "Flat Screen TV with Sports Channels"
    ],
    amenities: [
      "Family Breakfast Package",
      "Free Tennis / Sports Arena Booking",
      "Gym Access for all Guests",
      "Luggage Assistance"
    ],
    featured: false
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "sports-arena",
    title: "All-Weather Sports Court & Mini-Pitch",
    category: "Sports",
    shortDesc: "Full fenced turf court for tennis, five-a-side soccer, volleyball & fitness drills.",
    longDesc: "Our perimeter-fenced sports arena features high-grade artificial turf, regulation boundary netting, and nighttime illumination. Perfect for competitive tennis matches, recreational football, morning cardio drills, or group team building.",
    iconName: "Activity",
    image: sportsImg,
    badge: "Guest Favorite",
    highlights: ["Tennis & Football Netting", "High Perimeter Safety Fence", "Night Floodlighting", "Equipment Available at Front Desk"]
  },
  {
    id: "fitness-gym",
    title: "State-of-the-Art Fitness Center",
    category: "Wellness",
    shortDesc: "Complete gym featuring modern treadmills, stationary cardio bikes, free weights & exercise balls.",
    longDesc: "Stay energized throughout your stay in our spacious, air-conditioned workout hall. Equipped with commercial-grade running treadmills, cycling machines, strength benches, dumbbells, yoga mats, and resistance balls with panoramic workout mirrors.",
    iconName: "Dumbbell",
    image: RESORT_IMAGES.gym,
    badge: "Complimentary for Guests",
    highlights: ["Motorized Running Treadmills", "Cardio Spin & Stationary Bikes", "Full Free Weights & Benches", "Stability Balls & Yoga Floor Mats"]
  },
  {
    id: "garden-gazebos",
    title: "Tropical Thatched Gazebos & Garden Bar",
    category: "Dining",
    shortDesc: "Charming conical thatched cabanas nestled amongst lush palm trees for private open-air dining.",
    longDesc: "Immerse yourself in authentic tropical tranquility. Our handcrafted thatched gazebos provide the perfect shaded sanctuary for romantic candlelit dinners, chilled coconut drinks, afternoon teas, or celebratory barbecue gatherings with friends.",
    iconName: "Palmtree",
    image: diningImg,
    badge: "Signature Oasis",
    highlights: ["Private Outdoor Seating", "Lush Palm & Flowerbed Setting", "Full Waiter Service", "Evening Lantern Ambiance"]
  },
  {
    id: "reception-concierge",
    title: "24/7 Front Desk & Modern Mobile Payments",
    category: "Services",
    shortDesc: "Warm Sierra Leonean hospitality with instant Orange Money & SLCB QR Payment convenience.",
    longDesc: "From the moment you arrive at our gilded reception counter under crystal chandeliers, our dedicated concierge team handles everything from instant mobile checkout (Orange Money / SLCB QR / Cards) to car transfers, luggage assistance, and tour arrangements.",
    iconName: "ShieldCheck",
    image: RESORT_IMAGES.reception,
    badge: "Instant Mobile Checkout",
    highlights: ["Orange Money & SLCB QR Payments", "24-Hour Attentive Front Desk", "Secure Gated Property with Guards", "Uninterrupted Solar & Generator Power"]
  },
  {
    id: "banquet-hall",
    title: "Grand Event Hall & Conference Suites",
    category: "Events",
    shortDesc: "Impressive columned hall for weddings, corporate summits, galas & private receptions.",
    longDesc: "Host your most memorable milestones at Gallines Paradise. Our grand estate building features classical architecture, high-capacity meeting halls, PA audio sound systems, executive catering, and secure VIP parking for up to 300 delegates.",
    iconName: "Users",
    image: RESORT_IMAGES.exteriorEstate,
    badge: "Up to 300 Guests",
    highlights: ["Custom Banquet & Conference Seating", "High-Definition Projection & Audio", "Gourmet Event Buffet Menus", "Dedicated Event Coordinator"]
  },
  {
    id: "fine-dining",
    title: "Paradise Grill, Bar & Lounge",
    category: "Dining",
    shortDesc: "Authentic local delicacies, fresh grilled fish, continental steaks & tropical signature cocktails.",
    longDesc: "Our master chefs celebrate the rich culinary heritage of West Africa alongside beloved continental favorites. Savor tender grilled meats, spicy jollof rice, fresh cassava leaf stew, cold local beers, and handcrafted tropical cocktails.",
    iconName: "UtensilsCrossed",
    image: diningImg,
    badge: "Open Daily 7AM - 11PM",
    highlights: ["Farm-Fresh Ingredients", "In-Room & Gazebo Room Service", "Full-Service Cocktail Bar", "Special Weekend Live BBQ"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Royal Stone Welcome Entrance",
    category: "facilities",
    image: heroImg,
    caption: "The majestic 'Welcome to Galliness Paradise' entrance wall with regal crests and stone driveway."
  },
  {
    id: "gal-2",
    title: "Presidential Suite VIP Living Room",
    category: "suites",
    image: suiteImg,
    caption: "Spacious executive salon featuring plush red sectional seating, dining boardroom, and flat-screen TV."
  },
  {
    id: "gal-3",
    title: "All-Weather Sports Court",
    category: "sports",
    image: sportsImg,
    caption: "Professional turf sports court with perimeter safety fence for tennis, football, and fitness drills."
  },
  {
    id: "gal-4",
    title: "Tropical Thatched Gazebos",
    category: "gardens",
    image: diningImg,
    caption: "Handcrafted garden huts surrounded by towering palm trees, perfect for outdoor dining and chilled drinks."
  },
  {
    id: "gal-5",
    title: "Grand Estate Portico & Pillars",
    category: "facilities",
    image: RESORT_IMAGES.exteriorEstate,
    caption: "Classical architectural facade of the main resort building framed by lush tropical croton plants."
  },
  {
    id: "gal-6",
    title: "Indoor Fitness Gym & Cardio Hub",
    category: "sports",
    image: RESORT_IMAGES.gym,
    caption: "Fully equipped gym floor with modern treadmills, stationary exercise bikes, workout balls, and weights."
  },
  {
    id: "gal-7",
    title: "Master Deluxe Bedroom Suite",
    category: "suites",
    image: RESORT_IMAGES.suiteLounge,
    caption: "Deluxe King bedroom with crisp white linens, split AC, tiled floors, and ambient golden lighting."
  },
  {
    id: "gal-8",
    title: "Ensuite Bathtub & Shower",
    category: "suites",
    image: RESORT_IMAGES.bathroom,
    caption: "Private ensuite bathroom with pristine bathtub, hot water shower, and fresh bath towels."
  },
  {
    id: "gal-9",
    title: "Front Desk & Gold Reception",
    category: "facilities",
    image: RESORT_IMAGES.reception,
    caption: "24/7 Reception desk equipped with seamless Orange Money and SLCB QR mobile payment terminals."
  },
  {
    id: "gal-10",
    title: "Resort Driveway & Bungalow Avenues",
    category: "gardens",
    image: RESORT_IMAGES.driveway,
    caption: "Tree-lined paved avenue leading to private guest chalets with stone planter boxes."
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
    description: "Slow-simmered rich peanut and palm oil cassava leaf delicacy with tender beef, smoked fish, and served with fluffy white jasmine rice.",
    priceUSD: 12,
    priceNLE: 280,
    isChefSpecial: true
  },
  {
    id: "m-4",
    name: "Prime Pepper Steak & Potato Wedges",
    category: "Signature Mains",
    description: "Tender beef tenderloin cooked to your liking, smothered in crushed peppercorn cream reduction with garlic roasted potatoes.",
    priceUSD: 20,
    priceNLE: 470
  },
  {
    id: "m-5",
    name: "Crispy Golden Whole Spring Chicken",
    category: "Garden Grill & BBQ",
    description: "Marinated farm chicken seasoned with lemon herb aromatics, deep-fried to golden perfection with crisp French fries and house chili dip.",
    priceUSD: 16,
    priceNLE: 375
  },
  {
    id: "m-6",
    name: "Paradise Island Colada",
    category: "Cocktails & Beverages",
    description: "Freshly squeezed pineapple juice, creamy coconut milk, white rum, and a hint of lime, garnished with toasted coconut flake.",
    priceUSD: 7,
    priceNLE: 165,
    isChefSpecial: true
  },
  {
    id: "m-7",
    name: "Salone Sunset Hibiscus Zobo Breeze",
    category: "Cocktails & Beverages",
    description: "Chilled organic hibiscus infusion spiced with fresh ginger, cloves, fresh orange slices, and a dash of cane sugar.",
    priceUSD: 5,
    priceNLE: 120
  },
  {
    id: "m-8",
    name: "Warm Plantain Foster with Vanilla Bean Ice Cream",
    category: "Desserts",
    description: "Caramelized ripe sweet plantains flamed with dark rum, brown sugar, cinnamon, served with rich vanilla cream.",
    priceUSD: 6,
    priceNLE: 140
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
