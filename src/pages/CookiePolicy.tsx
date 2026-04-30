import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS } from "@/lib/business";

const CookiePolicy = () => (
  <PageLayout>
    <SEO
      title="Cookie Policy | FACELINES Beauty Studio"
      description="Cookie Policy for FACELINES Beauty Studio in Auburn, WA."
      path="/cookie-policy"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-3xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Legal</div>
        <h1 className="font-display text-6xl md:text-7xl text-ink leading-[0.95]">
          Cookie <span className="italic">Policy</span>.
        </h1>
        <p className="mt-6 text-sm text-muted-ink">Last updated: April 30, 2026</p>
      </div>
    </section>

    <section className="container max-w-3xl py-16 prose prose-neutral text-muted-ink space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ink mb-3">1. What are cookies?</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help the site function properly, remember your preferences, and provide analytical information to the site owner.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">2. How we use cookies</h2>
        <p>The FACELINES website may use the following types of cookies:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Essential cookies</strong> — Required for the website to function. They do not collect personal data and cannot be disabled.
          </li>
          <li>
            <strong>Analytics cookies</strong> — Used to understand how visitors interact with the site (e.g., Google Analytics). Data is aggregated and anonymous.
          </li>
          <li>
            <strong>Third-party cookies</strong> — Set by embedded services such as Vagaro booking widgets or Instagram embeds. These are governed by the respective third-party privacy policies.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">3. Your choices</h2>
        <p>You can control or delete cookies through your browser settings at any time. Note that disabling certain cookies may affect the functionality of the site. For more information on managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-ink underline">allaboutcookies.org</a>.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">4. Third-party services</h2>
        <p>Our booking system is powered by <strong>Vagaro</strong>. When you interact with the booking widget, Vagaro may set their own cookies. Please review <a href="https://www.vagaro.com/pro/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ink underline">Vagaro's Privacy Policy</a> for details.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">5. Updates to this policy</h2>
        <p>We may update this Cookie Policy from time to time. Changes will be reflected on this page with a revised date.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">6. Contact</h2>
        <p>If you have questions about our use of cookies, contact us:<br />{BUSINESS.name}<br /><a href={`mailto:${BUSINESS.email}`} className="text-ink underline">{BUSINESS.email}</a><br /><a href={`tel:${BUSINESS.phoneTel}`} className="text-ink underline">{BUSINESS.phone}</a></p>
      </div>
    </section>
  </PageLayout>
);

export default CookiePolicy;
