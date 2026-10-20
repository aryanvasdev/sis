/**
 * ABOUT PAGE CONTENT
 * Used on /about/: the vision and mission, core values, the motto, the Principal's
 * and Chairperson's messages, the teaching staff, the School Management Committee
 * and the milestones timeline.
 *
 * ⚠ SAMPLE CONTENT — replace the messages, committee members and milestone years
 * with the school's real details before the site goes live. Everything marked
 * ⚠ PLACEHOLDER is invented and must be checked.
 */
import { school } from './school';

/* ---------- Vision, mission & values ---------- */

/** From the school diary. */
export const vision = [
  'To achieve a unique blend of ancient cultural heritage and a modern scientific outlook.',
  'To create an oasis of peace and harmony in a world of violence and destruction, in keeping with the basic principles of non-violence.',
  'To develop students as total quality people with integrity, character and good values.',
];

/** From the school diary. */
export const mission =
  'We want our pupils to become self-confident but not arrogant, tolerant but not subservient, ambitious but not ruthless, determined yet self-controlled.';

/** The line on the cover of the school diary. */
export const diaryMotto = 'Think Today, Change Tomorrow';

export const coreValues = [
  { icon: 'scale', title: 'Integrity', text: 'We are honest in our work and fair in our dealings, even when no one is watching.', tone: '' },
  { icon: 'heart-handshake', title: 'Respect', text: 'We value every person, every culture and every faith, and we listen before we judge.', tone: 'maroon' },
  { icon: 'lightbulb', title: 'Curiosity', text: 'We ask questions, explore ideas and treat mistakes as a natural part of learning.', tone: 'navy' },
  { icon: 'hand-heart', title: 'Compassion', text: 'We look out for one another and for the community and environment around us.', tone: 'green' },
  { icon: 'award', title: 'Excellence', text: 'We give our best effort in the classroom, on the playground and on the stage.', tone: '' },
  { icon: 'shield-check', title: 'Responsibility', text: 'We keep our promises, own our choices and take care of our school and our world.', tone: 'navy' },
] as const;

/* ---------- Motto ---------- */

/**
 * The two halves of the motto painted on the school gate pillars, with what each
 * means to the school. Keep in step with `motto` in school.ts.
 */
export const mottoParts = [
  {
    words: 'Come to Learn',
    icon: 'book-open',
    text: 'Every morning, children walk through our gate to learn: to read and reason, to ask questions, to discover their talents and to build good habits that last a lifetime.',
  },
  {
    words: 'Go to Serve',
    icon: 'hand-heart',
    text: 'Every afternoon, and one day for good, they walk back out to use what they have learned in the service of their families, their neighbours, their community and their country.',
  },
];

export const mottoNote = 'Painted on the pillars of our school gate, our motto reminds every child, parent and teacher of why we are here.';

/* ---------- Messages ---------- */

/** ⚠ SAMPLE CONTENT: replace with the Principal's own message (one string per paragraph). */
export const principalMessage = [
  'Dear Parents and Students,',
  `It gives me great joy to welcome you to ${school.name}. A school is far more than its building; it is a family of children, teachers and parents who believe that every child deserves the chance to discover what they are capable of. That belief guides everything we do, from the first day of Nursery to the last day of Class VIII.`,
  'We follow the CBSE curriculum with NCERT textbooks, in the spirit of the National Education Policy 2020. We want our students to understand concepts deeply, apply them to real situations and ask “why?” as often as they ask “what?”. Smart classrooms and activity-based lessons help, but the heart of our school remains the teacher who knows each child by name, notices when something is wrong and celebrates every small step forward.',
  'We care just as much about the growth of the whole child. Dance, music, art, sports and celebrations such as Teeyan da Mela, Janmashtami, Independence Day and Gandhi Jayanti are part of school life, not an afterthought. Through the house system and the Student Council, children learn to lead and to work as a team. Above all, we expect honesty, good manners and respect for every person, culture and faith.',
  `Parents are our most important partners. Please read and sign your child’s school diary every day: the teachers’ remarks and homework in it are our daily link between home and school. Attend parent–teacher meetings, read our circulars, and if an issue needs urgent attention, meet the class teacher or me; my office is open from ${school.principalHours}.`,
  'The holistic development of every student is our prime concern, and we seek your cooperation to achieve it. Please remember, productive collaboration is the key to success. Together, let us live out the words on our gate, so that our children come to learn and go to serve.',
];

/** ⚠ SAMPLE CONTENT: replace with the Chairperson's own message (one string per paragraph). */
export const chairpersonMessage = [
  `When ${school.trustName} founded ${school.name} in ${school.established}, our aim was simple: to give the children of our area a school that combines sound learning with good values, at a fee that families can afford.`,
  'Year by year we have added classrooms, smart boards, play areas and, most of all, a caring and capable team of teachers. We will keep investing, so that our children can hold their own anywhere while remaining grounded in the culture and community that shaped them.',
  'I thank our parents for the trust they place in us, and our staff for the dedication they bring to their work every single day.',
];

/* ---------- Teachers ---------- */

/** ⚠ PLACEHOLDER: check the number and qualifications with the school office. */
export const teachers = {
  count: 'About 25',
  photo: 'images/people/our-teachers.jpg',
  points: [
    'Trained graduate and nursery teachers (B.Ed. / NTT / ECCE)',
    'A class teacher for every section, who knows each child well',
    'Regular workshops on NEP 2020, activity-based teaching and child safety',
    'Small, friendly team where every teacher knows every family',
  ],
};

/* ---------- School Management Committee ---------- */

/**
 * ⚠ PLACEHOLDER: the School Management Committee (SMC). Replace every name and
 * check the composition against the school's own records.
 */
export const smcTerm = '2025–26 to 2027–28';

export interface CommitteeMember {
  name: string;
  role: string;
  category: string;
}

export const managementCommittee: CommitteeMember[] = [
  { name: school.chairperson.name, role: 'Chairperson', category: 'Nominee of the Trust / Society' },
  { name: 'Mr. [Name]', role: 'Manager / Secretary', category: 'Nominee of the Trust / Society' },
  { name: 'Mrs. [Name]', role: 'Member', category: 'Nominee of the Trust / Society' },
  { name: 'Dr. [Name]', role: 'Member', category: 'Educationist' },
  { name: 'Mrs. [Name]', role: 'Member', category: 'Educationist / nominee member' },
  { name: 'Mrs. [Name]', role: 'Member', category: 'Teacher representative' },
  { name: 'Mrs. [Name]', role: 'Member', category: 'Teacher representative' },
  { name: 'Mr. [Name]', role: 'Member', category: 'Parent representative' },
  { name: 'Mrs. [Name]', role: 'Member', category: 'Parent representative' },
  { name: school.principal.name, role: 'Member Secretary (ex officio)', category: 'Principal of the school' },
];

/* ---------- Milestones ---------- */

/**
 * ⚠ SAMPLE CONTENT: replace the years and events with the school's real history.
 * Every year must be the founding year or later.
 */
export const milestones = [
  { year: String(school.established), title: 'The school opens its doors', text: 'Classes begin for pre-primary and primary children, with a small, dedicated team of teachers.' },
  { year: '2021', title: 'Growing to Class VIII', text: 'Middle classes are added step by step, and the school now runs from Nursery to Class VIII.' },
  { year: '2024', title: 'Play-based early years', text: 'A play-based programme in the spirit of NEP 2020 for Nursery to Class II.' },
  { year: '2026', title: `Admissions for ${school.admissionSession}`, text: 'A growing school family opens its doors to new children for the coming session.' },
];
