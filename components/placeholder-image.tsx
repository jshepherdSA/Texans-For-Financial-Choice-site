import { cn } from '@/lib/utils';

/**
 * Branded placeholder artwork.
 *
 * Stands in for photography that hasn't been shot yet. Inline SVG rather than a
 * placeholder service, so the site stays self-contained, works offline, and
 * costs no network requests — and so the holding art is on-brand.
 *
 * It should read as *deliberately* unfinished: an image glyph and an optional
 * label make it obvious a photo belongs here, rather than looking like a
 * decorative panel someone meant to keep or an image that failed to load.
 *
 * The palette and pattern are derived from `seed`, so a given press headline
 * always gets the same artwork — stable between renders and between server and
 * client — while a grid of them still looks varied.
 *
 * Decorative by definition: always `aria-hidden`. Any real meaning must live in
 * adjacent text.
 */

/** Small deterministic string hash → 32-bit int. */
function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const palettes = [
  { bg: '#F2F9FC', band: '#A4D0E9', mark: '#21437F', glyph: '#3F82AF' },
  { bg: '#F0F4FA', band: '#93B2DA', mark: '#1B3665', glyph: '#2A5394' },
  { bg: '#E1F0F8', band: '#7AB8DB', mark: '#21437F', glyph: '#35688C' },
  { bg: '#172C50', band: '#35688C', mark: '#A4D0E9', glyph: '#7AB8DB' },
];

export function PlaceholderImage({
  seed,
  className,
  ratio = '4/3',
  tone,
  label,
}: {
  seed: string;
  className?: string;
  ratio?: string;
  /** Force a palette instead of deriving one from the seed. */
  tone?: 0 | 1 | 2 | 3;
  /** Short note on what belongs here, e.g. "Texas family, kitchen table". */
  label?: string;
}) {
  const h = hash(seed);
  const p = palettes[tone ?? h % palettes.length];
  const lift = 30 + ((h >> 7) % 50);
  const stripeShift = (h >> 3) % 40;
  const uid = `ph-${(h % 100000).toString(36)}`;

  return (
    <div
      aria-hidden="true"
      className={cn('relative overflow-hidden', className)}
      style={{ aspectRatio: ratio }}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern
            id={`${uid}-stripes`}
            width="16"
            height="16"
            patternTransform={`rotate(35) translate(${stripeShift} 0)`}
            patternUnits="userSpaceOnUse"
          >
            <rect width="16" height="16" fill="none" />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="16"
              stroke={p.band}
              strokeWidth="5"
              opacity="0.22"
            />
          </pattern>
          <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.band} stopOpacity="0.10" />
            <stop offset="100%" stopColor={p.band} stopOpacity="0.42" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill={p.bg} />
        <rect width="400" height="300" fill={`url(#${uid}-stripes)`} />
        <rect width="400" height="300" fill={`url(#${uid}-fade)`} />

        {/* The swoosh from the mark, anchored to the lower half. */}
        <path
          d={`M -30 ${250 - lift / 3} Q 200 ${150 - lift} 430 ${235 - lift / 2}`}
          fill="none"
          stroke={p.band}
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d={`M -30 ${286 - lift / 3} Q 200 ${190 - lift} 430 ${272 - lift / 2}`}
          fill="none"
          stroke={p.mark}
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.32"
        />

        {/* Image glyph — mountain + sun inside a frame. */}
        <g
          transform="translate(200 128)"
          fill="none"
          stroke={p.glyph}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        >
          <rect x="-34" y="-27" width="68" height="54" rx="6" />
          <circle cx="-14" cy="-9" r="6.5" />
          <path d="M -34 16 L -10 -6 L 8 10 L 18 2 L 34 16" />
        </g>
      </svg>

      {label ? (
        <span
          className="absolute inset-x-0 bottom-0 truncate bg-navy-900/70 px-3 py-1.5 text-center text-[0.6875rem] font-medium tracking-wide text-white uppercase"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
