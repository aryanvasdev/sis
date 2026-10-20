const parse = (iso: string) => new Date(`${iso}T00:00:00`);

// Spelled out here because some locales abbreviate September as "Sept".
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2026-10-20' → '20 Oct 2026' */
export const formatDate = (iso: string) => {
  const d = parse(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

/** '2026-10-20' → '20 October 2026' */
export const formatDateLong = (iso: string) =>
  parse(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/** '2026-10-20' → { day: '20', month: 'Oct', year: '2026', weekday: 'Tue' } */
export const dateParts = (iso: string) => {
  const d = parse(iso);
  return {
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: MONTHS[d.getMonth()],
    year: String(d.getFullYear()),
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
  };
};

/** Indian rupee formatting: 125000 → '₹1,25,000' */
export const formatINR = (n: number) =>
  `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
