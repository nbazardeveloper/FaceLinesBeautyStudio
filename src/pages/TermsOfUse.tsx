import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { BUSINESS } from "@/lib/business";

const TermsOfUse = () => (
  <PageLayout>
    <SEO
      title="Terms of Use | FACELINES Beauty Studio"
      description="Terms of Use for FACELINES Beauty Studio in Auburn, WA."
      path="/terms-of-use"
    />
    <section className="topo-bg pt-40 pb-24 px-6 text-center">
      <div className="container max-w-3xl reveal">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Legal</div>
        <h1 className="font-display text-6xl md:text-7xl text-ink leading-[0.95]">
          Terms of <span className="italic">Use</span>.
        </h1>
        <p className="mt-6 text-sm text-muted-ink">Last updated: April 30, 2026</p>
      </div>
    </section>

    <section className="container max-w-3xl py-16 prose prose-neutral text-muted-ink space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ink mb-3">1. Acceptance of terms</h2>
        <p>By accessing or using the FACELINES Beauty Studio website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">2. Use of the website</h2>
        <p>You may use this website for lawful personal purposes only. You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use the site in any way that violates applicable local, state, or federal law.</li>
          <li>Attempt to gain unauthorized access to any part of the site or its systems.</li>
          <li>Transmit any harmful, offensive, or disruptive content.</li>
          <li>Scrape, copy, or reproduce site content without written permission.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">3. Booking &amp; appointments</h2>
        <p>Appointments are booked through Vagaro. By booking, you agree to our cancellation policy: cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may be subject to a fee.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">4. Intellectual property</h2>
        <p>All content on this website — including text, images, graphics, and logos — is the property of {BUSINESS.name} or its licensors and is protected by copyright law. You may not reproduce or distribute any content without our prior written consent.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">5. Disclaimer of warranties</h2>
        <p>This website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">6. Limitation of liability</h2>
        <p>To the fullest extent permitted by law, {BUSINESS.name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">7. Third-party links</h2>
        <p>Our website may contain links to third-party websites (e.g., Vagaro, Instagram). We are not responsible for the content or privacy practices of those sites.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">8. Governing law</h2>
        <p>These terms are governed by the laws of the State of Washington, USA. Any disputes shall be resolved in the courts of King County, Washington.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">9. Changes to these terms</h2>
        <p>We reserve the right to update these Terms of Use at any time. Continued use of the site following changes constitutes acceptance of the new terms.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl text-ink mb-3">10. Contact</h2>
        <p>{BUSINESS.name}<br />{BUSINESS.address.line}<br />{BUSINESS.address.cityStateZip}<br /><a href={`mailto:${BUSINESS.email}`} className="text-ink underline">{BUSINESS.email}</a></p>
      </div>
    </section>
  </PageLayout>
);

export default TermsOfUse;
