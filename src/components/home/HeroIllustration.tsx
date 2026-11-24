import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[500px] mx-auto aspect-[4/3] flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        {/* Soft pastel background shapes */}
        <ellipse cx="260" cy="350" rx="220" ry="25" fill="#EEF2F6" />
        <circle cx="450" cy="70" r="16" fill="#FDE68A" />
        <circle cx="70" cy="260" r="12" fill="#BAE6FD" />
        <circle cx="440" cy="320" r="8" fill="#BAE6FD" />

        {/* Large Plant on Right */}
        <path
          d="M440 330 C455 240, 480 180, 460 120 C435 180, 435 250, 440 330 Z"
          fill="#DCFCE7"
        />
        <path
          d="M440 330 C420 250, 395 190, 420 140 C430 200, 435 260, 440 330 Z"
          fill="#BBF7D0"
        />
        <path
          d="M445 330 C450 220, 440 170, 430 110 C420 170, 430 240, 445 330 Z"
          fill="#86EFAC"
          fillOpacity="0.7"
        />
        {/* Plant Pot */}
        <path
          d="M425 320 L455 320 L450 355 L430 355 Z"
          fill="#FEF08A"
        />

        {/* Central Display / Idea Board (Computer Window) */}
        <rect
          x="120"
          y="80"
          width="210"
          height="145"
          rx="12"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="3"
        />
        {/* Browser header line & dots */}
        <path d="M120 102 H330" stroke="#E2E8F0" strokeWidth="2" />
        <circle cx="135" cy="92" r="3" fill="#CBD5E1" />
        <circle cx="145" cy="92" r="3" fill="#CBD5E1" />
        <circle cx="155" cy="92" r="3" fill="#CBD5E1" />

        {/* Glowing Idea Bulb inside window */}
        <circle cx="225" cy="140" r="26" fill="#FEF08A" />
        <path
          d="M214 140 C214 133, 219 128, 225 128 C231 128, 236 133, 236 140 C236 145, 232 148, 231 151 L219 151 C218 148, 214 145, 214 140 Z"
          fill="#F59E0B"
        />
        <rect x="220" y="152" width="10" height="4" rx="1.5" fill="#D97706" />

        {/* Organization / Process Flow Blocks below the bulb */}
        <path d="M225 158 V168" stroke="#94A3B8" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M175 168 H275" stroke="#94A3B8" strokeWidth="2" />
        <path d="M175 168 V175" stroke="#94A3B8" strokeWidth="2" />
        <path d="M225 168 V175" stroke="#94A3B8" strokeWidth="2" />
        <path d="M275 168 V175" stroke="#94A3B8" strokeWidth="2" />

        <rect x="165" y="175" width="20" height="15" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
        <rect x="215" y="175" width="20" height="15" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
        <rect x="265" y="175" width="20" height="15" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Soft Pastel Box / Stool for Person */}
        <rect
          x="320"
          y="275"
          width="75"
          height="65"
          rx="12"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="3"
        />

        {/* Person (Seed Fund Scheme Style) */}
        {/* Head */}
        <circle cx="348" cy="188" r="18" fill="#FBCFE8" />
        {/* Hair */}
        <path
          d="M333 186 C333 174, 344 168, 356 172 C364 175, 368 184, 365 194 C360 188, 350 184, 333 186 Z"
          fill="#475569"
        />
        {/* Torso / Clothes (Pastel Purple / Slate Blue) */}
        <path
          d="M332 208 C332 204, 340 202, 348 202 C356 202, 364 204, 364 208 L360 262 H336 Z"
          fill="#818CF8"
        />
        {/* Legs / Coral Trousers sitting down */}
        <path
          d="M336 262 H358 L366 315 L328 315 L324 285 Z"
          fill="#FCA5A5"
        />
        <path
          d="M328 315 L310 338 H338 L348 315 Z"
          fill="#F87171"
        />
        <path
          d="M352 315 L346 342 H374 L372 315 Z"
          fill="#EF4444"
        />

        {/* Arms holding laptop */}
        <path
          d="M344 220 L315 240 L285 242"
          stroke="#FBCFE8"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Laptop on lap */}
        {/* Screen */}
        <path
          d="M272 205 L272 242 L310 242"
          stroke="#64748B"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Keyboard base */}
        <path
          d="M265 243 H315"
          stroke="#94A3B8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Soft briefcase / documents bag near stool */}
        <rect
          x="260"
          y="310"
          width="50"
          height="32"
          rx="6"
          fill="#E2E8F0"
        />
        <path d="M275 310 V304 C275 301, 278 299, 281 299 H289 C292 299, 295 301, 295 304 V310" stroke="#94A3B8" strokeWidth="2.5" />
      </svg>
    </div>
  );
};
