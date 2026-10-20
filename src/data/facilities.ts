/**
 * FACILITIES, TRANSPORT & SAFETY
 * Used on the Facilities page (/facilities/).
 *
 * Photos: put the school's photos in /public/images/campus/ (or /facilities/) and set
 * `photo` on a facility, e.g. photo: 'images/campus/library.jpg'. Until a photo is set,
 * a decorative placeholder is drawn with the facility's icon and colour.
 *
 * ⚠ SAMPLE CONTENT — check every number and description against the school's real
 * facilities, and replace the bus routes, timings and hospital name. Values marked
 * ⚠ PLACEHOLDER are guesses and must be confirmed before the site goes live.
 */

export type Tone = 'navy' | 'gold' | 'maroon' | 'green' | 'sky' | 'plum';
/** Colour of the small icon square on cards ('' = gold). */
export type BadgeTone = '' | 'navy' | 'maroon' | 'green';

/** ⚠ PLACEHOLDER: fleet size and CCTV count, used in several places below. */
const vehicleCount = 6;
const cctvCount = '40+';

/* ---------- At a glance ---------- */

/** Headline numbers shown at the top of the page. The first one is shown larger. */
export const campusStats = [
  { value: 'Nursery – VIII', label: 'Co-educational, English medium', icon: 'school' },
  // ⚠ PLACEHOLDER: the four numbers below
  { value: '25', label: 'Teachers', icon: 'users' },
  { value: '16', label: 'Smart classrooms', icon: 'presentation' },
  { value: String(vehicleCount), label: 'GPS-tracked school vehicles', icon: 'bus' },
  { value: cctvCount, label: 'CCTV cameras', icon: 'cctv' },
];

/** Photo beside the introduction (path inside /public). */
export const introPhoto = {
  src: 'images/gallery/gandhi-jayanti-2026/01.jpg',
  alt: 'Young pupils holding Swachh Bharat placards outside the school’s main entrance building.',
  caption: 'Our main entrance, on Gandhi Jayanti 2026',
};

/* ---------- Headline facilities (photo + text rows) ---------- */

export interface Facility {
  /** Used as the anchor, e.g. /facilities/#library */
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  icon: string;
  tone: Tone;
  /** Path inside /public, e.g. 'images/campus/library.jpg' */
  photo?: string;
  photoAlt?: string;
  /** Highlight shown on the photo, e.g. { value: '3,000+', label: 'books' } */
  badge?: { value: string; label: string };
}

export const featureFacilities: Facility[] = [
  {
    id: 'classrooms',
    eyebrow: 'Smart classrooms',
    title: 'Bright, cheerful classrooms with digital boards',
    text: 'Our classrooms are airy, well lit and full of the children’s own work. Each has a digital board, so lessons come alive with pictures, animations and short videos alongside the textbook, and every child can see and take part.',
    points: [
      'Digital boards with lesson-linked content',
      'Comfortable, child-sized furniture for every age',
      'Soft boards in every room to display children’s work',
      'Classrooms cleaned and aired every day',
    ],
    icon: 'presentation',
    tone: 'navy',
    photo: 'images/campus/classroom.jpg',
    photoAlt: 'A class of students in school uniform smiling with their class teacher in their classroom.',
  },
  {
    id: 'science-lab',
    eyebrow: 'Science lab',
    title: 'An integrated science lab for curious minds',
    text: 'Physics, chemistry and biology come together in one well-equipped science lab. Students of Classes VI–VIII carry out the activities and experiments from their textbooks themselves, and younger classes visit for simple, hands-on demonstrations.',
    points: [
      'Apparatus, models, charts and specimens for Classes VI–VIII',
      'Experiments done by the students, guided by their science teacher',
      'Clear safety rules, a fire extinguisher and a first-aid kit in the lab',
      'Projects and working models made by the students',
    ],
    icon: 'microscope',
    tone: 'green',
  },
  {
    id: 'computer-lab',
    eyebrow: 'Computer lab',
    title: 'A computer lab for the digital age',
    text: 'Children meet computers from Class I and, as they grow, move on to typing, drawing, presentations, safe use of the internet and simple coding. Every class has regular, supervised practical periods in the lab.',
    points: [
      // ⚠ PLACEHOLDER: number of computers
      '25 computers, so each child has a system in practical periods',
      'Internet with content filtering and teacher supervision',
      'Power back-up for uninterrupted classes',
      'Lessons on staying safe and kind online',
    ],
    icon: 'monitor',
    tone: 'sky',
    badge: { value: '25', label: 'computers' },
  },
  {
    id: 'library',
    eyebrow: 'Library',
    title: 'A library that grows young readers',
    text: 'A cosy, colourful library with picture books for the little ones, stories and general-knowledge books for older children, and children’s magazines and newspapers. Every class has a library period each week, and our reading programme helps children read for pleasure.',
    points: [
      // ⚠ PLACEHOLDER: book count
      '3,000+ books in English and Hindi',
      'A weekly library period for every class',
      'Story-telling sessions for the pre-primary and primary classes',
      'Book talks and reading challenges to build the reading habit',
    ],
    icon: 'library',
    tone: 'maroon',
    badge: { value: '3,000+', label: 'books' },
  },
];

