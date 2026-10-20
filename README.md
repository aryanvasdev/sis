# Sahib International School: website

The official website of **Sahib International School**, Saha (Ambala), Haryana: a co-educational school for Nursery to Class VIII that follows the CBSE curriculum with NCERT textbooks. Motto: *Come to Learn · Go to Serve*.

It is a fast, mobile-friendly static site built with [Astro](https://astro.build). There is no database or server to maintain: every page is plain HTML, so it can be hosted free on GitHub Pages, Netlify or Cloudflare Pages.

## What's on the site

| Page | Path | What it covers |
| --- | --- | --- |
| Home | `/` | Hero, quick links, latest-updates ticker, principal's note, stats, academics, notice board, events, teachers, photo mosaic, parent testimonials, admissions call-to-action |
| About | `/about/` | Story, vision & mission, motto, core values, principal's and chairperson's messages, teachers, management committee, milestones |
| Academics | `/academics/` | CBSE curriculum (NEP 2020 stages, Nursery to VIII), subjects, assessment, academic calendar, book list & uniform |
| Admissions | `/admissions/` | Process, age criteria, documents, fee structure, RTE seats, FAQs, enquiry form |
| Facilities | `/facilities/` | Classrooms, labs, library, sports, transport routes, safety & committees |
| Student Life | `/student-life/` | Houses, clubs, sports, events, student council, wellbeing |
| Achievements | `/achievements/` | Olympiads, sports, cultural and other competition wins |
| Gallery | `/gallery/` | Photo albums with category filter and a full-screen viewer |
| Notices | `/notices/` | Circulars, news and holidays with filter and search, upcoming events |
| TC Verification | `/tc-verification/` | Look up an issued Transfer Certificate by TC number and admission number |
| Careers | `/careers/` | Teaching vacancies and how to apply |
| Contact | `/contact/` | Address, map, phone numbers, departments, enquiry form |

Everything Indian parents look for is included: fee structure, admission process and age criteria, a scrolling notice ticker, festival photo albums, TC verification and a WhatsApp button on every page.

> **Wording:** pages describe the curriculum as “CBSE curriculum with NCERT textbooks”. Keep that wording consistent when editing, and don't describe the school as affiliated to any board.

---

## Before going live: fill in the real details

Everything the school needs to change lives in **`src/data/`**. Values marked `⚠ PLACEHOLDER` or `⚠ SAMPLE CONTENT` are made up and **must be replaced**.

1. **`src/data/school.ts`**: start here. The address, phone numbers, WhatsApp, email, principal, founding year and student count are already filled in. Still to add: the chairperson and trust name, social media links and the Google Map embed. Most pages read from this file.
2. **`src/data/notices.ts`**: notices, circulars and upcoming events.
3. The other files in `src/data/` (fees, admissions, academics, facilities, gallery, achievements, careers, contacts, and so on) hold the content for each page.
5. When everything is real, set **`preview: false`** in `school.ts` to remove the yellow "sample content" banner.

### Photos

The school's logo and its first photos (the gate, a classroom, the teaching staff and festival albums) are already in `public/images/`. Anywhere a real photo is still missing, the site shows a decorative placeholder. To add more:

- **Home page photos:** set `heroImage` / `welcomeImage` / `teachersImage` at the top of `src/pages/index.astro`.
- **Principal / chairperson:** put the photo in `public/images/people/` and set `photo` in `school.ts`.
- **Gallery:** put photos in `public/images/gallery/<album-name>/` and add them to `src/data/gallery.ts`.
- **Logo:** `public/images/logo.webp` (full crest) and `public/images/emblem.webp` (header), used by `src/components/Crest.astro`.

Resize photos to about 1600 px on the long side and save them as JPG or WebP (under 300 KB each) to keep the site fast on mobile data.

### Documents (PDFs)

Put PDFs in `public/documents/`:

- `public/documents/circulars/`: circular PDFs, linked from `notices.ts` with `file: 'circulars/<name>.pdf'`.
- `public/documents/booklist-2026-27.pdf`, `public/documents/uniform-guidelines.pdf` and `public/documents/prospectus-2027-28.pdf`. Until each file is added, its button asks the school office for it on WhatsApp instead, so there are no broken links.

### Transfer Certificates (TC verification)

Parents and the schools your Class VIII students move on to can verify a Transfer Certificate online. To protect student privacy, a TC can only be opened by someone who knows **both** the TC number and the admission number.

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

### Custom domain (e.g. `www.sahibschoolsaha.in`)

1. Buy the domain from any registrar.
2. In **Settings → Pages → Custom domain**, enter it and follow GitHub's DNS instructions.
3. The workflow picks up the new address automatically.

### Netlify or Cloudflare Pages

Connect the repository, set the build command to `npm run build` and the output folder to `dist`. No other settings are needed.
