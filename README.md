# Tridev Enterprises website
## Run
npm install
cp .env.example .env   # set VITE_FORMSPREE_ID (create a form at formspree.io pointing to tridev.ent2026@gmail.com)
npm run dev
## Logo
Replace public/logo.png with your cropped TE logo (used in navbar, footer, favicon, OG image).
## Edit content
src/data/site.js (services, products, FAQ, contact). Stats: src/components/About.jsx.
## Deploy
Vercel/Netlify: import the repo, build command `npm run build`, output `dist`, add env var VITE_FORMSPREE_ID.
