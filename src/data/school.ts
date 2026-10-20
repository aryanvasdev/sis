/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SCHOOL DETAILS: edit this file first.
 *
 *  Almost every page reads from here: the header, the footer, the contact page,
 *  the Mandatory Public Disclosure page, and more. Change a value once and the
 *  whole site updates.
 *
 *  Anything marked  ⚠ PLACEHOLDER  must be replaced with the school's real
 *  details before the site goes live. When everything is filled in, set
 *  `preview` to false to remove the "sample content" banner.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** ⚠ PLACEHOLDER: year the school was founded. */
const established = 2005;

export const school = {
  /** Shows a thin banner saying the site contains sample content. Set to false at launch. */
  preview: true,

  name: 'Sahib International School',
  shortName: 'SIS',
  tagline: 'Rooted in values. Ready for the world.',
  /** ⚠ PLACEHOLDER: replace with the school's own motto. */
  motto: 'Tamaso Ma Jyotirgamaya',
  mottoMeaning: 'Lead us from darkness to light',

  established,
  board: 'CBSE',
  boardFull: 'Central Board of Secondary Education, New Delhi',
  /** ⚠ PLACEHOLDER: CBSE affiliation number, school code and UDISE+ code. */
  affiliationNo: 'XXXXXXX',
  schoolCode: 'XXXXX',
  udiseCode: 'XXXXXXXXXXX',
  affiliationStatus: 'Senior Secondary (Provisional / Regular)',
  classes: 'Nursery to Class XII',
  medium: 'English',
  type: 'Co-educational Day School',

  currentSession: '2026–27',
  admissionSession: '2027–28',
  admissionsOpen: true,

  /** ⚠ PLACEHOLDER: address and map. */
  address: {
    line1: 'Main Road, Near City Centre',
    line2: '',
    city: 'Your City',
    district: 'Your District',
    state: 'Punjab',
    pincode: '000000',
  },
  /** Google Maps → Share → Embed a map → copy only the src="…" URL. Leave empty to hide the map. */
  mapEmbedUrl: '',
  /** Google Maps → Share → Copy link */
  mapLink: 'https://maps.google.com/?q=Sahib+International+School',

  /** ⚠ PLACEHOLDER: contact details. */
  phones: ['+91 98765 43210', '+91 12345 67890'],
  /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
  whatsapp: '919876543210',
  email: 'info@sahibinternationalschool.in',
  admissionsEmail: 'admissions@sahibinternationalschool.in',
  careersEmail: 'careers@sahibinternationalschool.in',
  officeHours: 'Mon – Sat · 8:00 AM – 2:30 PM',
  schoolHours: {
    summer: '7:30 AM – 1:30 PM (April – September)',
    winter: '8:30 AM – 2:30 PM (October – March)',
  },

  /** ⚠ PLACEHOLDER: names and qualifications. Photos go in /public/images/people/ */
  principal: {
    name: 'Dr. [Principal Name]',
    qualification: 'M.A., M.Ed., Ph.D.',
    experience: '25+ years in school education',
    email: 'principal@sahibinternationalschool.in',
    photo: '',
  },
  chairperson: {
    name: 'S. [Chairperson Name]',
    title: 'Chairperson, [Name of Trust / Society]',
    photo: '',
  },
  /** The registered trust or society that runs the school (needed for Mandatory Disclosure). */
  trustName: '[Name of Educational Trust / Society]',

  /** Leave a link empty to hide that icon. */
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
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

  /** ⚠ PLACEHOLDER: headline numbers shown on the home page. */
  stats: [
    { value: '1,800+', label: 'Students' },
    { value: '110+', label: 'Qualified teachers' },
    { value: `${new Date().getFullYear() - established}+`, label: 'Years of excellence' },
    { value: '100%', label: 'Board pass results' },
  ],
} as const;

export type School = typeof school;

export const fullAddress = [
  school.address.line1,
  school.address.line2,
  `${school.address.city}, ${school.address.district}`,
  `${school.address.state} – ${school.address.pincode}`,
]
  .filter(Boolean)
  .join(', ');

export const whatsappLink = (message = '') =>
  `https://wa.me/${school.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
