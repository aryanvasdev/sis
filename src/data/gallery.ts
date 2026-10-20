/**
 * PHOTO GALLERY
 * Used on the Photo Gallery page (/gallery/). Albums are shown newest first; albums
 * dated with only a year (e.g. '2026') come after the dated ones.
 *
 * HOW TO ADD PHOTOS
 *  1. Resize each photo to about 1600 px on the longest side (JPG, ideally under 400 KB).
 *  2. Put the files in a folder named after the album's `id`, inside public/images/gallery/:
 *       public/images/gallery/annual-day-2026/01.jpg
 *  3. Add the photo to the album, with `src` set to that path without "public/":
 *       { src: 'images/gallery/annual-day-2026/01.jpg', caption: '…', alt: '…' }
 *     - caption: a short line shown under the photo.
 *     - alt:     a one-sentence description of what the photo shows, read out to
 *                visitors who use screen readers. Describe the scene; do not name children.
 *     - focus:   optional. Tiles are cropped to the same shape; if faces are cut off,
 *                set which part to keep, e.g. 'center 60%' (0% = top, 100% = bottom).
 *  A photo without `src` shows a decorative placeholder (its `icon` on a `tone` colour).
 *
 * HOW TO ADD AN ALBUM
 *  Copy an album block, give it a unique `id` (lower-case, hyphens; also the folder name),
 *  a date ('YYYY-MM-DD', or 'YYYY-MM' / 'YYYY' if the exact day is not known) and one of
 *  the categories below.
 *
 * Please publish only photos for which parents have given consent.
 */

import { formatDate } from '../lib/format';

export type Tone = 'navy' | 'gold' | 'maroon' | 'green' | 'sky' | 'plum';

/** Filter chips appear in this order (only for categories that have albums). */
export const galleryCategories = ['Events', 'Celebrations', 'Sports', 'Academics', 'Campus'] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryPhoto {
  /** Path inside /public, e.g. 'images/gallery/janmashtami-2026/01.jpg'. Leave out for a placeholder. */
  src?: string;
  caption: string;
  /** What the photo shows, for screen readers. */
  alt: string;
  /** Which part of the photo to keep when the tile crops it (CSS object-position). Default 'center 25%'. */
  focus?: string;
  /** Placeholder icon (any name from https://lucide.dev/icons). Defaults to the album's icon. */
  icon?: string;
  /** Placeholder colour. Defaults to the album's tone. */
  tone?: Tone;
}

export interface Album {
  id: string;
  title: string;
  /** 'YYYY-MM-DD', 'YYYY-MM' or 'YYYY' */
  date: string;
  category: GalleryCategory;
  description?: string;
  /** Placeholder icon and colour for photos that do not have `src` yet. */
  icon: string;
  tone: Tone;
  photos: GalleryPhoto[];
}

