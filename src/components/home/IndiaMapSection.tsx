import React, { useState, useEffect, useRef } from 'react';

interface StateStat {
  to: number;
  suf: string;
  l: string;
}

interface StateItem {
  id: string;
  n: string;
  s: 'L' | 'R';
  y: number;
  pri?: boolean;
  px: number; // percentage X on map image (0-100)
  py: number; // percentage Y on map image (0-100)
  pinX: number; // calculated pixel X on 1440px canvas
  pinY: number; // calculated pixel Y on 1440px canvas
  stats: StateStat[];
}

// 1440px canvas dimensions & full-bleed map placement
const CANVAS_W = 1440;
const CANVAS_H = 1130;
// Full width of canvas: 1440px (spans edge-to-edge, eliminating any left/right empty margin)
const MAP_W = 1440;
const MAP_H = 1052; // 1440 / (790/577) aspect ratio
const MAP_X = 0;
const MAP_Y = 60;

// Geographically calibrated state coordinates on vertical India map
// 4 states on LEFT, 4 states on RIGHT
// Balanced Y coordinates with generous margins (>= 58px between Gujarat HQ and Maharashtra)
const STATES: StateItem[] = [
  // 4 States on LEFT
  {
    id: 'rajasthan',
    n: 'Rajasthan',
    s: 'L',
    y: 290,
    px: 39.9,
    py: 36.4,
    pinX: Math.round(MAP_X + 0.3987 * MAP_W), // 574px
    pinY: Math.round(MAP_Y + 0.3639 * MAP_H), // 443px
    stats: [{ to: 31, suf: '+', l: 'Startups registered' }],
  },
  {
    id: 'gujarat',
    n: 'Gujarat',
    s: 'L',
    y: 432,
    pri: true,
    px: 34.8,
    py: 50.3,
    pinX: Math.round(MAP_X + 0.3481 * MAP_W), // 501px
    pinY: Math.round(MAP_Y + 0.5026 * MAP_H), // 589px
    stats: [
      { to: 3, suf: 'Cr+', l: 'Funding secured' },
      { to: 120, suf: '+', l: 'Startup registrations complete' },
    ],
  },
  {
    id: 'maharashtra',
    n: 'Maharashtra',
    s: 'L',
    y: 728,
    px: 43.0,
    py: 59.8,
    pinX: Math.round(MAP_X + 0.4304 * MAP_W), // 620px
    pinY: Math.round(MAP_Y + 0.5979 * MAP_H), // 689px
    stats: [{ to: 64, suf: '+', l: 'Startups registered' }],
  },
  {
    id: 'karnataka',
    n: 'Karnataka',
    s: 'L',
    y: 870,
    px: 44.3,
    py: 74.5,
    pinX: Math.round(MAP_X + 0.4430 * MAP_W), // 638px
    pinY: Math.round(MAP_Y + 0.7452 * MAP_H), // 844px
    stats: [{ to: 52, suf: '+', l: 'Startups registered' }],
  },
  // 4 States on RIGHT
  {
    id: 'delhi',
    n: 'Delhi NCR',
    s: 'R',
    y: 290,
    px: 44.9,
    py: 32.1,
    pinX: Math.round(MAP_X + 0.4494 * MAP_W), // 647px
    pinY: Math.round(MAP_Y + 0.3206 * MAP_H), // 397px
    stats: [{ to: 48, suf: '+', l: 'Startups registered' }],
  },
  {
    id: 'westbengal',
    n: 'West Bengal',
    s: 'R',
    y: 432,
    px: 63.9,
    py: 48.5,
    pinX: Math.round(MAP_X + 0.6392 * MAP_W), // 920px
    pinY: Math.round(MAP_Y + 0.4853 * MAP_H), // 571px
    stats: [{ to: 19, suf: '+', l: 'Startups registered' }],
  },
  {
    id: 'telangana',
    n: 'Telangana',
    s: 'R',
    y: 580,
    px: 50.6,
    py: 64.1,
    pinX: Math.round(MAP_X + 0.5063 * MAP_W), // 729px
    pinY: Math.round(MAP_Y + 0.6412 * MAP_H), // 735px
    stats: [{ to: 33, suf: '+', l: 'Startups registered' }],
  },
  {
    id: 'tamilnadu',
    n: 'Tamil Nadu',
    s: 'R',
    y: 728,
    px: 48.1,
    py: 84.1,
    pinX: Math.round(MAP_X + 0.4810 * MAP_W), // 693px
    pinY: Math.round(MAP_Y + 0.8406 * MAP_H), // 944px
    stats: [{ to: 39, suf: '+', l: 'Startups registered' }],
  },
];

