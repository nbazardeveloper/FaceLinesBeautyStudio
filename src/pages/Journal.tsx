import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import t1 from "@/assets/treatment-1.jpg";
import t3 from "@/assets/treatment-3.jpg";

const posts = [
  {
    img: j1,
    tag: "PMU Aftercare",
    title: "Powder Brows: What to expect during healing.",
    excerpt: "A day-by-day look at how powder brows settle, what's normal during healing, and how to support the best final result.",
    date: "Apr 12, 2026",
  },
  {
    img: j2,
    tag: "Laser Care",
    title: "Preparing for your laser hair removal sessions.",
    excerpt: "How to prep your skin, what to avoid before and after, and why consistency between sessions matters most.",
    date: "Mar 30, 2026",
  },
  {
    img: t3,
    tag: "Nail Health",
    title: "Why Russian manicures last longer.",
    excerpt: "The technique behind clean cuticle work and precise shaping — and why the result holds up for weeks.",
    date: "Mar 14, 2026",
  },
  {
    img: t1,
    tag: "Studio News",
    title: "Welcome to FACELINES Auburn.",
    excerpt: "A note from our founder on what we built FACELINES to be — and what to expect on your first visit.",
    date: "Feb 28, 2026",
  },
];

const Journal = () => (
  <PageLayout>
    <SEO
      title="Journal — Beauty Notes & Aftercare | FACELINES Auburn"
      description="Practical notes on laser hair removal, permanent makeup aftercare, Russian manicures, and studio news from FACELINES Beauty Studio in Auburn, WA."
      path="/journal"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-4xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Journal</div>
        <h1 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
          Beauty notes & <span className="italic">aftercare</span>.
        </h1>
        <p className="mt-8 text-lg text-muted-ink max-w-2xl mx-auto">
          Practical reflections on laser care, permanent makeup, Russian manicures, and how to make your results last.
        </p>
      </div>
    </section>

    <section className="container py-24 grid md:grid-cols-2 gap-8">
      {posts.map((p, i) => (
        <Link to="/journal" key={p.title} className={`card-soft overflow-hidden group ${i === 0 ? "md:col-span-2" : ""}`}>
          <div className={`overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-ink">
              <span>{p.tag}</span><span>·</span><span>{p.date}</span>
            </div>
            <h3 className={`font-display text-ink mt-3 ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>{p.title}</h3>
            <p className="mt-3 text-sm text-muted-ink leading-relaxed">{p.excerpt}</p>
          </div>
        </Link>
      ))}
    </section>
  </PageLayout>
);

export default Journal;
