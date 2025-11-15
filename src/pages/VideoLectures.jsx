import React, { useState } from 'react';

export default function VideoLectures() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Video Data
  const videos = [
    {
      id: 1,
      category: 'mathematics',
      title: 'Complete Calculus Tutorial - Class 12',
      duration: '45:23',
      views: '125K',
      uploadDate: '2 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
      instructor: 'Dr. Rajesh Kumar',
      level: 'Advanced',
      description: 'Master calculus concepts with detailed explanations'
    },
    {
      id: 2,
      category: 'physics',
      title: 'Newton\'s Laws of Motion Explained',
      duration: '32:15',
      views: '98K',
      uploadDate: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop',
      instructor: 'Prof. Priya Sharma',
      level: 'Intermediate',
      description: 'Understanding fundamental physics principles'
    },
    {
      id: 3,
      category: 'chemistry',
      title: 'Organic Chemistry - Complete Guide',
      duration: '1:02:45',
      views: '215K',
      uploadDate: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop',
      instructor: 'Dr. Amit Verma',
      level: 'Advanced',
      description: 'Comprehensive organic chemistry tutorial'
    },
    {
      id: 4,
      category: 'biology',
      title: 'Cell Biology - Quick Revision',
      duration: '15:45',
      views: '67K',
      uploadDate: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=400&h=300&fit=crop',
      instructor: 'Dr. Neha Singh',
      level: 'Beginner',
      isShort: true,
      description: 'Quick revision of cell structure'
    },
    {
      id: 5,
      category: 'english',
      title: 'English Grammar - Tenses Made Easy',
      duration: '28:30',
      views: '143K',
      uploadDate: '1 month ago',
      thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
      instructor: 'Ms. Anita Desai',
      level: 'Beginner',
      description: 'Master English tenses with examples'
    },
    {
      id: 6,
      category: 'motivation',
      title: 'How to Stay Motivated During Exams',
      duration: '12:30',
      views: '245K',
      uploadDate: '2 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      instructor: 'Sandeep Maheshwari',
      level: 'All',
      isShort: true,
      description: 'Motivational tips for exam success'
    },
    {
      id: 7,
      category: 'career',
      title: 'Career Options After Class 12th - Complete Guide',
      duration: '38:15',
      views: '189K',
      uploadDate: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      instructor: 'Career Counselor',
      level: 'All',
      description: 'Explore all career options after 12th'
    },
    {
      id: 8,
      category: 'mathematics',
      title: 'Trigonometry Tricks - Quick Methods',
      duration: '18:15',
      views: '76K',
      uploadDate: '4 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
      instructor: 'Math Guru',
      level: 'Intermediate',
      isShort: true,
      description: 'Learn quick trigonometry tricks'
    },
    {
      id: 9,
      category: 'physics',
      title: 'Electromagnetism - Complete Chapter',
      duration: '55:40',
      views: '112K',
      uploadDate: '2 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
      instructor: 'Physics Academy',
      level: 'Advanced',
      description: 'Complete electromagnetism explanation'
    },
    {
      id: 10,
      category: 'chemistry',
      title: 'Periodic Table - Memory Tricks',
      duration: '16:50',
      views: '198K',
      uploadDate: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=400&h=300&fit=crop',
      instructor: 'Chemistry Pro',
      level: 'Beginner',
      isShort: true,
      description: 'Easy memory tricks for periodic table'
    },
    {
      id: 11,
      category: 'motivation',
      title: 'Success Story - From Failure to IIT',
      duration: '14:40',
      views: '567K',
      uploadDate: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      instructor: 'Student Stories',
      level: 'All',
      isShort: true,
      description: 'Inspiring IIT success story'
    },
    {
      id: 12,
      category: 'career',
      title: 'Engineering vs Medical - Which to Choose?',
      duration: '42:20',
      views: '234K',
      uploadDate: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      instructor: 'Career Guide India',
      level: 'All',
      description: 'Compare engineering and medical careers'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: 'fas fa-th-large', count: videos.length },
    { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-calculator', count: videos.filter(v => v.category === 'mathematics').length },
    { id: 'physics', name: 'Physics', icon: 'fas fa-atom', count: videos.filter(v => v.category === 'physics').length },
    { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', count: videos.filter(v => v.category === 'chemistry').length },
    { id: 'biology', name: 'Biology', icon: 'fas fa-dna', count: videos.filter(v => v.category === 'biology').length },
    { id: 'english', name: 'English', icon: 'fas fa-book', count: videos.filter(v => v.category === 'english').length },
    { id: 'motivation', name: 'Motivation', icon: 'fas fa-fire', count: videos.filter(v => v.category === 'motivation').length },
    { id: 'career', name: 'Career', icon: 'fas fa-briefcase', count: videos.filter(v => v.category === 'career').length }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const shortVideos = filteredVideos.filter(v => v.isShort);
  const regularVideos = filteredVideos.filter(v => !v.isShort);

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <i className="fas fa-play-circle"></i>
              <span className="font-semibold">Video Learning Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn Smarter with
              <span className="block text-yellow-400 mt-2">Expert Video Lectures</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Access thousands of free educational videos from top educators. Watch, learn, and excel!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-video text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold">{videos.length}+</h3>
                    <p className="text-sm text-purple-200">Video Lectures</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-bolt text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold">{shortVideos.length}</h3>
                    <p className="text-sm text-purple-200">Quick Shorts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-users text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold">500K+</h3>
                    <p className="text-sm text-purple-200">Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-6 shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-purple-600 text-lg"></i>
            <input
              type="text"
              placeholder="Search videos by topic, subject, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-12 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-purple-600 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <i className="fas fa-times text-gray-600"></i>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={cat.icon}></i>
                <span>{cat.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Shorts Section */}
      {shortVideos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-bolt text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Quick Explainers</h2>
                <p className="text-gray-600">{shortVideos.length} short videos • Under 20 minutes</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {shortVideos.map(video => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden bg-black mb-3 h-64">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <i className="fas fa-play text-purple-600 text-xl ml-1"></i>
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <i className="fas fa-bolt"></i> SHORT
                    </span>
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-eye"></i> {video.views}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full font-semibold ${
                      video.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      video.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      video.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {video.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Complete Videos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Complete Video Lectures</h2>
              <p className="text-gray-600">{regularVideos.length} comprehensive lectures available</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          {regularVideos.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <i className="fas fa-video-slash text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No videos found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                <i className="fas fa-redo"></i> Reset Filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {regularVideos.map(video => (
                <div key={video.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${
                  viewMode === 'grid' ? '' : 'flex flex-col sm:flex-row'
                }`}>
                  <div className={`relative overflow-hidden bg-black ${
                    viewMode === 'grid' ? 'h-56' : 'sm:w-80 h-56 sm:h-auto flex-shrink-0'
                  }`}>
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fas fa-play-circle text-white text-6xl"></i>
                    </div>
                    <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                    <span className="absolute bottom-4 right-4 bg-black/90 text-white px-3 py-1 rounded text-sm font-semibold">
                      {video.duration}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <i className="fas fa-user-circle text-4xl text-gray-300"></i>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">{video.instructor}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <i className="fas fa-eye"></i> {video.views}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <i className="far fa-clock"></i> {video.uploadDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t mt-auto">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        video.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        video.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        video.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {video.level}
                      </span>
                      <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                        <i className="fab fa-youtube"></i>
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Motivation CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6" style={{animation: 'float 3s ease-in-out infinite'}}>
              <i className="fas fa-trophy text-white text-4xl"></i>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Need Motivation?</h2>
            <p className="text-xl text-white/90 mb-8">
              Watch inspiring success stories and stay motivated on your journey to success
            </p>
            <button 
              onClick={() => setActiveCategory('motivation')}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-2xl"
            >
              <i className="fas fa-fire text-2xl"></i>
              Watch Motivational Videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}