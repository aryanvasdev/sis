/**
 * STUDENT LIFE PAGE CONTENT
 * Used on /student-life/: houses, clubs, sports, annual events, the Student
 * Council, outreach, excursions and wellbeing.
 *
 * Houses, inter-house events and the morning assembly come from the school diary.
 * ⚠ SAMPLE CONTENT — check the clubs, sports and Student Council members.
 * Everything marked ⚠ PLACEHOLDER must be checked before the site goes live.
 */

/* ---------- Houses ---------- */

/** From the school diary. `event` is the inter-house competition each house organises. */
export const houses = [
  { name: 'Kaveri', colour: 'Yellow', hex: '#d4a12a', event: 'Inter-House Rangoli Competition', when: '6 Nov', text: 'Named after the river Kaveri, which brings life to the lands of the south.' },
  { name: 'Saraswati', colour: 'Blue', hex: '#24509a', event: 'Inter-House Declamation Competition', when: '16 May', text: 'Named after the river Saraswati, linked with learning, wisdom and the arts.' },
  { name: 'Yamuna', colour: 'Green', hex: '#1f7a4d', event: 'Inter-House Group Song & Dance Competition', when: '18 Jul', text: 'Named after the river Yamuna, which flows through the plains of Haryana.' },
  { name: 'Ganga', colour: 'Red', hex: '#b3263a', event: 'Inter-House GK Quiz', when: '16 Oct', text: 'Named after the river Ganga, India’s most loved and longest river.' },
] as const;

/** The morning assembly, from the school diary: a different prayer each day of the week. */
export const assemblyPrayers = [
  { day: 'Monday', line: 'अब सौंप दिया इस जीवन का, सब भार तुम्हारे हाथों में' },
  { day: 'Tuesday', line: 'तुम्ही हो माता, पिता तुम्ही हो' },
  { day: 'Wednesday', line: 'ऐ मालिक तेरे बन्दे हम' },
  { day: 'Thursday', line: 'दया कर दान भक्ति का' },
  { day: 'Friday', line: 'हम को मन की शक्ति देना' },
  { day: 'Saturday', line: 'तू प्यार का सागर है' },
];

/* ---------- Clubs & societies ---------- */

export const clubs = [
  { name: 'Eco Club', icon: 'leaf', tone: 'green', classes: 'III–VIII', text: 'Kitchen garden, waste segregation, Green Day and plastic-free campaigns.' },
  { name: 'Science Club', icon: 'flask-conical', tone: 'navy', classes: 'V–VIII', text: 'Simple experiments, working models and preparation for science exhibitions.' },
  { name: 'Literary Club', icon: 'feather', tone: 'maroon', classes: 'III–VIII', text: 'Recitation, storytelling, debates, creative writing and book reviews.' },
  { name: 'Maths Club', icon: 'sigma', tone: 'gold', classes: 'III–VIII', text: 'Puzzles, number games, Vedic maths tricks and olympiad practice.' },
  { name: 'Quiz Club', icon: 'circle-help', tone: 'gold', classes: 'IV–VIII', text: 'General knowledge, current affairs and inter-house quiz contests.' },
  { name: 'Heritage Club', icon: 'landmark', tone: 'maroon', classes: 'V–VIII', text: 'Folk traditions, crafts, monuments and the festivals of our region, such as Teeyan.' },
  { name: 'Music Club', icon: 'music', tone: 'navy', classes: 'I–VIII', text: 'Singing, patriotic songs, the dholak and other instruments, and the school choir.' },
  { name: 'Dance Club', icon: 'footprints', tone: 'maroon', classes: 'I–VIII', text: 'Folk, classical and contemporary dance for celebrations and Annual Day.' },
  { name: 'Art Club', icon: 'palette', tone: 'green', classes: 'Nursery–VIII', text: 'Drawing, painting, clay, craft and decorations for every celebration.' },
  { name: 'Theatre Club', icon: 'drama', tone: 'gold', classes: 'III–VIII', text: 'Skits, role-play and dress-up as freedom fighters and storybook characters.' },
] as const;

/* ---------- Sports ---------- */

/**
 * `icon` is a Lucide icon name, or one of the custom glyphs drawn on the page:
 * 'cricket', 'football', 'badminton', 'table-tennis'.
 */
export const sports = [
  { name: 'Cricket', icon: 'cricket' },
  { name: 'Football', icon: 'football' },
  { name: 'Volleyball', icon: 'volleyball' },
  { name: 'Badminton', icon: 'badminton' },
  { name: 'Table Tennis', icon: 'table-tennis' },
  { name: 'Athletics', icon: 'sport-shoe' },
  { name: 'Kabaddi', icon: 'users' },
  { name: 'Kho-Kho', icon: 'footprints' },
  { name: 'Chess', icon: 'chess-knight' },
  { name: 'Yoga', icon: 'person-standing' },
  { name: 'Taekwondo', icon: 'hand-fist' },
  { name: 'Fitness & Drill', icon: 'dumbbell' },
] as const;

/* ---------- Signature events ---------- */

/**
 * `photo` is a path inside /public (leave it out to show a placeholder) and `ratio`
 * its shape. ⚠ SAMPLE CONTENT: add photos of the remaining events when available.
 */
