/**
 * STUDENT ACHIEVEMENTS & SCHOOL AWARDS
 * Shown on the Achievements page (/achievements/).
 *
 * Add new items anywhere in a list; the page sorts achievements by session (newest
 * first) and then by level (International → National → State → District → Zonal →
 * Inter-school). Sessions are written like '2026–27' (with an en dash).
 *
 * ⚠ SAMPLE CONTENT — replace these with the school's real achievements. Every
 *   student name, rank, medal, event, number and awarding body below is a
 *   ⚠ PLACEHOLDER.
 */

export type AchievementArea = 'Olympiads' | 'Sports' | 'Dance & Culture' | 'Science' | 'Art' | 'Quiz & Spell Bee' | 'Scholarships';
export type AchievementLevel = 'International' | 'National' | 'State' | 'District' | 'Zonal' | 'Inter-school';

export interface Achievement {
  title: string;
  area: AchievementArea;
  level: AchievementLevel;
  session: string;
  /** The event, competition or exam */
  event?: string;
  /** Student(s) or team, e.g. '[Student Name], Class V' */
  who?: string;
}

export const achievementAreas: AchievementArea[] = [
  'Olympiads',
  'Sports',
  'Dance & Culture',
  'Science',
  'Art',
  'Quiz & Spell Bee',
  'Scholarships',
];
export const achievementLevels: AchievementLevel[] = ['International', 'National', 'State', 'District', 'Zonal', 'Inter-school'];

export const achievements: Achievement[] = [
  {
    title: 'First position for a working model on rainwater harvesting',
    area: 'Science',
    level: 'District',
    session: '2026–27',
    event: 'District Science Exhibition',
    who: 'Class VIII team · selected for the state level',
  },
  {
    title: 'Gold medal, Under-14 girls 100 m sprint',
    area: 'Sports',
    level: 'District',
    session: '2026–27',
    event: 'District School Games (Athletics)',
    who: '[Student Name], Class VIII',
  },
  {
    title: 'Silver medal, Under-14 girls badminton (singles)',
    area: 'Sports',
    level: 'Zonal',
    session: '2026–27',
    event: 'Zonal School Games',
    who: '[Student Name], Class VII',
  },
  {
    title: 'Winners, Under-14 boys kabaddi',
    area: 'Sports',
    level: 'Inter-school',
    session: '2026–27',
    event: 'Inter-School Sports Meet',
    who: 'School kabaddi team, Classes VI–VIII',
  },
  {
    title: 'First prize, group folk dance',
    area: 'Dance & Culture',
    level: 'Inter-school',
    session: '2026–27',
    event: 'Inter-School Cultural Fest',
    who: 'School dance troupe, Classes V–VIII',
  },
  {
    title: 'First prize, on-the-spot painting (Classes VI–VIII)',
    area: 'Art',
    level: 'Inter-school',
    session: '2026–27',
    event: 'Inter-School Art Competition',
    who: '[Student Name], Class VII',
  },
  {
    title: 'Gold medal and International Rank 48',
    area: 'Olympiads',
    level: 'International',
    session: '2025–26',
    event: 'International Mathematics Olympiad (IMO)',
    who: '[Student Name], Class V',
  },
  {
    title: 'Gold medal of excellence and Zonal Rank 9',
    area: 'Olympiads',
    level: 'Zonal',
    session: '2025–26',
    event: 'National Science Olympiad (NSO)',
    who: '[Student Name], Class VII',
  },
  {
    title: 'Gold medal and Zonal Rank 21',
    area: 'Olympiads',
    level: 'Zonal',
    session: '2025–26',
    event: 'International English Olympiad (IEO)',
    who: '[Student Name], Class III',
  },
  {
    title: 'Olympiad scholarship and cash award',
    area: 'Scholarships',
    level: 'International',
    session: '2025–26',
    event: 'Awarded for an international Olympiad rank',
    who: '[Student Name], Class V',
  },
  {
    title: 'Certificate of merit, national drawing competition',
    area: 'Art',
    level: 'National',
    session: '2025–26',
    event: 'National Drawing Competition (junior group)',
    who: '[Student Name], Class II',
  },
  {
    title: 'Project selected for the state round',
    area: 'Science',
    level: 'State',
    session: '2025–26',
    event: 'Children’s Science Congress',
    who: '[Student Name] & [Student Name], Class VIII',
  },
  {
    title: 'Merit scholarship',
    area: 'Scholarships',
    level: 'State',
    session: '2025–26',
    event: 'State-level talent search examination',
    who: '[Student Name], Class VIII',
  },
  {
    title: 'Second prize, group dance (junior)',
    area: 'Dance & Culture',
    level: 'District',
    session: '2025–26',
    event: 'District Youth Festival',
    who: 'School dance troupe, Classes III–VI',
  },
  {
    title: 'First prize, solo singing (junior)',
    area: 'Dance & Culture',
    level: 'Zonal',
    session: '2025–26',
    event: 'Zonal Cultural Competition',
    who: '[Student Name], Class VI',
  },
  {
    title: 'Bronze medal, Under-11 roller skating',
    area: 'Sports',
    level: 'Zonal',
    session: '2025–26',
    event: 'Zonal Skating Championship',
    who: '[Student Name], Class IV',
  },
  {
    title: 'Zonal finalist',
    area: 'Quiz & Spell Bee',
    level: 'Zonal',
    session: '2025–26',
    event: 'Spell Bee (Level 2)',
    who: '[Student Name], Class IV',
  },
  {
    title: 'Winners, junior general knowledge quiz',
    area: 'Quiz & Spell Bee',
    level: 'Inter-school',
    session: '2025–26',
    event: 'Inter-School GK Quiz',
    who: 'Team of three, Classes VI–VIII',
  },
];

