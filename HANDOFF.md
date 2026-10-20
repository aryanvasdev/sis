# Sahib International School website: handoff

Everything needed to carry on with this website on a Mac. Last updated 20 Oct 2026.

- **Live site:** https://aryanvasdev.github.io/sis/
- **Code:** https://github.com/aryanvasdev/sis, branch `claude/elegant-shannon-v3vx0h`. This is the only branch and the repo's default branch.
- **Built with:** [Astro](https://astro.build), a static site of plain HTML pages with no database or server.

---

## 1. Set up on your Mac

1. Install **Node.js 22**: either download the LTS installer from https://nodejs.org, or run `brew install node@22` if you use Homebrew.
2. Get the code and start it:

   ```bash
   git clone https://github.com/aryanvasdev/sis.git
   cd sis
   npm install
   npm run dev          # opens a live preview at http://localhost:4321
   ```

3. Other commands:

   ```bash
   npm run build        # builds the final site into dist/
   npm run preview      # serves the built site locally
   npm run tc:add -- --tc <TC_NO> --adm <ADM_NO> --file path/to/tc.pdf   # publish a Transfer Certificate
   ```

> The repo's history was rewritten on 20 Oct 2026 to remove a photo. If you cloned it before that, delete the old folder and clone again.

To continue with Claude Code, run `claude` inside the `sis` folder. `CLAUDE.md` loads this file automatically, so Claude starts with all of this context.

## 2. Publishing

- **Every push to `claude/elegant-shannon-v3vx0h` (or `main`) goes live automatically** about a minute later, via GitHub Pages (`.github/workflows/deploy.yml`). Check progress in the repo's **Actions** tab.
- GitHub Pages is switched on (Settings → Pages → Source: GitHub Actions).
- **Netlify:** the repo is also connected to a Netlify project, but Netlify has paused production deploys on the account (it ran out of plan credits). `netlify.toml` is ready if you switch back. Use **one** host for the custom domain, not both.

## 3. Where things live

| What | Where |
| --- | --- |
| School details: phones, email, address, timings, principal, stats | `src/data/school.ts` (**edit this first**) |
| Notices, ticker items, upcoming events | `src/data/notices.ts` |
| Each page's content | `src/data/*.ts` (about, academics, admissions, fees, facilities, gallery, student-life, achievements, careers, contacts, transport) |
| Pages | `src/pages/*.astro` |
| Header, footer, forms, photo slots | `src/components/` |
| Colours and fonts | `src/styles/global.css` |
| Photos | `public/images/` (gallery albums in `public/images/gallery/<album>/`) |
| PDFs (circulars, book list, prospectus) | `public/documents/` |
| Transfer Certificates | `public/tc/`, added with `npm run tc:add` |

## 4. Content rules from the school (keep these)

- **Never name a board or claim an affiliation.** The school is officially HBSE but does not want this advertised. Say only "follows the **CBSE curriculum with NCERT textbooks**". No affiliation number, no "CBSE affiliated", no Mandatory Disclosure page, no board results.
- **Classes are Nursery to Class VIII only.** Nothing about Classes IX–XII or streams.
- **Do not mention computers** (no computer lab, subjects, club or teacher).
- **No smart boards or digital boards.** Classrooms are described with charts, models and teaching aids.
- **No principal photo and no chairperson photo** anywhere. The whole-staff group photo is fine.
- **Fees are hidden** (`showFees = false` in `src/data/fees.ts`). Parents are asked to call or WhatsApp. The fee amounts in that file are samples.
- The classroom photo of girls with their teacher was removed on request. Don't re-add it.

## 5. Confirmed facts (from the owner and the school diary)

- **Sahib International School**, Old Anaj Mandi – Kalpi Link Road, Saha, Ambala, Haryana 133104. Run by **Sahib Educational Society (Regd.), Saha**. Founded **2019**. Permanently recognised and registered. Co-ed, English medium, Nursery–VIII.
- Phones **82950 53047** (also WhatsApp) and **74978 86980**. Email **sahib.acadamy@gmail.com** (spelled exactly like this).
- Principal **Mrs. Shivi Gulati, M.A., M.Ed.** Principal's office hours 10:00 AM – 2:00 PM.
- Gate motto **"Come to Learn · Go to Serve"**. Diary motto **"Think Today, Change Tomorrow"**.
- School hours: Classes I–VIII, summer 8:00–2:00 and winter 9:00–2:45. Nursery–UKG, summer 8:00–1:00 and winter 9:00–2:00. **Visiting hours Mon–Sat 8:00 AM – 3:00 PM.** Every second Saturday is a holiday.
- 500+ students, 25+ teachers.
- Houses: Kaveri (Yellow), Saraswati (Blue), Yamuna (Green), Ganga (Red), with the inter-house events from the diary.
- Buses cover towns and villages within about 10 km, with **GPS, CCTV and a lady attendant**. The village list in `src/data/transport.ts` comes from maps; confirm it against real stops.
- Achievements: **2 block-level athletics championships** (the only real one so far).
- Vision, mission, uniform, exam/PTM schedule, houses and assembly prayers all come from the student diary.

## 6. Still to do

**Before sharing widely**
- [ ] Replace or confirm the sample text still on the site:
  - parent testimonials (`src/data/testimonials.ts`);
  - core values, the 2021 and 2024 milestones and the management committee names (`about.ts`);
  - clubs, the sports list, Student Council names and the counsellor (`student-life.ts`);
  - subjects per stage and the third language (Punjabi / Sanskrit?) (`academics.ts`);
  - facility descriptions such as the science lab, library, music room and medical room (`facilities.ts`);
  - admission key dates and careers openings.
- [ ] Chairperson's name (`school.ts`, shown as `[Chairperson Name]`).
- [ ] Then set `preview: false` in `src/data/school.ts` to remove the yellow "sample content" bar.
- [ ] Check the calendar: the diary puts PTM 5 on **21 Feb**, which is a Sunday in 2027. Gallery albums dated "2026" are guesses.

**Domain**
- [ ] Buy **`sahibinternationalschool.in`**. A shorter fallback is `sahibschoolsaha.in`. Web searches found no one using either, but confirm availability at checkout.
  - Buy from **Hostinger India** or **BigRock**: about ₹899 + 18% GST a year after any first-year promotion. Choose 1 year and untick every add-on.
  - Register it to "Sahib Educational Society".
  - Avoid buying through Netlify (no `.in`, may reject Indian cards), GoDaddy, `sahibinternational.in` (a Panipat carpet exporter uses that name) and anything built on "sis".
- [ ] At the registrar's DNS settings:
  - add four `A` records for the bare domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
  - add a `CNAME` record for `www` pointing to `aryanvasdev.github.io`.
- [ ] GitHub → repo **Settings → Pages → Custom domain**: enter the domain, wait for the DNS check, then tick **Enforce HTTPS**. The next deploy uses the new address automatically, so nothing changes in the code.
- [ ] Optional: a `.edu.in` from ERNET India (registry.ernet.in), ₹1,180 a year, with paperwork. The name must match the recognition certificate, and a 2025 Haryana list names the school **"Sahib Kids Academy, Saha"**, so check which name is on the certificate first.

**After going live**
- [ ] Add the website to the school's Google Maps / Business Profile and to its Haryana / UDISE+ school records.
- [ ] Optional: send real photos for the empty slots: the classroom (Facilities page, set `classroomPhoto` in `school.ts`), science lab, library, buses and sports day.
- [ ] Optional: upload `public/documents/booklist-2026-27.pdf` and `prospectus-2027-28.pdf`. Until they exist, those buttons ask the office on WhatsApp.
- [ ] Optional: ask GitHub Support to purge cached copies of the old (rewritten) history if the removed photo must be gone completely.
- [ ] Housekeeping: the GitHub Actions log warns that Node 20 actions are deprecated. Bump `actions/*` versions in `deploy.yml` when newer majors are available.

## 7. Common edits

- **New notice:** add an item at the top of `src/data/notices.ts`. `ticker: true` puts it in the scrolling bar.
- **Upcoming event:** add it to `events` in the same file. Past events hide themselves.
- **New photo album:** put the photos in `public/images/gallery/<album>/` (resize to about 1600 px, JPG under 300 KB) and add an album to `src/data/gallery.ts`.
- **Show fees:** fill in real amounts in `src/data/fees.ts` and set `showFees = true`.
- **Enquiry forms to email instead of WhatsApp:** create a free form at formspree.io and paste its URL into `formEndpoint` in `school.ts`.
- **Google Map on the Contact page:** Google Maps → Share → Embed a map, then copy only the `src` URL into `mapEmbedUrl` in `school.ts`.
- **Social media icons:** paste the page links into `social` in `school.ts`. Empty links stay hidden.
