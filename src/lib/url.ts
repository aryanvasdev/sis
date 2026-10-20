/**
 * Prefix an internal path with the site's base path, so links keep working when the
 * site is served from a sub-folder (e.g. https://username.github.io/sis/).
 *
 *   url('/admissions/')        → '/sis/admissions/'
 *   url('/admissions/#fees')   → '/sis/admissions/#fees'
 *   url('https://cbse.gov.in') → unchanged
 */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** True when `path` (an internal link) points at the page currently being rendered. */
export function isCurrent(path: string, currentPathname: string): boolean {
  const clean = (p: string) => p.replace(/#.*$/, '').replace(/\/+$/, '') || '/';
  const target = clean(url(path));
  const current = clean(currentPathname);
  if (target === clean(url('/'))) return current === target;
  return current === target || current.startsWith(`${target}/`);
}
