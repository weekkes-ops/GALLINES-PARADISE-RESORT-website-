import React, { useState, useEffect } from 'react';
import {
  X,
  LayoutDashboard,
  FileText,
  Users,
  CalendarCheck,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  LogOut,
  Sparkles,
  Eye,
  Clock,
  Search,
  Filter,
  Save,
  AlertCircle,
  ExternalLink,
  Image as ImageIcon,
  Upload,
  Camera,
  FolderOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BlogPost, StoredBooking, UserProfile, UserRole } from '../types';
import { GALLERY_ITEMS, RESORT_IMAGES, RESORT_LOGO } from '../data/resortData';
import {
  fetchBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  fetchAllUsers,
  updateUserRole,
  updateUserStatus,
  fetchAllBookings,
  updateBookingStatus
} from '../services/adminService';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPublicBlog?: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  onOpenPublicBlog
}) => {
  const { user, profile, isAdmin, isStaff, signOut } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'posts' | 'users' | 'bookings' | 'media'>('overview');

  // Data states
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [bookings, setBookings] = useState<StoredBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Post Editor state
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [postFormData, setPostFormData] = useState({
    title: '',
    category: 'Resort News' as BlogPost['category'],
    excerpt: '',
    content: '',
    coverImage: '',
    status: 'published' as BlogPost['status'],
    readTime: '3 min read',
    tags: ''
  });

  // User search/filter
  const [userSearch, setUserSearch] = useState('');
  const [bookingFilter, setBookingFilter] = useState<'all' | 'pending' | 'confirmed' | 'checked_in'>('all');

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [fetchedPosts, fetchedUsers, fetchedBookings] = await Promise.all([
        fetchBlogPosts(true),
        fetchAllUsers(),
        fetchAllBookings()
      ]);
      setPosts(fetchedPosts);
      setUsers(fetchedUsers);
      setBookings(fetchedBookings);
    } catch (err) {
      console.error('Error loading admin dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isStaff) {
      loadAllData();
    }
  }, [isOpen, isStaff]);

  const showNotification = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 4000);
  };

  // Blog Handlers
  const handleOpenNewPost = () => {
    setEditingPostId(null);
    setPostFormData({
      title: '',
      category: 'Resort News',
      excerpt: '',
      content: '',
      coverImage: '/src/assets/images/resort_garden_gazebos_1787598782947.jpg',
      status: 'published',
      readTime: '3 min read',
      tags: 'Resort, Hospitality, Luxury'
    });
    setIsEditingPost(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setPostFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      status: post.status,
      readTime: post.readTime,
      tags: post.tags?.join(', ') || ''
    });
    setIsEditingPost(true);
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postFormData.title || !postFormData.content) return;

    try {
      const tagsArray = postFormData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      if (editingPostId) {
        await updateBlogPost(editingPostId, {
          title: postFormData.title,
          category: postFormData.category,
          excerpt: postFormData.excerpt,
          content: postFormData.content,
          coverImage: postFormData.coverImage,
          status: postFormData.status,
          readTime: postFormData.readTime,
          tags: tagsArray
        });
        showNotification('Blog post updated successfully!');
      } else {
        await createBlogPost({
          title: postFormData.title,
          slug: postFormData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          category: postFormData.category,
          excerpt: postFormData.excerpt,
          content: postFormData.content,
          coverImage: postFormData.coverImage || '/src/assets/images/resort_driveway_estate_1787598710227.jpg',
          status: postFormData.status,
          readTime: postFormData.readTime || '3 min read',
          tags: tagsArray,
          authorId: user?.uid || 'admin',
          authorName: profile?.displayName || user?.displayName || 'Resort Admin'
        });
        showNotification('New blog post published successfully!');
      }

      setIsEditingPost(false);
      const updatedPosts = await fetchBlogPosts(true);
      setPosts(updatedPosts);
    } catch (err: any) {
      console.error('Error saving post:', err);
      alert('Failed to save blog post: ' + err.message);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await deleteBlogPost(id);
      setPosts(posts.filter((p) => p.id !== id));
      showNotification('Blog post deleted.');
    } catch (err: any) {
      alert('Failed to delete post: ' + err.message);
    }
  };

  // User Handlers
  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    try {
      await updateUserRole(userId, newRole);
      setUsers(users.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
      showNotification(`User role updated to ${newRole.toUpperCase()}.`);
    } catch (err: any) {
      alert('Failed to update user role: ' + err.message);
    }
  };

  const handleStatusToggle = async (userId: string, currentStatus: 'active' | 'suspended') => {
    const nextStatus = currentStatus === 'active' ? 'suspended' : 'active';
    try {
      await updateUserStatus(userId, nextStatus);
      setUsers(users.map((u) => (u.id === userId ? { ...u, status: nextStatus } : u)));
      showNotification(`User status changed to ${nextStatus}.`);
    } catch (err: any) {
      alert('Failed to change user status: ' + err.message);
    }
  };

  // Booking Handlers
  const handleBookingStatusChange = async (
    bookingId: string,
    newStatus: StoredBooking['status'],
    paymentStatus?: StoredBooking['paymentStatus']
  ) => {
    try {
      await updateBookingStatus(bookingId, newStatus, paymentStatus);
      setBookings(
        bookings.map((b) =>
          b.id === bookingId
            ? { ...b, status: newStatus, ...(paymentStatus ? { paymentStatus } : {}) }
            : b
        )
      );
      showNotification(`Booking #${bookingId} status updated to ${newStatus}.`);
    } catch (err: any) {
      alert('Failed to update booking: ' + err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#ffffff] text-[#2d2d2a] w-full max-w-6xl h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#d8d4c7]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#f8f7f2] border-b border-[#e3dfd6] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full p-0.5 border border-[#d8d4c7] shadow-sm bg-white overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={RESORT_LOGO}
                alt="Galiness Paradise Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-lg text-[#2d2d2a]">
                  Galiness Paradise Control Center
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4a5340]/10 text-[#4a5340] uppercase border border-[#4a5340]/20">
                  {profile?.role === 'admin' ? 'Super Administrator' : 'Staff Member'}
                </span>
              </div>
              <p className="text-xs text-[#686762]">
                Logged in as <span className="font-medium text-[#2d2d2a]">{profile?.displayName || user?.email}</span> ({user?.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenPublicBlog && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPublicBlog();
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#d8d4c7] hover:bg-[#ffffff] text-xs font-semibold text-[#4a5340] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Public Blog</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#ede9dc] hover:bg-[#e0dbcd] text-[#2d2d2a] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notifications Toast */}
        {actionSuccess && (
          <div className="bg-[#4a5340] text-[#f8f7f2] px-6 py-2.5 text-xs font-semibold flex items-center justify-between shrink-0 animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>{actionSuccess}</span>
            </div>
            <button onClick={() => setActionSuccess(null)} className="text-white/80 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Body Navigation & Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Sidebar Nav */}
          <div className="w-full md:w-60 bg-[#fbfaf8] border-r border-[#e3dfd6] p-4 flex flex-row md:flex-col justify-between shrink-0 gap-2 overflow-x-auto md:overflow-x-visible">
            <div className="space-y-1.5 flex flex-row md:flex-col w-full">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('overview');
                  setIsEditingPost(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                    : 'text-[#686762] hover:bg-[#f2efe7] hover:text-[#2d2d2a]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                <span>Overview & Stats</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('posts');
                  setIsEditingPost(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'posts'
                    ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                    : 'text-[#686762] hover:bg-[#f2efe7] hover:text-[#2d2d2a]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Blog Management</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/10">
                  {posts.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('users');
                  setIsEditingPost(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'users'
                    ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                    : 'text-[#686762] hover:bg-[#f2efe7] hover:text-[#2d2d2a]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>User Management</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/10">
                  {users.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('bookings');
                  setIsEditingPost(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'bookings'
                    ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                    : 'text-[#686762] hover:bg-[#f2efe7] hover:text-[#2d2d2a]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 shrink-0" />
                  <span>Guest Bookings</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/10">
                  {bookings.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('media');
                  setIsEditingPost(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'media'
                    ? 'bg-[#4a5340] text-[#f8f7f2] shadow-sm'
                    : 'text-[#686762] hover:bg-[#f2efe7] hover:text-[#2d2d2a]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 shrink-0" />
                  <span>Photos & Media</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-[#4a5340]/10 text-[#4a5340] font-bold">
                  {GALLERY_ITEMS.length}
                </span>
              </button>
            </div>

            {/* Logout button */}
            <div className="pt-2 border-t border-[#e3dfd6] hidden md:block">
              <button
                type="button"
                onClick={() => {
                  signOut();
                  onClose();
                }}
                className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out Account</span>
              </button>
            </div>
          </div>

          {/* Main Work Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#ffffff]">
            
            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center gap-3 text-[#686762]">
                <div className="w-8 h-8 border-3 border-[#4a5340] border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-medium">Syncing live Firestore records...</p>
              </div>
            ) : (
              <>
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f8f7f2] p-5 rounded-2xl border border-[#e3dfd6]">
                      <div>
                        <h3 className="font-display font-bold text-xl text-[#2d2d2a]">
                          System Administration Dashboard
                        </h3>
                        <p className="text-xs text-[#686762] mt-0.5">
                          Manage live resort content, publish blog articles, assign administrator & staff roles, and oversee guest bookings.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('posts');
                          handleOpenNewPost();
                        }}
                        className="px-4 py-2.5 rounded-xl bg-[#4a5340] text-[#f8f7f2] text-xs font-bold flex items-center gap-2 shadow-md hover:bg-[#3d4534] transition-all cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Write Blog Post</span>
                      </button>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e3dfd6] space-y-1 shadow-sm">
                        <div className="flex items-center justify-between text-[#4a5340]">
                          <FileText className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#686762]">Blog</span>
                        </div>
                        <p className="text-2xl font-bold text-[#2d2d2a]">{posts.length}</p>
                        <p className="text-[11px] text-[#686762]">
                          {posts.filter(p => p.status === 'published').length} published articles
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e3dfd6] space-y-1 shadow-sm">
                        <div className="flex items-center justify-between text-[#4a5340]">
                          <Users className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#686762]">Users</span>
                        </div>
                        <p className="text-2xl font-bold text-[#2d2d2a]">{users.length}</p>
                        <p className="text-[11px] text-[#686762]">
                          {users.filter(u => u.role === 'admin').length} Admins • {users.filter(u => u.role === 'staff').length} Staff
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e3dfd6] space-y-1 shadow-sm">
                        <div className="flex items-center justify-between text-[#4a5340]">
                          <CalendarCheck className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#686762]">Bookings</span>
                        </div>
                        <p className="text-2xl font-bold text-[#2d2d2a]">{bookings.length}</p>
                        <p className="text-[11px] text-[#686762]">
                          {bookings.filter(b => b.status === 'pending').length} pending approval
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e3dfd6] space-y-1 shadow-sm">
                        <div className="flex items-center justify-between text-emerald-700">
                          <ShieldCheck className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#686762]">Security</span>
                        </div>
                        <p className="text-2xl font-bold text-[#2d2d2a]">Active</p>
                        <p className="text-[11px] text-[#686762]">Firestore RBAC Rules & Auth</p>
                      </div>
                    </div>

                    {/* Quick Recents Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* Recent Posts */}
                      <div className="p-5 rounded-2xl border border-[#e3dfd6] bg-[#ffffff] space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-[#2d2d2a] flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#4a5340]" />
                            <span>Recent Blog Articles</span>
                          </h4>
                          <button
                            type="button"
                            onClick={() => setActiveTab('posts')}
                            className="text-xs text-[#4a5340] font-semibold hover:underline"
                          >
                            View All
                          </button>
                        </div>
                        <div className="space-y-2">
                          {posts.slice(0, 3).map((post) => (
                            <div
                              key={post.id}
                              className="p-3 rounded-xl bg-[#fbfaf8] border border-[#e3dfd6] flex items-center justify-between gap-3"
                            >
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-[#2d2d2a] truncate">{post.title}</p>
                                <p className="text-[11px] text-[#686762]">
                                  {post.category} • {new Date(post.publishedAt).toLocaleDateString()}
                                </p>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                                  post.status === 'published'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {post.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Users */}
                      <div className="p-5 rounded-2xl border border-[#e3dfd6] bg-[#ffffff] space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-[#2d2d2a] flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#4a5340]" />
                            <span>Registered User Accounts</span>
                          </h4>
                          <button
                            type="button"
                            onClick={() => setActiveTab('users')}
                            className="text-xs text-[#4a5340] font-semibold hover:underline"
                          >
                            Manage Users
                          </button>
                        </div>
                        <div className="space-y-2">
                          {users.slice(0, 3).map((u) => (
                            <div
                              key={u.id}
                              className="p-3 rounded-xl bg-[#fbfaf8] border border-[#e3dfd6] flex items-center justify-between gap-3"
                            >
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-[#2d2d2a] truncate">
                                  {u.displayName || 'Unnamed User'}
                                </p>
                                <p className="text-[11px] text-[#686762] truncate">{u.email}</p>
                              </div>
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                                  u.role === 'admin'
                                    ? 'bg-[#4a5340] text-[#f8f7f2]'
                                    : u.role === 'staff'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-stone-100 text-stone-700'
                                }`}
                              >
                                {u.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. BLOG POSTS TAB */}
                {activeTab === 'posts' && (
                  <div>
                    {isEditingPost ? (
                      /* Post Editor Form */
                      <form onSubmit={handleSavePost} className="space-y-5">
                        <div className="flex items-center justify-between pb-3 border-b border-[#e3dfd6]">
                          <div>
                            <h3 className="font-display font-bold text-lg text-[#2d2d2a]">
                              {editingPostId ? 'Edit Blog Article' : 'Create New Blog Article'}
                            </h3>
                            <p className="text-xs text-[#686762]">
                              Compose news, dining updates, local guides, or resort event stories.
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setIsEditingPost(false)}
                              className="px-3.5 py-2 rounded-xl border border-[#d8d4c7] text-xs font-semibold hover:bg-[#f2efe7]"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                            >
                              <Save className="w-4 h-4" />
                              <span>Save & Publish</span>
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Article Title *
                              </label>
                              <input
                                type="text"
                                required
                                value={postFormData.title}
                                onChange={(e) => setPostFormData({ ...postFormData, title: e.target.value })}
                                placeholder="e.g., Weekend Barbecue & Cocktail Night Under The Gazebos"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340] text-xs font-medium"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Short Summary / Excerpt *
                              </label>
                              <textarea
                                rows={2}
                                required
                                value={postFormData.excerpt}
                                onChange={(e) => setPostFormData({ ...postFormData, excerpt: e.target.value })}
                                placeholder="A concise 1-2 sentence overview of the article..."
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340] text-xs font-medium"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Article Full Content *
                              </label>
                              <textarea
                                rows={10}
                                required
                                value={postFormData.content}
                                onChange={(e) => setPostFormData({ ...postFormData, content: e.target.value })}
                                placeholder="Write the complete article content, details, highlights and guest information..."
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340] text-xs font-medium leading-relaxed font-sans"
                              />
                            </div>
                          </div>

                          <div className="space-y-4 bg-[#f8f7f2] p-4 rounded-2xl border border-[#e3dfd6] h-fit">
                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Category
                              </label>
                              <select
                                value={postFormData.category}
                                onChange={(e) => setPostFormData({ ...postFormData, category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                              >
                                <option value="Resort News">Resort News</option>
                                <option value="Dining & Cuisine">Dining & Cuisine</option>
                                <option value="Local Experiences">Local Experiences</option>
                                <option value="Events & Weddings">Events & Weddings</option>
                                <option value="Wellness & Sports">Wellness & Sports</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Publishing Status
                              </label>
                              <select
                                value={postFormData.status}
                                onChange={(e) => setPostFormData({ ...postFormData, status: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                              >
                                <option value="published">Published (Public)</option>
                                <option value="draft">Draft (Private)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Estimated Read Time
                              </label>
                              <input
                                type="text"
                                value={postFormData.readTime}
                                onChange={(e) => setPostFormData({ ...postFormData, readTime: e.target.value })}
                                placeholder="e.g., 4 min read"
                                className="w-full px-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Cover Image URL
                              </label>
                              <input
                                type="text"
                                value={postFormData.coverImage}
                                onChange={(e) => setPostFormData({ ...postFormData, coverImage: e.target.value })}
                                placeholder="/src/assets/images/... or https://"
                                className="w-full px-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                              />
                              {postFormData.coverImage && (
                                <div className="mt-2 h-24 rounded-xl overflow-hidden border border-[#d8d4c7]">
                                  <img
                                    src={postFormData.coverImage}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                                Tags (comma separated)
                              </label>
                              <input
                                type="text"
                                value={postFormData.tags}
                                onChange={(e) => setPostFormData({ ...postFormData, tags: e.target.value })}
                                placeholder="Gazebos, BBQ, Dining"
                                className="w-full px-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    ) : (
                      /* Posts List View */
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#e3dfd6]">
                          <div>
                            <h3 className="font-display font-bold text-lg text-[#2d2d2a]">
                              Resort Articles & Announcements ({posts.length})
                            </h3>
                            <p className="text-xs text-[#686762]">
                              Publish news, chef specials, seasonal offers, and guest event guides.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleOpenNewPost}
                            className="px-4 py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer shrink-0"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Create New Post</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {posts.map((post) => (
                            <div
                              key={post.id}
                              className="p-4 rounded-2xl border border-[#e3dfd6] bg-[#fbfaf8] hover:bg-[#ffffff] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                            >
                              <div className="flex items-start gap-4">
                                <div className="w-20 h-16 rounded-xl overflow-hidden bg-[#e9e5db] shrink-0 border border-[#d8d4c7]">
                                  <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#4a5340]/10 text-[#4a5340]">
                                      {post.category}
                                    </span>
                                    <span
                                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                        post.status === 'published'
                                          ? 'bg-emerald-100 text-emerald-800'
                                          : 'bg-amber-100 text-amber-800'
                                      }`}
                                    >
                                      {post.status}
                                    </span>
                                    <span className="text-[11px] text-[#686762]">
                                      {new Date(post.publishedAt).toLocaleDateString()} • {post.readTime}
                                    </span>
                                  </div>
                                  <h4 className="font-bold text-sm text-[#2d2d2a] mt-1">{post.title}</h4>
                                  <p className="text-xs text-[#686762] line-clamp-1 mt-0.5">
                                    {post.excerpt}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handleEditPost(post)}
                                  className="p-2 rounded-xl bg-[#ffffff] border border-[#d8d4c7] hover:bg-[#ede9dc] text-[#4a5340] text-xs font-semibold flex items-center gap-1 transition-colors"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeletePost(post.id)}
                                  className="p-2 rounded-xl bg-[#ffffff] border border-rose-200 hover:bg-rose-50 text-rose-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. USERS MANAGEMENT TAB */}
                {activeTab === 'users' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#e3dfd6]">
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#2d2d2a]">
                          System Users & Permissions ({users.length})
                        </h3>
                        <p className="text-xs text-[#686762]">
                          Manage access roles (Admin, Staff, Guest) and account activity.
                        </p>
                      </div>

                      <div className="relative w-full sm:w-64">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#686762]" />
                        <input
                          type="text"
                          value={userSearch}
                          onChange={(e) => setUserSearch(e.target.value)}
                          placeholder="Search email or name..."
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] text-xs"
                        />
                      </div>
                    </div>

                    <div className="overflow-x-auto border border-[#e3dfd6] rounded-2xl shadow-sm">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#f8f7f2] text-[#2d2d2a] font-bold border-b border-[#e3dfd6]">
                          <tr>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Email Address</th>
                            <th className="px-4 py-3">Access Role</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Joined Date</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e3dfd6] bg-[#ffffff]">
                          {users
                            .filter(
                              (u) =>
                                u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
                                u.displayName.toLowerCase().includes(userSearch.toLowerCase())
                            )
                            .map((u) => (
                              <tr key={u.id} className="hover:bg-[#faf9f5]">
                                <td className="px-4 py-3 font-semibold text-[#2d2d2a] flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-full bg-[#4a5340] text-[#f8f7f2] flex items-center justify-center font-bold text-[11px] shrink-0">
                                    {u.displayName?.charAt(0).toUpperCase() || 'U'}
                                  </div>
                                  <span>{u.displayName || 'Guest'}</span>
                                </td>
                                <td className="px-4 py-3 text-[#686762]">{u.email}</td>
                                <td className="px-4 py-3">
                                  <select
                                    disabled={!isAdmin}
                                    value={u.role}
                                    onChange={(e) => handleRoleChange(u.id, e.target.value as UserRole)}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                                      u.role === 'admin'
                                        ? 'bg-[#4a5340] text-[#f8f7f2] border-[#4a5340]'
                                        : u.role === 'staff'
                                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                                        : 'bg-stone-100 text-stone-700 border-stone-200'
                                    }`}
                                  >
                                    <option value="admin">Admin</option>
                                    <option value="staff">Staff</option>
                                    <option value="guest">Guest</option>
                                  </select>
                                </td>
                                <td className="px-4 py-3">
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                      u.status === 'active'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-rose-100 text-rose-800'
                                    }`}
                                  >
                                    {u.status}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-[#686762]">
                                  {new Date(u.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-right">
                                  {isAdmin && (
                                    <button
                                      type="button"
                                      onClick={() => handleStatusToggle(u.id, u.status)}
                                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                                        u.status === 'active'
                                          ? 'border-rose-200 text-rose-700 hover:bg-rose-50'
                                          : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                                      }`}
                                    >
                                      {u.status === 'active' ? 'Suspend' : 'Activate'}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 4. BOOKINGS MANAGEMENT TAB */}
                {activeTab === 'bookings' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#e3dfd6]">
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#2d2d2a]">
                          Guest Reservations & Check-Ins ({bookings.length})
                        </h3>
                        <p className="text-xs text-[#686762]">
                          Manage incoming guest arrivals, approve payment confirmations, and update stay records.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={bookingFilter}
                          onChange={(e) => setBookingFilter(e.target.value as any)}
                          className="px-3 py-1.5 rounded-xl border border-[#d8d4c7] bg-[#ffffff] text-xs font-medium"
                        >
                          <option value="all">All Bookings</option>
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="checked_in">Checked In</option>
                        </select>
                      </div>
                    </div>

                    {bookings.length === 0 ? (
                      <div className="p-8 text-center bg-[#fbfaf8] rounded-2xl border border-[#e3dfd6] space-y-2">
                        <CalendarCheck className="w-8 h-8 text-[#4a5340] mx-auto" />
                        <p className="text-xs font-bold text-[#2d2d2a]">No bookings recorded yet</p>
                        <p className="text-[11px] text-[#686762]">
                          When visitors submit reservations through the website booking engine, they will appear here in real-time.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {bookings
                          .filter((b) => (bookingFilter === 'all' ? true : b.status === bookingFilter))
                          .map((b) => (
                            <div
                              key={b.id}
                              className="p-4 rounded-2xl border border-[#e3dfd6] bg-[#fbfaf8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                            >
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-mono text-xs font-bold text-[#4a5340]">
                                    #{b.id}
                                  </span>
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                      b.status === 'confirmed'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : b.status === 'pending'
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-blue-100 text-blue-800'
                                    }`}
                                  >
                                    {b.status.replace('_', ' ').toUpperCase()}
                                  </span>
                                  <span className="text-[11px] text-[#686762]">
                                    Method: {b.paymentMethod}
                                  </span>
                                </div>

                                <h4 className="font-bold text-sm text-[#2d2d2a] mt-1">
                                  {b.guestName} ({b.guestEmail} • {b.guestPhone})
                                </h4>

                                <p className="text-xs text-[#686762] mt-0.5">
                                  <span className="font-medium text-[#2d2d2a]">{b.roomName}</span> • Check-In: {b.checkIn} to {b.checkOut} ({b.nights} nights) • Guests: {b.adults} Adults, {b.children} Children
                                </p>

                                <p className="text-xs font-bold text-[#4a5340] mt-1">
                                  Total: ${b.totalPriceUSD} USD / NLE {b.totalPriceNLE.toLocaleString()}
                                </p>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                                <button
                                  type="button"
                                  onClick={() => handleBookingStatusChange(b.id, 'confirmed', 'confirmed')}
                                  className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Confirm</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleBookingStatusChange(b.id, 'checked_in')}
                                  className="px-3 py-1.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white text-xs font-bold"
                                >
                                  Check In
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleBookingStatusChange(b.id, 'cancelled', 'cancelled')}
                                  className="px-3 py-1.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 5. MEDIA & PHOTOS TAB */}
                {activeTab === 'media' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e3dfd6]">
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                          Resort Media & Photography Library
                        </h3>
                        <p className="text-xs text-[#686762]">
                          Manage and review all 14 official resort photos, chalets, suites, sports arena, and grounds.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] text-xs font-bold flex items-center gap-2 shadow-sm transition-all">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload / Add New Photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                showNotification(`Selected "${file.name}". You can drag & drop or upload files to /public/images/ in AI Studio for permanent embedding.`);
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Quick Guide Card */}
                    <div className="p-4 rounded-2xl bg-[#f8f7f2] border border-[#d8d4c7] flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center shrink-0">
                        <FolderOpen className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className="font-bold text-[#2d2d2a]">How to permanently add original photos to the repository:</p>
                        <p className="text-[#686762] leading-relaxed">
                          In Google AI Studio's left sidebar file explorer, you can upload your original full-resolution image files directly into <code className="px-1.5 py-0.5 rounded bg-[#ede9dc] text-[#4a5340] font-mono">public/images/</code> or <code className="px-1.5 py-0.5 rounded bg-[#ede9dc] text-[#4a5340] font-mono">src/assets/images/</code> to display your exact original camera files anywhere in the resort layout.
                        </p>
                      </div>
                    </div>

                    {/* Media Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {GALLERY_ITEMS.map((item, idx) => (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-[#e3dfd6] overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                        >
                          <div className="relative h-44 overflow-hidden bg-[#f4f2ec]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                              {item.category}
                            </div>
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#ede9dc]/90 text-[#4a5340] text-[10px] font-mono font-bold">
                              #{idx + 1}
                            </div>
                          </div>

                          <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                            <div>
                              <h4 className="text-xs font-bold text-[#2d2d2a] line-clamp-1">{item.title}</h4>
                              <p className="text-[11px] text-[#686762] line-clamp-2 mt-0.5">{item.caption}</p>
                            </div>

                            <div className="pt-2 border-t border-[#f2efe7] flex items-center justify-between text-[10px] text-[#8c8a82]">
                              <span className="flex items-center gap-1 font-medium text-[#4a5340]">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>Active in Gallery</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  showNotification(`Image "${item.title}" is currently active on the resort website.`);
                                }}
                                className="text-[#4a5340] hover:underline font-bold"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
