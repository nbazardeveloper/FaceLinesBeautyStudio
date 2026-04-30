import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const SiteFooter = () => (
  <footer className="bg-ink text-cream mt-32">
    <div className="container py-20 grid gap-12 md:grid-cols-12">
      <div className="md:col-span-5 space-y-6">
        <div className="font-display text-3xl tracking-[0.2em] text-cream uppercase">
          {BUSINESS.shortName}
        </div>
        <p className="font-display text-3xl leading-tight text-cream max-w-md">
          Affordable luxury.<br />Effortless confidence.
        </p>
        <p className="text-sm text-cream max-w-sm">
          Premier beauty studio in Auburn — serving Kent, Renton, Tukwila and the greater Seattle area.
        </p>
      </div>

      <div className="md:col-span-3 space-y-4">
        <div className="text-xs uppercase tracking-widest text-cream">Explore</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link to="/journal" className="hover:text-white transition">Journal</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>

      <div className="md:col-span-4 space-y-4">
        <div className="text-xs uppercase tracking-widest text-cream">Visit & Contact</div>
        <a
          href={BUSINESS.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 text-sm hover:text-white transition"
        >
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>{BUSINESS.address.line}<br />{BUSINESS.address.cityStateZip}</span>
        </a>
        <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 text-sm hover:text-white transition">
          <Phone size={16} /> {BUSINESS.phone}
        </a>
        <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-sm hover:text-white transition">
          <Mail size={16} /> {BUSINESS.email}
        </a>
        <a
          href={BUSINESS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-white transition"
        >
          <Instagram size={16} /> {BUSINESS.instagram.handle}
        </a>
        <a
          href={BUSINESS.vagaroBook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on Vagaro"
          className="pill pill-light text-ink mt-4"
        >
          Book Now
        </a>
      </div>
    </div>
    <div className="border-t border-cream/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream">
        <span>© {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.address.cityStateZip}</span>
        <span>{BUSINESS.hoursSummary}</span>
      </div>
    </div>
  </footer>
);
