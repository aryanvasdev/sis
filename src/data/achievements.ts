/**
 * ACHIEVEMENTS
 * Used on the Achievements page (/achievements/).
 *
 * Add each new success at the top of `achievements`. Keep it to real results only,
 * and add `year` and `event` when you know them.
 */

export interface Achievement {
  title: string;
  /** Shown large on the card, e.g. 2 championships. */
  count?: number;
  countLabel?: string;
  area: 'Sports' | 'Dance & Culture' | 'Academics' | 'Art' | 'Other';
  level: string;
  text: string;
  icon: string;
  year?: string;
  event?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Athletics champions at block level',
    count: 2,
    countLabel: 'championships',
    area: 'Sports',
    level: 'Block level',
    text: 'Our young athletes have won two championships in athletics at the block-level sports meet, competing against schools from across the block.',
    icon: 'trophy',
  },
];

/** ⚠ SAMPLE: how the school recognises effort and achievement. Icons from https://lucide.dev/icons */
export const celebrations = [
  { icon: 'sun', title: 'Achievers in assembly', text: 'Winners are called up and applauded by the whole school in the morning assembly.' },
  { icon: 'star', title: 'Star of the Month', text: 'Every class chooses a star for kindness, effort or improvement, not only for marks.' },
  { icon: 'award', title: 'Annual prize distribution', text: 'Certificates, medals and trophies are presented on Annual Day in front of families.' },
  { icon: 'hand-heart', title: 'Everyone takes part', text: 'From Nursery to Class VIII, every child performs or competes at least once a year.' },
];
