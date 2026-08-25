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

/**
 * Every figure occupies the same height, so the three carry equal visual
 * weight in a row and the stat numbers below share a baseline.
 *
 * Glyph size is therefore derived from the row count rather than fixed: a
 * two-row array of ten houses draws each house at half the height, while a
 * single row of three people draws each person at full height. The alternative
 * — one glyph size everywhere — is what made the "1 in 3" figure look stunted
 * beside the house grid and the pie.
 */
export const FIGURE_HEIGHT = 64;
/** Gap as a share of glyph size, so spacing stays proportional at any scale. */
const GAP_RATIO = 0.23;

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
  // Solve for the glyph size that makes `rows` of them fill FIGURE_HEIGHT,
  // then let the row gap absorb the rounding remainder so the drawn height is
  // exactly FIGURE_HEIGHT rather than a pixel over it.
  const cell = Math.round(FIGURE_HEIGHT / (rows + GAP_RATIO * (rows - 1)));
  const rowGap =
    rows > 1
      ? (FIGURE_HEIGHT - rows * cell) / (rows - 1)
      : Math.round(cell * GAP_RATIO);
  const colGap = Math.round(cell * GAP_RATIO);
  const w = perRow * cell + (perRow - 1) * colGap;
  const h = rows * cell + (rows - 1) * rowGap;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className="block"
    >
      {Array.from({ length: total }).map((_, i) => {
        const on = i < filled;
        const x = (i % perRow) * (cell + colGap);
        const y = Math.floor(i / perRow) * (cell + rowGap);
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

/** Bar thickness. Well under FIGURE_HEIGHT — a bar is a thin mark, and
    padding it out to the full slot would read as a block, not a measure. */
const BAR_HEIGHT = 22;

/**
 * Single-share bar — `percent` of the track filled from the left.
 *
 * Replaces the two-slice pie this figure used to be, and is the better form
 * for it: length along a common axis is the most precisely read encoding
 * there is, where judging a small pie wedge is among the least. 18.5% is a
 * thin slice and an obvious bar stub.
 *
 * Built from divs rather than SVG so it can be fluid. A percentage-width SVG
 * would need `preserveAspectRatio="none"`, which stretches the stroke and the
 * corner radii along with the geometry.
 *
 * The track keeps the pie's treatment — sky-100 fill inside a sky-600 ring —
 * so the full extent stays visible and the figure still belongs to the set.
 */
export function ShareBar({ percent }: { percent: number }) {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-md border-2 bg-sky-100"
      style={{ height: BAR_HEIGHT, borderColor: OUTLINE }}
    >
      {/* Rounded data-end, square at the axis: the fill starts flush against
          the track's left edge and terminates at the value. */}
      <div
        className="h-full rounded-r-[3px]"
        style={{ width: `${percent}%`, background: SOLID }}
      />
    </div>
  );
}

/**
 * Fixed-height container for a figure.
 *
 * This is what keeps the stat numbers below on a shared baseline no matter
 * what the figure above them is. The icon arrays draw to exactly
 * FIGURE_HEIGHT; ShareBar is deliberately shorter, and `items-end` rests it on
 * the same floor the person glyphs stand on rather than floating it.
 */
export function FigureSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-end" style={{ height: FIGURE_HEIGHT }}>
      {children}
    </div>
  );
}
