import { cn } from "@/lib/utils";

interface JaeCrestProps {
  size?: number;
  className?: string;
  href?: string;
}

/**
 * JAE Royal Crest — circular rotating badge for By Faith JAEDZIGNZ Creative Enterprise.
 * Renders an inline SVG so the hover animations and oklch gradients ship without
 * an extra network request.
 */
const JaeCrest = ({ size = 96, className, href }: JaeCrestProps) => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      role="img"
      aria-label="JAE royal crest — By Faith JAEDZIGNZ Creative Enterprise"
      className={cn("select-none", className)}
    >
      <defs>
        <style>{`
          .jae-crest { transition: transform 0.7s ease; transform-origin: 110px 110px; }
          .jae-crest-ring { transition: transform 1s ease; transform-origin: 110px 110px; }
          svg:hover .jae-crest { transform: rotate(12deg); }
          svg:hover .jae-crest-ring { transform: rotate(45deg); }
        `}</style>
        <radialGradient id="jae-crest-seal" cx="35%" cy="30%">
          <stop offset="0%" stopColor="oklch(0.55 0.22 25)" />
          <stop offset="55%" stopColor="oklch(0.32 0.18 20)" />
          <stop offset="100%" stopColor="oklch(0.16 0.09 20)" />
        </radialGradient>
        <path
          id="jae-crest-path"
          d="M 110,110 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
        />
      </defs>

      <g className="jae-crest">
        <g>
          {[
            [210, 110],
            [206.59, 135.88],
            [196.6, 160],
            [180.71, 180.71],
            [160, 196.6],
            [135.88, 206.59],
            [110, 210],
            [84.12, 206.59],
            [60, 196.6],
            [39.29, 180.71],
            [23.4, 160],
            [13.41, 135.88],
            [10, 110],
            [13.41, 84.12],
            [23.4, 60],
            [39.29, 39.29],
            [60, 23.4],
            [84.12, 13.41],
            [110, 10],
            [135.88, 13.41],
            [160, 23.4],
            [180.71, 39.29],
            [196.6, 60],
            [206.59, 84.12],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={8}
              fill="url(#jae-crest-seal)"
            />
          ))}
        </g>

        <circle cx="110" cy="110" r={98} fill="url(#jae-crest-seal)" />
        <circle
          cx="110"
          cy="110"
          r={88}
          fill="none"
          stroke="oklch(0.85 0.14 88 / 0.55)"
          strokeWidth={1}
        />
        <circle
          cx="110"
          cy="110"
          r={70}
          fill="none"
          stroke="oklch(0.85 0.14 88 / 0.3)"
          strokeWidth={0.5}
        />

        <g className="jae-crest-ring">
          <text
            fontSize={11}
            letterSpacing={3}
            fill="oklch(0.92 0.12 88)"
            fontFamily="Cinzel, serif"
            fontWeight={700}
          >
            <textPath href="#jae-crest-path" startOffset="0">
              ✦ DESIGNED BY FAITH ✦ JAEDZIGNZ CREATIVE ENTERPRISE ✦
            </textPath>
          </text>
        </g>

        <text
          x="110"
          y="118"
          textAnchor="middle"
          fontSize={46}
          fontFamily="Cinzel, serif"
          fontWeight={900}
          fill="oklch(0.92 0.12 88)"
        >
          JAE
        </text>
        <text
          x="110"
          y="138"
          textAnchor="middle"
          fontSize={8}
          letterSpacing={4}
          fontFamily="Cinzel, serif"
          fill="oklch(0.85 0.14 88 / 0.8)"
        >
          BY FAITH
        </text>
      </g>
    </svg>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-300 hover:-translate-y-0.5"
        aria-label="Visit By Faith JAEDZIGNZ Creative Enterprise"
      >
        {svg}
      </a>
    );
  }

  return svg;
};

export default JaeCrest;
