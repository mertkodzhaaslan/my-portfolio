# Personal portfolio redesign implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver an authentic, current, polished portfolio for Mert that is ready for LinkedIn, in a reviewable branch and local preview.

**Architecture:** Keep the existing React section composition and replace its presentation/content coherently. Native links and modest CSS power navigation; no backend, migration, new UI library, or publishing.

**Tech Stack:** React 19, CRA 5/CRACO, JavaScript, Tailwind 3 and existing CSS.

**Spec:** docs/superpowers/specs/2026-11-03-portfolio-redesign-design.md

## Global Constraints
- Retain existing React 19, CRA/CRACO and Tailwind 3 setup. No framework migration or new UI dependencies.
- Root Postlia checkout must remain unchanged. No .env values in output or commits; leave existing .env untouched.
- Copy is English; owner communication is Turkish.
- Current: Business Systems Analyst, Ryanair Labs, Oct 2026–Present. Previous: Application Support Analyst Intern, Ryanair Labs, Jul–Sep 2026.
- Do not invent responsibilities, impact metrics, tools used at Ryanair, or describe this as an unconfirmed promotion.
- EPAM initial training completion is not a certificate or employment. Cloud/AWS is a learning direction, not an earned certification.
- Never merge main or deploy production.

## Review Focus
- Mobile menu open/close, Escape and link selection restore useful focus without invisible tabbable links.
- 320/390/768/1440 viewport and 200% zoom retain readable non-overlapping content without horizontal scrolling.
- Every named project destination is real; no broken CV downloads, placeholder URLs or fake forms.
- Reduced-motion and no animation observer still show all content; anchor headings clear the sticky header.
- Current roles/dates and completion status remain consistent; no fabricated metrics, certificates, career history or Avit current employment claim.

### Task 1: Implement and validate the complete portfolio presentation

**Files:**
- Modify: src/components/Portfolio.jsx and Portfolio.css, Header.jsx/css, Hero.jsx/css, Projects.jsx/css, Experience.jsx/css, About.jsx/css, Skills.jsx/css, Contact.jsx/css.
- Modify as needed: src/App.css, src/index.css, src/App.js, public/index.html, README.md.
- Create: public/favicon.svg, public/social-card.svg or supported static image; src/components/Portfolio.test.jsx (meaningful behavior coverage with existing react-dom/Jest; no test dependency necessary).
- Asset input (lead owns copying): public/images/postlia-brand.jpg and postlia-icon.svg.
- May extract: src/data/portfolio.js if consolidating verified content is useful; no broad unused-component cleanup.

**Interfaces:** App continues to import default Portfolio. Header/Portfolio can change internal props together as one cohesive task. Hash destinations #work, #experience, #about, #contact must match visible sections. Existing #projects/#skills/#home links can be retained as aliases if simple. External destinations come from the spec.

- [ ] Read the design spec and existing components. Keep source and existing CSS mechanisms; remove unused old render paths when necessary.
- [ ] Implement the editorial light art direction and precise mobile layouts. The hero should have personal typographic presence, not another generic feature-card grid. Make Postlia the central visual work sample and FoodLink a quieter companion. Avoid heavy decorative mockups or fabricated UI data.
- [ ] Replace stale copy with the verified source facts in the spec. Use exact role dates, completed initial EPAM training, degree without conflicting degree type, cloud learning interest. Omit unverified claims.
- [ ] Implement accessible nav, native anchors, focus styles, reduced-motion behavior, safe external links, useful document metadata and authored favicon/social asset. Do not fetch a fake avatar or use a zero-byte font. Prefer self-hosted fonts if adding font assets; otherwise maintain sound local fallbacks.
- [ ] Add useful tests using React act/createRoot plus Jest DOM queries: mobile menu exposes aria-expanded and hides/closes on selection; Escape closes and returns focus; public links point to known destinations; current Ryanair roles and no certification claim. Avoid snapshot-only tests or CSS implementation mirroring.
- [ ] Run `npm.cmd test -- --watchAll=false --runInBand` with CI=true and `npm.cmd run build`. Record exact results and pre-existing warnings. Do not weaken CI to hide errors.
- [ ] Self-review all changed files. Write implementation report including tests, limitations, asset provenance. Commit intended code/doc/assets only (never .env, build, node_modules).

### Verification and handoff (lead)
- [ ] Browser-check production build on desktop/mobile at stated widths, links/anchors/menu/keyboard and console. Capture desktop/mobile images for review.
- [ ] Package diff and request independent code/spec and security/QA reviews. Return any findings to the implementer and recheck changed behavior.
- [ ] Keep a local preview available; push only codex/portfolio-redesign and open PR if GitHub permits. Check preview build outcome; never merge or deploy. Explain any external blocker with concrete evidence.
