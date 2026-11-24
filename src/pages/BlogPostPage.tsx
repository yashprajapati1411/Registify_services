import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, Calendar, User, ArrowLeft, ArrowRight, 
  MessageCircle, Share2, Building, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogData';

interface BlogPostPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  // Simple markdown renderer for headers, tables, bold, and lists
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let tableBuffer: string[] = [];

    const flushTable = (key: number) => {
      if (tableBuffer.length === 0) return null;
      const rows = tableBuffer.map(r => r.split('|').filter(c => c.trim() !== ''));
      const header = rows[0];
      const dataRows = rows.slice(2);

      const el = (
        <div key={`table-${key}`} className="my-6 overflow-x-auto">
          <table className="min-w-full text-xs text-left border border-[#DFE4F1] rounded-xl overflow-hidden">
            <thead className="bg-[#1B1247] text-white">
              <tr>
                {header.map((th, thIdx) => (
                  <th key={thIdx} className="px-4 py-3 font-semibold font-serif">
                    {th.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DFE4F1] bg-white">
              {dataRows.map((tr, trIdx) => (
                <tr key={trIdx} className="hover:bg-[#FFF9F1]">
                  {tr.map((td, tdIdx) => (
                    <td key={tdIdx} className="px-4 py-2.5 text-[#1F2A44]">
                      {td.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
      return el;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|')) {
        tableBuffer.push(trimmed);
        return;
      } else if (tableBuffer.length > 0) {
        elements.push(flushTable(index));
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-serif font-bold text-[#2B1E6B] mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-base font-serif font-bold text-[#2B1E6B] mt-5 mb-2">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        elements.push(
          <li key={index} className="ml-5 list-disc text-xs sm:text-sm text-[#5B6477] leading-relaxed my-1">
            {trimmed.substring(2)}
          </li>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <li key={index} className="ml-5 list-decimal text-xs sm:text-sm text-[#1F2A44] leading-relaxed my-1 font-medium">
            {trimmed.replace(/^\d+\.\s/, '')}
          </li>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={index} className="my-6 border-[#DFE4F1]" />);
      } else if (trimmed.length > 0) {
        elements.push(
          <p key={index} className="text-xs sm:text-sm text-[#1F2A44] leading-relaxed my-3 font-sans">
            {trimmed}
          </p>
        );
      }
    });

    if (tableBuffer.length > 0) {
      elements.push(flushTable(9999));
    }

    return elements;
  };

  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Top */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B1E6B] hover:text-[#E0603A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <span className="text-xs text-[#5B6477] font-medium">
            Published in {post.category}
          </span>
        </div>

        {/* Article Header Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B6477]">
            <span className="font-bold text-[#E0603A] bg-[#FFF9F1] px-3 py-1 rounded-full border border-[#DFE4F1]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#2B1E6B]" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2B1E6B]" />
              {post.publishedDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="p-4 rounded-xl bg-[#FFF9F1] border border-[#DFE4F1] text-xs sm:text-sm text-[#5B6477] italic font-sans">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          <div className="pt-4 border-t border-[#DFE4F1] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FFB020] text-[#2B1E6B] flex items-center justify-center font-bold text-xs border border-[#FFB020]">
                RS
              </div>
              <div>
                <span className="text-xs font-bold text-[#1F2A44] block font-serif">Registify Editorial Desk</span>
                <span className="text-[10px] text-[#5B6477]">Verified Compliance Review</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation('business', post.title)}
              className="px-5 py-2 rounded-full bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all border border-[#FFB020]"
            >
              Ask an Expert
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card">
          <div className="prose max-w-none">
            {renderFormattedContent(post.content)}
          </div>

          {/* Statutory Advice Disclaimer */}
          <div className="mt-12 p-6 rounded-xl bg-[#FFF9F1] border border-[#DFE4F1] text-xs text-[#5B6477] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#2B1E6B] font-serif">
              <ShieldCheck className="w-4 h-4 text-[#2B1E6B]" />
              <span>Editorial Advisory Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              The regulatory insights and procedural workflows outlined in this article are intended strictly for educational awareness. Statutory fees, MCA notification forms, and bank underwriting policies change periodically. Consult with our qualified advisory specialists before executing official filings.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-6 pt-4">
          <h3 className="font-serif font-bold text-xl text-[#2B1E6B]">
            More Regulatory Guides & Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map(p => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="bg-white rounded-xl p-5 border border-[#DFE4F1] hover:border-[#2B1E6B] hover:shadow-card transition-all group block space-y-2"
              >
                <span className="text-[10px] font-bold text-[#E0603A] uppercase tracking-wider block">
                  {p.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-[#2B1E6B] group-hover:text-[#E0603A] transition-colors line-clamp-2">
                  {p.title}
                </h4>
                <p className="text-xs text-[#5B6477] line-clamp-2 leading-relaxed">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
