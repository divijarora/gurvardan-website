# Gurvardan Website

Static website for **Gurvardan Physiotherapy &amp; Fitness Clinic** and **Gurvardan Yoga Studio** (West Patel Nagar, New Delhi).

## Structure

```
index.html      Clinic homepage ("Mix" design — royal blue/green brand + bold type)
yoga.html       Gurvardan Yoga Studio page
styles.css      Shared resets, fonts, animations
script.js       Enquiry form → WhatsApp handoff
assets/         Logo and other static assets
```

Plain HTML/CSS/JS — no build step, no dependencies.

`chats/` and `project/` contain the original Claude Design handoff (design prototype + conversation transcripts) this site was built from, kept for reference.

## Local development

Any static file server works, e.g.:

```
npx http-server . -p 8080
```

Then open `http://localhost:8080/index.html`.

## Deployment

This is a zero-config static site, deployable anywhere:

- **GitHub Pages** — a workflow at `.github/workflows/deploy.yml` deploys `main` automatically once Pages is enabled for this repo (Settings → Pages → Source: GitHub Actions).
- **Vercel / Netlify** — import the repo with no build command and an output/publish directory of `/`.

## Content notes

- Photos are stock placeholders (Pexels) — swap in real clinic/studio photos when available.
- The yoga weekly schedule, instructor name, and fees are inferred placeholders — confirm the real details and update `yoga.html` accordingly.
