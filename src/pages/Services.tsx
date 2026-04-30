import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { Check } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/business";

const Services = () => (
  <PageLayout>
    <SEO
      title="Services — Laser, Permanent Makeup, Russian Manicure | FACELINES Auburn"
      description="Medical-grade laser hair & tattoo removal, natural permanent makeup, Russian manicures, brows and waxing in Auburn, WA. Affordable luxury for the Seattle area."
      path="/services"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-4xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Services</div>
        <h1 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
          Care, <span className="italic">tailored</span> to you.
        </h1>
        <p className="mt-8 text-lg text-muted-ink max-w-2xl mx-auto">
          A focused range of medical-grade and Russian-technique services, all built around natural results and long-term care.
        </p>
      </div>
    </section>

    <section className="container py-24 space-y-6">
      {SERVICES.map((s, i) => (
        <div key={s.slug} className="card-soft p-10 grid md:grid-cols-12 gap-8 items-start hover:shadow-pill transition-shadow duration-500">
          <div className="md:col-span-1 font-display text-5xl text-sky-deep">0{i + 1}</div>
          <div className="md:col-span-6">
            <h3 className="font-display text-4xl text-ink">{s.title}</h3>
            <p className="mt-3 text-muted-ink">{s.short}</p>
          </div>
          <div className="md:col-span-3 space-y-2">
            {s.includes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-ink">
                <Check size={16} className="text-ink" /> {item}
              </div>
            ))}
          </div>
          <div className="md:col-span-2 text-left md:text-right">
            {s.priceFrom !== undefined && (
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-ink">
                {s.priceNote ? `${s.priceNote} ` : "from "}
                <span className="text-ink font-medium normal-case tracking-normal text-base">${s.priceFrom}</span>
              </div>
            )}
            <a
              href={BUSINESS.vagaroBook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${s.title} on Vagaro`}
              className="pill pill-dark text-xs px-5 py-2.5"
            >
              Book Now
            </a>
          </div>
        </div>
      ))}
    </section>

    <section className="container pb-32 text-center">
      <h2 className="font-display text-5xl text-ink">Not sure where to begin?</h2>
      <p className="mt-4 text-muted-ink max-w-xl mx-auto">
        Book online through Vagaro — pick a service, artist, and time. Walk-ins are also welcome.
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
    </section>
  </PageLayout>
);

export default Services;
