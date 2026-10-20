/**
 * CONTACT PAGE: department directory and directions.
 * The main address, phone numbers, emails and timings come from src/data/school.ts.
 *
 * ⚠ SAMPLE CONTENT — replace the names, extensions, emails, landmarks and bus
 *   routes below with the school's real details. People's names are placeholders.
 */
import { school } from './school';

export interface Department {
  name: string;
  icon: string;
  /** ⚠ PLACEHOLDER: person in charge. */
  person: string;
  role: string;
  /** What parents can contact this office about. */
  handles: string;
  phone?: string;
  /** Desk extension on the main school number. */
  ext?: string;
  email?: string;
  hours?: string;
}

export const departments: Department[] = [
  {
    name: 'Admissions',
    icon: 'graduation-cap',
    person: 'Mrs. [Name]',
    role: 'Admission Coordinator',
    handles: 'Registration, campus visits, interactions and admission forms',
    phone: school.phones[0],
    ext: '201',
    email: school.admissionsEmail,
    hours: 'Mon – Sat · 9:00 AM – 1:00 PM',
  },
  {
    name: 'Accounts / Fees',
    icon: 'indian-rupee',
    person: 'Mr. [Name]',
    role: 'Accounts Officer',
    handles: 'Fee payments, receipts, concessions and refunds',
    phone: school.phones[1],
    ext: '204',
    email: 'accounts@sahibinternationalschool.in',
    hours: 'Mon – Sat · 8:30 AM – 1:30 PM',
  },
  {
    name: 'Transport',
    icon: 'bus',
    person: 'Mr. [Name]',
    role: 'Transport In-charge',
    handles: 'Bus routes, stops, pick-up timings and transport fee',
    phone: '+91 90000 00000',
    ext: '207',
    email: 'transport@sahibinternationalschool.in',
    hours: 'Mon – Sat · 7:00 AM – 3:00 PM',
  },
  {
    name: 'Principal’s Office',
    icon: 'user-round',
    person: school.principal.name,
    role: 'Principal',
    handles: 'Appointments with the Principal (please book through the front office)',
    phone: school.phones[0],
    ext: '200',
    email: school.principal.email,
    hours: 'By appointment · Mon – Fri · 11:00 AM – 12:30 PM',
  },
  {
    name: 'Examination Cell',
    icon: 'clipboard-check',
    person: 'Mrs. [Name]',
    role: 'Examination In-charge',
    handles: 'Date sheets, periodic tests, report cards and result queries',
    phone: school.phones[1],
    ext: '210',
    email: 'exams@sahibinternationalschool.in',
    hours: 'Mon – Sat · 9:00 AM – 1:00 PM',
  },
  {
    name: 'Front Office',
    icon: 'building-2',
    person: 'Ms. [Name]',
    role: 'Receptionist',
    handles: 'General enquiries, Transfer Certificates, bonafide and character certificates',
    phone: school.phones[0],
    ext: '100',
    email: school.email,
    hours: school.officeHours,
  },
];

/** ⚠ PLACEHOLDER: landmarks and travel directions. */
export const landmarks: { icon: string; label: string; text: string }[] = [
  { icon: 'map-pin', label: 'Landmark', text: 'Near [Landmark], Saha, Ambala' },
  { icon: 'bus-front', label: 'Nearest bus stop', text: '[Bus Stop Name]: about [X] km' },
  { icon: 'train-front', label: 'Nearest railway station', text: '[Station Name]: about [X] km' },
  { icon: 'car-front', label: 'Parking', text: 'Visitor parking inside the main gate. Please sign the visitor register at the gate.' },
];

/** ⚠ PLACEHOLDER: school bus routes and the main areas each one covers. */
export const busRoutes: { route: string; areas: string }[] = [
  { route: 'Route 1', areas: '[Village A] · [Village B] · [Village C]' },
  { route: 'Route 2', areas: '[Village D] · [Village E]' },
  { route: 'Route 3', areas: '[Village F] · [Village G] · [Village H]' },
  { route: 'Route 4', areas: '[Area / Village J] · [Area / Village K]' },
];
