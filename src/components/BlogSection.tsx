import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Share2,
  ChevronRight,
  Filter,
  X,
  Plus
} from 'lucide-react';
import { BlogPost } from '../types';
import { fetchBlogPosts } from '../services/adminService';
import { useAuth } from '../context/AuthContext';

interface BlogSectionProps {
  onOpenAdmin?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenAdmin }) => {
  const { isStaff } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts(false);
        setPosts(data);
      } catch (err) {
        console.error('Failed to load blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const categories = ['All', 'Resort News', 'Dining & Cuisine', 'Wellness & Sports', 'Events & Weddings', 'Local Experiences'];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  return (
    <section id="blog" className="py-20 sm:py-28 relative bg-[#f2efe7] border-t border-[#e3dfd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d8d4c7] text-xs font-bold text-[#4a5340] uppercase tracking-wider shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Resort Journal & News</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
              Stories from <span className="earth-gradient-text">Gallines Paradise</span>
            </h2>
            <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
              Stay updated with culinary stories, event announcements, wellness tips, and travel insights from Bonthe District.
            </p>
          </div>

          {/* Admin quick write button */}
          {isStaff && onOpenAdmin && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="px-5 py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Create / Manage Posts</span>
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                  : 'bg-[#ffffff] text-[#686762] hover:text-[#2d2d2a] border border-[#d8d4c7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="h-64 flex items-center justify-center text-[#686762]">
            <div className="w-8 h-8 border-3 border-[#4a5340] border-t-transparent rounded-full animate-spin mr-3" />
            <span className="text-xs font-medium">Loading resort stories...</span>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#ffffff] rounded-3xl border border-[#d8d4c7] p-8">
            <p className="text-sm font-bold text-[#2d2d2a]">No articles found in this category.</p>
            <p className="text-xs text-[#686762] mt-1">Check back soon for new stories from Gallines Paradise.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#d8d4c7] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#e9e5db]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#ffffff]/90 backdrop-blur-md text-[#4a5340] shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-[#686762]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4a5340]" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#4a5340]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#686762] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e3dfd6] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#686762]">
                      By {post.authorName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setReadingPost(post)}
                      className="text-xs font-bold text-[#4a5340] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Full Post Reader Modal */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#ffffff] text-[#2d2d2a] w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto border border-[#d8d4c7] relative">
            
            {/* Close */}
            <button
              type="button"
              onClick={() => setReadingPost(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#2d2d2a] flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cover Banner */}
            <div className="relative h-64 sm:h-80 w-full bg-[#e9e5db]">
              <img
                src={readingPost.coverImage}
                alt={readingPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#4a5340] text-white">
                  {readingPost.category}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {readingPost.title}
                </h2>
                <p className="text-xs text-white/80 flex items-center gap-3">
                  <span>By {readingPost.authorName}</span>
                  <span>•</span>
                  <span>{new Date(readingPost.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{readingPost.readTime}</span>
                </p>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm font-semibold text-[#4a5340] italic leading-relaxed border-l-4 border-[#4a5340] pl-4">
                "{readingPost.excerpt}"
              </p>

              <div className="text-sm text-[#2d2d2a] leading-relaxed whitespace-pre-line font-sans space-y-4">
                {readingPost.content}
              </div>

              {readingPost.tags && readingPost.tags.length > 0 && (
                <div className="pt-4 border-t border-[#e3dfd6] flex items-center gap-2 flex-wrap">
                  <Tag className="w-3.5 h-3.5 text-[#686762]" />
                  {readingPost.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs bg-[#f2efe7] text-[#4a5340] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
