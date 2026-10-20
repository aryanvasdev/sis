/**
 * CAREERS: current openings at the school (shown on /careers/).
 *
 *  - Add a new opening at the TOP of the list. Dates are YYYY-MM-DD.
 *  - An opening disappears from the page automatically once `lastDate` has passed
 *    (the site needs to be rebuilt for that to happen). Leave `lastDate` out to keep
 *    a post open until you delete it.
 *  - Qualifications are written as per NCTE norms. Check them against the latest
 *    NCTE / state notifications before advertising.
 *    Note: since the Supreme Court’s judgment of August 2023 (Devesh Sharma v. Union
 *    of India), B.Ed. is no longer accepted as the training qualification for primary
 *    teachers (Classes I – V); D.El.Ed. / B.El.Ed. is required for PRT posts.
 *
 * ⚠ SAMPLE CONTENT — replace with the school's real vacancies, or empty the list
 *   (`export const openings: Opening[] = [];`) when there are none.
 */

/** ⚠ PLACEHOLDER: "Why work with us" cards. Keep only the benefits the school actually offers. */
export const benefits: { icon: string; title: string; text: string; tone?: 'navy' | 'maroon' | 'green' }[] = [
  {
    icon: 'graduation-cap',
    title: 'Grow as a professional',
    text: 'Regular in-house workshops and outside training programmes, from phonics and activity-based learning to classroom management and new NCERT textbooks.',
  },
  {
    icon: 'heart-handshake',
    title: 'Supportive leadership',
    text: 'An approachable Principal, mentoring for new colleagues and an open door for fresh ideas.',
    tone: 'navy',
  },
  {
    icon: 'monitor-smartphone',
    title: 'Tools to teach well',
    text: 'Bright classrooms, a library and the teaching aids you need to plan lively, engaging lessons.',
    tone: 'green',
  },
  {
    icon: 'wallet',
    title: 'Fair and timely salary',
    text: 'Salary credited on time every month, annual increments based on performance, and statutory benefits such as EPF as per rules.',
    tone: 'maroon',
  },
  {
    icon: 'school',
    title: 'Concession for staff children',
    text: 'Children of our staff can study at the school with a concession on the tuition fee.',
  },
  {
    icon: 'users',
    title: 'A close-knit staff room',
    text: 'A small, friendly team where colleagues plan together, share resources and celebrate each other’s successes.',
    tone: 'navy',
  },
];

export type JobCategory = 'Teaching' | 'Co-curricular';

export interface Opening {
  /** Short reference used in the email subject line. */
  ref: string;
  title: string;
  category: JobCategory;
  /** Classes or wing the post is for. */
  level: string;
  positions: number;
  type: 'Full-time' | 'Part-time' | 'Contract';
  qualifications: string[];
  experience: string;
  preferred?: string;
  postedOn: string;
  lastDate?: string;
}

const tgt = (subject: string, ref: string, degree: string, preferred?: string): Opening => ({
  ref,
  title: `TGT ${subject}`,
  category: 'Teaching',
  level: 'Classes VI – VIII',
  positions: 1,
  type: 'Full-time',
  qualifications: [degree, 'B.Ed. from an NCTE-recognised institution', 'CTET Paper II or HTET Level 2 (TGT) qualified'],
  experience: '1–2 years of teaching middle-school classes preferred',
  preferred,
  postedOn: '2026-10-10',
  lastDate: '2026-11-30',
});

/** ⚠ PLACEHOLDER: current vacancies. */
export const openings: Opening[] = [
  {
    ref: 'SIS-NTT',
    title: 'Nursery Teacher (NTT)',
    category: 'Teaching',
    level: 'Nursery – UKG',
    positions: 1,
    type: 'Full-time',
    qualifications: [
      'Senior Secondary with at least 50% marks; graduates preferred',
      'NTT / Diploma in Early Childhood Care and Education (ECCE)',
    ],
    experience: '1+ year with young children',
    preferred: 'Warm, patient and creative, with a love of rhymes, stories, music and play',
    postedOn: '2026-10-12',
    lastDate: '2026-11-30',
  },
  {
    ref: 'SIS-PRT',
    title: 'PRT (Various Subjects)',
    category: 'Teaching',
    level: 'Classes I – V · English, Hindi, Mathematics, EVS',
    positions: 2,
    type: 'Full-time',
    qualifications: [
      'Graduate with at least 50% marks',
      'D.El.Ed. (2-year) or B.El.Ed., as per NCTE norms',
      'CTET Paper I or HTET Level 1 (PRT) qualified',
    ],
    experience: 'Freshers with good communication skills may apply; experience is an advantage',
    preferred: 'Comfortable with activity-based learning and phonics',
    postedOn: '2026-10-12',
    lastDate: '2026-11-30',
  },
  tgt('English', 'SIS-TGT-ENG', 'Graduate with English (at least 50% marks)', 'Good spoken English; experience with debates, recitation or the school magazine'),
  tgt('Mathematics', 'SIS-TGT-MAT', 'Graduate with Mathematics (at least 50% marks)', 'Comfortable with maths lab activities and hands-on teaching aids'),
  tgt('Science', 'SIS-TGT-SCI', 'B.Sc. with at least 50% marks', 'Enjoys experiments, science fairs and project work'),
  tgt('Social Science', 'SIS-TGT-SST', 'Graduate with History / Geography / Political Science (at least 50% marks)', 'Uses maps, models and field visits to bring the subject alive'),
  tgt('Hindi', 'SIS-TGT-HIN', 'Graduate with Hindi (at least 50% marks)'),
  tgt('Punjabi / Sanskrit', 'SIS-TGT-PS', 'Graduate with Punjabi or Sanskrit (at least 50% marks)', 'Able to teach both languages'),
  {
    ref: 'SIS-PET',
    title: 'Sports Coach / PTI',
    category: 'Co-curricular',
    level: 'Nursery – Class VIII',
    positions: 1,
    type: 'Full-time',
    qualifications: ['B.P.Ed. or D.P.Ed. from a recognised institution', 'NIS certificate in a sport is an advantage'],
    experience: '1+ year of coaching school children',
    preferred: 'Can take yoga and lead teams for inter-school and district events',
    postedOn: '2026-10-08',
    lastDate: '2026-11-30',
  },
  {
    ref: 'SIS-ART',
    title: 'Art / Music / Dance Teacher',
    category: 'Co-curricular',
    level: 'Nursery – Class VIII',
    positions: 1,
    type: 'Part-time',
    qualifications: [
      'Degree or diploma in Fine Arts, Music (vocal / instrumental) or Dance from a recognised institution',
    ],
    experience: '1+ year of teaching children',
    preferred: 'Can prepare students for assemblies, festivals and the annual function',
    postedOn: '2026-10-08',
    lastDate: '2026-11-30',
  },
];

/** Openings whose last date has not passed (`today` as YYYY-MM-DD; defaults to the build date). */
export const currentOpenings = (today = new Date().toISOString().slice(0, 10)) =>
  openings.filter((o) => !o.lastDate || o.lastDate >= today);
