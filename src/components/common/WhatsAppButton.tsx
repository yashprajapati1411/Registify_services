import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  customMessage?: string;
  phoneNumber?: string; // Configurable: e.g. 919725991607
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  phoneNumber = '919725991607'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const defaultGreeting = customMessage || 'Hello Registify Services, I am looking for guidance regarding your business and financial services.';

  const handleOpenWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text.trim() || defaultGreeting);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  const quickPrompts = [
    'Enquire about Private Limited Registration',
    'Explore Business Loan Options',
    'Get ISO or MSME Certification Guidance',
    'Help with GST Registration & Compliance'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1B1247] text-white p-4 flex items-center justify-between border-b border-[#2B1E6B]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#FFB020] flex items-center justify-center font-bold text-[#2B1E6B] shadow-xs">
                  RS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#1B1247] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">Registify WhatsApp Desk</h4>
                <p className="text-[11px] text-[#FFB020] flex items-center gap-1 font-sans">
                  Online • Typically replies in 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-xs text-slate-700 border border-slate-100">
              <p className="font-medium text-[#142B49] mb-1">Namaste! 🙏</p>
              <p>Welcome to Registify Services. How can our consultation desk assist your business or loan requirement today?</p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Quick Enquiries:</p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(`Hello Registify Services, I would like to ${prompt.toLowerCase()}. Please guide me.`)}
                  className="w-full text-left text-xs bg-white hover:bg-teal-50 hover:text-teal-800 text-slate-700 p-2.5 rounded-lg border border-slate-200 hover:border-teal-300 transition-all flex items-center justify-between group"
                >
                  <span>{prompt}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1.5 focus-within:border-teal-500">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOpenWhatsApp(userQuery || defaultGreeting);
                  }}
                  className="w-full px-2 py-1 text-xs text-slate-800 focus:outline-none bg-transparent"
                />
                <button
                  onClick={() => handleOpenWhatsApp(userQuery || defaultGreeting)}
                  className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-[10px] text-center text-slate-400">
              Official WhatsApp enquiry channel • No spam
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Registify Services on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="hidden sm:inline-block font-semibold text-sm">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
