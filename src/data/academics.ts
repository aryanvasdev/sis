/**
 * ACADEMICS PAGE CONTENT
 * Used on /academics/: stages and subjects (Nursery to Class VIII), languages,
 * the academic calendar, book list & uniform downloads and uniform details.
 *
 * The calendar and uniform come from the school diary. Subjects marked
 * ⚠ PLACEHOLDER must be checked before the site goes live.
 */

/* ---------- NEP 2020 stages ---------- */

export const stages = [
  {
    id: 'foundational',
    name: 'Foundational',
    years: 5,
    classes: 'Nursery – Class II',
    ages: 'Ages 3–8',
    icon: 'blocks',
    tone: 'gold',
    summary: 'Play, stories, rhymes and hands-on activities build language, number sense, curiosity and good habits.',
    subjects: [
      'English (listening, speaking, phonics, early reading)',
      'Hindi (rhymes, stories, early writing)',
      'Mathematics (number sense, shapes, patterns)',
      'The World Around Us (theme-based learning)',
      'Art & Craft',
      'Music & Movement',
      'Physical Education & Yoga',
      'Value Education & Good Habits',
    ],
    note: 'No formal examinations in Nursery – UKG. Progress is observed through play, activities and portfolios.',
  },
  {
    id: 'preparatory',
    name: 'Preparatory',
    years: 3,
    classes: 'Classes III – V',
    ages: 'Ages 8–11',
    icon: 'pencil',
    tone: 'sky',
    summary: 'Discovery and activity-based learning that strengthens reading, writing, mathematics and observation.',
    subjects: [
      'English',
      'Hindi',
      'Mathematics',
      'Environmental Studies (EVS)',
      'General Knowledge',
      'Art Education',
      'Music & Dance',
      'Physical Education & Yoga',
      'Value Education & Life Skills',
    ],
    note: 'Short written tests are introduced gently, alongside projects, oral work and class activities.',
  },
  {
    id: 'middle',
    name: 'Middle',
    years: 3,
    classes: 'Classes VI – VIII',
    ages: 'Ages 11–14',
    icon: 'book-open',
    tone: 'green',
    summary: 'Subject teachers introduce science, mathematics and social science in more depth, through experiments and projects.',
    subjects: [
      'English',
      'Hindi',
      'Third Language (Punjabi / Sanskrit)',
      'Mathematics',
      'Science',
      'Social Science',
      'Skill Education (hands-on projects)',
      'Art Education',
      'Physical Education & Yoga',
      'Value Education & Life Skills',
    ],
    note: 'Periodic tests, half-yearly and annual examinations, with projects and practical work.',
  },
] as const;

/* ---------- Languages ---------- */

export const languages = [
  {
    code: 'R1',
    name: 'English',
    from: 'Nursery onwards',
    text: 'The medium of instruction. Phonics, reading time, recitation and creative writing build fluency and confidence.',
  },
  {
    code: 'R2',
    name: 'Hindi',
    from: 'Nursery onwards',
    text: 'Taught from the early years through stories, poems and conversation, and studied in every class.',
  },
  {
    code: 'R3',
    /** ⚠ PLACEHOLDER: confirm which third language(s) the school offers. */
    name: 'Punjabi / Sanskrit',
    from: 'Class VI onwards',
    text: 'A third language is introduced from Class VI. Please check the options for the current session with the school office.',
  },
] as const;

/* ---------- Academic calendar ---------- */

export type CalendarType = 'academic' | 'exam' | 'event' | 'holiday' | 'meeting';

export interface CalendarMonth {
  /** 'YYYY-MM' */
  month: string;
  items: { when: string; what: string; type: CalendarType }[];
}

/**
 * From the school diary (exam schedule, PTM schedule and inter-house events), plus
 * national days and the festivals celebrated at school. Add holidays as they are notified.
 */
export const calendarSession = '2026–27';

