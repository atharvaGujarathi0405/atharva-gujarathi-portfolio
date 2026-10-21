import { useRef } from "react";
import gsap from "gsap";
import { featured, skills, clients } from "../data/content";

const Card = ({ p }) => {
  const el = useRef(null);
  const tilt = (e) => {
    const r = el.current.getBoundingClientRect();
    gsap.to(el.current, {
      rotationY: ((e.clientX - r.left) / r.width - 0.5) * 18,
      rotationX: -((e.clientY - r.top) / r.height - 0.5) * 18,
      transformPerspective: 900,
      duration: 0.4,
    });
  };
  const reset = () =>
    gsap.to(el.current, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });
  const Tag = p.link ? "a" : "div";

  return (
    <Tag
      ref={el}
      onMouseMove={tilt}
      onMouseLeave={reset}
      {...(p.link && { href: p.link, target: "_blank", rel: "noopener noreferrer" })}
      data-reveal
      className="holo-card block p-6 rounded-3xl text-white"
    >
      <p className="font-[anzo2] text-cyan-300 text-sm uppercase tracking-widest">{p.tag}</p>
      <h3 className="font-[anzo1] text-5xl uppercase tracking-wider text-amber-500 my-2">{p.name}</h3>
      <p className="font-[anzo3] opacity-80 mb-4">{p.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <p className="font-[anzo2] text-amber-400">▸ {p.stat}</p>
    </Tag>
  );
};

const Featured = () => (
  <section id="featured" className="relative px-6 sm:px-12 py-24 text-white">
    <h1 data-reveal className="font-[anzo1] uppercase tracking-widest text-[10vw] text-center neon">
      Featured Work
    </h1>
    <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto" style={{ perspective: 1200 }}>
      {featured.map((p) => (
        <Card key={p.name} p={p} />
      ))}
    </div>

    <h2 data-reveal className="font-[anzo1] uppercase tracking-widest text-5xl text-center mt-24 neon">
      Tech Stack
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
      {Object.entries(skills).map(([area, items]) => (
        <div key={area} data-reveal className="holo-card p-5 rounded-2xl">
          <p className="font-[anzo2] text-cyan-300 uppercase tracking-widest mb-3">{area}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <h2 data-reveal className="font-[anzo1] uppercase tracking-widest text-5xl text-center mt-24 neon">
      Client Missions
    </h2>
    <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
      {clients.map((c) => (
        <div key={c.name} data-reveal className="holo-card p-6 rounded-2xl">
          <h3 className="font-[anzo1] text-3xl text-amber-500 uppercase tracking-wider">{c.name}</h3>
          <p className="font-[anzo2] text-cyan-300">{c.where}</p>
          <p className="font-[anzo3] opacity-80 mt-2">{c.did}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Featured;
