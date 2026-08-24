import { Room, Amenity, GalleryItem, MenuItem, Review } from '../types';

// Asset imports from real resort photography
import drivewayImg from '../assets/images/resort_driveway_estate_1787598710227.jpg';
import stripedSuiteImg from '../assets/images/resort_striped_suite_1787598727993.jpg';
import swimmingPoolImg from '../assets/images/resort_swimming_pool_1787598746192.jpg';
import bathroomImg from '../assets/images/resort_modern_bathroom_1787598763930.jpg';
import gazebosImg from '../assets/images/resort_garden_gazebos_1787598782947.jpg';
import sportsImg from '../assets/images/resort_sports_court_1787582192421.jpg';

export const RESORT_IMAGES = {
  hero: drivewayImg,
  driveway: drivewayImg,
  suite: stripedSuiteImg,
  suiteLounge: stripedSuiteImg,
  pool: swimmingPoolImg,
  dining: gazebosImg,
  gazeboGarden: gazebosImg,
  bathroom: bathroomImg,
  sports: sportsImg,
  reception: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  exteriorEstate: swimmingPoolImg
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
    tagline: "Spacious luxury featuring signature striped feature wall & ensuite porcelain bathtub",
    priceUSD: 165,
    priceNLE: 3875,
    size: "78 m² / 840 sq ft",
    capacity: { adults: 2, children: 2 },
    bedType: "Master Queen Bed + Luxury Furnishings",
    description: "The crown jewel of Gallines Paradise. Features a distinctive black-and-white striped accent wall, premium queen bedding with gold & black striped runner, bedside wooden nightstands with reading lamps, floor lamp, whisper-quiet split air-conditioning, and a spotless ensuite bathroom with deep porcelain soaking tub and modern vanity.",
    image: stripedSuiteImg,
    gallery: [
      stripedSuiteImg,
      bathroomImg,
      drivewayImg,
      swimmingPoolImg
    ],
    features: [
      "Designer Black & White Striped Feature Wall",
      "Queen Bed with High-Thread White Linens",
      "Ensuite Bathroom with Deep Bathtub & Hot Shower",
      "High-Capacity Whisper Split Air Conditioning",
      "Dual Bedside Nightstands with Reading Lamps",
      "Floor-to-Ceiling Ambient Window Drapes",
      "Mini Refrigerator & Coffee/Tea Station",
      "High-Speed Fiber WiFi & Satellite TV"
    ],
    amenities: [
      "24/7 Room Service",
      "Complimentary Paradise Breakfast",
      "Unlimited Swimming Pool & Sports Arena Access",
      "Bathrobes & Luxury Toiletries",
      "Daily Housekeeping",
      "Secure Digital Safe"
    ],
    featured: true
  },
  {
    id: "deluxe-paradise-king",
    name: "Deluxe Paradise Bedroom Suite",
    category: "Deluxe King",
    tagline: "Sophisticated tranquil sanctuary with striped accent wall and private ensuite bath",
    priceUSD: 110,
    priceNLE: 2585,
    size: "48 m² / 516 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed with Designer Accents",
    description: "Elegantly finished with cool ceramic tile flooring, signature striped accent wall, warm wooden nightstands, imported sheer drape curtains, whisper-quiet air conditioning, and a private ensuite bathroom with bathtub and vanity station.",
    image: stripedSuiteImg,
    gallery: [
      stripedSuiteImg,
      bathroomImg,
      gazebosImg
    ],
    features: [
      "Plush Queen Mattress with Striped Bed Runner",
      "Ensuite Bathroom with Porcelain Bathtub & Shower",
      "Whisper-Quiet Remote Split Air Conditioning",
      "Wall-Mounted Satellite Flat Screen TV",
      "Bedside Table Lamps & Reading Lights",
      "In-Room Mini Fridge & Kettle"
    ],
    amenities: [
      "Complimentary Breakfast",
      "Full Swimming Pool & Fitness Center Access",
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
    tagline: "Tranquil detached chalet along the paved palm avenue surrounded by tropical flora",
    priceUSD: 85,
    priceNLE: 1995,
    size: "40 m² / 430 sq ft",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed",
    description: "Located along the serene paved driveway of the resort estate. Steps from the outdoor thatched gazebos, swimming pool, and sports court, offering quiet privacy, paved entrance walkway, full air-conditioning, and immediate garden strolls.",
    image: drivewayImg,
    gallery: [
      drivewayImg,
      gazebosImg,
      stripedSuiteImg,
      bathroomImg
    ],
    features: [
      "Direct Garden & Paved Driveway Access",
      "Private Covered Front Entrance",
      "Queen Size Bed with Premium Bedding",
      "Ensuite Bathroom with Fresh Towels & Bathtub",
      "Split Air Conditioning",
      "Satellite TV & High-Speed WiFi"
    ],
    amenities: [
      "Daily Breakfast Included",
      "Swimming Pool & Sports Arena Access",
      "Free Parking Outside Chalet",
      "24/7 Security Patrol"
    ],
    featured: false
  },
  {
    id: "family-twin-residence",
    name: "Paradise Poolside Family Residence",
    category: "Family Suite",
    tagline: "Spacious accommodation with direct access to pool deck, gazebos and sports arena",
    priceUSD: 135,
    priceNLE: 3170,
    size: "56 m² / 600 sq ft",
    capacity: { adults: 3, children: 2 },
    bedType: "Queen Beds with Extra Space",
    description: "Designed for families, vacationing groups, or traveling colleagues. Steps from the sparkling outdoor swimming pool and thatched gazebos, featuring modern bathroom with bathtub, split air-conditioning, and high-speed Wi-Fi.",
    image: swimmingPoolImg,
    gallery: [
      swimmingPoolImg,
      stripedSuiteImg,
      sportsImg,
      bathroomImg
    ],
    features: [
      "Immediate Access to Swimming Pool & Sun Deck",
      "Comfortable Beds with Hypoallergenic Linens",
      "Ensuite Full Bathroom with Bathtub",
      "Split System Air Conditioning",
      "Multi-device High Speed WiFi",
      "Flat Screen TV with Sports Channels"
    ],
    amenities: [
      "Family Breakfast Package",
      "Swimming Pool & Sports Arena Access",
      "Gym Access for all Guests",
      "Luggage Assistance"
    ],
    featured: false
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "swimming-pool",
    title: "Outdoor Swimming Pool & Sun Deck",
    category: "Wellness",
    shortDesc: "Sparkling turquoise swimming pool with sun lounger terrace, surrounded by palm trees.",
    longDesc: "Take a refreshing dip in our pristine resort swimming pool. Featuring terraced steps with stainless steel safety rails, comfortable poolside sun loungers, and tropical palm tree views under the blue sky.",
    iconName: "Sparkles",
    image: swimmingPoolImg,
    badge: "Guest Favorite",
    highlights: ["Crystal Clear Turquoise Water", "Poolside Loungers & Sunbeds", "Terraced Step Entry", "Surrounded by Palms & Greenery"]
  },
  {
    id: "garden-gazebos",
    title: "Tropical Thatched Gazebos & Garden Bar",
    category: "Dining",
    shortDesc: "Charming conical thatched cabanas nestled amongst lush palm trees for private open-air dining.",
    longDesc: "Immerse yourself in authentic tropical tranquility. Our handcrafted thatched conical gazebos provide the perfect shaded sanctuary for romantic candlelit dinners, chilled coconut drinks, afternoon teas, or celebratory barbecue gatherings with friends.",
    iconName: "Palmtree",
    image: gazebosImg,
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
    image: sportsImg,
    badge: "Sports & Fitness",
    highlights: ["Tennis & Football Netting", "High Perimeter Safety Fence", "Night Floodlighting", "Equipment Available at Front Desk"]
  },
  {
    id: "estate-grounds",
    title: "Private Estate Chalets & Paved Avenue",
    category: "Services",
    shortDesc: "Quiet paved avenues lined with planter boxes, chalets, and 24/7 security.",
    longDesc: "Our secure gated estate features paved cobblestone avenues, elegant single-story guest chalets, manicured garden planter boxes with snake plants, and generous on-site secured parking.",
    iconName: "ShieldCheck",
    image: drivewayImg,
    badge: "Gated & Secure",
    highlights: ["24/7 Security Patrol & Guards", "Secure On-Site Guest Parking", "Lush Landscaped Avenues", "Quiet Residential Atmosphere"]
  },
  {
    id: "fitness-gym",
    title: "State-of-the-Art Fitness Center",
    category: "Wellness",
    shortDesc: "Complete gym featuring modern treadmills, stationary cardio bikes, free weights & exercise balls.",
    longDesc: "Stay energized throughout your stay in our spacious, air-conditioned workout hall. Equipped with commercial-grade running treadmills, cycling machines, strength benches, dumbbells, yoga mats, and resistance balls.",
    iconName: "Dumbbell",
    image: RESORT_IMAGES.gym,
    badge: "Complimentary for Guests",
    highlights: ["Motorized Running Treadmills", "Cardio Spin & Stationary Bikes", "Full Free Weights & Benches", "Stability Balls & Yoga Floor Mats"]
  },
  {
    id: "fine-dining",
    title: "Paradise Grill, Bar & Lounge",
    category: "Dining",
    shortDesc: "Authentic local delicacies, fresh grilled fish, continental steaks & tropical signature cocktails.",
    longDesc: "Our master chefs celebrate the rich culinary heritage of West Africa alongside beloved continental favorites. Savor tender grilled meats, spicy jollof rice, fresh cassava leaf stew, cold local beers, and handcrafted tropical cocktails.",
    iconName: "UtensilsCrossed",
    image: gazebosImg,
    badge: "Open Daily 7AM - 11PM",
    highlights: ["Farm-Fresh Ingredients", "In-Room & Gazebo Room Service", "Full-Service Cocktail Bar", "Special Weekend Live BBQ"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Paved Estate Avenue & Chalets",
    category: "facilities",
    image: drivewayImg,
    caption: "The serene paved driveway and guest chalets flanked by raised garden planters and tropical palms."
  },
  {
    id: "gal-2",
    title: "Deluxe Striped Bedroom Suite",
    category: "suites",
    image: stripedSuiteImg,
    caption: "Executive bedroom suite featuring the iconic black and white vertical striped wall, queen bed, and split AC."
  },
  {
    id: "gal-3",
    title: "Resort Swimming Pool & Sun Deck",
    category: "facilities",
    image: swimmingPoolImg,
    caption: "Sparkling outdoor swimming pool with terraced entry, poolside lounge chairs, and resort backdrop."
  },
  {
    id: "gal-4",
    title: "Tropical Thatched Garden Gazebos",
    category: "gardens",
    image: gazebosImg,
    caption: "Handcrafted conical thatched gazebos set in a lush palm grove for peaceful dining and leisure."
  },
  {
    id: "gal-5",
    title: "Ensuite Bathtub & Vanity",
    category: "suites",
    image: bathroomImg,
    caption: "Sparkling clean ensuite bathroom with deep porcelain soaking bathtub, modern toilet, and vanity sink."
  },
  {
    id: "gal-6",
    title: "All-Weather Sports Arena",
    category: "sports",
    image: sportsImg,
    caption: "Turf sports court with perimeter safety fence for tennis, five-a-side football, and fitness drills."
  },
  {
    id: "gal-7",
    title: "Comfortable Bedroom Suite Interior",
    category: "suites",
    image: stripedSuiteImg,
    caption: "Warm bedside lighting, wooden nightstands, split air conditioner, and crisp white bed linens."
  },
  {
    id: "gal-8",
    title: "Poolside Relaxation & Palms",
    category: "facilities",
    image: swimmingPoolImg,
    caption: "Relaxing resort atmosphere by the pool surrounded by tropical vegetation and tiled buildings."
  },
  {
    id: "gal-9",
    title: "Garden Cabana Walkways",
    category: "gardens",
    image: gazebosImg,
    caption: "Conical thatched huts and gravel garden pathways beneath towering coconut palms."
  },
  {
    id: "gal-10",
    title: "Estate Driveway & Palm Landscaping",
    category: "gardens",
    image: drivewayImg,
    caption: "Stone planters and peaceful driveway leading to the guest chalets and resort facilities."
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