export const academicCalendar: CalendarMonth[] = [
  {
    month: '2026-04',
    items: [{ when: 'April', what: 'New session begins', type: 'academic' }],
  },
  {
    month: '2026-05',
    items: [
      { when: '2nd week', what: 'Periodic Test 1', type: 'exam' },
      { when: '8 May', what: 'Investiture Ceremony', type: 'event' },
      { when: '16 May', what: 'Inter-House Declamation Competition (Saraswati House)', type: 'event' },
      { when: '30 May', what: 'PTM 1: Periodic Test 1 results', type: 'meeting' },
    ],
  },
  {
    month: '2026-07',
    items: [
      { when: 'July', what: 'Green Day (pre-primary)', type: 'event' },
      { when: '18 Jul', what: 'Inter-House Group Song / Dance Competition (Yamuna House)', type: 'event' },
    ],
  },
  {
    month: '2026-08',
    items: [
      { when: '15 Aug', what: 'Independence Day', type: 'event' },
      { when: 'August', what: 'Teeyan da Mela (Teej)', type: 'event' },
      { when: '28 Aug', what: 'Raksha Bandhan', type: 'event' },
      { when: '29 Aug', what: 'PTM 2: Term 1 discussion', type: 'meeting' },
    ],
  },
  {
    month: '2026-09',
    items: [
      { when: '4 Sep', what: 'Janmashtami celebrations', type: 'event' },
      { when: '2nd week', what: 'Term 1 examinations', type: 'exam' },
    ],
  },
  {
    month: '2026-10',
    items: [
      { when: '2 Oct', what: 'Gandhi Jayanti', type: 'event' },
      { when: '3 Oct', what: 'PTM 3: Term 1 results', type: 'meeting' },
      { when: '16 Oct', what: 'Inter-House GK Quiz (Ganga House)', type: 'event' },
    ],
  },
  {
    month: '2026-11',
    items: [
      { when: '1 Nov', what: 'Winter uniform begins', type: 'academic' },
      { when: '6 Nov', what: 'Inter-House Rangoli Competition (Kaveri House)', type: 'event' },
    ],
  },
  {
    month: '2026-12',
    items: [
      { when: '2nd week', what: 'Periodic Test 2', type: 'exam' },
      { when: '26 Dec', what: 'PTM 4: Periodic Test 2 results', type: 'meeting' },
    ],
  },
  {
    month: '2027-01',
    items: [{ when: '26 Jan', what: 'Republic Day', type: 'event' }],
  },
  {
    month: '2027-02',
    items: [{ when: '21 Feb', what: 'PTM 5: Term II discussion', type: 'meeting' }],
  },
  {
    month: '2027-03',
    items: [
      { when: '2nd week', what: 'Term II (annual) examinations', type: 'exam' },
      { when: 'March', what: 'PTM 6: Final results (date announced later)', type: 'meeting' },
    ],
  },
];

export const calendarTypes: Record<CalendarType, string> = {
  academic: 'School',
  exam: 'Examination',
  event: 'Event',
  holiday: 'Holiday',
  meeting: 'PTM / Meeting',
};

/* ---------- Book list & uniform ---------- */

/** Upload the PDF to /public/documents/ with this file name. */
export const documents = [
  {
    title: `Book List ${calendarSession}`,
    text: 'Class-wise list of NCERT and supplementary books, notebooks and stationery.',
    file: '/documents/booklist-2026-27.pdf',
    icon: 'book-open-check',
  },
] as const;

/** From the school diary. */
export const uniform = {
  summer: {
    from: 'Up to 30 September',
    boys: ['White shirt (half sleeves)', 'Blue trousers', 'Blue socks with a white stripe', 'Black shoes'],
    girls: ['White shirt (half sleeves)', 'Blue skirt with white stripes', 'White ribbons (two plaits)', 'Blue socks with white stripes and black shoes'],
  },
  winter: {
    from: 'From 1 November',
    boys: ['Same as summer, with a white shirt', 'School tie and full sweater', 'Check blazer', 'Blue cap with white stripes'],
    girls: ['Same as summer, with a white shirt', 'School tie and full sweater', 'Check blazer', 'Blue cap with white stripes'],
  },
  houseDays:
    'House-colour T-shirt with blue trousers for boys and girls (girls with white ribbons in two plaits), Nursery to Class VIII.',
  always: 'ID card and school belt every day. Slippers and sandals are not allowed. Plain haircut; girls with long hair wear two plaits with white ribbons.',
};
