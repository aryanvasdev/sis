/**
 * ACADEMICS PAGE CONTENT
 * Used on /academics/: stages and subjects (Nursery to Class VIII), languages,
 * the academic calendar, book list & uniform downloads and uniform details.
 *
 * ⚠ SAMPLE CONTENT — replace the subjects, calendar dates, documents and uniform
 * details with the school's real information. Everything marked ⚠ PLACEHOLDER
 * must be checked before the site goes live.
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
      'Computer Studies',
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
      'Computer Science & Coding',
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

/** ⚠ SAMPLE CONTENT: replace with the school's approved calendar for the session. */
export const calendarSession = '2026–27';

export const academicCalendar: CalendarMonth[] = [
  {
    month: '2026-04',
    items: [
      { when: '1 Apr', what: 'New session begins (summer timings)', type: 'academic' },
      { when: '11 Apr', what: 'Orientation for parents of new students', type: 'meeting' },
      { when: '22 Apr', what: 'Earth Day activities', type: 'event' },
      { when: '24 Apr', what: 'Educational trip (VI–VIII)', type: 'event' },
    ],
  },
  {
    month: '2026-05',
    items: [
      { when: '9 May', what: 'Parent–Teacher Meeting (all classes)', type: 'meeting' },
      { when: '16 May', what: 'Inter-House Recitation Competition', type: 'event' },
      { when: '30 May', what: 'Summer vacation begins', type: 'holiday' },
    ],
  },
  {
    month: '2026-06',
    items: [
      { when: '1–30 Jun', what: 'Summer vacation', type: 'holiday' },
      { when: '21 Jun', what: 'International Day of Yoga', type: 'event' },
    ],
  },
  {
    month: '2026-07',
    items: [
      { when: '1 Jul', what: 'School reopens after summer vacation', type: 'academic' },
      { when: '1–7 Jul', what: 'Van Mahotsav week: tree plantation drive', type: 'event' },
      { when: '10 Jul', what: 'Green Day (pre-primary)', type: 'event' },
      { when: '13–18 Jul', what: 'Periodic Test 1 (I–VIII)', type: 'exam' },
      { when: '18 Jul', what: 'Investiture Ceremony of the Student Council', type: 'event' },
      { when: '25 Jul', what: 'Parent–Teacher Meeting (all classes)', type: 'meeting' },
    ],
  },
  {
    month: '2026-08',
    items: [
      { when: '5 Aug', what: 'Inter-House Debate Competition (VI–VIII)', type: 'event' },
      { when: '15 Aug', what: 'Independence Day celebrations', type: 'event' },
      { when: '28 Aug', what: 'Raksha Bandhan and Teeyan da Mela (Teej)', type: 'event' },
      { when: '29 Aug', what: 'National Sports Day: inter-house races', type: 'event' },
    ],
  },
  {
    month: '2026-09',
    items: [
      { when: '4 Sep', what: 'Janmashtami celebrations: dress-up and matki decoration', type: 'event' },
      { when: '5 Sep', what: "Teachers' Day", type: 'event' },
      { when: '14 Sep', what: 'Hindi Diwas', type: 'event' },
      { when: '15–26 Sep', what: 'Half-Yearly Examinations (I–VIII)', type: 'exam' },
    ],
  },
  {
    month: '2026-10',
    items: [
      { when: '1 Oct', what: 'Winter timings begin', type: 'academic' },
      { when: '2 Oct', what: 'Gandhi Jayanti: Swachh Bharat rally and pledge', type: 'event' },
      { when: '31 Oct', what: 'Parent–Teacher Meeting: half-yearly results', type: 'meeting' },
    ],
  },
  {
    month: '2026-11',
    items: [
      { when: '1 Nov', what: 'Winter uniform compulsory', type: 'academic' },
      { when: '7–11 Nov', what: 'Diwali break', type: 'holiday' },
      { when: '14 Nov', what: "Children's Day celebrations", type: 'event' },
      { when: '21 Nov', what: 'Inter-House Science Exhibition', type: 'event' },
      { when: '23–28 Nov', what: 'Periodic Test 2 (I–VIII)', type: 'exam' },
    ],
  },
  {
    month: '2026-12',
    items: [
      { when: '5–6 Dec', what: 'Annual Sports Meet', type: 'event' },
      { when: '19 Dec', what: 'Annual Day: “Sanskriti”', type: 'event' },
      { when: '25 Dec', what: 'Christmas (holiday)', type: 'holiday' },
    ],
  },
  {
    month: '2027-01',
    items: [
      { when: '1–15 Jan', what: 'Winter break (as per state government orders)', type: 'holiday' },
      { when: '26 Jan', what: 'Republic Day celebrations', type: 'event' },
      { when: '30 Jan', what: 'Parent–Teacher Meeting (all classes)', type: 'meeting' },
    ],
  },
  {
    month: '2027-02',
    items: [
      { when: '20 Feb', what: 'Inter-House Quiz Competition', type: 'event' },
      { when: '28 Feb', what: 'National Science Day', type: 'event' },
    ],
  },
  {
    month: '2027-03',
    items: [
      { when: '1–13 Mar', what: 'Annual Examinations (I–VIII)', type: 'exam' },
      { when: '27 Mar', what: 'Result declaration & Parent–Teacher Meeting', type: 'meeting' },
      { when: '31 Mar', what: 'Session ends', type: 'academic' },
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

/** ⚠ PLACEHOLDER: upload the real PDFs to /public/documents/ with these file names. */
export const documents = [
  {
    title: `Book List ${calendarSession}`,
    text: 'Class-wise list of NCERT and supplementary books, notebooks and stationery.',
    file: '/documents/booklist-2026-27.pdf',
    icon: 'book-open-check',
  },
  {
    title: 'Uniform Guidelines',
    text: 'Summer, winter and sports uniform for all classes, with approved suppliers.',
    file: '/documents/uniform-guidelines.pdf',
    icon: 'shirt',
  },
] as const;

/** ⚠ SAMPLE CONTENT: check against the school's uniform guidelines. */
export const uniform = {
  summer: {
    from: 'April – October',
    boys: ['White half-sleeve shirt with navy blue piping and school monogram', 'Navy blue trousers (shorts up to Class II)', 'Navy blue belt and school ID card', 'Navy blue socks and black shoes'],
    girls: ['White half-sleeve shirt with navy blue piping and school monogram', 'Navy blue skirt', 'Navy blue belt and school ID card', 'Navy blue socks and black shoes'],
  },
  winter: {
    from: 'November – March',
    boys: ['White full-sleeve shirt with navy blue piping', 'Navy blue trousers', 'Navy blue V-neck pullover or blazer with school crest', 'Navy blue socks and black shoes'],
    girls: ['White full-sleeve shirt with navy blue piping', 'Navy blue skirt with navy tights, or trousers', 'Navy blue V-neck pullover or blazer with school crest', 'Navy blue socks and black shoes'],
  },
  sports: 'House T-shirt, navy track pants and white sports shoes on PE days, as per the class timetable.',
};
