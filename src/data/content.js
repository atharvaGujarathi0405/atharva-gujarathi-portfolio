// Source: "Atharva Gujarathi — Portfolio Website Content.md"
export const bio =
  "I'm Atharva, a final-year Computer Engineering student at VIIT Pune. I build full-stack products and AI systems — a meeting intelligence platform, a computer-vision lost-and-found engine, a Varhadi-dialect voice assistant for farmers — and I freelance on websites for small businesses in India and the US. Right now I'm looking for software engineering, AI/ML and data engineering roles.";

export const featured = [
  {
    name: "Aang",
    tag: "AI meeting intelligence",
    desc: "Transcribes recordings and answers questions across the whole archive.",
    stack: ["Python", "FastAPI", "LangChain", "ChromaDB", "Whisper", "Mistral AI"],
    stat: "~30ms retrieval · 181+ chunks",
  },
  {
    name: "AI Lost & Found",
    tag: "Computer-vision matching",
    desc: "Upload a photo of what you lost; the pipeline matches it against found items.",
    stack: ["React", "Node.js", "MongoDB", "Grounding DINO", "SAM", "DINOv2", "BGE"],
    stat: "~87% matching accuracy",
    link: "https://lostandfound-sooty.vercel.app/",
  },
  {
    name: "KisaanDost",
    tag: "Varhadi voice assistant",
    desc: "Region-adaptive multimodal assistant for Varhadi-speaking farmers in Vidarbha.",
    stack: ["Sarvam AI", "Indic-TTS", "XTTS-v2"],
    stat: "Dialect-level ASR / TTS",
  },
  {
    name: "Smart SQL Optimizer",
    tag: "Database digital twin",
    desc: "Predicts query cost and reorders joins before a query reaches production.",
    stack: ["PostgreSQL", "XGBoost", "LightGBM", "SimPy", "PuLP"],
    stat: "Final-year project · team of 4",
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  Frontend: ["React", "Next.js 16", "Tailwind v4", "shadcn/ui", "Vite", "Three.js", "GSAP"],
  Backend: ["Node.js", "Express", "FastAPI"],
  Databases: ["PostgreSQL", "MongoDB", "ChromaDB"],
  "AI / ML": ["LangChain", "Whisper", "Mistral AI", "OpenAI API", "DINOv2", "XGBoost", "Scikit-learn"],
  Tools: ["Git", "Figma", "Vercel", "Netlify", "GA4", "Power BI"],
};

export const clients = [
  { name: "MV Custom Builders", where: "New Jersey, USA", did: "Marketing site · GA4 analytics · contact capture" },
  { name: "Smart Physio+", where: "Baner / Balewadi, Pune", did: "Website · local SEO build" },
];