/* ---------- More facilities (card grid) ---------- */

export interface MiniFacility {
  title: string;
  text: string;
  points: string[];
  icon: string;
  tone: BadgeTone;
}

export const moreFacilities: MiniFacility[] = [
  {
    title: 'Playground & games',
    text: 'An open playground for outdoor games, races, PT and drill, where every child gets time to run and play.',
    points: ['Daily outdoor play and PT periods', 'Yoga for all classes', 'Indoor games such as chess and carrom'],
    icon: 'trophy',
    tone: 'green',
  },
  {
    title: 'Activity & art room',
    text: 'A bright room for drawing, painting, clay modelling and craft, where children’s work is proudly displayed.',
    points: ['Art and craft for every class', 'Festival decorations and display boards made by the children'],
    icon: 'palette',
    tone: '',
  },
  {
    title: 'Music & dance room',
    text: 'A dedicated room for singing, instruments and dance, where children prepare for assemblies, festivals and cultural programmes.',
    // ⚠ PLACEHOLDER: instruments available
    points: ['Harmonium, dholak and keyboard', 'Folk and classical dance'],
    icon: 'music',
    tone: 'maroon',
  },
  {
    title: 'Pre-primary play area',
    text: 'A safe, colourful corner just for our youngest learners, with child-sized play equipment and toys.',
    // ⚠ PLACEHOLDER: equipment
    points: ['Slides, swings and ride-on toys', 'Activity corners with blocks and puzzles', 'Toilets close to the pre-primary classrooms'],
    icon: 'toy-brick',
    tone: '',
  },
  {
    title: 'Medical room',
    text: 'A clean medical room with a bed and first-aid supplies, looked after by staff trained in first aid.',
    points: [
      'First aid for minor injuries',
      'Parents informed straight away if a child is unwell',
      // ⚠ PLACEHOLDER: name of the tie-up hospital
      'Tie-up with [Hospital Name] for emergencies',
    ],
    icon: 'stethoscope',
    tone: 'maroon',
  },
  {
    title: 'RO drinking water',
    text: 'Purified RO drinking water for students and staff, from coolers that are cleaned and serviced regularly.',
    points: ['Water quality checked periodically', 'Children encouraged to carry their own bottles'],
    icon: 'glass-water',
    tone: 'navy',
  },
];

/* ---------- Transport ---------- */

export const transport = {
  vehicles: vehicleCount,
  /** ⚠ PLACEHOLDER: when parents can reach the transport desk. */
  officeHours: '8:00 AM – 2:30 PM, Monday to Saturday',
  /** ⚠ PLACEHOLDER: which timings the routes table shows. */
  timingsNote: 'Winter timings (October – March). Summer pick-ups are about one hour earlier.',
};

