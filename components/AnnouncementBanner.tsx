
import React from 'react';

interface AnnouncementBannerProps {
  message: string;
  isDarkMode: boolean;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ message, isDarkMode }) => {
  if (!message) return null;

  return (
    <div className={`w-full overflow-hidden h-10 flex items-center border-b ${
      isDarkMode ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-600 text-white'
    }`}>
      <div className="whitespace-nowrap flex animate-[marquee_20s_linear_infinite]">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[11px] font-black uppercase tracking-widest px-10 flex items-center">
            <span className="mr-3">🔥</span> {message} <span className="ml-10 opacity-30">|</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
      `}</style>
    </div>
  );
};
