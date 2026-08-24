import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { RESORT_IMAGES } from '../data/resortData';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight, 
  ShieldCheck,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BlogPost } from '../types';
import { fetchBlogPosts } from '../services/adminService';

interface BlogPageProps {
  onOpenAdmin: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenAdmin }) => {
  const { isStaff } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchBlogPosts(false);
        setPosts(data);
      } catch (err) {
        console.error('Failed to load posts:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const tags = ['All', 'Resort News', 'Dining & Cuisine', 'Wellness & Sports', 'Events & Weddings', 'Local Experiences'];

  const filteredPosts = posts.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.category === selectedTag || post.tags?.includes(selectedTag);
  });

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Resort Journal & News"
        subtitle="Discover stories from Galiness Paradise: culinary secrets, sports events, weekend getaway guides, and official resort announcements."
        badge="Stories & Updates"
        breadcrumbs={[{ label: 'Resort Journal' }]}
        bgImage={RESORT_IMAGES.dining}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Control Bar with Tags and Staff Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#ede9dc]/60 border border-[#d8d4c7]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-[#7c6344] uppercase tracking-wider flex items-center gap-1.5 shrink-0 pr-2">
              <Tag className="w-3.5 h-3.5" />
              Topics:
            </span>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  selectedTag === tag
                    ? 'bg-[#4a5340] text-white shadow-sm'
                    : 'bg-white text-[#54534e] hover:bg-[#ede9dc] border border-[#d8d4c7]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {isStaff && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="px-4 py-1.5 rounded-xl bg-[#4a5340] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#3d4534] transition-colors shrink-0"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Publish New Post</span>
            </button>
          )}
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block w-8 h-8 border-3 border-[#4a5340] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-[#686762] mt-2">Loading journal articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group rounded-3xl border border-[#e3dfd6] overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#2d2d2a]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4a5340]/90 backdrop-blur-xs text-[#f8f7f2] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#7c6344]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#686762] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#f2efe7] mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#54534e]">
                    By {post.authorName}
                  </span>
                  <span className="text-xs font-bold text-[#4a5340] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d8d4c7] relative my-8 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#2d2d2a]">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#ede9dc] text-[#4a5340] text-xs font-bold uppercase">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-[#7c6344] font-medium">
                    {selectedPost.publishedAt ? new Date(selectedPost.publishedAt).toLocaleDateString() : 'Recent'} • {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2d2a]">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-2 pt-2 border-b border-[#e3dfd6] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#4a5340] text-white flex items-center justify-center text-xs font-bold">
                    {selectedPost.authorName?.charAt(0) || 'G'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2d2d2a]">{selectedPost.authorName}</p>
                    <p className="text-[10px] text-[#686762]">Galiness Paradise Editorial</p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#2d2d2a] leading-relaxed space-y-4 font-normal">
                <p className="text-base text-[#4a5340] font-medium leading-relaxed italic">
                  {selectedPost.excerpt}
                </p>
                <div className="whitespace-pre-line text-[#54534e] space-y-4">
                  {selectedPost.content}
                </div>
              </div>

              <div className="pt-6 border-t border-[#e3dfd6] flex items-center justify-between">
                <span className="text-xs text-[#686762]">
                  Galiness Paradise Resort & Hotel News
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-xl bg-[#4a5340] text-white text-xs font-bold hover:bg-[#3d4534]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
