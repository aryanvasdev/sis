/**
 * NOTICES, CIRCULARS & NEWS
 *
 * Add new items at the TOP of the list. Dates are YYYY-MM-DD.
 *  - `ticker: true`  shows the item in the scrolling "Latest Updates" bar on the home page.
 *  - `file`          a PDF placed in /public/documents/circulars/ (e.g. 'circulars/ptm-oct-2026.pdf').
 *  - `link`          any other page or website.
 *
 * Keep this list up to date: remove old items and add new ones at the top.
 */

export type NoticeCategory = 'Admissions' | 'Circular' | 'Examination' | 'Holiday' | 'Event' | 'News';

export interface Notice {
  title: string;
  date: string;
  category: NoticeCategory;
  summary?: string;
  file?: string;
  link?: string;
  ticker?: boolean;
}

export const notices: Notice[] = [
  {
    title: 'Inter-House Rangoli Competition on Friday, 6 November 2026',
    date: '2026-10-19',
    category: 'Event',
    summary: 'Organised by Kaveri (Yellow) House, as listed in the school diary.',
    ticker: true,
  },
  {
    title: 'Inter-House GK Quiz held, organised by Ganga House',
    date: '2026-10-16',
    category: 'Event',
  },
  {
    title: 'Admissions open for Session 2027–28 (Nursery to Class VIII)',
    date: '2026-10-15',
    category: 'Admissions',
    summary:
      'Registration forms are available at the school office. Parents may also send an enquiry online or on WhatsApp.',
    link: '/admissions/',
    ticker: true,
  },
  {
    title: 'Winter uniform from 1 November 2026',
    date: '2026-10-12',
    category: 'Circular',
    summary: 'School tie, full sweater, check blazer and blue cap with white stripes, as listed in the school diary.',
    link: '/academics/#booklist',
    ticker: true,
  },
  {
    title: 'Gandhi Jayanti celebrated with a Swachh Bharat rally and pledge',
    date: '2026-10-02',
    category: 'News',
    summary: 'Our little ones dressed as Gandhi ji and carried messages of cleanliness and truth.',
    link: '/gallery/#gandhi-jayanti-2026',
    ticker: true,
  },
  {
    title: 'Parent–Teacher Meeting for Term 1 results on Saturday, 3 October 2026',
    date: '2026-09-28',
    category: 'Circular',
  },
  {
    title: 'Janmashtami celebrations: Radha–Krishna dress-up and matki decoration',
    date: '2026-09-04',
    category: 'News',
    link: '/gallery/#janmashtami-2026',
  },
  {
    title: 'Term 1 examinations from the second week of September',
    date: '2026-09-01',
    category: 'Examination',
  },
  {
    title: 'Raksha Bandhan and Teeyan da Mela celebrated in the pre-primary wing',
    date: '2026-08-28',
    category: 'News',
    link: '/gallery/#raksha-bandhan-2026',
  },
  {
    title: 'Parent–Teacher Meeting (Term 1 discussion) on Saturday, 29 August 2026',
    date: '2026-08-24',
    category: 'Circular',
  },
  {
    title: 'Independence Day: students recite as freedom fighters',
    date: '2026-08-15',
    category: 'News',
    link: '/gallery/#independence-day-2026',
  },
  {
    title: 'Summer school timings',
    date: '2026-04-01',
    category: 'Circular',
    summary: 'Classes I–VIII: 8:00 AM – 2:00 PM. Nursery–UKG: 8:00 AM – 1:00 PM. Every second Saturday is a holiday.',
  },
];

/** Upcoming events shown on the home page and the Notices page (from the school diary). */
export interface SchoolEvent {
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  venue?: string;
}

export const events: SchoolEvent[] = [
  { title: 'Inter-House Rangoli Competition', date: '2026-11-06', venue: 'Organised by Kaveri House' },
  { title: 'Periodic Test 2', date: '2026-12-07', endDate: '2026-12-12' },
  { title: 'Parent–Teacher Meeting: Periodic Test 2 results', date: '2026-12-26' },
  { title: 'Republic Day', date: '2027-01-26' },
  { title: 'Term II (annual) examinations', date: '2027-03-08', endDate: '2027-03-13' },
];

export const sortedNotices = () => [...notices].sort((a, b) => b.date.localeCompare(a.date));

export const upcomingEvents = (from = new Date()) => {
  const today = from.toISOString().slice(0, 10);
  return events.filter((e) => (e.endDate ?? e.date) >= today).sort((a, b) => a.date.localeCompare(b.date));
};
