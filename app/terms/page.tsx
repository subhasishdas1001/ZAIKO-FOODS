import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Service | Zaiko Foods" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Conditions" image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop" />
      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto prose prose-invert font-body text-ivory/70 leading-relaxed space-y-6">
          <p>
  By using the Zaiko Foods website or placing an order, you agree to
  these Terms & Conditions.
</p>

<p>
  Customers must provide accurate name, mobile number, delivery address
  and other required details while placing an order.
</p>

<p>
  Orders are subject to item availability, delivery service availability
  and confirmation by Zaiko Foods.
</p>

<p>
  Prices, menu items and offers may change from time to time without
  prior notice.
</p>

<p>
  Customers are responsible for providing the correct delivery details
  and being available to receive their order.
</p>

<p>
  For any order-related issue, cancellation request or other assistance,
  please contact Zaiko Foods through the contact details provided on our
  website.
</p>
        </div>
      </section>
    </>
  );
}