export const signatureEvents = [
  {
    title: 'Annual Function',
    when: 'Every year',
    icon: 'drama',
    tone: 'maroon',
    photo: 'images/gallery/annual-function/01.jpg',
    alt: 'Students in tiger-striped costumes performing a group dance on the annual function stage',
    ratio: '16 / 9',
    text: 'Dance, music, speeches and the prize distribution, in front of proud families and guests.',
  },
  {
    title: 'Teeyan da Mela',
    when: 'August',
    icon: 'music',
    tone: 'gold',
    photo: 'images/gallery/teeyan-da-mela-2026/01.jpg',
    alt: 'Little children in traditional dress with a dholak at the Teeyan da Mela',
    ratio: '3 / 4',
    text: 'Our little ones dress up in traditional clothes for the festival of Teej, with folk songs, the dholak, swings and phulkari.',
  },
  {
    title: 'Independence & Republic Day',
    when: 'August & January',
    icon: 'flag',
    tone: 'navy',
    photo: 'images/gallery/independence-day-2026/01.jpg',
    alt: 'Children dressed as freedom fighters reciting on Independence Day',
    ratio: '3 / 4',
    text: 'Flag hoisting, patriotic songs, and children dressed as the freedom fighters whose stories they tell.',
  },
  {
    title: 'Gandhi Jayanti & Swachh Bharat',
    when: 'October',
    icon: 'sparkles',
    tone: 'green',
    photo: 'images/gallery/gandhi-jayanti-2026/01.jpg',
    alt: 'Children with Swachh Bharat placards at the school entrance, one dressed as Gandhi ji',
    ratio: '16 / 9',
    text: 'A cleanliness rally and pledge, with placards made by the children and a little “Gandhi ji” leading the way.',
  },
  {
    title: 'Investiture Ceremony',
    when: '8 May',
    icon: 'badge-check',
    tone: 'navy',
    text: 'The new Student Council takes its oath and receives badges and sashes in front of parents.',
  },
  {
    title: 'Festivals of all faiths',
    when: 'Through the year',
    icon: 'sparkles',
    tone: 'plum',
    photo: 'images/gallery/janmashtami-2026/04.jpg',
    alt: 'Pre-primary children holding matki artwork in front of a Happy Janmashtami chalkboard',
    ratio: '3 / 4',
    text: 'Raksha Bandhan, Janmashtami, Diwali, Gurpurab, Eid and Christmas: we celebrate together and learn the story behind each one.',
  },
  {
    title: 'Green Day & Van Mahotsav',
    when: 'July',
    icon: 'sprout',
    tone: 'green',
    photo: 'images/gallery/green-day-2026/01.jpg',
    alt: 'Collage of pre-primary children dressed in green for Green Day',
    ratio: '1 / 1',
    text: 'The pre-primary wing dresses in green, and children celebrate their birthdays by planting a sapling on campus instead of sharing sweets.',
  },
  {
    title: 'Science Exhibition',
    when: 'Every session',
    icon: 'flask-conical',
    tone: 'plum',
    photo: 'images/gallery/science-exhibition/01.jpg',
    alt: 'Two girls presenting their water purification model at the science exhibition',
    ratio: '3 / 4',
    text: 'Working models and charts made by the students, from the water cycle to a water purifier, explained to visitors.',
  },
  {
    title: 'Inter-house competitions',
    when: 'May – November',
    icon: 'swords',
    tone: 'gold',
    photo: 'images/gallery/diwali-rangoli/01.jpg',
    alt: 'Students sitting around a colourful Happy Diwali rangoli',
    ratio: '4 / 3',
    text: 'Declamation (16 May), group song and dance (18 July), GK quiz (16 October) and rangoli (6 November), each organised by one house.',
  },
  {
    title: 'Class outings',
    when: 'Every session',
    icon: 'bus',
    tone: 'green',
    photo: 'images/gallery/class-outing/01.jpg',
    alt: 'Students in house T-shirts lined up for a group photo during a class outing',
    ratio: '16 / 9',
    text: 'Days out with classmates and teachers, in house T-shirts, that the children talk about for weeks.',
  },
];

/* ---------- Student Council ---------- */

/** ⚠ PLACEHOLDER: the current Student Council. Replace each name after the Investiture Ceremony. */
export const councilSession = '2026–27';

export const councilLeaders = [
  { role: 'Head Boy', name: '[Student Name]', cls: 'Class VIII' },
  { role: 'Head Girl', name: '[Student Name]', cls: 'Class VIII' },
  { role: 'Sports Captain', name: '[Student Name]', cls: 'Class VIII' },
  { role: 'Cultural Captain', name: '[Student Name]', cls: 'Class VII' },
];

/** One captain per house, in the same order as `houses`. */
export const houseCaptains = [
  { house: 'Kaveri', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Saraswati', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Yamuna', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Ganga', name: '[Student Name]', cls: 'Class VIII' },
];

export const prefects = [
  { role: 'Discipline Prefect', name: '[Student Name]', cls: 'VIII' },
  { role: 'Academic Prefect', name: '[Student Name]', cls: 'VIII' },
  { role: 'Eco Prefect', name: '[Student Name]', cls: 'VII' },
  { role: 'Library Prefect', name: '[Student Name]', cls: 'VII' },
  { role: 'Assembly Prefect', name: '[Student Name]', cls: 'VII' },
  { role: 'Sports Prefect', name: '[Student Name]', cls: 'VI' },
];

/* ---------- Wellbeing ---------- */

/** ⚠ PLACEHOLDER: the school counsellor's name and availability. */
export const counsellor = {
  name: 'Ms. [Name]',
  qualification: 'M.A. Psychology',
  hours: 'Wednesdays and Saturdays, 9:00 AM – 12:00 PM',
};
