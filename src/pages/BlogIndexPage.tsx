import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { SEO } from '../components/common/SEO';

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company Formation',
    'GST & Taxation',
    'Certifications',
    'Loan & Finance Education',
    'Business Compliance'
  ];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-20">
      <SEO
        title="Resources & Compliance Insights"
        description="Comprehensive guides on company formation, GST compliance, ISO certifications, and business finance for Indian entrepreneurs."
        canonicalPath="/blog"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header - Institutional Deep Navy */}
        <div className="bg-[#1B1247] text-white rounded-3xl p-8 md:p-14 border border-[#2B1E6B] shadow-card">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-semibold border border-white/20 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>KNOWLEDGE HUB & REGULATORY INSIGHTS</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Resources, Guides & Regulatory Updates
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              Explore in-depth articles, statutory checklists, and educational breakdowns designed to help Indian business owners, founders, and borrowers navigate incorporation, taxation, and financing.
            </p>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6477]" />
              <input
                type="text"
                placeholder="Search articles & checklists..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-[#FFF9F1] border border-[#DFE4F1] rounded-full text-xs sm:text-sm text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-[#FFF9F1] p-1.5 rounded-full border border-[#DFE4F1] w-full sm:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat ? 'bg-[#FFB020] text-[#2B1E6B] font-bold shadow-xs' : 'text-[#5B6477] hover:text-[#2B1E6B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-[#DFE4F1] hover:border-[#2B1E6B]/30 hover:shadow-card transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#5B6477]">
                  <span className="font-bold text-[#E0603A] bg-[#FFF9F1] px-2.5 py-0.5 rounded-full border border-[#DFE4F1]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#2B1E6B]" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#2B1E6B] group-hover:text-[#E0603A] transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#5B6477] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-[#DFE4F1] flex items-center justify-between text-xs">
                <span className="text-[#5B6477] text-[11px] font-medium">
                  {post.publishedDate}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-[#2B1E6B] hover:text-[#E0603A] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
