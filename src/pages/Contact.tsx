import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const Contact = () => (
  <PageLayout>
    <SEO
      title="Contact & Location — FACELINES Beauty Studio, 14 S Division St, Auburn WA"
      description="Visit FACELINES Beauty Studio at 14 S Division St, Auburn, WA 98001. Free parking, walk-ins welcome. English · Русский · Українська. Call (253) 294-8854."
      path="/contact"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-4xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Contact</div>
        <h1 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
          Let's <span className="italic">talk</span>.
        </h1>
        <p className="mt-8 text-lg text-muted-ink max-w-2xl mx-auto">
          Call, message us on Instagram, or stop by the studio in Auburn — we're always happy to help.
        </p>
      </div>
    </section>

    <section className="container py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a
        href={BUSINESS.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="card-soft p-10 text-center hover:-translate-y-1 transition-transform duration-500"
      >
        <MapPin className="mx-auto text-ink mb-4" size={28} strokeWidth={1.5} />
        <div className="text-xs uppercase tracking-widest text-muted-ink">Visit</div>
        <div className="font-display text-2xl text-ink mt-2">{BUSINESS.address.line}</div>
        <div className="text-sm text-muted-ink mt-1">{BUSINESS.address.cityStateZip}</div>
      </a>
      <a href={`tel:${BUSINESS.phoneTel}`} className="card-soft p-10 text-center hover:-translate-y-1 transition-transform duration-500">
        <Phone className="mx-auto text-ink mb-4" size={28} strokeWidth={1.5} />
        <div className="text-xs uppercase tracking-widest text-muted-ink">Phone</div>
        <div className="font-display text-2xl text-ink mt-2">{BUSINESS.phone}</div>
      </a>
      <a href={`mailto:${BUSINESS.email}`} className="card-soft p-10 text-center hover:-translate-y-1 transition-transform duration-500">
        <Mail className="mx-auto text-ink mb-4" size={28} strokeWidth={1.5} />
        <div className="text-xs uppercase tracking-widest text-muted-ink">Email</div>
        <div className="font-display text-lg md:text-xl text-ink mt-2 break-all">{BUSINESS.email}</div>
      </a>
      <a
        href={BUSINESS.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-soft p-10 text-center hover:-translate-y-1 transition-transform duration-500"
      >
        <Instagram className="mx-auto text-ink mb-4" size={28} strokeWidth={1.5} />
        <div className="text-xs uppercase tracking-widest text-muted-ink">Instagram</div>
        <div className="font-display text-2xl text-ink mt-2">{BUSINESS.instagram.handle}</div>
      </a>
    </section>

    <section className="container pb-24">
      <div className="card-soft p-10 md:p-14 grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-ink mb-4">Hours</div>
          <ul className="space-y-2 text-ink">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between text-sm">
                <span className="text-muted-ink">{h.day}</span>
                <span>{h.label ?? `${h.open} – ${h.close}`}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-ink mb-4">Studio info</div>
          <div className="grid gap-6">
            <div>
              <div className="text-sm text-muted-ink mb-2">Logistics</div>
              <div className="text-ink">{BUSINESS.amenities.join(" · ")}</div>
            </div>
            <div>
              <div className="text-sm text-muted-ink mb-2">Languages</div>
              <div className="text-ink">{BUSINESS.languages.join(" · ")}</div>
            </div>
            <div>
              <div className="text-sm text-muted-ink mb-2">Payments accepted</div>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.payments.map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-cream/80 border border-border text-sm text-ink">{p}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-ink mb-2">Cancellation policy</div>
              <p className="text-sm text-ink">{BUSINESS.cancellationPolicy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container pb-32">
      <div className="rounded-3xl overflow-hidden shadow-soft aspect-[16/8]">
        <iframe
          title="FACELINES Beauty Studio location on Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS.address.line}, ${BUSINESS.address.cityStateZip}`)}&output=embed`}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>
      <div className="mt-12 text-center">
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

export default Contact;
