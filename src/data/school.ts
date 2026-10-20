/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SCHOOL DETAILS: edit this file first.
 *
 *  Almost every page reads from here: the header, the footer, the contact page,
 *  the admissions page, and more. Change a value once and the whole site updates.
 *
 *  Anything marked  ⚠ PLACEHOLDER  must be replaced with the school's real
 *  details before the site goes live. When everything is filled in, set
 *  `preview` to false to remove the "sample content" banner.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Year the school was founded. */
const established = 2019;

export const school = {
  /** Shows a thin banner saying the site contains sample content. Set to false at launch. */
  preview: true,

  name: 'Sahib International School',
  shortName: 'SIS',
  tagline: 'Come to learn. Go to serve.',
  /** Painted on the pillars of the school gate. */
  motto: 'Come to Learn · Go to Serve',
  mottoMeaning: 'We come to school to learn, and go out into the world to serve.',

  established,
  /** The site deliberately names no board; it only says which curriculum is followed. */
  curriculum: 'CBSE curriculum with NCERT textbooks',
  recognition: 'Permanently recognised & registered',
  classes: 'Nursery to Class VIII',
  classesShort: 'Nursery – VIII',
  medium: 'English',
  type: 'Co-educational Day School',

  currentSession: '2026–27',
  admissionSession: '2027–28',
  admissionsOpen: true,

  address: {
    line1: 'Old Anaj Mandi – Kalpi Link Road',
    line2: '',
    city: 'Saha',
    district: 'Ambala',
    state: 'Haryana',
    pincode: '133104',
  },
  /** Google Maps → Share → Embed a map → copy only the src="…" URL. Leave empty to hide the map. */
  mapEmbedUrl: '',
  /** Google Maps → Share → Copy link */
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Sahib+International+School+Kalpi+Link+Road+Saha+Ambala',

  phones: ['+91 82950 53047', '+91 74978 86980'],
  /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
  whatsapp: '918295053047',
  email: 'sahib.acadamy@gmail.com',
  admissionsEmail: 'sahib.acadamy@gmail.com',
  careersEmail: 'sahib.acadamy@gmail.com',
  officeHours: 'Mon – Sat · 8:00 AM – 2:30 PM',
  schoolHours: {
    summer: '7:30 AM – 1:30 PM (April – September)',
    winter: '8:30 AM – 2:30 PM (October – March)',
  },

  /** Photos go in /public/images/people/ */
  principal: {
    name: 'Mrs. Shivi Gulati',
    qualification: 'M.A., M.Ed.',
    /** Optional line under the principal's name, e.g. '15 years in school education'. */
    experience: '',
    email: 'sahib.acadamy@gmail.com',
    photo: '',
  },
  /** ⚠ PLACEHOLDER: chairperson / manager of the school. */
  chairperson: {
    name: '[Chairperson Name]',
    title: 'Chairperson, [Name of Trust / Society]',
    photo: '',
  },
  /** ⚠ PLACEHOLDER: the registered trust or society that runs the school. */
  trustName: '[Name of Educational Trust / Society]',

  /** Paste the school's page links here; an empty link hides that icon. */
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },

  /** Online fee payment / parent ERP portal. Leave empty to hide the buttons. */
  feePaymentUrl: '',
  parentPortalUrl: '',

  /**
   * Where enquiry forms are sent. Create a free form at https://formspree.io or
   * https://web3forms.com and paste its endpoint URL here. If left empty, the forms
   * open WhatsApp with the parent's details already typed in.
   */
  formEndpoint: '',

  /** Headline numbers shown on the home page. */
  stats: [
    { value: '500+', label: 'Happy students' },
    { value: '25+', label: 'Dedicated teachers' },
    { value: '11', label: 'Classes, Nursery to VIII' },
    { value: `${new Date().getFullYear() - established}+`, label: 'Years of trust' },
  ],
} as const;

export type School = typeof school;

export const fullAddress = [
  school.address.line1,
  school.address.line2,
  school.address.city === school.address.district
    ? school.address.city
    : `${school.address.city}, ${school.address.district}`,
  `${school.address.state} – ${school.address.pincode}`,
]
  .filter(Boolean)
  .join(', ');

export const whatsappLink = (message = '') =>
  `https://wa.me/${school.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