/* ---------- Olympiad honour roll ---------- */

export interface OlympiadResult {
  name: string;
  cls: string;
  olympiad: string;
  award: string;
  session: string;
}

/** ⚠ PLACEHOLDER: Olympiad medal winners and ranks. */
export const olympiadRoll: OlympiadResult[] = [
  { name: '[Student Name]', cls: 'V', olympiad: 'International Mathematics Olympiad (IMO)', award: 'Gold medal · International Rank 48', session: '2025–26' },
  { name: '[Student Name]', cls: 'VII', olympiad: 'National Science Olympiad (NSO)', award: 'Gold medal of excellence · Zonal Rank 9', session: '2025–26' },
  { name: '[Student Name]', cls: 'III', olympiad: 'International English Olympiad (IEO)', award: 'Gold medal · Zonal Rank 21', session: '2025–26' },
  { name: '[Student Name]', cls: 'VIII', olympiad: 'National Cyber Olympiad (NCO)', award: 'Silver medal', session: '2025–26' },
  { name: '[Student Name]', cls: 'II', olympiad: 'International General Knowledge Olympiad (IGKO)', award: 'Gold medal of distinction', session: '2025–26' },
  { name: '[Student Name]', cls: 'VI', olympiad: 'International Mathematics Olympiad (IMO)', award: 'Bronze medal', session: '2025–26' },
  { name: '[Student Name]', cls: 'IV', olympiad: 'National Science Olympiad (NSO)', award: 'Gold medal', session: '2025–26' },
];

/* ---------- Celebrating every child ---------- */

/** ⚠ PLACEHOLDER: headline numbers for the last session. */
export const achievementStats = {
  session: '2025–26',
  items: [
    { value: '150+', label: 'Olympiad participants' },
    { value: '40+', label: 'Medals & trophies' },
    { value: '12', label: 'Inter-school events' },
    { value: '100%', label: 'Children on stage' },
  ],
};

/** ⚠ SAMPLE: how the school recognises effort and achievement. Icons from https://lucide.dev/icons */
export const celebrations = [
  { icon: 'sun', title: 'Achievers in assembly', text: 'Winners are called up and applauded by the whole school in the morning assembly.' },
  { icon: 'star', title: 'Star of the Month', text: 'Every class chooses a star for kindness, effort or improvement, not only for marks.' },
  { icon: 'award', title: 'Annual prize distribution', text: 'Certificates, medals and trophies are presented on Annual Day in front of families.' },
  { icon: 'hand-heart', title: 'Everyone takes part', text: 'From Nursery to Class VIII, every child performs or competes at least once a year.' },
];

/* ---------- School awards ---------- */

export interface Award {
  title: string;
  /** Who gave the award */
  by: string;
  year: number;
  /** A lucide icon name, see https://lucide.dev/icons */
  icon: string;
  text?: string;
}

/** ⚠ PLACEHOLDER: school-level awards and recognitions. */
export const awards: Award[] = [
  {
    title: 'Excellence in Primary Education',
    by: '[Awarding body]',
    year: 2026,
    icon: 'award',
    text: 'For joyful, activity-based learning and strong foundations in literacy and numeracy.',
  },
  {
    title: 'Green & Clean Campus',
    by: '[Awarding body]',
    year: 2025,
    icon: 'leaf',
    text: 'For waste segregation, a no-plastic campus and student-led tree plantation drives.',
  },
  {
    title: 'Best Olympiad Participation',
    by: '[Awarding body]',
    year: 2025,
    icon: 'medal',
    text: 'For the number of students taking part in, and winning medals at, Olympiads.',
  },
  {
    title: 'Innovation in Teaching',
    by: '[Awarding body]',
    year: 2024,
    icon: 'lightbulb',
    text: 'For smart classrooms, story-based learning and regular teacher training as per NEP 2020.',
  },
];
