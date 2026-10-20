/**
 * FEE STRUCTURE for the Admissions page (/admissions/#fees).
 * All amounts are in rupees, as plain numbers (write 42000, not '42,000').
 * They are formatted automatically as ₹42,000.
 *
 * ⚠ SAMPLE CONTENT — replace every amount, date and rule below with the fee
 *   structure approved by the school management for the session.
 *
 * The fee tables are hidden while `showFees` is false: parents are asked to contact
 * the school office instead. Set it to true once the amounts below are real.
 */
import { school } from './school';
import { formatINR } from '../lib/format';

export const showFees = false;

/** ⚠ PLACEHOLDER: the session these fees apply to. */
export const feeSession = school.admissionSession;

/** ⚠ PLACEHOLDER: charged once, at the time of admission. */
export const oneTimeCharges: { label: string; amount: number; note: string }[] = [
  { label: 'Registration fee', amount: 500, note: 'Paid with the registration form. Non-refundable.' },
  { label: 'Admission fee', amount: 5000, note: 'Paid once, on confirmation of the seat. Non-refundable.' },
  { label: 'Caution money', amount: 2000, note: 'Refundable security deposit, returned on leaving the school.' },
];

export interface ClassFee {
  group: string;
  /** Optional extra line shown in smaller text under the class group. */
  detail?: string;
  /** Development, activity, library, examination and annual function charges. */
  annual: number;
  /** Tuition fee per month. Collected every quarter (3 months together). */
  tuitionMonthly: number;
}

/** ⚠ PLACEHOLDER: class-wise fees. */
export const classFees: ClassFee[] = [
  { group: 'Nursery – UKG', detail: 'Pre-primary', annual: 4500, tuitionMonthly: 1400 },
  { group: 'Classes I – V', detail: 'Primary', annual: 5500, tuitionMonthly: 1700 },
  { group: 'Classes VI – VIII', detail: 'Middle school', annual: 6500, tuitionMonthly: 2000 },
];

/** Tuition fee for one quarter (3 months). */
export const tuitionQuarterly = (f: ClassFee) => f.tuitionMonthly * 3;

/** Annual charges plus 12 months' tuition (excludes one-time charges and transport). */
export const yearlyTotal = (f: ClassFee) => f.annual + f.tuitionMonthly * 12;

/** ⚠ PLACEHOLDER: optional school-bus fee by distance from school (per month). */
export const transportSlabs: { distance: string; monthly: number }[] = [
  { distance: 'Up to 3 km', monthly: 700 },
  { distance: '3 – 6 km', monthly: 900 },
  { distance: '6 – 10 km', monthly: 1100 },
  { distance: '10 – 15 km', monthly: 1300 },
  { distance: '15 – 20 km', monthly: 1500 },
];

/** ⚠ PLACEHOLDER: shown under the transport table. */
export const transportNote =
  'Transport fee is charged for 11 months (April to February) and paid quarterly with the tuition fee. Routes beyond 20 km: please ask the transport office.';

/** ⚠ PLACEHOLDER: quarterly due dates. */
export const dueDates: { quarter: string; due: string }[] = [
  { quarter: 'April – June', due: '10 April' },
  { quarter: 'July – September', due: '10 July' },
  { quarter: 'October – December', due: '10 October' },
  { quarter: 'January – March', due: '10 January' },
];

/** ⚠ PLACEHOLDER: fee rules. */
export const feeRules = {
  lateFeePerDay: 10,
  lateFeeCap: 300,
  siblingConcessionPercent: 10,
  cautionRefundDays: 30,
};

export const feeNotes: { title: string; text: string }[] = [
  {
    title: 'Due dates',
    text: `Fees are paid every quarter, by ${dueDates
      .map((d) => d.due)
      .join(', ')
      .replace(/, ([^,]*)$/, ' and $1')}. Annual charges are paid with the first quarter.`,
  },
  {
    title: 'Late fee',
    text: `${formatINR(feeRules.lateFeePerDay)} per day after the due date, up to ${formatINR(feeRules.lateFeeCap)} per quarter. Please contact the accounts office if you are facing difficulty; we will try to help.`,
  },
  {
    title: 'Sibling concession',
    text: `${feeRules.siblingConcessionPercent}% concession on the tuition fee of the younger child when siblings study at the school together.`,
  },
  {
    title: 'Refund of caution money',
    text: `Refunded without interest within ${feeRules.cautionRefundDays} days of the Transfer Certificate being issued, after all dues are cleared. Please bring the original receipt.`,
  },
  {
    title: 'How to pay',
    text: 'UPI, debit / credit card, net banking, cheque or demand draft at the school accounts office. Always collect a printed receipt.',
  },
  {
    title: 'Revision',
    text: 'Fees are reviewed once a year and any change follows the fee regulations of the state government. Uniform, books and stationery are not included.',
  },
];
