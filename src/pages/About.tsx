import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS } from "@/lib/business";
import founder from "@/assets/founder.png";
import t1 from "@/assets/treatment-1.jpg";

const About = () => (
  <PageLayout>
    <SEO
      title="About FACELINES Beauty Studio — Auburn / Kent, WA"
      description="Founded by Ekaterina Belousova, FACELINES is a premier beauty destination in Auburn serving the greater Seattle area with laser, PMU and Russian manicure services."
      path="/about"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-4xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">About FACELINES</div>
        <h1 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
          A premier beauty <span className="italic">destination</span>.
        </h1>
        <p className="mt-8 text-lg text-muted-ink max-w-2xl mx-auto">
          FACELINES Beauty Studio is a premier beauty destination in the heart of Auburn, serving the greater Seattle area with laser, permanent makeup, and Russian-technique nail care under one calm, welcoming roof.
        </p>
      </div>
    </section>

    <section className="container py-24 grid md:grid-cols-2 gap-16 items-center">
      <div className="aspect-[4/5] rounded-3xl overflow-hidden">
        <img src={founder} alt={BUSINESS.founder.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-ink mb-4">Founder</div>
        <h2 className="font-display text-5xl text-ink">{BUSINESS.founder.name}</h2>
        <p className="mt-2 text-sm text-muted-ink">{BUSINESS.founder.role}</p>
        <p className="mt-6 text-muted-ink leading-relaxed">
          FACELINES was founded to make premier beauty care approachable. Every service — from laser to Russian manicures — is delivered with the same focus on quality, safety, and a result that feels naturally yours.
        </p>
        <p className="mt-4 text-muted-ink leading-relaxed">
          Our specialties — laser hair and tattoo removal, powder brows and eyelash line enhancement, Russian manicures, brow shaping, and waxing — are offered at competitive Seattle-area rates without compromising on safety or finish.
        </p>
      </div>
    </section>

    <section className="bg-gradient-soft py-28">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-5xl text-ink leading-tight">Our philosophy</h2>
          <div className="mt-8 space-y-6 text-muted-ink">
            <p><span className="text-ink font-medium">Affordable luxury.</span> Premier services at competitive Seattle-area rates — no compromises on quality.</p>
            <p><span className="text-ink font-medium">Natural results.</span> Subtle, refined finishes that respect your features and let you look like yourself.</p>
            <p><span className="text-ink font-medium">A welcoming space.</span> Walk-ins are welcome, kids are welcome, and we speak English, Русский, and Українська.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={t1} alt="FACELINES studio" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="container py-32 text-center">
      <h2 className="font-display text-5xl md:text-6xl text-ink">Come and visit us.</h2>
      <p className="mt-6 text-muted-ink max-w-xl mx-auto">
        {BUSINESS.address.line}, {BUSINESS.address.cityStateZip}. Whether you're in Auburn, Kent, Renton, Tukwila, Federal Way or beyond, it's worth the trip.
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

export default About;
