export function AdvisoryGraphic() {
  return (
    <div
      className="advisory-graphic relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1d29]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 720 560" className="h-full w-full" role="presentation">
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".14" />
            <stop offset="1" stopColor="#8fb9c3" stopOpacity=".025" />
          </linearGradient>
          <linearGradient id="gold" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#a78c59" />
            <stop offset="1" stopColor="#e1cf9a" />
          </linearGradient>
          <radialGradient id="glow" cx=".7" cy=".3" r=".8">
            <stop offset="0" stopColor="#2d7580" stopOpacity=".28" />
            <stop offset="1" stopColor="#081722" stopOpacity="0" />
          </radialGradient>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="24" stdDeviation="24" floodOpacity=".28" />
          </filter>
        </defs>

        <rect width="720" height="560" fill="#081722" />
        <rect width="720" height="560" fill="url(#glow)" />

        <g opacity=".12">
          {Array.from({ length: 12 }).map((_, index) => (
            <line key={`v-${index}`} x1={index * 65} y1="0" x2={index * 65} y2="560" stroke="#d9e4e6" strokeWidth=".7" />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <line key={`h-${index}`} x1="0" y1={index * 62} x2="720" y2={index * 62} stroke="#d9e4e6" strokeWidth=".7" />
          ))}
        </g>

        <g filter="url(#shadow)">
          <path d="M156 457 L156 307 L253 251 L253 457 Z" fill="url(#panel)" stroke="#bed4d8" strokeOpacity=".22" />
          <path d="M270 457 L270 218 L377 156 L377 457 Z" fill="url(#panel)" stroke="#bed4d8" strokeOpacity=".27" />
          <path d="M397 457 L397 127 L518 57 L518 457 Z" fill="url(#panel)" stroke="#bed4d8" strokeOpacity=".34" />
          <path d="M539 457 L539 174 L632 120 L632 457 Z" fill="url(#panel)" stroke="#bed4d8" strokeOpacity=".24" />
        </g>

        <path
          d="M98 391 C185 366 239 337 301 290 C365 241 424 219 478 179 C524 145 565 100 625 72"
          fill="none"
          stroke="url(#gold)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="98" cy="391" r="5" fill="#c9b77f" />
        <circle cx="301" cy="290" r="5" fill="#c9b77f" />
        <circle cx="478" cy="179" r="5" fill="#c9b77f" />
        <circle cx="625" cy="72" r="6" fill="#e1cf9a" />

        <line x1="72" y1="457" x2="658" y2="457" stroke="#d6e0e2" strokeOpacity=".32" />
        <text x="72" y="500" fill="#9fb2b7" fontSize="12" letterSpacing="3">CLARITY</text>
        <text x="287" y="500" fill="#9fb2b7" fontSize="12" letterSpacing="3">CONTROL</text>
        <text x="521" y="500" fill="#d8c48c" fontSize="12" letterSpacing="3">GROWTH</text>
      </svg>
      <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
        Strategic finance
      </div>
    </div>
  );
}
