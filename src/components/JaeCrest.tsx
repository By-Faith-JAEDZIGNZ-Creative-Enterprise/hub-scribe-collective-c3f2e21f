import { cn } from "@/lib/utils";

interface JaeCrestProps {
  size?: number;
  className?: string;
  href?: string;
}

/**
 * JAE Royal Crest — circular badge for By Faith JAEDZIGNZ Creative Enterprise.
 * Colors are pulled from the site palette so the crest blends with the
 * Hattiesburg Hub brand (electric blue, cyan, deep navy) and adapts to the
 * light/dark theme.
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

          .jae-crest-seal-stop-light  { stop-color: hsl(var(--hub-electric-glow)); }
          .jae-crest-seal-stop-mid    { stop-color: hsl(217, 60%, 25%); }
          .jae-crest-seal-stop-dark   { stop-color: hsl(228, 30%, 8%); }

          .jae-crest-ring-outer {
            fill: none;
            stroke: hsl(var(--hub-cyan));
            stroke-opacity: 0.55;
            stroke-width: 1;
          }
          .jae-crest-ring-inner {
            fill: none;
            stroke: hsl(var(--hub-cyan));
            stroke-opacity: 0.3;
            stroke-width: 0.5;
          }

          .jae-crest-text-monogram { fill: hsl(0 0% 100%); }
          .jae-crest-text-subtitle {
            fill: hsl(var(--hub-cyan));
            fill-opacity: 0.85;
          }
          .jae-crest-text-engraved {
            fill: hsl(var(--hub-cyan));
          }
        `}</style>
        <radialGradient id="jae-crest-seal" cx="35%" cy="30%">
          <stop offset="0%" className="jae-crest-seal-stop-light" />
          <stop offset="55%" className="jae-crest-seal-stop-mid" />
          <stop offset="100%" className="jae-crest-seal-stop-dark" />
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
        <circle cx="110" cy="110" r={88} className="jae-crest-ring-outer" />
        <circle cx="110" cy="110" r={70} className="jae-crest-ring-inner" />

        <g className="jae-crest-ring">
          <text
            fontSize={11}
            letterSpacing={3}
            className="jae-crest-text-engraved"
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
          className="jae-crest-text-monogram"
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
          className="jae-crest-text-subtitle"
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
