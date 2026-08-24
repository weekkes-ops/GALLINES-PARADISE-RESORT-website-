import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/resortData';
import { Review } from '../types';
import { 
  Star, 
  Crown, 
  MessageSquarePlus, 
  CheckCircle2, 
  ThumbsUp, 
  X, 
  Sparkles,
  Quote
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    location: '',
    rating: 5,
    title: '',
    comment: '',
    stayType: 'Vacation'
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;

    const reviewToAdd: Review = {
      id: `rev-${Date.now()}`,
      author: newReview.author,
      location: newReview.location || 'Guest Traveler',
      rating: newReview.rating,
      date: 'Just now',
      title: newReview.title || 'Exceptional Experience',
      comment: newReview.comment,
      stayType: newReview.stayType,
      verified: true
    };

    setReviews([reviewToAdd, ...reviews]);
    setIsModalOpen(false);
    setNewReview({
      author: '',
      location: '',
      rating: 5,
      title: '',
      comment: '',
      stayType: 'Vacation'
    });
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 relative bg-[#ede9dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f7f2] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-[#7c6344] text-[#7c6344]" />
              <span>Guest Experiences</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
              Loved by <span className="gold-gradient-text">Travelers Worldwide</span>
            </h2>
            <p className="text-[#686762] text-sm sm:text-base">
              Discover what diplomats, business executives, families, and vacationers say about their peaceful stays at Gallines Paradise Resort.
            </p>
          </div>

          {/* Rating Summary & Write Review Button */}
          <div className="flex items-center gap-4">
            <div className="bg-[#ffffff] p-4 rounded-2xl border border-[#e3dfd6] shadow-sm text-center">
              <div className="flex items-center justify-center gap-1 text-[#7c6344] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#7c6344] text-[#7c6344]" />
                ))}
              </div>
              <p className="font-display text-2xl font-bold text-[#2d2d2a]">4.9 / 5.0</p>
              <p className="text-[10px] text-[#686762]">Based on 240+ verified stays</p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="py-3 px-5 rounded-2xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#4a5340]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#ffffff] p-6 sm:p-7 rounded-3xl border border-[#e3dfd6] hover:border-[#4a5340] transition-all space-y-4 relative flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                {/* Rating + Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#7c6344] text-[#7c6344]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#686762]">{rev.date}</span>
                </div>

                <h4 className="font-display text-lg font-bold text-[#2d2d2a]">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-[#54534e] leading-relaxed italic">
                  {rev.comment}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#e3dfd6] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#2d2d2a] flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <span className="text-[10px] text-[#4a5340] font-semibold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#4a5340]" /> Verified Guest
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-[#686762]">{rev.location}</p>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#f8f7f2] text-[#4a5340] text-[10px] font-semibold border border-[#d8d4c7]">
                  {rev.stayType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#ffffff] border border-[#d8d4c7] rounded-3xl shadow-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#e3dfd6]">
              <h3 className="font-display text-lg font-bold text-[#2d2d2a]">
                Share Your Stay Experience
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-[#686762] hover:text-[#2d2d2a] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#54534e] uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Mariama Sesay"
                    className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#54534e] uppercase">City / Country</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. Freetown, Sierra Leone"
                    className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#54534e] uppercase">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5 Exceptional)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5 Great)</option>
                    <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#54534e] uppercase">Stay Purpose</label>
                  <select
                    value={newReview.stayType}
                    onChange={(e) => setNewReview({ ...newReview, stayType: e.target.value })}
                    className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                  >
                    <option value="Holiday Vacation">Holiday Vacation</option>
                    <option value="Executive Business Stay">Executive Business Stay</option>
                    <option value="Romantic Getaway">Romantic Getaway</option>
                    <option value="Family Trip">Family Trip</option>
                    <option value="Event Guest">Wedding / Event Guest</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#54534e] uppercase">Review Headline</label>
                <input
                  type="text"
                  required
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="e.g. Best hospitality in Sierra Leone!"
                  className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#54534e] uppercase">Your Review Comments</label>
                <textarea
                  rows={3}
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share details about the rooms, food, sports arena, staff, or gazebos..."
                  className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#686762] hover:text-[#2d2d2a] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