export const transportFeatures = [
  { icon: 'satellite', title: 'GPS tracking', text: 'Every vehicle is tracked live by the school throughout the journey.' },
  { icon: 'cctv', title: 'CCTV on board', text: 'Cameras inside each vehicle, with recordings checked regularly.' },
  { icon: 'user-round-check', title: 'Lady attendant', text: 'A lady attendant on every vehicle, who sees children on and off safely.' },
  { icon: 'id-card', title: 'Trained, verified drivers', text: 'Experienced drivers with valid licences and police verification.' },
  {
    icon: 'shield-check',
    title: 'Safe school-vehicle norms',
    text: 'Speed governor, first-aid box, fire extinguisher and window grills, as required by the state’s safe school-vehicle norms.',
  },
  { icon: 'phone', title: 'Parents kept informed', text: 'A call or WhatsApp message for any delay or change of route.' },
];

export interface BusRoute {
  route: string;
  areas: string[];
  /** First to last stop, e.g. '7:30 – 8:05 AM' */
  pickup: string;
  drop: string;
}

/** ⚠ PLACEHOLDER: the school's real routes, stops and timings. */
export const busRoutes: BusRoute[] = [
  { route: 'R-01', areas: ['Saha town', 'Saha market', 'nearby colonies'], pickup: '7:45 – 8:10 AM', drop: '2:40 – 3:05 PM' },
  { route: 'R-02', areas: ['[Village A]', '[Village B]', '[Village C]'], pickup: '7:30 – 8:05 AM', drop: '2:40 – 3:15 PM' },
  { route: 'R-03', areas: ['[Village D]', '[Village E]', '[Village F]'], pickup: '7:25 – 8:05 AM', drop: '2:40 – 3:20 PM' },
  { route: 'R-04', areas: ['[Area G]', '[Area H]', 'towards Ambala'], pickup: '7:15 – 8:00 AM', drop: '2:40 – 3:25 PM' },
];

/* ---------- Safety & security ---------- */

/** Shown beside the photo of the main gate. */
export const entrance = {
  photo: 'images/campus/school-gate.jpg',
  photoAlt: 'The main gate of the school, with the school building and its name board behind it.',
  points: [
    'A guard at the gate throughout the school day',
    'Visitors checked, entered in the register and given a visitor pass',
    'Children handed over only to parents or authorised guardians',
    'CCTV covering the gate and the campus',
  ],
};

export const safetyMeasures = [
  {
    icon: 'cctv',
    title: 'CCTV surveillance',
    text: `${cctvCount} cameras cover the gate, corridors, staircases and play areas, and are monitored during school hours.`,
  },
  {
    icon: 'fire-extinguisher',
    title: 'Fire safety & drills',
    text: 'Fire extinguishers on every floor, clearly marked exits, and evacuation and earthquake drills every term.',
  },
  {
    icon: 'briefcase-medical',
    title: 'First aid & care',
    text: 'First-aid kits in every block and vehicle, a medical room, and staff trained in basic first aid.',
  },
  {
    icon: 'user-check',
    title: 'Verified, caring staff',
    text: 'Police verification of all teaching and support staff; lady staff look after the pre-primary children.',
  },
];

/** Committees for child safety and welfare. `basis` is optional. */
export const committees: { name: string; basis?: string; text: string }[] = [
  {
    name: 'POCSO Committee',
    basis: 'Protection of Children from Sexual Offences (POCSO) Act, 2012',
    text: 'Builds awareness, ensures child-safe practices and handles any complaint promptly, sensitively and in confidence.',
  },
  {
    name: 'Anti-Bullying Committee',
    text: 'Works to prevent bullying and teasing, in person or online, counsels the children involved and acts on every complaint.',
  },
  {
    name: 'School Safety Committee',
    basis: 'National Disaster Management Authority (NDMA) school safety guidelines',
    text: 'Regularly checks the building, fire safety and transport, and plans disaster-preparedness drills.',
  },
  {
    name: 'Grievance Redressal Committee',
    text: 'Gives parents, students and staff a fair, time-bound way to raise and resolve concerns.',
  },
];
