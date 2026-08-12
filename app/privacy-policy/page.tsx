import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy | Zaiko Foods" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop" />
      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto prose prose-invert font-body text-ivory/70 leading-relaxed space-y-6">
          <p>
  Zaiko Foods collects only the information needed to process your orders,
  such as your name, mobile number, delivery address and order details.
</p>

<p>
  Your information is used to confirm orders, arrange delivery, provide
  customer support and improve our services.
</p>

<p>
  We do not sell or rent your personal information to third parties.
  Information may only be shared when necessary to complete your order,
  process payments, provide delivery services or comply with applicable law.
</p>

<p>
  With your permission, we may use your contact information to send
  Zaiko Foods offers, promotions and new menu updates. You may opt out
  of marketing communications at any time.
</p>

<p>
  We take reasonable steps to keep your personal information secure.
  For privacy-related questions or requests, please contact us at
  <strong> hello@zaikofoods.com</strong>.
</p>
        </div>
      </section>
    </>
  );
}
