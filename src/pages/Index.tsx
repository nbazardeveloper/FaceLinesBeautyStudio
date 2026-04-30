import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS, REVIEWS, SERVICES } from "@/lib/business";
import founder from "@/assets/founder.webp";
import t1 from "@/assets/treatment-1.webp";
import t2 from "@/assets/treatment-2.jpg";
import t3 from "@/assets/treatment-3.jpg";
import j1 from "@/assets/journal-1.webp";
import j2 from "@/assets/journal-2.webp";
import portraitHero from "@/assets/portrait-hero.webp";
import approachListening from "@/assets/our-approach/listening_first.webp";
import approachCareful from "@/assets/our-approach/careful_choices.webp";
import approachSubtle from "@/assets/our-approach/subtle_results.webp";
import approachLongTerm from "@/assets/our-approach/long_term_care.webp";

// Auto-import all images from our-work folder (Vite glob)
const workImages = Object.values(
  import.meta.glob("@/assets/our-work/*.{webp,jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
) as string[];

const journey = [
  { n: "01", title: "Consultation.", desc: "We start by listening — understanding your goals, skin, and lifestyle before recommending anything." },
  { n: "02", title: "Personalized Plan.", desc: "Whether it's laser, PMU, or a Russian manicure routine, every plan is shaped around what truly fits you." },
  { n: "03", title: "Treatment & Care.", desc: "Treatments are performed with precision and care, with clear aftercare so results last." },
];

const approach = [
  { title: "Listening first", desc: "Every visit starts with a real conversation. We take time to understand what you actually want.", img: approachListening },
  { title: "Careful choices", desc: "We recommend only what makes sense for you. No pressure, no upselling — just honest care.", img: approachCareful },
  { title: "Subtle results", desc: "Our focus is on natural-looking outcomes. The goal is refreshed and confident, never overdone.", img: approachSubtle },
  { title: "Long-term care", desc: "We think beyond a single session. Our work supports lasting results and healthy skin over time.", img: approachLongTerm },
];

const gallery = workImages.length > 0 ? workImages : [t1, t2, t3, founder, j1, j2, t1, t2];

const SCROLL_BY = 380;

function GalleryStrip({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  // Auto-scroll at ~0.6px/frame (~36px/s)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = () => {
      if (!pausedRef.current && track) {
        track.scrollLeft += 0.6;
        // Seamless loop: when we've scrolled past halfway, jump back
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  const scroll = (dir: -1 | 1) => {
    pausedRef.current = true;
    trackRef.current?.scrollBy({ left: dir * SCROLL_BY, behavior: "smooth" });
    // Resume after user finishes browsing
    setTimeout(() => { pausedRef.current = false; }, 3000);
  };

  const doubled = [...images, ...images];

  return (
    <div className="relative">
      {/* Fade edges */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
        style={{ background: "linear-gradient(to right, hsl(var(--sky)) 0%, transparent 100%)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
        style={{ background: "linear-gradient(to left, hsl(var(--sky)) 0%, transparent 100%)" }} />

      {/* Arrow buttons */}
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll gallery left"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/60 text-ink shadow-soft hover:bg-background transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll gallery right"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/60 text-ink shadow-soft hover:bg-background transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-5 px-8 overflow-x-auto scrollbar-none"
        style={{ scrollbarWidth: "none" }}
        aria-label="Gallery of recent work"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={() => setTimeout(resume, 2000)}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-[260px] md:w-[340px] aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-soft"
          >
            <img src={src} alt="" aria-hidden loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

const VISIBLE_SERVICES = 5;

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const visibleServices = showAllServices ? SERVICES : SERVICES.slice(0, VISIBLE_SERVICES);
  const hiddenCount = SERVICES.length - VISIBLE_SERVICES;

  return (
    <PageLayout>
      <SEO
        title="FACELINES Beauty Studio — Laser, PMU & Russian Manicure in Auburn / Kent, WA"
        description="Premier beauty studio in Auburn, WA serving Kent, Renton, Tukwila & the Seattle area. Permanent makeup, laser hair & tattoo removal, Russian manicure, skincare, lash extensions, makeup, brows and waxing. Book on Vagaro."
        path="/"
      />
      {/* HERO */}
      <section className="topo-bg relative min-h-screen flex flex-col px-6 pt-32 pb-16 overflow-hidden">

        {/* Luminous halo — warm light radiating from behind the figure */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 42% 55% at 50% 38%, rgba(255,252,248,0.85) 0%, rgba(255,249,242,0.45) 42%, transparent 70%)",
          }}
        />

        {/* Portrait — horizontally centered, bottom-anchored, dissolves into page */}
        <img
          src={portraitHero}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 hidden md:block"
          style={{
            height: "78vh",
            width: "auto",
            bottom: "8vh",
            opacity: 0.55,
            mixBlendMode: "multiply",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.12) 84%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.12) 84%, transparent 95%)",
          }}
        />

        {/* MOBILE portrait — in-flow, ~50vh tall, centered */}
        <div
          className="md:hidden relative w-screen -mx-6 h-[50vh] overflow-hidden pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 65%, transparent 100%)",
          }}
        >
          <img
            src={portraitHero}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Copy — dropped into bottom third of viewport */}
        <div className="relative z-10 text-center max-w-5xl mx-auto reveal mt-auto mb-52 md:mb-0">
          <h1 className="font-display text-[clamp(2.5rem,7vw,8.5rem)] leading-[0.95] text-ink">
            Affordable luxury.<br />
            <span className="italic text-brand">Effortless</span> confidence.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-ink max-w-2xl mx-auto">
            <span className="md:hidden">Natural permanent makeup, and Russian manicures in Auburn.</span>
            <span className="hidden md:inline">Medical-grade laser, natural permanent makeup, and Russian manicures in Auburn — serving Kent, Renton, Tukwila, Federal Way and the greater Seattle area.</span>
          </p>
          <div className="mt-10">
            <a
              href={BUSINESS.vagaroBook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on Vagaro"
              className="pill pill-dark"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 text-xs text-muted-ink hidden md:block">
          Auburn / Kent<br />Seattle Area
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="container py-28">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={founder}
                alt={BUSINESS.founder.name}
                loading="lazy"
                className="founder-portrait w-full h-auto object-contain block"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="font-display text-3xl md:text-4xl leading-snug text-ink">
              "We built FACELINES to make premier beauty care approachable. Every service — from laser to Russian manicures — is delivered with the same focus on quality, safety, and a result that feels naturally yours."
            </p>
            <div className="mt-8 text-sm text-muted-ink">
              <span className="font-medium text-ink">{BUSINESS.founder.name}</span> — {BUSINESS.founder.role}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-soft py-28">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Our Services</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-ink max-w-3xl leading-[1.05]">
              Premier care, chosen for you.
            </h2>
            <p className="text-muted-ink max-w-sm">
              A focused range of medical-grade and Russian-technique services — laser, permanent makeup, nails, and brows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleServices.map((s, i) => (
              <div
                key={s.slug}
                className={`card-soft p-8 group hover:shadow-pill transition-all duration-500 hover:-translate-y-1 flex flex-col ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl text-ink">{s.title}</h3>
                  <ArrowUpRight className="text-muted-ink group-hover:text-ink group-hover:rotate-45 transition-all duration-500" size={24} />
                </div>
                {s.priceFrom !== undefined && (
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-ink">
                    {s.priceNote ? `${s.priceNote} ` : "from "}
                    <span className="text-ink font-medium normal-case tracking-normal text-sm">${s.priceFrom}</span>
                  </div>
                )}
                <p className="mt-4 text-muted-ink text-sm leading-relaxed max-w-md">{s.short}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                  <a
                    href={BUSINESS.vagaroBook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${s.title} on Vagaro`}
                    className="pill pill-dark"
                  >
                    Book Now
                  </a>
                  <Link
                    to="/services"
                    className="text-xs uppercase tracking-widest text-muted-ink hover:text-ink transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {hiddenCount > 0 && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setShowAllServices((v) => !v)}
                aria-expanded={showAllServices}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-sky-deep transition-colors"
              >
                {showAllServices ? "Show less" : `View all services (+${hiddenCount})`}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${showAllServices ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="container py-32">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05]">
            Your <span className="italic text-brand">visit</span>, step by step.
          </h2>
          <p className="mt-6 text-muted-ink">
            A simple, thoughtful process designed around what you actually want — and what truly fits.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {journey.map((j) => (
            <div key={j.n} className="card-soft p-10">
              <div className="font-display text-7xl text-sky-deep">{j.n}</div>
              <h3 className="font-display text-2xl text-ink mt-6">{j.title}</h3>
              <p className="mt-3 text-sm text-muted-ink leading-relaxed">{j.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-4xl text-ink">Ready to begin?</h3>
          <p className="mt-4 text-muted-ink">
            Book online through Vagaro — quickly pick the service, artist, and time that suit you.
          </p>
          <div className="mt-8">
            <a
              href={BUSINESS.vagaroBook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on Vagaro"
              className="pill pill-dark"
            >
              Book Now
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-ink">
            <div className="flex -space-x-3">
              {[t1, t2, t3, founder, j1].map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-background object-cover" loading="lazy" />
              ))}
            </div>
            <span>Trusted by clients across the Seattle area</span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-gradient-soft py-28">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Our Approach</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-ink max-w-3xl leading-[1.05]">
              Bringing the pieces together.
            </h2>
            <p className="text-muted-ink max-w-sm">
              Our approach combines a few essential elements — together they create a calm, balanced way of caring for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {approach.map((a, i) => (
              <div key={a.title} className={`card-soft overflow-hidden ${i % 2 === 1 ? "md:translate-y-12" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl text-ink">{a.title}</h3>
                  <p className="mt-3 text-muted-ink text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-32">
        <div className="flex items-center gap-2 text-sm text-muted-ink mb-6">
          <a
            href={BUSINESS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink hover:underline"
          >
            Google
          </a>
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="text-ink" />)}
          </span>
          <span>Rated {BUSINESS.googleRating} ★ — Auburn, WA</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] mb-16">
          What our <span className="italic text-brand">clients</span> say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((t) => (
            <div key={t.name} className="card-soft p-10">
              <div className="flex gap-1 mb-4 text-ink">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-display text-2xl text-ink leading-snug">"{t.text}"</p>
              <div className="mt-6 text-sm text-muted-ink">— {t.name} · {t.when}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR WORK — marquee gallery */}
      <section className="py-28 bg-gradient-soft">
        <div className="container mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Our Work</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
              A gallery of <span className="italic text-brand">recent</span> results.
            </h2>
            <p className="text-muted-ink max-w-sm">
              Permanent makeup, laser, lashes, and Russian manicures — a glimpse of work from our studio.
            </p>
          </div>
        </div>

<GalleryStrip images={gallery} />

        <div className="container text-center mt-12">
          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-light text-ink"
          >
            See more on Instagram
          </a>
        </div>
      </section>

      {/* STUDIO INFO */}
      <section className="bg-gradient-soft py-28">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Studio Info</div>
          <h2 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-16 max-w-3xl">
            Everything you need to know.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-soft p-10">
              <div className="text-xs uppercase tracking-widest text-muted-ink mb-3">Logistics</div>
              <ul className="space-y-2 text-ink">
                {BUSINESS.amenities.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="card-soft p-10">
              <div className="text-xs uppercase tracking-widest text-muted-ink mb-3">Languages</div>
              <ul className="space-y-2 text-ink">
                {BUSINESS.languages.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
            <div className="card-soft p-10">
              <div className="text-xs uppercase tracking-widest text-muted-ink mb-3">Payments accepted</div>
              <div className="flex flex-wrap gap-2 text-sm text-ink">
                {BUSINESS.payments.map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-cream/80 border border-border">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VLOG */}
      <section className="bg-gradient-soft py-28">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Our Vlog</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-ink max-w-3xl leading-[1.05]">
              Beauty notes & aftercare.
            </h2>
            <p className="text-muted-ink max-w-sm">
              Practical notes on laser care, PMU healing, and keeping Russian manicures looking flawless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: j1, tag: "PMU Aftercare", title: "Powder Brows: What to expect during healing." },
              { img: j2, tag: "Laser Care", title: "Preparing for your laser hair removal sessions." },
            ].map((p) => (
              <Link to="/journal" key={p.title} className="card-soft overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="text-xs uppercase tracking-widest text-muted-ink">{p.tag}</div>
                  <h3 className="font-display text-3xl text-ink mt-3">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/journal" className="pill pill-dark">Browse insights</Link>
          </div>
        </div>
      </section>

      {/* VISIT — location, hours, map */}
      <section className="container py-28">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Visit Us</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            Find the <span className="italic text-brand">studio</span>.
          </h2>
          <p className="text-muted-ink max-w-sm">
            Centrally located in Auburn, WA — easy access from Kent, Renton, Tukwila, Federal Way and the Seattle area.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="card-soft p-8">
              <div className="text-xs uppercase tracking-widest text-muted-ink mb-3">Address</div>
              <p className="font-display text-2xl text-ink leading-snug">
                {BUSINESS.address.line}
                <br />
                {BUSINESS.address.cityStateZip}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-dark"
                >
                  Get directions
                </a>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="pill pill-light text-ink"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="card-soft p-8">
              <div className="text-xs uppercase tracking-widest text-muted-ink mb-3">Hours</div>
              <ul className="divide-y divide-border/60">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2 text-ink">
                    <span>{h.day}</span>
                    <span className="text-muted-ink">
                      {h.open && h.close ? `${h.open} – ${h.close}` : "Closed"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-soft min-h-[420px] lg:min-h-0">
            <iframe
              title="FACELINES Beauty Studio location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS.address.line}, ${BUSINESS.address.cityStateZip}`)}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block", minHeight: 420 }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-32 text-center">
        <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl mx-auto">
          Step into a <span className="italic text-brand">refreshed</span> you.
        </h2>
        <p className="mt-6 text-muted-ink max-w-xl mx-auto">
          Book online through Vagaro — choose your service, artist, and time in just a few clicks.
        </p>
        <div className="mt-10">
          <a
            href={BUSINESS.vagaroBook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on Vagaro"
            className="pill pill-dark"
          >
            Book Now
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
