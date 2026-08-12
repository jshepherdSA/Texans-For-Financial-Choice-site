/**
 * Small data figures for the homepage statistics.
 *
 * Built as one system so the three read as a set:
 *
 * - The highlighted share is a SOLID navy-700 mark (9.2:1 on the sunken
 *   surface). The remainder is an OUTLINED mark in sky-600 (4.0:1).
 * - Fill-vs-outline is deliberate secondary encoding. The brand's sky-300
 *   fails a data-colour check outright — 1.6:1 against this surface, low
 *   enough in chroma to "read gray" — so distinguishing the two states by hue
 *   alone would be unreadable for some viewers and invisible in greyscale.
 *   Shape carries the distinction; colour only reinforces it.
 * - Every figure is `aria-hidden`: the adjacent stat number and label already
 *   state the value in text, so the figure is a visual restatement, never the
 *   only carrier of meaning.
 */

const SOLID = 'var(--color-navy-700)';
const OUTLINE = 'var(--color-sky-600)';

/** Filled house silhouette, 24×24. */
const HOUSE = 'M12 2.5 L22.5 11 V21.5 H1.5 V11 Z';

/**
 * Icon array — `filled` of `total` glyphs highlighted.
 * Wraps onto `perRow` columns, which is what makes "4 in 10" legible as two
 * rows of five rather than a strip you have to count along.
 */
export function IconArray({
  total,
  filled,
  perRow,
  glyph,
}: {
  total: number;
  filled: number;
  perRow: number;
  glyph: 'house' | 'person';
}) {
  const rows = Math.ceil(total / perRow);
  const cell = 26;
  const gap = 6;
  const w = perRow * cell + (perRow - 1) * gap;
  const h = rows * cell + (rows - 1) * gap;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox={`0 0 ${w} ${h}`}
      className="h-auto w-full max-w-[13rem]"
    >
      {Array.from({ length: total }).map((_, i) => {
        const on = i < filled;
        const x = (i % perRow) * (cell + gap);
        const y = Math.floor(i / perRow) * (cell + gap);
        return (
          <g key={i} transform={`translate(${x} ${y}) scale(${cell / 24})`}>
            {glyph === 'house' ? (
              <path
                d={HOUSE}
                fill={on ? SOLID : 'none'}
                stroke={on ? 'none' : OUTLINE}
                strokeWidth={on ? 0 : 1.8}
                strokeLinejoin="round"
              />
            ) : (
              <>
                <circle
                  cx="12"
                  cy="7"
                  r="4.2"
                  fill={on ? SOLID : 'none'}
                  stroke={on ? 'none' : OUTLINE}
                  strokeWidth={on ? 0 : 1.8}
                />
                <path
                  d="M3.6 22.5c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4z"
                  fill={on ? SOLID : 'none'}
                  stroke={on ? 'none' : OUTLINE}
                  strokeWidth={on ? 0 : 1.8}
                  strokeLinejoin="round"
                />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Single-share pie.
 *
 * A two-slice pie is the weaker form for one ratio — a meter on the same ramp
 * reads more precisely — but it was specified, and at this size with the value
 * printed beside it the shape does its job. The remainder is a light fill with
 * a visible sky-600 ring so the whole circle's extent stays legible instead of
 * dissolving into the background.
 */
export function SharePie({ percent }: { percent: number }) {
  const r = 42;
  const c = 50;
  const angle = (percent / 100) * 360;
  const rad = ((angle - 90) * Math.PI) / 180;
  const x = c + r * Math.cos(rad);
  const y = c + r * Math.sin(rad);
  const largeArc = angle > 180 ? 1 : 0;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 100 100"
      className="h-auto w-full max-w-[6.5rem]"
    >
      <circle
        cx={c}
        cy={c}
        r={r}
        fill="var(--color-sky-100)"
        stroke={OUTLINE}
        strokeWidth="2"
      />
      <path
        d={`M ${c} ${c} L ${c} ${c - r} A ${r} ${r} 0 ${largeArc} 1 ${x.toFixed(2)} ${y.toFixed(2)} Z`}
        fill={SOLID}
      />
    </svg>
  );
}
