# Mert Kodzhaaslan — portfolio redesign

## Intent and authorization
The owner asked to redesign github.com/mertkodzhaaslan/my-portfolio after a live-site audit and a proposed direction: off-white, charcoal text, restrained blue, current Ryanair role, Postlia, selected projects, experience, learning, contact. They want an authentic professional site to link from LinkedIn, replacing generic AI-style copy and dated information. Implement a reviewable branch and local preview; never merge main or deploy production.

## Design direction
Editorial, quietly technical personal portfolio. Warm off-white (#f7f6f2 or equivalent), charcoal, one cobalt accent; generous space but no empty full-screen panels, neon, gradient headlines, glow borders, decorative icon card grids, or skill meters. A large personal name and short direct introduction anchor the first viewport. A narrow context rail with location/current work can balance the hero. Typography, thin rules, asymmetric composition, and a strong Postlia visual carry the design. Use an expressive serif selectively with a clean readable sans-serif, or another equally coherent restrained pairing. Kode Mono is available for small labels. Builder owns exact type/spacing/art direction within this brief.

## Information and truthful copy
- Name: Mert Kodzhaaslan. Based in Wroclaw, Poland (display Wrocław).
- Current: Business Systems Analyst, Ryanair Labs, Oct 2026–Present. Previous: Application Support Analyst Intern, Ryanair Labs, Jul–Sep 2026. Do not invent responsibilities, impact metrics, tools used at Ryanair, or describe this as an unconfirmed promotion.
- Co-founder of Postlia, social media publishing/scheduling SaaS. Attribution from its public About page: publishing engine and scheduler. Technology: Next.js, TypeScript, Supabase/PostgreSQL, Vercel, social API integration. Do not invent start month or revenue/users/uptime. Link https://postlia.com/.
- Avit Systems Software Engineer Intern, Jul–Oct 2024: React interfaces, .NET API integration, internal tools, testing/debugging, assisted AWS setup. Omit disputed 2025–present fullstack role until owner confirms dates; record this editorial choice in final handoff.
- Applied Computer Science degree, Wrocław University of Science and Technology, 2021–2025. Avoid conflicting BEng/BASc/BSc labels and GPA.
- Owner completed the initial EPAM Cloud and DevOps training stage, did NOT take its follow-on Special Course, and has no confirmed certificate. Present as training, not employment or certification. No invented formal stage name/date.
- Cloud/AWS is a development interest and future learning direction, not a current cloud engineer title or earned certification. Do not claim production AWS ownership.
- FoodLink: collaborative university food donation project, React/Node/Express/PostgreSQL/Firebase. Link https://github.com/mertkodzhaaslan/FoodLink-FLWA; label team project and personal development contribution without claiming sole authorship.
- Group Trip System: Node/MongoDB/JavaScript budget and itinerary project. No fake demo/source URL. May omit if FoodLink and Postlia tell the story sufficiently.
- Pinder's claimed native Swift implementation is unverified; omit rather than perpetuate it.
- Aviation training/internships can be one brief background sentence, not a years-long aviation career story. Do not use failure-is-not-an-option or scalable-solutions filler.
- Languages: Turkish native, English C1, Polish B2. Optional if space allows.
- Contact: mert.kodzhaaslan.software@gmail.com; https://www.linkedin.com/in/mert-nuri-kodzhaaslan/; https://github.com/mertkodzhaaslan. No public phone/citizenship cards, no Open to Work claim without confirmation, no broken CV download.

## Page structure
1. Compact navigation: full name/monogram, Work, Experience, About, Contact; clear mobile navigation.
2. Hero: personal name and current identity, concise introduction, direct work/contact links. No fake portrait or stock photo representing owner.
3. Selected work: visually prominent Postlia feature (authentic public product brand asset available), then smaller FoodLink project. Explain product, contribution, stack; actual destinations.
4. Experience: calm chronological rows, current and past Ryanair roles and Avit internship; exact verified dates, no invented duties.
5. About/learning: short bio, degree, EPAM initial-stage completion, future AWS direction, compact honest skills. No wall of technology badges.
6. Contact/footer: email and professional links, current year, no fake form or unnecessary data collection.

## Implementation constraints
Public canonical URL: https://www.mertkodzhaaslan.com/ (verified live redirect from apex). Use same URL for Open Graph. Source repo: https://github.com/mertkodzhaaslan/my-portfolio. Existing font file is zero bytes; replace or omit it, never use the broken asset. The lead will supply public/images/postlia-brand.jpg and public/images/postlia-icon.svg from the owner's existing Postlia public assets. Do not use the dashboard screenshot containing test-post metrics.
Retain existing React 19, CRA/CRACO and Tailwind 3 setup. No framework migration or new UI dependencies. Existing component boundaries can be reused/refined. No backend/auth/payment work. Root Postlia checkout must remain unchanged. No .env values in output or commits; leave existing .env untouched. All new assets must be genuine owned assets or authored UI graphics, not invented customer evidence. Copy is English; owner communication is Turkish. Add correct title, description, canonical, favicon and social metadata with a real local asset if supplied. Keep bundle modest.

## Accessibility and behavior
Semantic landmarks, one h1, visible keyboard focus, skip link, sufficient contrast, reduced-motion support, no autoplay decoration. Native anchor links with header offset. Mobile menu must be labelled, expose expanded state, close after selection/Escape, and not leave invisible links tabbable. Visible content must not depend on scrolling/IntersectionObserver. No horizontal overflow at 320/390/768/1440 pixels or 200% zoom. External links must resolve and use safe rel if opening new tabs. Handle no photo/asset gracefully without placeholders.

## Verification and delivery
Install from existing yarn.lock and establish baseline build/test situation. Build production after changes; meaningful UI tests for mobile navigation and verified role/content links if test harness permits. Browser-check desktop/mobile, keyboard menu, anchors, reduced motion, overflow, console errors and key links. Independent review of spec, code, copy and accessibility. Commit feature branch, push/open PR if available, but never merge/deploy. Deliver preview, screenshot, changes, validation and unresolved editorial dates.
