export type Currency = 'USD' | 'NLE';

export interface Room {
  id: string;
  name: string;
  category: 'Executive Suite' | 'Deluxe King' | 'Garden Chalet' | 'Family Suite';
  tagline: string;
  priceUSD: number;
  priceNLE: number; // New Leones (e.g. 1 USD ~ 23 NLE)
  size: string;
  capacity: { adults: number; children: number };
  bedType: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  featured?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'Sports' | 'Wellness' | 'Dining' | 'Services' | 'Events';
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image: string;
  badge?: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'suites' | 'gardens' | 'sports' | 'facilities';
  image: string;
  caption: string;
  aspect?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Signature Mains' | 'Traditional Specialties' | 'Garden Grill & BBQ' | 'Cocktails & Beverages' | 'Desserts';
  description: string;
  priceUSD: number;
  priceNLE: number;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export interface BookingDetails {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  addons: {
    airportShuttle: boolean;
    gazeboDinner: boolean;
    sportsPass: boolean;
    vipBreakfast: boolean;
  };
  paymentMethod: 'orange_money' | 'slcb_qr' | 'card' | 'reception';
  totalPriceUSD: number;
  totalPriceNLE: number;
  bookingRef?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  stayType: string;
  verified: boolean;
}

// User Profile & Roles
export type UserRole = 'admin' | 'staff' | 'guest';

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  phone?: string;
  status: 'active' | 'suspended';
  createdAt: string;
  lastLoginAt?: string;
}

// Blog Posts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'Resort News' | 'Dining & Cuisine' | 'Local Experiences' | 'Events & Weddings' | 'Wellness & Sports';
  authorId: string;
  authorName: string;
  status: 'published' | 'draft';
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}

// Stored Booking Records
export interface StoredBooking {
  id: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  children: number;
  totalPriceUSD: number;
  totalPriceNLE: number;
  currency: 'USD' | 'NLE';
  paymentMethod: string;
  paymentStatus: 'pending' | 'confirmed' | 'cancelled';
  status: 'pending' | 'confirmed' | 'checked_in' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}
