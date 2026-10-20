/**
 * CBSE BOARD RESULTS & TOPPERS
 * Used on the home page, the Achievements page and the Mandatory Public Disclosure page.
 * Student photos go in /public/images/toppers/ (set `photo: 'images/toppers/name.jpg'`).
 *
 * ⚠ SAMPLE CONTENT: replace with the school's actual results for the last three years.
 */

export interface BoardResult {
  year: number;
  /** 'X' or 'XII' */
  cls: 'X' | 'XII';
  registered: number;
  passed: number;
  /** Students scoring 90% and above */
  above90: number;
  /** Highest percentage in the school */
  highest: number;
}

export const boardResults: BoardResult[] = [
  { year: 2026, cls: 'XII', registered: 112, passed: 112, above90: 21, highest: 97.4 },
  { year: 2026, cls: 'X', registered: 148, passed: 148, above90: 34, highest: 98.2 },
  { year: 2025, cls: 'XII', registered: 104, passed: 104, above90: 17, highest: 96.8 },
  { year: 2025, cls: 'X', registered: 141, passed: 141, above90: 29, highest: 97.6 },
  { year: 2024, cls: 'XII', registered: 98, passed: 97, above90: 14, highest: 96.2 },
  { year: 2024, cls: 'X', registered: 136, passed: 136, above90: 25, highest: 97.0 },
];

export interface Topper {
  name: string;
  cls: 'X' | 'XII';
  year: number;
  percent: number;
  stream?: string;
  photo?: string;
}

export const toppers: Topper[] = [
  { name: 'Student Name', cls: 'XII', year: 2026, percent: 97.4, stream: 'Science (PCM)' },
  { name: 'Student Name', cls: 'XII', year: 2026, percent: 96.6, stream: 'Commerce' },
  { name: 'Student Name', cls: 'XII', year: 2026, percent: 95.8, stream: 'Humanities' },
  { name: 'Student Name', cls: 'X', year: 2026, percent: 98.2 },
  { name: 'Student Name', cls: 'X', year: 2026, percent: 97.8 },
  { name: 'Student Name', cls: 'X', year: 2026, percent: 97.2 },
];

export const passPercent = (r: BoardResult) => Math.round((r.passed / r.registered) * 1000) / 10;

export const latestYear = Math.max(...boardResults.map((r) => r.year));
