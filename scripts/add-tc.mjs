#!/usr/bin/env node
/**
 * Publish a Transfer Certificate for online verification.
 *
 *   npm run tc:add -- --tc <TC_NO> --adm <ADM_NO> --file <path/to/tc.pdf>
 *   npm run tc:add -- --tc <TC_NO> --adm <ADM_NO> --remove      (take a TC off the site)
 *
 * The PDF is copied to public/tc/<sha256>.pdf, where the hash is made from the TC number
 * and the admission number together. The TC Verification page hashes what the visitor
 * types in exactly the same way, so a certificate can only be found by someone who has
 * both numbers, and no list of certificates is ever published.
 *
 * After adding or removing certificates, rebuild and publish the site.
 */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, openSync, readSync, closeSync, rmSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tcDir = join(root, 'public', 'tc');

const usage = `
Usage:
  npm run tc:add -- --tc <TC_NO> --adm <ADM_NO> --file <path/to/tc.pdf>
  npm run tc:add -- --tc <TC_NO> --adm <ADM_NO> --remove

Options:
  --tc       TC number, exactly as printed on the certificate (e.g. SIS/2026/0412)
  --adm      Student's admission number (e.g. 4521)
  --file     The scanned / signed TC as a PDF
  --remove   Delete a previously added TC instead of adding one
  --force    Replace a TC that has already been added
  --help     Show this message
`;

function fail(message) {
  console.error(`\n✗ ${message}\n${usage}`);
  process.exit(1);
}

let args;
try {
  ({ values: args } = parseArgs({
    options: {
      tc: { type: 'string' },
      adm: { type: 'string' },
      file: { type: 'string' },
      remove: { type: 'boolean', default: false },
      force: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  }));
} catch (error) {
  fail(error.message);
}

if (args.help) {
  console.log(usage);
  process.exit(0);
}

const tc = (args.tc ?? '').trim().toUpperCase();
const adm = (args.adm ?? '').trim().toUpperCase();
if (!tc) fail('Please give the TC number with --tc.');
if (!adm) fail('Please give the admission number with --adm.');

// Must match the script on src/pages/tc-verification.astro exactly.
const hash = createHash('sha256').update(`${tc}|${adm}`, 'utf8').digest('hex');
const target = join(tcDir, `${hash}.pdf`);
const shown = relative(root, target);

if (args.remove) {
  if (!existsSync(target)) fail(`No TC found for TC No. ${tc} / Adm. No. ${adm} (looked for ${shown}).`);
  rmSync(target);
  console.log(`\n✓ Removed TC No. ${tc} (Adm. No. ${adm})\n  deleted ${shown}\n`);
  console.log('Rebuild and publish the site so the change goes live.\n');
  process.exit(0);
}

if (!args.file) fail('Please give the PDF with --file.');
// `npm run` switches to the project folder; INIT_CWD is where the command was typed.
const source = resolve(process.env.INIT_CWD ?? process.cwd(), args.file);
if (!existsSync(source) || !statSync(source).isFile()) fail(`File not found: ${args.file}`);

// Check the file really is a PDF (every PDF starts with "%PDF-").
const fd = openSync(source, 'r');
const magic = Buffer.alloc(5);
readSync(fd, magic, 0, 5, 0);
closeSync(fd);
if (magic.toString('latin1') !== '%PDF-') fail(`${args.file} does not look like a PDF. Please scan or save the TC as a PDF.`);

if (existsSync(target) && !args.force) {
  fail(`TC No. ${tc} / Adm. No. ${adm} has already been added (${shown}). Use --force to replace it.`);
}

mkdirSync(tcDir, { recursive: true });
copyFileSync(source, target);

const kb = Math.max(1, Math.round(statSync(target).size / 1024));
console.log(`
✓ Added TC No. ${tc} (Adm. No. ${adm})
  from ${args.file}
  to   ${shown} (${kb} KB)

Next: rebuild and publish the site. The TC can then be verified on the
TC Verification page (/tc-verification/) with these two numbers.
`);
