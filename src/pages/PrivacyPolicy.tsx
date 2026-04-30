import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS } from "@/lib/business";

const PrivacyPolicy = () => (
  <PageLayout>
    <SEO
      title="Privacy Policy | FACELINES Beauty Studio"
      description="Privacy Policy for FACELINES Beauty Studio in Auburn, WA."
      path="/privacy-policy"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-3xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Legal</div>
        <h1 className="font-display text-6xl md:text-7xl text-ink leading-[0.95]">
          Privacy <span className="italic">Policy</span>.
        </h1>
        <p className="mt-6 text-sm text-muted-ink">Last updated: April 30, 2026</p>
      </div>
    </section>

    <section className="container max-w-3xl py-16 prose prose-neutral text-muted-ink space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ink mb-3">1. Who we are</h2>
        <p>{BUSINESS.name} ("{BUSINESS.shortName}") is a beauty studio located at {BUSINESS.address.line}, {BUSINESS.address.cityStateZip}. We operate the website and booking system accessible via Vagaro. For questions, contact us at <a href={`mailto:${BUSINESS.email}`} className="text-ink underline">{BUSINESS.email}</a>.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">2. Information we collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Contact &amp; booking data</strong> — name, email, phone number, and appointment details collected when you book via Vagaro.</li>
          <li><strong>Usage data</strong> — pages visited, browser type, and IP address collected automatically via standard server logs and analytics tools.</li>
          <li><strong>Communications</strong> — any messages you send us by email, phone, or contact form.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">3. How we use your information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To schedule, confirm, and manage your appointments.</li>
          <li>To send appointment reminders and follow-up care instructions.</li>
          <li>To respond to your inquiries.</li>
          <li>To improve our website and services through aggregated analytics.</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">4. Third-party services</h2>
        <p>We use <strong>Vagaro</strong> for appointment booking. Your data submitted through Vagaro is subject to <a href="https://www.vagaro.com/pro/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ink underline">Vagaro's Privacy Policy</a>. We may also use Google Analytics for website traffic insights.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">5. Cookies</h2>
        <p>Our website uses cookies as described in our <a href="/cookie-policy" className="text-ink underline">Cookie Policy</a>.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">6. Data retention</h2>
        <p>We retain your personal data only as long as necessary to provide our services or as required by law. Booking records may be kept for up to 3 years for business and tax purposes.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">7. Your rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href={`mailto:${BUSINESS.email}`} className="text-ink underline">{BUSINESS.email}</a>. We will respond within 30 days.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">8. Security</h2>
        <p>We take reasonable technical and organizational measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">9. Children's privacy</h2>
        <p>Our services are not directed to children under 13. We do not knowingly collect personal data from children under 13.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">10. Changes to this policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">11. Contact</h2>
        <p>{BUSINESS.name}<br />{BUSINESS.address.line}<br />{BUSINESS.address.cityStateZip}<br /><a href={`mailto:${BUSINESS.email}`} className="text-ink underline">{BUSINESS.email}</a><br /><a href={`tel:${BUSINESS.phoneTel}`} className="text-ink underline">{BUSINESS.phone}</a></p>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
