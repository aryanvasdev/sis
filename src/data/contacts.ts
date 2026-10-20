/**
 * CONTACT PAGE: department directory and directions.
 * The main address, phone numbers, emails and timings come from src/data/school.ts.
 *
 * ⚠ SAMPLE CONTENT — check the office hours, and replace the landmarks and bus
 *   routes below with the school's real details.
 */
import { school } from './school';

export interface Department {
  name: string;
  icon: string;
  /** Person in charge (optional). */
  person?: string;
  role: string;
  /** What parents can contact this office about. */
  handles: string;
  phone?: string;
  email?: string;
  hours?: string;
}

export const departments: Department[] = [
  {
    name: 'Admissions',
    icon: 'graduation-cap',
    role: 'Admission office',
    handles: 'Registration, campus visits, interactions and admission forms',
    phone: school.phones[0],
    email: school.email,
    hours: 'Mon – Sat · 9:00 AM – 1:00 PM',
  },
  {
    name: 'Fees & Accounts',
    icon: 'indian-rupee',
    role: 'Accounts office',
    handles: 'Fee payments, receipts, concessions and refunds',
    phone: school.phones[1],
    email: school.email,
    hours: 'Mon – Sat · 8:30 AM – 1:30 PM',
  },
  {
    name: 'Transport',
    icon: 'bus',
    role: 'Transport desk',
    handles: 'Bus routes, stops, pick-up timings and transport fee',
    phone: school.phones[1],
    hours: 'Mon – Sat · 7:00 AM – 3:00 PM',
  },
  {
    name: 'Principal’s Office',
    icon: 'user-round',
    person: school.principal.name,
    role: 'Principal',
    handles: 'Appointments with the Principal (please book through the front office)',
    phone: school.phones[0],
    email: school.principal.email,
    hours: 'By appointment · Mon – Fri · 11:00 AM – 12:30 PM',
  },
  {
    name: 'Academics & Exams',
    icon: 'clipboard-check',
    role: 'Class teachers & exam coordinator',
    handles: 'Date sheets, periodic tests, report cards and PTMs',
    phone: school.phones[0],
    hours: 'Mon – Sat · 9:00 AM – 1:00 PM',
  },
  {
    name: 'Front Office',
    icon: 'building-2',
    role: 'Reception',
    handles: 'General enquiries, Transfer Certificates, bonafide and character certificates',
    phone: school.phones[0],
    email: school.email,
    hours: school.officeHours,
  },
];

/** Directions shown beside the map. Add a nearby bus stop or landmark if helpful. */
export const landmarks: { icon: string; label: string; text: string }[] = [
  { icon: 'map-pin', label: 'Location', text: 'On the Old Anaj Mandi – Kalpi Link Road, Saha, Ambala' },
  { icon: 'car-front', label: 'Parking', text: 'Visitor parking inside the main gate. Please sign the visitor register at the gate.' },
];

/** ⚠ PLACEHOLDER: school bus routes and the main areas each one covers. */
export const busRoutes: { route: string; areas: string }[] = [
  { route: 'Route 1', areas: '[Village A] · [Village B] · [Village C]' },
  { route: 'Route 2', areas: '[Village D] · [Village E]' },
  { route: 'Route 3', areas: '[Village F] · [Village G] · [Village H]' },
  { route: 'Route 4', areas: '[Area / Village J] · [Area / Village K]' },
];
