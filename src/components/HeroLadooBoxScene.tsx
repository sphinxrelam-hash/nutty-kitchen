import React from 'react';

export default function HeroLadooBoxScene() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] max-w-[620px] mx-auto select-none">
      {/* Outer natural daylight scene container */}
      <div className="relative w-full h-full rounded-sm overflow-hidden bg-[#FAF6EE] shadow-sm">
        
        {/* Soft, out-of-focus morning window daylight across textured linen */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 15%, rgba(255, 255, 252, 0.95) 0%, rgba(249, 244, 235, 0.85) 45%, rgba(239, 231, 218, 0.9) 100%)',
          }}
        />

        {/* Ultra-soft linen weave texture */}
        <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-multiply pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <filter id="soft-linen">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.88   0 0 0 0 0.83   0 0 0 0 0.75  0 0 0 0.45 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#soft-linen)" />
        </svg>

        {/* Soft, gentle morning window shadow cast (out-of-focus depth of field) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(125deg, rgba(255,255,255,0.7) 0%, rgba(240,230,215,0) 40%, rgba(195,180,160,0.18) 100%)',
          }}
        />

        {/* Close-Up Photographic Mockup Vector Scene */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
          <svg
            viewBox="0 0 700 560"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Very soft, diffused natural box shadow on linen */}
              <filter id="natural-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
                <feOffset dx="14" dy="22" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.14" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Ladoo natural spherical daylight gradient */}
              <radialGradient id="ladoo-natural-gold" cx="32%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#FFF4D0" />
                <stop offset="28%" stopColor="#F5CD72" />
                <stop offset="68%" stopColor="#CA9234" />
                <stop offset="92%" stopColor="#9C6618" />
                <stop offset="100%" stopColor="#75480D" />
              </radialGradient>

              {/* Minimal thin gold edge gradient */}
              <linearGradient id="thin-gold-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5E4B5" />
                <stop offset="40%" stopColor="#D8B868" />
                <stop offset="80%" stopColor="#B89344" />
                <stop offset="100%" stopColor="#96722C" />
              </linearGradient>

              {/* Premium minimalist ivory paper cardstock */}
              <linearGradient id="minimal-ivory-box" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="55%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#F3EDE3" />
              </linearGradient>

              {/* Delicate cup paper rim */}
              <linearGradient id="inner-cup-cream" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCF9F3" />
                <stop offset="100%" stopColor="#EFE6D6" />
              </linearGradient>
            </defs>

            {/* Out-of-focus subtle linen fold in the background */}
            <path
              d="M 60 140 Q 320 165 640 130"
              stroke="#E8DECD"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              fill="none"
            />
            <path
              d="M 40 430 Q 350 455 660 420"
              stroke="#DED2BD"
              strokeWidth="2"
              strokeOpacity="0.35"
              fill="none"
            />

            {/* Simple, Minimalist Ivory Paper Box with Fine Gold Edge Detail */}
            <g filter="url(#natural-soft-shadow)">
              {/* Outer ivory box body */}
              <rect
                x="150"
                y="110"
                width="400"
                height="340"
                rx="6"
                fill="url(#minimal-ivory-box)"
                stroke="#EAE1D2"
                strokeWidth="1"
              />

              {/* Delicate hairline gold edge detail */}
              <rect
                x="153"
                y="113"
                width="394"
                height="334"
                rx="4"
                fill="none"
                stroke="url(#thin-gold-rim)"
                strokeWidth="1.2"
                strokeOpacity="0.9"
              />

              {/* Inner recessed tray in soft warm ecru paper */}
              <rect
                x="166"
                y="126"
                width="368"
                height="308"
                rx="3"
                fill="#F7F2E8"
                stroke="#E5DCcb"
                strokeWidth="0.8"
              />

              {/* Minimal interior grid divider in hairline gold */}
              <line x1="288" y1="126" x2="288" y2="434" stroke="url(#thin-gold-rim)" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="412" y1="126" x2="412" y2="434" stroke="url(#thin-gold-rim)" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="166" y1="228" x2="534" y2="228" stroke="url(#thin-gold-rim)" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="166" y1="332" x2="534" y2="332" stroke="url(#thin-gold-rim)" strokeWidth="0.75" strokeOpacity="0.6" />

              {/* Perfectly round, natural premium ladoos (3x3 grid) */}
              {[
                { cx: 227, cy: 177 },
                { cx: 350, cy: 177 },
                { cx: 473, cy: 177 },
                { cx: 227, cy: 280 },
                { cx: 350, cy: 280 },
                { cx: 473, cy: 280 },
                { cx: 227, cy: 383 },
                { cx: 350, cy: 383 },
                { cx: 473, cy: 383 },
              ].map((slot, idx) => (
                <g key={idx}>
                  {/* Subtle soft shadow beneath each round ladoo */}
                  <ellipse
                    cx={slot.cx}
                    cy={slot.cy + 16}
                    rx="38"
                    ry="22"
                    fill="#1F1811"
                    fillOpacity="0.14"
                  />

                  {/* Clean unadorned ivory paper cup rim */}
                  <ellipse
                    cx={slot.cx}
                    cy={slot.cy + 12}
                    rx="37"
                    ry="20"
                    fill="url(#inner-cup-cream)"
                    stroke="#DED4C0"
                    strokeWidth="0.6"
                  />

                  {/* Perfectly round, natural golden ladoo */}
                  <circle
                    cx={slot.cx}
                    cy={slot.cy}
                    r="34"
                    fill="url(#ladoo-natural-gold)"
                  />

                  {/* Subtle granular roasted texture */}
                  <g opacity="0.45">
                    <circle cx={slot.cx - 10} cy={slot.cy - 12} r="1.8" fill="#FFF2C6" />
                    <circle cx={slot.cx + 12} cy={slot.cy - 8} r="1.6" fill="#FFF8DC" />
                    <circle cx={slot.cx - 6} cy={slot.cy + 10} r="1.8" fill="#885210" />
                    <circle cx={slot.cx + 8} cy={slot.cy + 12} r="1.5" fill="#6A3C08" />
                    <circle cx={slot.cx + 14} cy={slot.cy + 4} r="1.4" fill="#FFEBB0" />
                    <circle cx={slot.cx - 12} cy={slot.cy + 4} r="1.7" fill="#FFE5A0" />
                  </g>

                  {/* A tiny, delicate sprinkle of chopped pistachios on top as the only garnish */}
                  <g>
                    {/* Tiny pistachio piece 1 */}
                    <ellipse
                      cx={slot.cx - 3}
                      cy={slot.cy - 7}
                      rx="3.2"
                      ry="1.8"
                      transform={`rotate(-25 ${slot.cx - 3} ${slot.cy - 7})`}
                      fill="#4CA334"
                      stroke="#74CF57"
                      strokeWidth="0.5"
                    />
                    {/* Tiny pistachio piece 2 */}
                    <ellipse
                      cx={slot.cx + 4}
                      cy={slot.cy - 5}
                      rx="2.6"
                      ry="1.5"
                      transform={`rotate(35 ${slot.cx + 4} ${slot.cy - 5})`}
                      fill="#5AB53E"
                      stroke="#86DD6A"
                      strokeWidth="0.4"
                    />
                    {/* Tiny crumb of pistachio */}
                    <circle cx={slot.cx} cy={slot.cy - 2} r="1.2" fill="#3E8F28" />
                  </g>
                </g>
              ))}

              {/* Natural soft highlight on top box edge */}
              <line
                x1="152"
                y1="111"
                x2="548"
                y2="111"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="0.8"
              />
            </g>

            {/* Natural warm sunlight glint in upper corner */}
            <circle
              cx="110"
              cy="90"
              r="120"
              fill="#FFFDE8"
              fillOpacity="0.18"
              filter="blur(30px)"
            />
          </svg>
        </div>

      </div>
    </div>
  );
}
