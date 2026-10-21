# Atharva Gujarathi — Portfolio Website Content

Oct 21, 2026 · @Atharva

Copy-ready content for atharva-gujarathi.netlify.app — bio, project write-ups, freelance work and links, written to paste straight into the site with minimal editing.

## At a glance

| Field | Value |
| --- | --- |
| Name | Atharva Gujarathi |
| Role | Final-year B.Tech Computer Engineering student |
| Focus | Full-stack development, AI/ML, data engineering |
| Location | Pune, Maharashtra, India |
| Email | atharvagujarathi0405@gmail.com |
| College email | atharva.22311074@viit.ac.in |
| Phone | +91 9422091025 |
| Portfolio | [atharva-gujarathi.netlify.app](https://atharva-gujarathi.netlify.app) |
| GitHub | [github.com/AtharvaG04](https://github.com/AtharvaG04) |
| LinkedIn | [linkedin.com/in/atharva-gujarathi-068164289](https://linkedin.com/in/atharva-gujarathi-068164289) |
| CV | *Paste your latest resume link here — see Open items* |

You maintain a second GitHub account, `AtharvaGujarathi04`, which hosts the animated forest site. Decide whether the portfolio links to one account or both.

## Bio

Three lengths of the same story. Use the tagline in the hero, the short version under your name, the long one on an About page.

**Tagline (hero, one line)**

Final-year computer engineering student who builds AI systems and ships websites that clients actually use.

**Short (2–3 sentences, hero or LinkedIn summary)**

I'm Atharva, a final-year Computer Engineering student at VIIT Pune. I build full-stack products and AI systems — a meeting intelligence platform, a computer-vision lost-and-found engine, a Varhadi-dialect voice assistant for farmers — and I freelance on websites for small businesses in India and the US. Right now I'm looking for software engineering, AI/ML and data engineering roles.

**Long (About page)**

I'm a final-year Computer Engineering student at Vishwakarma Institute of Information Technology, Pune, graduating in 2027. Most of what I know I learned by building things end to end rather than by reading about them.

My work splits into two halves. On the AI side, I've built Aang, a meeting intelligence platform that transcribes and indexes recordings for retrieval in about 30 milliseconds; an AI-powered lost-and-found platform that matches items from photographs at roughly 87% accuracy; and KisaanDost, a voice assistant that understands Varhadi, a Marathi dialect spoken in Vidarbha, so that farmers who don't speak standard Marathi or English can still use it. My final-year project builds a digital twin of a database to predict query performance and optimise join orders before a query ever hits production.

On the other side, I freelance. I've built and shipped websites for a New Jersey contractor and a physiotherapy clinic in Pune, handling everything from client discovery and Figma design through to analytics, local SEO and deployment.

I also play carrom at state level, which has taught me more about patience under pressure than any course has.

*Edit the last line out if you want a straight professional tone.*

## Skills

Only what you've actually shipped with. Nothing here is padding.

| Area | Tools |
| --- | --- |
| Languages | Python, TypeScript, JavaScript, Java, SQL |
| Frontend | React.js, Next.js 16, Tailwind CSS v4, shadcn/ui, Vite, Three.js, GSAP |
| Backend | Node.js, Express.js, FastAPI |
| Databases | PostgreSQL, MongoDB, ChromaDB |
| AI / ML | LangChain, Whisper, Mistral AI, OpenAI API, Grounding DINO, SAM, DINOv2, BGE embeddings, XGBoost, LightGBM, Scikit-learn |
| Data & analytics | Power BI, DAX, PCA, K-Means, SimPy, PuLP |
| Tools | Git, GitHub CLI, Claude Code CLI, Figma, Vercel, Netlify, GA4, EmailJS, LaTeX |

On the portfolio itself, group these as chips or a grid rather than a table — tables of skills look like a CV, not a site.

## Featured projects

Start with the first four on the site. The rest work as a "more work" grid.

| Project | What it does | Stack | Headline number |
| --- | --- | --- | --- |
| Aang | Meeting intelligence — transcribes and answers questions about recordings | Python, FastAPI, LangChain, ChromaDB, Whisper, Mistral AI | \~30ms retrieval across 181+ indexed chunks |
| AI Lost & Found | Matches lost items to found items from photographs | React, Node.js, Express, MongoDB, Grounding DINO, SAM, DINOv2, BGE | \~87% matching accuracy |
| KisaanDost | Voice assistant for Varhadi-speaking farmers in Vidarbha | Sarvam AI, AI4Bharat Indic-TTS, XTTS-v2 | Dialect-level ASR/TTS, not just Marathi |
| Smart SQL Query Optimizer | Database digital twin that predicts query cost and reorders joins | PostgreSQL, XGBoost/LightGBM, SimPy, PuLP | Final-year project, 4-person team |
| Nature Animated Site | 3D parallax forest experience | Vite, TypeScript, Three.js, GSAP, Lenis | Deployed on Vercel |
| EV Recommendation System | Clusters electric vehicles and recommends by user profile | Python, Scikit-learn, K-Means, PCA | — |
| boAt Sales Dashboard | Sales analytics and trend reporting | Power BI, DAX | — |
| PromptSikho | AI requirement compiler — open-source contribution | React, TypeScript, OpenAI API | Open source |

### Aang — AI meeting intelligence

Meetings get recorded and then never listened to again. Aang transcribes a recording, splits it into chunks, embeds them, and lets you ask questions against the whole archive instead of scrubbing a timeline. Whisper handles transcription, LangChain orchestrates retrieval, and ChromaDB serves 181+ indexed chunks back in roughly 30 milliseconds. Mistral AI generates the answers.

Built from scratch, originally as Aang-Video-Agent. Most of the early work was unglamorous: Whisper wouldn't run on Python 3.13 because of a numba conflict, ffmpeg wasn't on PATH on Windows, and uv's build isolation kept breaking the install. Worth mentioning in an interview, not on the card.

### AI-Powered Lost & Found Platform

Lost-and-found systems fail because nobody describes objects the same way. This one skips descriptions. Upload a photo of what you lost, and the pipeline runs Grounding DINO to detect the object, SAM to segment it out of its background, DINOv2 to produce a visual embedding, and BGE to handle the text side — then matches against everything that's been handed in. Matching accuracy sits around 87%. React and Node/Express front the pipeline, with MongoDB storing items and embeddings.

### KisaanDost — Varhadi agricultural voice assistant

Agricultural advice apps assume farmers speak standard Marathi, Hindi or English. In Vidarbha, many speak Varhadi, and off-the-shelf speech models mishear it. KisaanDost is a region-adaptive multimodal assistant built for those speakers — I evaluated Sarvam AI, AI4Bharat's Indic-TTS and XTTS-v2 for dialect-specific fine-tuning of both recognition and synthesis.

Full title: *KisaanDost: A Region Adaptive Multimodal AI Assistant for Varhadi Speaking Farmers*. Semester VII major project, Group BEA11, under Dr. Ranjeetsingh Suryavanshi.

### Smart SQL Query Optimizer using a Database Digital Twin

A slow query usually only reveals itself in production. This project builds a digital twin of the database — a simulated model of how it behaves — so a query's cost can be predicted before it runs. XGBoost and LightGBM handle performance prediction, SimPy simulates execution, and PuLP solves for the optimal join order. Running on PostgreSQL.

Final-year project with Utkarsh Shirsath, Anushka Ade and Shubhangi Kale. An IEEE-format gap analysis paper came out of the research phase.

### Nature Animated Site

A 3D animated forest built as a scroll-driven parallax experience — Three.js for the scene, GSAP with ScrollTrigger for the choreography, Lenis for smooth scrolling, and a postprocessing pass on top. Vite and TypeScript underneath, deployed on Vercel. This one is a craft piece; let it carry a large video or GIF on the portfolio rather than a screenshot.

### Smaller work

**EV Recommendation System** — clusters electric vehicles with K-Means over PCA-reduced features and recommends models against a user's priorities. Python and Scikit-learn.

**boAt Sales Analytics Dashboard** — a Power BI dashboard with DAX measures covering sales performance and trends.

**PromptSikho AI Requirement Compiler** — open-source contribution; React, TypeScript and the OpenAI API, turning loose requirements into structured prompts.

**GenAI Interview Handbook** — an 82-page, six-tier preparation guide I wrote and published as a PDF.

Every project above needs a live link, a repo link, or both. Flag the ones that have neither so we can decide what to show instead — a video walkthrough usually beats a dead demo link.

## Freelance & client work

This section matters more than people think — it's the part of your portfolio that proves someone paid you. Give it its own page, not a sub-heading under projects.

| Client | Industry | Location | Delivered |
| --- | --- | --- | --- |
| MV Custom Builders | Construction / contracting | New Jersey, USA | Full marketing site, analytics, contact capture |
| Smart Physio+ | Physiotherapy clinic | Baner / Balewadi, Pune | Website and local SEO build |

### MV Custom Builders — New Jersey

A contractor needed a site that looked like it belonged to a business people trust with their house. Built on Next.js 16 with Tailwind v4 and shadcn/ui, designed against a reference site the client picked, with GA4 wired in for analytics and EmailJS handling contact capture so enquiries land in an inbox without a backend. Shipped a coming-soon page first so the domain wasn't dead while the full build ran.

The engagement started with a structured discovery phase and a client-facing checklist — worth saying out loud, because it tells a prospective client you won't disappear after the first call.

### Smart Physio+ — Pune

A physiotherapy clinic in Baner/Balewadi that needed to rank first when someone nearby searches for a physio. The build is as much local SEO as it is a website: structured data, location pages and search presence alongside the design. Designed in Figma in a white-and-blue palette with purple accents, shipped in priority tiers — the pages that drive bookings first, supporting pages after.

**Positioning line for the site:** "I build and ship websites for small businesses — discovery, design in Figma, development, analytics and local SEO. Two clients shipped across India and the US."

Add before-and-after screenshots and the live URLs. For Smart Physio+, a search-ranking screenshot would do more work than a design shot.

## Experience, research & achievements

**Industry project — Factorial24.** Built an AI nurse shift scheduling system. This is the closest thing you have to industry experience, so give it dates, a one-line problem statement and an outcome. I don't have those details — see Open items.

**Research.** Two papers:

- *Digital Transformation in Indian Pharmaceutical Retail Supply Chains* — written for a Scopus-indexed IEEE conference.
- An IEEE-format gap analysis paper on database query optimisation, produced alongside the final-year project.

List publication status honestly — "under review" or "submitted" if that's where they stand. Reviewers and recruiters both check.

**Teaching.** Ran structured DSA tutoring sessions covering arrays, strings and linked lists in Python and Java. If you've taught more than a handful of people, that's a line worth having; if it was informal, fold it into the About section instead.

**Achievements.**

- Carrom — district and state level
- CET PCM topper in my town
- CGPA 8.93

**Open source.** Contributed to PromptSikho, an AI requirement compiler (React, TypeScript, OpenAI API).

## Education

**B.Tech, Computer Engineering** — Vishwakarma Institute of Information Technology (VIIT), Pune 2023–2027 · CGPA 8.93

Relevant coursework: Natural Language Processing, Research Methodology, Supply Chain Management, Decision Theory.

Leave PRN and roll number off the public site — they belong on academic forms, not a portfolio.

## Open items

Ten minutes of your time fills all of these, and the site can't ship without most of them.

- [ ] **CV link** — you asked for it but I don't have a URL. Host one canonical PDF (Google Drive, or `/resume.pdf` on the site itself) and link that everywhere. Don't link a LaTeX variant tailored to one company.
- [ ] **Live and repo links per project** — Aang, Lost & Found, KisaanDost, EV Recommender, boAt dashboard, PromptSikho. Nature Animated Site has a repo; does it have a live URL?
- [ ] **Client site URLs** — MV Custom Builders and Smart Physio+.
- [ ] **Factorial24 dates and role** — internship or industry project, how long, what you owned.
- [ ] **Publication status** of both papers — submitted, under review, or accepted.
- [ ] **Project dates** — even just month and year. A portfolio with no timeline reads as a list of coursework.
- [ ] **One screenshot or demo video per project.**
- [ ] **Which GitHub account** the portfolio points to.
- [ ] **Client permission** — confirm both clients are fine being named publicly.

Send me whatever you have and I'll fold it into this doc.
