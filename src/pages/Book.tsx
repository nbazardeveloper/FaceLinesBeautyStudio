import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS } from "@/lib/business";

const Book = () => (
  <PageLayout>
    <SEO
      title="Book Now — FACELINES Beauty Studio (Vagaro)"
      description="Book your laser, PMU, Russian manicure or brow service at FACELINES Beauty Studio in Auburn, WA via Vagaro online booking."
      path="/book"
    />
    <section className="topo-bg pt-40 pb-12 px-6 text-center">
      <div className="container max-w-3xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Book online</div>
        <h1 className="font-display text-6xl md:text-7xl text-ink leading-[0.95]">
          Pick a <span className="italic">time</span> that fits.
        </h1>
        <p className="mt-6 text-muted-ink max-w-xl mx-auto">
          Booking is handled securely through Vagaro. Choose your service, artist, and time below — or open the full booking page in a new tab.
        </p>
      </div>
    </section>

    <section className="container pb-32">
      <div className="card-soft overflow-hidden">
        <iframe
          title="Book FACELINES Beauty Studio on Vagaro"
          src={BUSINESS.vagaroBook}
          width="100%"
          height="900"
          style={{ border: 0, minHeight: "900px", display: "block" }}
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href={BUSINESS.vagaroBook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Vagaro booking in a new tab"
          className="pill pill-light text-ink"
        >
          Open on Vagaro
        </a>
      </div>
    </section>
  </PageLayout>
);

export default Book;
