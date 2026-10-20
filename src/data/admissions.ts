/**
 * ADMISSIONS: key dates, age criteria, documents and FAQs for the Admissions page.
 *
 * The age table is worked out automatically from `school.admissionSession` in
 * src/data/school.ts, so it updates itself when the session changes.
 *
 * ⚠ SAMPLE CONTENT — replace the dates, visiting hours and prospectus with the
 *   school's real details. Items marked ⚠ PLACEHOLDER must be checked before launch.
 */
import { school } from './school';

/** First year of the admission session, e.g. '2027–28' → 2027. */
export const admissionYear = Number.parseInt(school.admissionSession, 10);

/** ⚠ PLACEHOLDER: classes in which fresh registrations are being accepted. */
export const classesOpen = 'Nursery to Class VIII';

/** ⚠ PLACEHOLDER: shown as a short note under the classes. */
export const otherClassesNote = 'Admission to every class is subject to the availability of seats.';

/** ⚠ PLACEHOLDER: key dates for this admission cycle (YYYY-MM-DD). */
export interface KeyDate {
  label: string;
  date: string;
  endDate?: string;
  note?: string;
}

export const keyDates: KeyDate[] = [
  { label: 'Registration opens', date: '2026-10-15' },
  { label: 'Interactions: Nursery – UKG', date: '2026-12-01', endDate: '2026-12-19', note: 'Slots shared after registration' },
  { label: 'Interactions: Classes I – VIII', date: '2027-01-09', endDate: '2027-01-30', note: 'Saturdays, by appointment' },
  { label: 'New session begins', date: `${admissionYear}-04-01` },
];

/** ⚠ PLACEHOLDER: admission office visiting hours and prospectus PDF (place the file in /public/documents/). */
export const admissionOffice = {
  visitingHours: 'Mon – Sat · 9:00 AM – 1:00 PM',
  campusTours: 'Saturdays, 10:00 AM – 12:00 noon (please call to book)',
  prospectus: `/documents/prospectus-${school.admissionSession.replace('–', '-')}.pdf`,
};

/* ---------- Age criteria ---------- */

/** Age is counted as on 31 March of the admission year (NEP 2020: Class I at 6+). */
export const ageCutoff = `${admissionYear}-03-31`;

export interface AgeRule {
  cls: string;
  minAge: number;
}

export const ageRules: AgeRule[] = [
  { cls: 'Nursery', minAge: 3 },
  { cls: 'LKG', minAge: 4 },
  { cls: 'UKG', minAge: 5 },
  { cls: 'Class I', minAge: 6 },
];

/**
 * Children who have completed `minAge` years (but not `minAge + 1`) on 31 March.
 * Returns ISO dates, e.g. Nursery 2027 → { from: '2023-04-01', to: '2024-03-31' }.
 */
export const dobRange = (minAge: number, year = admissionYear) => ({
  from: `${year - minAge - 1}-04-01`,
  to: `${year - minAge}-03-31`,
});

/* ---------- Documents ---------- */

export const documents: { title: string; note?: string }[] = [
  { title: 'Birth certificate', note: 'Issued by the Municipal Corporation / Registrar of Births and Deaths' },
  { title: 'Aadhaar card of the child and both parents', note: 'Photocopies; originals shown at verification' },
  { title: 'APAAR ID of the child, if already generated', note: 'Otherwise the school will help create it after admission' },
  { title: 'Four recent passport-size photographs of the child', note: 'And one each of the parents / guardian' },
  { title: 'Report card of the previous class', note: 'For admission to LKG and above' },
  {
    title: 'Transfer Certificate (TC) from the previous school',
    note: 'Class II onwards. If the previous school is in another state, the TC must be countersigned by the District Education Officer / education officer there.',
  },
  { title: 'Caste / EWS certificate, if applicable', note: 'Issued by the competent authority' },
  { title: 'Proof of residence', note: 'Aadhaar, electricity bill, rent agreement or passport' },
  { title: 'Medical fitness certificate', note: 'With blood group and immunisation record' },
];

/* ---------- FAQs ---------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Is there an admission test for my child?',
    a: 'No. There is no written admission test for any class. We hold a short, friendly interaction with the child and parents so that we can get to know your family; children are never asked to “perform”. For Classes II to VIII we also look at the previous report card, simply to understand where your child is and how we can help.',
  },
  {
    q: 'Can my child join in the middle of the session?',
    a: 'Yes, if a seat is available in the class, for example when a family moves to the area on transfer. Please call the admission office first so that we can check seats and guide you on the documents needed.',
  },
  {
    q: 'We are moving from another state. What extra do we need?',
    a: 'The Transfer Certificate must be countersigned by the District Education Officer (or the equivalent education officer) of that state. Please also bring the last two report cards. Our teachers will help your child settle in, with extra support in English and Hindi where needed.',
  },
  {
    q: 'Is the registration fee refundable?',
    a: 'The registration fee and admission fee are non-refundable. Caution money is a refundable security deposit and is returned, without interest, when the child leaves the school with a Transfer Certificate and all dues are cleared.',
  },
  {
    q: 'Is there a concession for siblings?',
    a: 'Yes. When two or more children of the same parents study at the school, the younger child receives a concession on the tuition fee. See the fee notes below for details.',
  },
  {
    q: 'Does the school provide transport?',
    a: 'Yes. GPS-tracked school buses with a trained driver, a conductor and a female attendant cover the city and nearby areas. The transport fee depends on the distance from school; the route list is available at the transport office.',
  },
  {
    q: 'What is an APAAR ID and do we need one?',
    a: 'APAAR (“One Nation, One Student ID”) is a lifelong academic ID for every student in India, linked to DigiLocker. If your child already has one, please share it during admission. If not, the school will help generate it after admission, with your consent.',
  },
  {
    q: 'Can we visit the school before applying?',
    a: 'Of course, and we encourage it. You are welcome to meet the admission team during visiting hours, and to book a guided campus tour to see the classrooms, labs, library, play areas and buses for yourself.',
  },
];
