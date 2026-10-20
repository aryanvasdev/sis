/**
 * STUDENT LIFE PAGE CONTENT
 * Used on /student-life/: houses, clubs, sports, annual events, the Student
 * Council, outreach, excursions and wellbeing.
 *
 * ⚠ SAMPLE CONTENT — replace the house names, clubs, sports and Student Council
 * members with the school's real details. Everything marked ⚠ PLACEHOLDER must
 * be checked before the site goes live.
 */

/* ---------- Houses ---------- */

/** ⚠ SAMPLE CONTENT: the school's own house names, colours and values. */
export const houses = [
  { name: 'Aravali', colour: 'Red', hex: '#b3263a', value: 'Courage', text: 'Standing firm, speaking up and trying again, like the ancient Aravali hills.' },
  { name: 'Nilgiri', colour: 'Blue', hex: '#24509a', value: 'Wisdom', text: 'Thinking clearly, listening carefully and choosing wisely, as calm as the Blue Mountains.' },
  { name: 'Shivalik', colour: 'Green', hex: '#1f7a4d', value: 'Harmony', text: 'Working together, including everyone and caring for nature and one another.' },
  { name: 'Vindhya', colour: 'Yellow', hex: '#d4a12a', value: 'Perseverance', text: 'Steady effort, every day, that turns big goals into real achievements.' },
] as const;

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
    title: 'Annual Day & cultural programmes',
    when: 'December',
    icon: 'drama',
    tone: 'maroon',
    photo: 'images/gallery/cultural-dance/01.jpg',
    alt: 'A dance troupe in red costumes ready to perform at a school event',
    ratio: '4 / 3',
    text: 'Every child gets a turn on stage: dance, music, skits and the year’s prize distribution, in front of proud families.',
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
    title: 'Annual Sports Meet',
    when: 'December',
    icon: 'trophy',
    tone: 'sky',
    text: 'March past, races, fun games for the little ones and the race for the inter-house trophy.',
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
    when: 'July',
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
    text: 'The pre-primary wing dresses in green, and every class plants and looks after saplings on campus.',
  },
  {
    title: 'Science Exhibition',
    when: 'November',
    icon: 'flask-conical',
    tone: 'plum',
    text: 'Working models and simple experiments by students from Classes III–VIII, explained to visiting parents.',
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
  { house: 'Aravali', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Nilgiri', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Shivalik', name: '[Student Name]', cls: 'Class VIII' },
  { house: 'Vindhya', name: '[Student Name]', cls: 'Class VIII' },
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