export const IndiaMapSection: React.FC = () => {
  const [activeState, setActiveState] = useState<string>('gujarat');
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});
  const [numbers, setNumbers] = useState<{ [key: string]: number }>({});
  const [stripNumbers, setStripNumbers] = useState({ years: 0, projects: 0, funds: 0 });
  const [inView, setInView] = useState(false);
  const [scale, setScale] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

  // Dynamic responsive scaling for desktop viewports:
  // On screens between 1024px and 1440px (common laptops at 100% zoom e.g. 1280px, 1366px),
  // scales the entire 1440px canvas so 0% of content goes out of the screen.
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024 && w < 1440) {
        setScale(w / CANVAS_W);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger scroll animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [inView]);

  // Run exact scroll-driven pop-out sequence
  useEffect(() => {
    if (!inView) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Staggered pop out of each state card and pin
    STATES.forEach((d, i) => {
      const delay = prefersReduced ? 0 : 350 + i * 280;
      setTimeout(() => {
        setRevealed((prev) => ({ ...prev, [d.id]: true }));
        setActiveState(d.id);

        // Count up numbers for this state
        const duration = 1800;
        const t0 = performance.now();

        const countAnim = (t: number) => {
          const progress = Math.min(1, (t - t0) / duration);
          const p = prefersReduced ? 1 : easeOutCubic(progress);

          setNumbers((prev) => {
            const next = { ...prev };
            d.stats.forEach((st, sIdx) => {
              next[`${d.id}-${sIdx}`] = Math.round(st.to * p);
            });
            return next;
          });

          if (progress < 1 && !prefersReduced) {
            requestAnimationFrame(countAnim);
          }
        };
        requestAnimationFrame(countAnim);
      }, delay);
    });

    // Reset default active state back to Gujarat headquarters after full sequence
    const endDelay = prefersReduced ? 0 : 350 + STATES.length * 280 + 400;
    setTimeout(() => {
      setActiveState('gujarat');
    }, endDelay);

    // Animate bottom credibility strip numbers
    const stripDelay = prefersReduced ? 0 : 600;
    setTimeout(() => {
      const duration = 2200;
      const t0 = performance.now();

      const countStrip = (t: number) => {
        const progress = Math.min(1, (t - t0) / duration);
        const p = prefersReduced ? 1 : easeOutCubic(progress);

        setStripNumbers({
          years: Math.round(6 * p),
          projects: Math.round(10 * p),
          funds: Math.round(30 * p),
        });

        if (progress < 1 && !prefersReduced) {
          requestAnimationFrame(countStrip);
        }
      };
      requestAnimationFrame(countStrip);
    }, stripDelay);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="pres"
      className="relative bg-[#2B1E6B] text-white overflow-hidden select-none min-h-[920px]"
      style={{
        height: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${CANVAS_H * scale}px` : undefined,
      }}
    >
      {/* DESKTOP RESPONSIVE CONTAINER WITH MATHEMATICALLY-ACCURATE PROPORTIONAL SCALING */}
      <div
        className="hidden lg:block relative z-20 mx-auto overflow-hidden"
        style={{
          width: `${CANVAS_W * scale}px`,
          height: `${CANVAS_H * scale}px`,
          maxWidth: '100vw',
        }}
      >
        <div
          style={{
            width: `${CANVAS_W}px`,
            height: `${CANVAS_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className="absolute left-0 top-0"
        >
          {/* Main Glowing Blue India Satellite Map (Strictly focused on India; zero blue haze on card flanks) */}
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: `${MAP_X}px`,
              top: `${MAP_Y}px`,
              width: `${MAP_W}px`,
              height: `${MAP_H}px`,
              backgroundImage: 'url(/images/map_bg.jpg)',
              backgroundPosition: 'center',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'screen',
              opacity: 0.95,
              WebkitMaskImage:
                'radial-gradient(ellipse 460px 480px at 50% 50%, #000 45%, rgba(0,0,0,0.6) 68%, transparent 88%)',
              maskImage:
                'radial-gradient(ellipse 460px 480px at 50% 50%, #000 45%, rgba(0,0,0,0.6) 68%, transparent 88%)',
            }}
          />

          {/* Clean Royal Ink Lateral Backdrops: Keeps left and right card flanks pure #2B1E6B with zero blue haze */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[420px] pointer-events-none z-15"
            style={{
              background: 'linear-gradient(90deg, #2B1E6B 0%, #2B1E6B 75%, rgba(43,30,107,0) 100%)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-[420px] pointer-events-none z-15"
            style={{
              background: 'linear-gradient(270deg, #2B1E6B 0%, #2B1E6B 75%, rgba(43,30,107,0) 100%)',
            }}
          />

          {/* Section Header: "Our reach - REGISTIFY ACROSS INDIA" */}
          <div className="absolute inset-x-0 top-[90px] text-center z-20 px-4">
            <div className="font-sans font-bold text-xl sm:text-2xl text-[#CFC6FF]">
              Our reach
            </div>
            <h2 className="font-condensed font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[78px] text-white uppercase leading-none tracking-wide mt-1">
              Registify across India
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-[19px] text-[#DCD6FB] max-w-2xl mx-auto font-sans">
              Real numbers from the states we serve. Hover a pin or box for details.
            </p>
          </div>

          {/* Animated Flowing SVG Connector Lines */}
          <svg
            className={`absolute left-0 top-0 w-[1440px] h-[1130px] pointer-events-none z-20 transition-opacity duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {STATES.map((d) => {
              const h = d.pri ? 238 : 114;
              const bx = d.s === 'L' ? 50 : 1090;
              const ex = d.s === 'L' ? bx + (d.pri ? 348 : 300) : bx;
              const ey = d.y + h / 2;
              const isVisible = revealed[d.id];
              const isActive = activeState === d.id;

              // Quadratic bezier curve from card edge into the exact map pin
              const midX = (ex + d.pinX) / 2;
              const archY = Math.min(ey, d.pinY) - 45;

              return (
                <g key={`curve-${d.id}`} className="transition-all duration-300">
                  {/* Curved connecting line with flowing animated dashes */}
                  <path
                    d={`M ${ex} ${ey} Q ${midX} ${archY} ${d.pinX} ${d.pinY}`}
                    fill="none"
                    stroke="#FFB020"
                    strokeWidth={isActive ? '3.5' : '2.5'}
                    strokeDasharray="3 7"
                    className="line-flow"
                    opacity={isVisible ? (isActive ? 1 : 0.75) : 0}
                    style={{ transition: 'opacity 0.6s' }}
                  />

                  {/* Circle terminal at card edge */}
                  <circle
                    cx={ex}
                    cy={ey}
                    r={isActive ? 6 : 5}
                    fill="#FFF9F1"
                    stroke="#FFB020"
                    strokeWidth="2"
                    opacity={isVisible ? 1 : 0}
                    style={{ transition: 'opacity 0.6s' }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Map Pins Layer */}
          <div className="absolute inset-0 z-30 pointer-events-auto">
            {STATES.map((d) => {
              const isVisible = revealed[d.id];
              const isActive = activeState === d.id;

              return (
                <div
                  key={`pin-${d.id}`}
                  style={{ left: `${d.pinX}px`, top: `${d.pinY}px` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                  onMouseEnter={() => setActiveState(d.id)}
                  onClick={() => setActiveState(d.id)}
                >
                  {/* Glowing radial beacon aura around Gujarat HQ or active pin */}
                  {(d.pri || isActive) && (
                    <div
                      className="absolute -left-[95px] -top-[95px] w-[190px] h-[190px] rounded-full pointer-events-none glow-beacon"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(255,176,32,.55), rgba(255,176,32,0) 68%)',
                        mixBlendMode: 'screen',
                      }}
                    />
                  )}

                  {/* Pin Circle Marker with Spring Pop-Out Animation */}
                  <div
                    className={`rounded-full bg-[#FFB020] border-[3px] border-[#2B1E6B] box-content pop-out-spring ${
                      d.pri
                        ? 'w-5 h-5 -m-[10px] pin-pulse'
                        : 'w-3.5 h-3.5 -m-[7px]'
                    } ${
                      isVisible
                        ? 'opacity-100 scale-100 pin-pulse'
                        : 'opacity-0 scale-0 pointer-events-none'
                    } ${isActive ? 'scale-125 ring-2 ring-[#FFF9F1]' : ''}`}
                  />
                </div>
              );
            })}
          </div>

          {/* 8 State Information Cards: 4 on Left, 4 on Right */}
          <div className="absolute inset-0 z-30 pointer-events-auto">
            {STATES.map((d) => {
              const bx = d.s === 'L' ? 50 : 1090;
              const h = d.pri ? 238 : 114;
              const isVisible = revealed[d.id];
              const isActive = activeState === d.id;

              return (
                <div
                  key={`card-${d.id}`}
                  style={{
                    left: `${bx}px`,
                    top: `${d.y}px`,
                    minHeight: `${h}px`,
                  }}
                  onMouseEnter={() => setActiveState(d.id)}
                  onClick={() => setActiveState(d.id)}
                  className={`absolute rounded-[18px] cursor-pointer pop-out-spring ${
                    d.pri
                      ? 'w-[348px] bg-[#1B1247] border-[3px] border-[#FFB020] p-[18px_24px] shadow-[0_18px_44px_rgba(255,176,32,.35),0_18px_40px_rgba(10,6,50,.7)]'
                      : 'w-[300px] bg-[#FFF9F1] border-t-[5px] border-t-[#FFB020] border-x border-b border-white/30 p-[14px_22px] shadow-[0_18px_40px_rgba(10,6,50,.55)] text-[#2B1E6B]'
                  } ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
                  } ${isActive ? 'ring-2 ring-[#FFB020] scale-[1.03]' : ''}`}
                >
                  {/* Headquarters Tag */}
                  {d.pri && (
                    <div className="font-sans font-bold text-xs tracking-[1.5px] text-[#CFC6FF] mb-1.5 uppercase flex items-center justify-between">
                      <span>HEADQUARTERS STATE</span>
                      <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-ping"></span>
                    </div>
                  )}

                  {/* State Name */}
                  <div
                    className={`font-condensed font-bold uppercase tracking-[0.5px] ${
                      d.pri ? 'text-[32px] text-white leading-tight' : 'text-[26px] text-[#2B1E6B]'
                    }`}
                  >
                    {d.pri ? '● ' : ''}
                    {d.n}
                  </div>

                  {/* Animated Number Statistics */}
                  <div className="mt-1 space-y-1">
                    {d.stats.map((st, idx) => (
                      <div key={idx} className="flex items-baseline gap-2.5">
                        <span
                          className={`font-condensed font-medium tabular-nums ${
                            d.pri
                              ? 'text-[58px] text-[#FFB020] leading-[1.05] min-w-[98px]'
                              : 'text-[34px] text-[#2B1E6B] min-w-[62px]'
                          }`}
                        >
                          {numbers[`${d.id}-${idx}`] ?? st.to}
                          {st.suf}
                        </span>
                        <span
                          className={`font-sans font-semibold ${
                            d.pri ? 'text-[#E9E4FF] text-[14px] leading-snug' : 'text-[#6B6590] text-[14px]'
                          }`}
                        >
                          {st.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP FLOATING CREDIBILITY STATS STRIP (Centered with Zero Overlap) */}
          <div
            className={`flex absolute left-1/2 bottom-[28px] -translate-x-1/2 w-[700px] z-40 bg-[#FFF9F1] rounded-[20px] p-[20px_16px] shadow-[0_20px_50px_rgba(10,6,50,.45)] border border-[#DFE4F1] justify-around items-center text-center pop-out-spring ${
              inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            {/* Stat 1: Years of experience */}
            <div className="flex-1 border-r border-[#DFE4F1]/80 pr-2">
              <strong className="block font-condensed font-medium text-[54px] leading-none text-[#E58E00] tabular-nums">
                {stripNumbers.years}+
              </strong>
              <small className="block font-sans font-bold text-[13px] tracking-[1px] uppercase text-[#6B6590] mt-1.5">
                Years of experience
              </small>
            </div>

            {/* Stat 2: Projects delivered */}
            <div className="flex-1 border-r border-[#DFE4F1]/80 px-2">
              <strong className="block font-condensed font-medium text-[54px] leading-none text-[#2B1E6B] tabular-nums">
                {stripNumbers.projects}k+
              </strong>
              <small className="block font-sans font-bold text-[13px] tracking-[1px] uppercase text-[#6B6590] mt-1.5">
                Projects delivered
              </small>
            </div>

            {/* Stat 3: Funds secured */}
            <div className="flex-1 pl-2">
              <strong className="block font-condensed font-medium text-[54px] leading-none text-[#E58E00] tabular-nums">
                {stripNumbers.funds}Cr+
              </strong>
              <small className="block font-sans font-bold text-[13px] tracking-[1px] uppercase text-[#6B6590] mt-1.5">
                Funds secured
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* TABLET & MOBILE RESPONSIVE ADAPTATION (< 1024px) */}
      <div className="lg:hidden relative max-w-2xl mx-auto px-4 pt-16 mt-4 pb-12 z-20 flex flex-col items-center">
        {/* Section Header on Mobile */}
        <div className="text-center mb-6">
          <div className="font-sans font-bold text-lg text-[#CFC6FF]">
            Our reach
          </div>
          <h2 className="font-condensed font-normal text-4xl sm:text-5xl text-white uppercase leading-none tracking-wide mt-1">
            Registify across India
          </h2>
          <p className="mt-2 text-sm text-[#DCD6FB] max-w-md mx-auto font-sans">
            Real numbers from the states we serve. Tap a pin or state chip for details.
          </p>
        </div>

        {/* Mobile Map Card */}
        <div className="relative w-full h-[360px] sm:h-[460px] rounded-3xl overflow-hidden bg-[#1B1247]/90 border border-white/20 p-4 mb-6">
          <img
            src="/images/map_bg.jpg"
            alt="India Satellite Map"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain rounded-2xl"
            style={{ mixBlendMode: 'screen', opacity: 0.95 }}
          />

          {/* Interactive Pins on Mobile positioned precisely by percentage coordinates */}
          {STATES.map((d) => {
            const isActive = activeState === d.id;

            return (
              <button
                type="button"
                key={`mob-pin-${d.id}`}
                style={{ left: `${d.px}%`, top: `${d.py}%` }}
                onClick={() => setActiveState(d.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 p-2 z-20 focus:outline-none"
                aria-label={d.n}
              >
                <div
                  className={`rounded-full bg-[#FFB020] border-2 border-[#2B1E6B] transition-transform ${
                    d.pri
                      ? 'w-5 h-5 pin-pulse scale-110'
                      : isActive
                      ? 'w-4 h-4 scale-125 ring-2 ring-white'
                      : 'w-3 h-3'
                  }`}
                />
              </button>
            );
          })}

          <div className="absolute bottom-3 left-4 right-4 bg-[#1B1247]/95 backdrop-blur-md rounded-xl p-2.5 text-center text-xs text-white border border-white/20">
            <span className="text-[#FFB020] font-bold">Selected: </span>
            <span className="font-semibold uppercase">
              {STATES.find((s) => s.id === activeState)?.n}
            </span>
            {' • Tap pins or chips below'}
          </div>
        </div>

        {/* State Filter Chips */}
        <div className="w-full flex items-center gap-2 overflow-x-auto py-2 px-1 mb-4 no-scrollbar justify-start sm:justify-center">
          {STATES.map((d) => (
            <button
              type="button"
              key={`chip-${d.id}`}
              onClick={() => setActiveState(d.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-condensed font-bold text-xs uppercase tracking-wider transition-all ${
                activeState === d.id
                  ? 'bg-[#FFB020] text-[#1B1247] shadow-md scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {d.pri ? '★ ' : ''}
              {d.n}
            </button>
          ))}
        </div>

        {/* Active State Detail Card on Mobile */}
        <div className="w-full max-w-md">
          {(() => {
            const current = STATES.find((s) => s.id === activeState) || STATES[1];
            const isPri = current.pri;
            return (
              <div
                className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 ${
                  isPri
                    ? 'bg-[#1B1247] border-[3px] border-[#FFB020] text-white'
                    : 'bg-[#FFF9F1] border-t-[5px] border-t-[#FFB020] text-[#2C2850]'
                }`}
              >
                {isPri && (
                  <div className="font-sans font-bold text-xs tracking-widest text-[#FFB020] mb-2 uppercase">
                    HEADQUARTERS STATE • GUJARAT
                  </div>
                )}
                <h3
                  className={`font-condensed font-bold text-3xl uppercase tracking-wide ${
                    isPri ? 'text-white' : 'text-[#2B1E6B]'
                  }`}
                >
                  {isPri ? '● ' : ''}
                  {current.n}
                </h3>

                <div className="mt-3 space-y-2">
                  {current.stats.map((st, idx) => (
                    <div key={idx} className="flex items-baseline gap-3">
                      <span
                        className={`font-condensed font-medium text-4xl tabular-nums ${
                          isPri ? 'text-[#FFB020]' : 'text-[#2B1E6B]'
                        }`}
                      >
                        {numbers[`${current.id}-${idx}`] ?? st.to}
                        {st.suf}
                      </span>
                      <span
                        className={`font-sans font-semibold text-sm ${
                          isPri ? 'text-[#E9E4FF]' : 'text-[#6B6590]'
                        }`}
                      >
                        {st.l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* MOBILE NATURAL-FLOW CREDIBILITY STRIP */}
        <div className="w-full max-w-md mt-6 bg-[#FFF9F1] rounded-2xl p-4 shadow-xl border border-[#DFE4F1] flex justify-around items-center text-center">
          {/* Stat 1: Years of experience */}
          <div className="flex-1 border-r border-[#DFE4F1]/80 pr-1.5">
            <strong className="block font-condensed font-medium text-3xl leading-none text-[#E58E00] tabular-nums">
              {stripNumbers.years}+
            </strong>
            <small className="block font-sans font-bold text-[10px] tracking-[0.5px] uppercase text-[#6B6590] mt-1">
              Years of experience
            </small>
          </div>

          {/* Stat 2: Projects delivered */}
          <div className="flex-1 border-r border-[#DFE4F1]/80 px-1.5">
            <strong className="block font-condensed font-medium text-3xl leading-none text-[#2B1E6B] tabular-nums">
              {stripNumbers.projects}k+
            </strong>
            <small className="block font-sans font-bold text-[10px] tracking-[0.5px] uppercase text-[#6B6590] mt-1">
              Projects delivered
            </small>
          </div>

          {/* Stat 3: Funds secured */}
          <div className="flex-1 pl-1.5">
            <strong className="block font-condensed font-medium text-3xl leading-none text-[#E58E00] tabular-nums">
              {stripNumbers.funds}Cr+
            </strong>
            <small className="block font-sans font-bold text-[10px] tracking-[0.5px] uppercase text-[#6B6590] mt-1">
              Funds secured
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
