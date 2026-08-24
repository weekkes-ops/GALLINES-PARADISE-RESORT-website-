import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPost, StoredBooking, UserProfile, UserRole } from '../types';

// ==================== BLOG POSTS SERVICE ====================

const SAMPLE_INITIAL_POSTS: Omit<BlogPost, 'id'>[] = [
  {
    title: "Introducing Gallines Paradise: Your Tropical Oasis & Sports Sanctuary",
    slug: "introducing-gallines-paradise-resort",
    excerpt: "Discover our newly elevated chalets, sparkling swimming pool, traditional thatched gazebos, and all-weather sports arena in Bonthe District.",
    content: `Welcome to Gallines Paradise Resort — where authentic West African hospitality meets modern luxury. Nestled along tranquil palm avenues, our estate offers a serene escape featuring private chalets, a signature outdoor swimming pool, authentic conical thatched gazebos, and an all-weather sports court.

Whether you're planning a romantic weekend getaway, hosting an executive corporate summit, or looking for an active holiday with tennis and cardio workouts, Gallines Paradise is designed to exceed your expectations.

Enjoy locally sourced culinary specialties, evening cocktails under lantern-lit cabanas, and uninterrupted comfort powered by 24/7 sustainable energy.`,
    coverImage: "/src/assets/images/resort_garden_gazebos_1787598782947.jpg",
    category: "Resort News",
    authorId: "admin-system",
    authorName: "Gallines Paradise Editorial",
    status: "published",
    readTime: "4 min read",
    publishedAt: "2026-08-20T10:00:00Z",
    tags: ["Resort", "Luxury", "Bonthe", "Sierra Leone"]
  },
  {
    title: "Culinary Highlights: Dining Under the Thatched Gazebos",
    slug: "culinary-highlights-thatched-gazebos-dining",
    excerpt: "Experience fresh grilled fish, spicy jollof rice, and cold tropical cocktails served in the private shade of our authentic palm garden cabanas.",
    content: `Dining at Gallines Paradise is more than just a meal — it is a sensory celebration. Our master chefs combine the rich traditions of Sierra Leonean cuisine with international continental favorites.

Guests can dine in our private conical thatched gazebos surrounded by swaying coconut palms and fragrant tropical flora. Highlights include grilled red snapper caught fresh from coastal waters, rich groundnut stew, fragrant jollof rice, and signature ginger cocktails.`,
    coverImage: "/src/assets/images/resort_dining_garden_1787582173483.jpg",
    category: "Dining & Cuisine",
    authorId: "admin-system",
    authorName: "Executive Chef Team",
    status: "published",
    readTime: "3 min read",
    publishedAt: "2026-08-15T14:30:00Z",
    tags: ["Dining", "Seafood", "Gazebos", "Local Cuisine"]
  },
  {
    title: "Stay Active: Tennis, Cardio & Swimming at Gallines",
    slug: "wellness-sports-pool-fitness-guide",
    excerpt: "How to make the most of our fenced sports arena, fitness cardio center, and sparkling swimming pool deck during your stay.",
    content: `Health and wellness are at the heart of the Gallines Paradise experience. Start your morning with laps in our sparkling turquoise swimming pool, followed by an energizing workout in our air-conditioned gym or a friendly tennis match on our all-weather turf court.

Complimentary sports equipment, water bottles, and clean towels are always available at the front desk for all resident guests.`,
    coverImage: "/src/assets/images/resort_swimming_pool_1787598746192.jpg",
    category: "Wellness & Sports",
    authorId: "admin-system",
    authorName: "Wellness Director",
    status: "published",
    readTime: "5 min read",
    publishedAt: "2026-08-10T09:15:00Z",
    tags: ["Wellness", "Swimming Pool", "Sports Court", "Fitness"]
  }
];

export async function fetchBlogPosts(includeDrafts = false): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, 'posts');
    const snap = await getDocs(postsRef);
    
    let posts: BlogPost[] = [];
    snap.forEach((docSnap) => {
      posts.push({ id: docSnap.id, ...docSnap.data() } as BlogPost);
    });

    // If Firestore posts collection is empty, seed initial sample posts
    if (posts.length === 0) {
      for (const sample of SAMPLE_INITIAL_POSTS) {
        const newDoc = doc(postsRef);
        const postData = { ...sample, id: newDoc.id };
        await setDoc(newDoc, postData);
        posts.push(postData as BlogPost);
      }
    }

    if (!includeDrafts) {
      posts = posts.filter(p => p.status === 'published');
    }

    // Sort by publishedAt desc
    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (error) {
    console.error('Error fetching blog posts from Firestore:', error);
    // Return sample posts in fallback
    return SAMPLE_INITIAL_POSTS.map((p, idx) => ({ ...p, id: `sample-${idx}` } as BlogPost));
  }
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'publishedAt'> & { publishedAt?: string }): Promise<BlogPost> {
  const postsRef = collection(db, 'posts');
  const newDoc = doc(postsRef);
  const now = new Date().toISOString();
  
  const newPost: BlogPost = {
    ...post,
    id: newDoc.id,
    slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    publishedAt: post.publishedAt || now,
    updatedAt: now
  };

  await setDoc(newDoc, newPost);
  return newPost;
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<void> {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteBlogPost(id: string): Promise<void> {
  const postRef = doc(db, 'posts', id);
  await deleteDoc(postRef);
}

// ==================== USER MANAGEMENT SERVICE ====================

export async function fetchAllUsers(): Promise<UserProfile[]> {
  try {
    const usersRef = collection(db, 'users');
    const snap = await getDocs(usersRef);
    const users: UserProfile[] = [];
    snap.forEach((docSnap) => {
      users.push({ id: docSnap.id, ...docSnap.data() } as UserProfile);
    });
    return users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error fetching users from Firestore:', error);
    return [];
  }
}

export async function updateUserRole(userId: string, role: UserRole): Promise<void> {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { role });
}

export async function updateUserStatus(userId: string, status: 'active' | 'suspended'): Promise<void> {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { status });
}

// ==================== BOOKINGS MANAGEMENT SERVICE ====================

export async function fetchAllBookings(): Promise<StoredBooking[]> {
  try {
    const bookingsRef = collection(db, 'bookings');
    const snap = await getDocs(bookingsRef);
    const bookings: StoredBooking[] = [];
    snap.forEach((docSnap) => {
      bookings.push({ id: docSnap.id, ...docSnap.data() } as StoredBooking);
    });
    return bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error fetching bookings from Firestore:', error);
    return [];
  }
}

export async function createBookingRecord(booking: StoredBooking): Promise<void> {
  const bookingRef = doc(db, 'bookings', booking.id);
  await setDoc(bookingRef, booking);
}

export async function updateBookingStatus(
  bookingId: string,
  status: StoredBooking['status'],
  paymentStatus?: StoredBooking['paymentStatus']
): Promise<void> {
  const bookingRef = doc(db, 'bookings', bookingId);
  const updates: any = { status };
  if (paymentStatus) {
    updates.paymentStatus = paymentStatus;
  }
  await updateDoc(bookingRef, updates);
}
