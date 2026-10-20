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
    title: 'Admissions open for Session 2027–28 (Nursery to Class IX & XI)',
    date: '2026-10-15',
    category: 'Admissions',
    summary:
      'Registration forms are available at the school office and online. Interaction schedule for Nursery – KG will be shared after registration.',
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
    title: 'Parent–Teacher Meeting for Classes I–XII on Saturday, 31 October 2026',
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
    title: 'CBSE Board Examinations 2027: submission of LOC details for Classes X & XII',
    date: '2026-09-28',
    category: 'Examination',
    summary: 'Parents must verify spellings of names, date of birth and subject codes and sign the verification slip by 10 October.',
  },
  {
    title: 'Half-Yearly Examination date sheet: Classes VI to XII',
    date: '2026-09-08',
    category: 'Examination',
  },
  {
    title: 'Our students win 1st position in the District Science Exhibition',
    date: '2026-09-02',
    category: 'News',
    summary: 'The Class IX team’s working model on rainwater harvesting was selected for the state level.',
    ticker: true,
  },
  {
    title: 'Independence Day celebrated with a march past and cultural programme',
    date: '2026-08-15',
    category: 'News',
  },
  {
    title: 'Inter-House Debate Competition (Classes VI–XII)',
    date: '2026-08-05',
    category: 'Event',
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
  { title: 'Parent–Teacher Meeting (I–XII)', date: '2026-10-31', time: '9:00 AM – 12:30 PM', venue: 'Respective classrooms' },
  { title: "Children's Day celebrations", date: '2026-11-14', venue: 'School auditorium' },
  { title: 'Inter-House Science Exhibition', date: '2026-11-21', venue: 'Science block' },
  { title: 'Annual Sports Meet', date: '2026-12-05', endDate: '2026-12-06', venue: 'School sports ground' },
  { title: 'Annual Day: “Sanskriti”', date: '2026-12-19', time: '4:00 PM onwards', venue: 'School auditorium' },
  { title: 'Pre-Board Examinations (X & XII)', date: '2027-01-04', endDate: '2027-01-16' },
];

export const sortedNotices = () => [...notices].sort((a, b) => b.date.localeCompare(a.date));

export const upcomingEvents = (from = new Date()) => {
  const today = from.toISOString().slice(0, 10);
  return events.filter((e) => (e.endDate ?? e.date) >= today).sort((a, b) => a.date.localeCompare(b.date));
};
