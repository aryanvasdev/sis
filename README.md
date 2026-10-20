# Sahib International School: website

The official website of **Sahib International School**, a CBSE-affiliated school (Nursery to Class XII).

It is a fast, mobile-friendly static site built with [Astro](https://astro.build). There is no database or server to maintain: every page is plain HTML, so it can be hosted free on GitHub Pages, Netlify or Cloudflare Pages.

## What's on the site

| Page | Path | What it covers |
| --- | --- | --- |
| Home | `/` | Hero, quick links, latest-updates ticker, principal's note, stats, academics, notice board, events, board results, gallery, parent testimonials, admissions call-to-action |
| About | `/about/` | Story, vision & mission, core values, principal's and chairperson's messages, School Managing Committee, milestones |
| Academics | `/academics/` | CBSE curriculum (NEP 2020 stages), subjects, XI–XII streams, assessment, academic calendar, book list & uniform |
| Admissions | `/admissions/` | Process, age criteria, documents, fee structure, RTE seats, FAQs, enquiry form |
| Facilities | `/facilities/` | Classrooms, labs, library, sports, transport routes, safety & committees |
| Student Life | `/student-life/` | Houses, clubs, sports, events, student council, wellbeing |
| Achievements | `/achievements/` | Last three years' Class X & XII board results, toppers, competition wins |
| Gallery | `/gallery/` | Photo albums with category filter and a full-screen viewer |
| Notices | `/notices/` | Circulars, news and holidays with filter and search, upcoming events |
| Mandatory Disclosure | `/mandatory-disclosure/` | CBSE Appendix IX disclosure (sections A–E) with document links |
| TC Verification | `/tc-verification/` | Look up an issued Transfer Certificate by TC number and admission number |
| Careers | `/careers/` | Teaching vacancies and how to apply |
| Contact | `/contact/` | Address, map, phone numbers, departments, enquiry form |

All the details Indian parents and CBSE expect are included: affiliation number in the header and footer, a **Mandatory Public Disclosure** link on every page, TC verification, fee structure, a scrolling notice ticker, and a WhatsApp button.

---

## Before going live: fill in the real details

Everything the school needs to change lives in **`src/data/`**. Values marked `⚠ PLACEHOLDER` or `⚠ SAMPLE CONTENT` are made up and **must be replaced**.

1. **`src/data/school.ts`**: start here. Name, motto, year founded, CBSE affiliation number and school code, address, phone numbers, WhatsApp number, emails, principal and chairperson, social media links, headline numbers. Most pages read from this file.
2. **`src/data/notices.ts`**: notices, circulars and upcoming events.
3. **`src/data/results.ts`**: board results for the last three years and toppers.
4. The other files in `src/data/` (fees, admissions, academics, facilities, gallery, disclosure, careers, contacts, and so on) hold the content for each page.
5. When everything is real, set **`preview: false`** in `school.ts` to remove the yellow "sample content" banner.

### Photos

Until real photos are added, the site shows decorative placeholders. To add photos:

- **Campus photo on the home page:** put it in `public/images/` and set `heroImage` / `welcomeImage` at the top of `src/pages/index.astro`.
- **Principal / chairperson:** put the photo in `public/images/people/` and set `photo` in `school.ts`.
- **Gallery:** put photos in `public/images/gallery/<album-name>/` and set `src` for each photo in `src/data/gallery.ts`.
- **School logo:** put it at `public/images/logo.png` (or `.svg`) and set `logoSrc` in `src/components/Crest.astro`.

Resize photos to about 1600 px on the long side and save them as JPG or WebP (under 300 KB each) to keep the site fast on mobile data.

### Documents (PDFs)

Put PDFs in `public/documents/`:

- `public/documents/disclosure/`: the CBSE Mandatory Disclosure certificates (affiliation letter, trust registration, NOC, RTE recognition, building safety, fire safety, DEO certificate, water/health/sanitation). Then mark each one `available: true` in `src/data/disclosure.ts`.
- `public/documents/circulars/`: circular PDFs, linked from `notices.ts` with `file: 'circulars/<name>.pdf'`.
- Book list, uniform guidelines and prospectus, using the file names referenced on the Academics and Admissions pages.

### Transfer Certificates (TC verification)

CBSE asks schools to put issued TCs on their website. To protect student privacy, a TC on this site can only be opened by someone who knows **both** the TC number and the admission number.

```bash
npm run tc:add -- --tc <TC_NUMBER> --adm <ADMISSION_NUMBER> --file path/to/tc.pdf
```

This copies the PDF into `public/tc/` under a scrambled name. Commit and push, and it can be verified on the TC Verification page.

### Enquiry forms

By default the admission and contact forms open **WhatsApp** with the parent's details already typed in, so no server is needed. To receive enquiries by email instead, create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and paste its endpoint URL into `formEndpoint` in `school.ts`.

### Google Map

On Google Maps, search for the school and choose **Share → Embed a map**. Copy only the `src="…"` URL into `mapEmbedUrl` in `school.ts`.

---

## Working on the site

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install       # once
npm run dev       # live preview at http://localhost:4321
npm run build     # builds the final site into dist/
npm run preview   # preview the built site
```

Colours, fonts and shared styles are in `src/styles/global.css`. The header, footer and other shared pieces are in `src/components/`, and each page is a file in `src/pages/`.

## Publishing

### GitHub Pages (free, already set up)

1. Push to the `main` branch.
2. In the repository on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. It also rebuilds every Monday so the "upcoming events" list stays current.

The site will be available at `https://<github-username>.github.io/<repository-name>/`.

### Custom domain (e.g. `www.sahibinternationalschool.in`)

1. Buy the domain from any registrar.
2. In **Settings → Pages → Custom domain**, enter it and follow GitHub's DNS instructions.
3. The workflow picks up the new address automatically.

### Netlify or Cloudflare Pages

Connect the repository, set the build command to `npm run build` and the output folder to `dist`. No other settings are needed.
