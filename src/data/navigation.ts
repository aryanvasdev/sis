export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About the School', href: '/about/', description: 'Our story and what we stand for' },
      { label: 'Vision & Mission', href: '/about/#vision' },
      { label: "Principal's Message", href: '/about/#principal' },
      { label: 'Management', href: '/about/#management' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics/',
    children: [
      { label: 'Curriculum', href: '/academics/', description: 'CBSE curriculum, Nursery to Class VIII' },
      { label: 'Academic Calendar', href: '/academics/#calendar' },
      { label: 'Book List & Uniform', href: '/academics/#booklist' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions/',
    children: [
      { label: 'Admission Process', href: '/admissions/' },
      { label: 'Age Criteria', href: '/admissions/#age' },
      { label: 'Fee Structure', href: '/admissions/#fees' },
      { label: 'Admission Enquiry', href: '/admissions/#enquiry' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/facilities/',
    children: [
      { label: 'Facilities', href: '/facilities/' },
      { label: 'Student Life', href: '/student-life/' },
      { label: 'Achievements', href: '/achievements/' },
      { label: 'Photo Gallery', href: '/gallery/' },
    ],
  },
  { label: 'Notices', href: '/notices/' },
  { label: 'Contact', href: '/contact/' },
];

/** Shown in the slim bar above the header, and in the footer. */
export const utilityLinks = [
  { label: 'TC Verification', href: '/tc-verification/', icon: 'badge-check' },
  { label: 'Careers', href: '/careers/', icon: 'briefcase' },
];

export const importantLinks = [
  { label: 'NCERT Textbooks', href: 'https://ncert.nic.in/textbook.php' },
  { label: 'DigiLocker', href: 'https://www.digilocker.gov.in/' },
  { label: 'DIKSHA', href: 'https://diksha.gov.in/' },
];