export const albums: Album[] = [
  {
    id: 'gandhi-jayanti-2026',
    title: 'Gandhi Jayanti & Swachh Bharat',
    date: '2026-10-02',
    category: 'Celebrations',
    description: 'Our youngest students spread the message of cleanliness and remembered Gandhi ji’s ideals.',
    icon: 'flag',
    tone: 'navy',
    photos: [
      {
        src: 'images/gallery/gandhi-jayanti-2026/01.jpg',
        caption: 'Little Swachh Bharat ambassadors at the school entrance',
        alt: 'Young children in white kurta-pyjamas holding hand-made Swachh Bharat placards outside the school’s main entrance.',
      },
      {
        src: 'images/gallery/gandhi-jayanti-2026/02.jpg',
        caption: 'Placards with messages on cleanliness',
        alt: 'A group of young students, mostly dressed in white, holding placards with cleanliness slogans in front of the school building.',
      },
      {
        src: 'images/gallery/gandhi-jayanti-2026/03.jpg',
        caption: 'Pre-primary children re-enact the Dandi Yatra',
        alt: 'Pre-primary children in white with a “Dandi Yatra” placard, led by a little boy dressed as Gandhi ji with a walking stick.',
      },
      {
        src: 'images/gallery/gandhi-jayanti-2026/04.jpg',
        caption: '“Be the change you want to see in the world”',
        alt: 'A colourful Gandhi Jayanti display board with the quote “Be the change you want to see in the world”, a sketch of Gandhi ji, the three wise monkeys and paper flowers.',
      },
    ],
  },
  {
    id: 'janmashtami-2026',
    title: 'Janmashtami',
    date: '2026-09-04',
    category: 'Celebrations',
    description: 'Colourful costumes, matki artwork and hand-made cards.',
    icon: 'sparkles',
    tone: 'gold',
    photos: [
      {
        src: 'images/gallery/janmashtami-2026/01.jpg',
        caption: 'Radha and Krishna',
        alt: 'Two students dressed as Radha and Krishna in bright yellow and orange costumes, with a peacock-feather crown and a flute.',
      },
      {
        src: 'images/gallery/janmashtami-2026/02.jpg',
        caption: 'Dressed up for Janmashtami',
        alt: 'Two students dressed as Radha and Krishna in pink and yellow, wearing flower garlands.',
        focus: 'center 30%',
      },
      {
        src: 'images/gallery/janmashtami-2026/03.jpg',
        caption: 'Pre-primary children with their matki artwork',
        alt: 'Pre-primary children dressed in yellow, some wearing Krishna crowns, holding up colourful paper matki (pot) artwork.',
        focus: 'center 50%',
      },
      {
        src: 'images/gallery/janmashtami-2026/04.jpg',
        caption: 'Janmashtami cards made in class',
        alt: 'Children holding the Janmashtami cards they made, in front of a chalkboard drawing that reads “Happy Janmashtami”.',
      },
    ],
  },
  {
    id: 'raksha-bandhan-2026',
    title: 'Raksha Bandhan',
    date: '2026-08-28',
    category: 'Celebrations',
    description: 'Celebrating the bond between brothers and sisters.',
    icon: 'heart-handshake',
    tone: 'maroon',
    photos: [
      {
        src: 'images/gallery/raksha-bandhan-2026/01.jpg',
        caption: 'Tying a rakhi',
        alt: 'A little girl ties a rakhi on a boy’s wrist at a table, under a decorated “Happy Raksha Bandhan” backdrop with marigold garlands.',
        focus: 'center 62%',
      },
      {
        src: 'images/gallery/raksha-bandhan-2026/02.jpg',
        caption: 'Rakhi celebrations in the pre-primary wing',
        alt: 'Two young children tying a rakhi at a table with a decorated thali, under marigold garlands and balloons.',
        focus: 'center 62%',
      },
    ],
  },
  {
    id: 'independence-day-2026',
    title: 'Independence Day',
    date: '2026-08-15',
    category: 'Events',
    description: 'Children dressed as freedom fighters and spoke about their lives.',
    icon: 'flag',
    tone: 'green',
    photos: [
      {
        src: 'images/gallery/independence-day-2026/01.jpg',
        caption: 'Young freedom fighters take the stage',
        alt: 'A collage of six children dressed as freedom fighters and national leaders, each speaking at a microphone in front of an Independence Day backdrop with the Tricolour.',
      },
    ],
  },
  {
    id: 'teeyan-da-mela-2026',
    title: 'Teeyan da Mela (Teej)',
    date: '2026-08',
    category: 'Celebrations',
    description: 'Celebrating the monsoon festival of Teej with folk songs and the dholak.',
    icon: 'music',
    tone: 'plum',
    photos: [
      {
        src: 'images/gallery/teeyan-da-mela-2026/01.jpg',
        caption: 'Little ones at the Teeyan da Mela corner',
        alt: 'Little children in traditional suits sitting with a dholak and a decorated hand fan at the Teeyan da Mela corner, with a hand-painted sign and colourful fabric behind them.',
        focus: 'center 40%',
      },
    ],
  },
  {
    id: 'green-day-2026',
    title: 'Green Day (Pre-primary)',
    date: '2026-07',
    category: 'Events',
    description: 'Our little ones dressed in green and learnt all about the colour of nature.',
    icon: 'leaf',
    tone: 'green',
    photos: [
      {
        src: 'images/gallery/green-day-2026/01.jpg',
        caption: 'Everything green!',
        alt: 'A collage of four photos of pre-primary children dressed in green, standing in front of a green classroom display with balloons.',
      },
    ],
  },
  {
    id: 'cultural-dance',
    title: 'Cultural Programmes',
    date: '2026',
    category: 'Events',
    description: 'Our dancers on stage at school and inter-school events.',
    icon: 'drama',
    tone: 'maroon',
    photos: [
      {
        src: 'images/gallery/cultural-dance/01.jpg',
        caption: 'Our dance troupe at an inter-school event',
        alt: 'A dance troupe of students in red and white costumes with ornate headdresses, lined up outdoors at an inter-school cultural event.',
      },
      {
        src: 'images/gallery/cultural-dance/02.jpg',
        caption: 'Dancers in their orange lehengas',
        alt: 'Girls in orange and red lehengas with golden dupattas and flowers in their hair, posing together after a dance performance.',
      },
    ],
  },
  {
    id: 'school-life',
    title: 'Life at School',
    date: '2026',
    category: 'Campus',
    description: 'Everyday moments with our students and teachers.',
    icon: 'school',
    tone: 'navy',
    photos: [
      {
        src: 'images/gallery/school-life/01.jpg',
        caption: 'Students with their class teacher',
        alt: 'A class of students in school uniform smiling with their class teacher in their classroom.',
      },
      {
        src: 'images/gallery/school-life/02.jpg',
        caption: 'Our teaching staff',
        alt: 'The school’s teaching staff standing together in front of the main entrance.',
      },
    ],
  },
];

/** Newest first. 'YYYY-MM' and 'YYYY' dates sort after the full dates in the same month or year. */
export const sortedAlbums = () => [...albums].sort((a, b) => b.date.localeCompare(a.date));

/** '2026-10-02' → '2 Oct 2026', '2026-08' → 'Aug 2026', '2026' → '2026' */
export const formatAlbumDate = (date: string) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return formatDate(date);
  if (/^\d{4}-\d{2}$/.test(date)) return formatDate(`${date}-01`).replace(/^\d+ /, '');
  return date;
};

/**
 * VIDEOS (optional)
 * Add YouTube videos here to show a "Videos" section on the gallery page. Use the video ID:
 * the part after "v=" in https://www.youtube.com/watch?v=XXXXXXXXXXX (or after youtu.be/).
 *   { title: 'Annual Day highlights', youtubeId: 'XXXXXXXXXXX', date: '2026-12-19' }
 * Leave the list empty to hide the section.
 */
export interface GalleryVideo {
  title: string;
  youtubeId: string;
  date?: string;
}

export const videos: GalleryVideo[] = [];
