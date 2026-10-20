/**
 * NOTICES, CIRCULARS & NEWS
 *
 * Add new items at the TOP of the list. Dates are YYYY-MM-DD.
 *  - `ticker: true`  shows the item in the scrolling "Latest Updates" bar on the home page.
 *  - `file`          a PDF placed in /public/documents/circulars/ (e.g. 'circulars/ptm-oct-2026.pdf').
 *  - `link`          any other page or website.
 *
 * ⚠ SAMPLE CONTENT: replace these with the school's real notices.
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
    title: 'Admissions open for Session 2027–28 (Nursery to Class VIII)',
    date: '2026-10-15',
    category: 'Admissions',
    summary:
      'Registration forms are available at the school office. Parents may also send an enquiry online or on WhatsApp.',
    link: '/admissions/',
    ticker: true,
  },
  {
    title: 'Diwali break: school closed from 7 to 11 November 2026',
    date: '2026-10-18',
    category: 'Holiday',
    summary: 'School reopens on Thursday, 12 November 2026. Wishing all families a safe and joyful Diwali.',
    ticker: true,
  },
  {
    title: 'Parent–Teacher Meeting for all classes on Saturday, 31 October 2026',
    date: '2026-10-16',
    category: 'Circular',
    summary: 'Half-yearly progress reports will be shared. Timing: 9:00 AM – 12:30 PM.',
    ticker: true,
  },
  {
    title: 'Winter uniform compulsory from 1 November 2026',
    date: '2026-10-12',
    category: 'Circular',
  },
  {
    title: 'Gandhi Jayanti celebrated with a Swachh Bharat rally and pledge',
    date: '2026-10-02',
    category: 'News',
    summary: 'Our little ones dressed as Gandhi ji and carried messages of cleanliness and truth.',
    link: '/gallery/',
    ticker: true,
  },
  {
    title: 'Half-Yearly Examination date sheet: Classes I to VIII',
    date: '2026-09-08',
    category: 'Examination',
  },
  {
    title: 'Janmashtami celebrations: Radha–Krishna dress-up and matki decoration',
    date: '2026-09-04',
    category: 'News',
    link: '/gallery/',
  },
  {
    title: 'Raksha Bandhan and Teeyan da Mela celebrated in the pre-primary wing',
    date: '2026-08-28',
    category: 'News',
    link: '/gallery/',
  },
  {
    title: 'Independence Day: students recite as freedom fighters',
    date: '2026-08-15',
    category: 'News',
    link: '/gallery/',
  },
  {
    title: 'Revised school timings for the summer schedule',
    date: '2026-04-01',
    category: 'Circular',
  },
];

/** Upcoming events shown on the home page and the Notices page. ⚠ SAMPLE CONTENT */
export interface SchoolEvent {
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  venue?: string;
}

export const events: SchoolEvent[] = [
  { title: 'Parent–Teacher Meeting (all classes)', date: '2026-10-31', time: '9:00 AM – 12:30 PM', venue: 'Respective classrooms' },
  { title: "Children's Day celebrations", date: '2026-11-14', venue: 'School premises' },
  { title: 'Inter-House Science Exhibition', date: '2026-11-21', venue: 'School premises' },
  { title: 'Annual Sports Meet', date: '2026-12-05', endDate: '2026-12-06', venue: 'School sports ground' },
  { title: 'Annual Day: “Sanskriti”', date: '2026-12-19', time: '4:00 PM onwards', venue: 'School premises' },
  { title: 'Winter break (as per state government orders)', date: '2027-01-01', endDate: '2027-01-15' },
];

export const sortedNotices = () => [...notices].sort((a, b) => b.date.localeCompare(a.date));

export const upcomingEvents = (from = new Date()) => {
  const today = from.toISOString().slice(0, 10);
  return events.filter((e) => (e.endDate ?? e.date) >= today).sort((a, b) => a.date.localeCompare(b.date));
};
