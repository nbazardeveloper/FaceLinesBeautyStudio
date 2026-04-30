import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md bg-cream/60" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-sans font-extrabold text-2xl tracking-[0.18em] text-ink leading-none uppercase">
          {BUSINESS.shortName}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-base font-bold tracking-wide transition-colors duration-300 ${
                  isActive ? "text-brand" : "text-muted-ink hover:text-brand"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={BUSINESS.vagaroBook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on Vagaro"
            className="pill pill-light text-ink"
          >
            Book Now
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full mt-2 mx-4 rounded-3xl bg-cream/95 backdrop-blur-md p-6 shadow-soft animate-fade-in">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="text-lg font-display text-ink"
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={BUSINESS.vagaroBook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on Vagaro"
              className="pill pill-dark mt-2"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
