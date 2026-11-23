import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={companyProfile.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with JP Constructions on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>

        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Direct WhatsApp
        </span>
      </a>
    </aside>
  );
};
