"use client";
export const dynamic = "force-dynamic";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import { menuCategories } from "@/lib/menuData";

export default function OrderPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
const searchParams = useSearchParams();
  const addItemId = searchParams.get("addItem");

  useEffect(() => {
    if (addItemId) {
      setCart((prev) => ({
        ...prev,
        [addItemId]: (prev[addItemId] || 0) + 1,
      }));
    }
  }, [addItemId]);

  const allItems = useMemo(() => menuCategories.flatMap((c) => c.items), []);

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  };

  const total = allItems.reduce((sum, item) => sum + (cart[item.id] || 0) * item.price, 0);

  const itemCount = Object.values(cart).reduce((a, b) => a + b, 0);

const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [customerLocation, setCustomerLocation] = useState("");
const [customerAddress, setCustomerAddress] = useState("");
const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
const [specialInstructions, setSpecialInstructions] = useState("");
const handleCheckout = () => {
  if (!customerName.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!customerPhone.trim()) {
    alert("Please enter your mobile number.");
    return;
  }

  if (!/^[0-9]{10}$/.test(customerPhone.trim())) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!customerLocation.trim()) {
    alert("Please enter your delivery location.");
    return;
  }

  if (!customerAddress.trim()) {
    alert("Please enter your full delivery address.");
    return;
  }

  window.open(
    `https://wa.me/8670479101?text=${checkoutMessage}`,
    "_blank"
  );
};
const orderDate = new Date().toLocaleDateString("en-IN");
const orderTime = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
const orderId = `ZK-${Date.now()}`;
 const checkoutMessage = encodeURIComponent(`
━━━━━━━━━━━━━━━━━━

 Date: ${orderDate}
 Time: ${orderTime}
 Order ID: ${orderId}

━━━━━━━━━━━━━━━━━━
ZAIKO NEW ORDER
━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS

Name: ${customerName || "Not provided"}
Mobile: ${customerPhone || "Not provided"}
Location: ${customerLocation || "Not provided"}
Address: ${customerAddress || "Not provided"}

ORDER DETAILS

${allItems
  .filter((item) => (cart[item.id] || 0) > 0)
  .map(
    (item) =>
      `• ${item.name} × ${cart[item.id]} — ₹${(cart[item.id] || 0) * item.price}`
  )
  .join("\n")}

━━━━━━━━━━━━━━━━━━━━
TOTAL: ₹${total}
━━━━━━━━━━━━━━━━━━━━

Payment: ${paymentMethod}

Special Instructions:
${specialInstructions || "None"}

Thank you for ordering from Zaiko!`
);

  return (
    <>
      <PageHero
        eyebrow="Order Now"
        title="Build Your Order"
        subtitle="Add your favourites, then send it straight to us on WhatsApp for the fastest checkout."
        image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <Reveal className="mb-10">
              <SectionDivider label="Select Items" />
            </Reveal>
            <div className="space-y-4">
              {allItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-charcoal border border-white/5 hover:border-gold/30 transition-colors"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill loading="lazy" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-ivory truncate">{item.name}</p>
                    <p className="text-gold font-body text-sm font-semibold">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      aria-label={`Remove one ${item.name}`}
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-ivory/70 hover:border-gold hover:text-gold transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-body text-ivory">{cart[item.id] || 0}</span>
                    <button
                      aria-label={`Add one ${item.name}`}
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-gold-gradient text-ink flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 h-fit">
            <div className="p-6 rounded-2xl glass border border-gold/20">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="text-gold" size={20} />
                <h3 className="font-display text-lg text-ivory">Your Order</h3>
              </div>
              {itemCount === 0 ? (
                <p className="text-ivory/50 font-body text-sm">Your cart is empty — add items to get started.</p>
              ) : (
                <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                  {allItems
                    .filter((i) => cart[i.id])
                    .map((i) => (
                      <div key={i.id} className="flex justify-between text-sm font-body text-ivory/80">
                        <span>{i.name} x{cart[i.id]}</span>
                        <span>₹{i.price * cart[i.id]}</span>
                      </div>
                    ))}
                </div>
              )}
              
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="font-label text-ivory/70">Total</span>
                <span className="font-display text-xl text-gold font-bold">₹{total}</span>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
  <h4 className="font-display text-lg text-ivory mb-4">
    Customer Details
  </h4>

  <div className="space-y-3">

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Customer Name *
      </label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory placeholder:text-ivory/30 outline-none focus:border-gold"
      />
    </div>

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Mobile Number *
      </label>
      <input
        type="tel"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
        placeholder="10-digit mobile number"
        maxLength={10}
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory placeholder:text-ivory/30 outline-none focus:border-gold"
      />
    </div>

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Delivery Location *
      </label>
      <input
        type="text"
        value={customerLocation}
        onChange={(e) => setCustomerLocation(e.target.value)}
        placeholder="Area / Locality"
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory placeholder:text-ivory/30 outline-none focus:border-gold"
      />
    </div>

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Full Address *
      </label>
      <textarea
        value={customerAddress}
        onChange={(e) => setCustomerAddress(e.target.value)}
        placeholder="House no., street, landmark..."
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory placeholder:text-ivory/30 outline-none focus:border-gold resize-none"
      />
    </div>

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Payment Method
      </label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory outline-none focus:border-gold"
      >
        <option value="Cash on Delivery">Cash on Delivery</option>
        <option value="UPI">UPI</option>
      </select>
    </div>

    <div>
      <label className="block text-ivory/70 text-sm mb-1">
        Special Instructions
      </label>
      <textarea
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
        placeholder="Any special request? (Optional)"
        rows={2}
        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/10 text-ivory placeholder:text-ivory/30 outline-none focus:border-gold resize-none"
      />
    </div>

  </div>
</div>
              <a
                onClick={(e) => {
  e.preventDefault();
  if (itemCount > 0) {
    handleCheckout();
  }
}}
                target="_blank"
                rel="noreferrer"
                aria-disabled={itemCount === 0}
                className={`mt-6 w-full flex items-center justify-center py-3.5 rounded-full font-semibold tracking-wide transition-transform duration-300 ${
                  itemCount > 0
                    ? "bg-gold-gradient text-ink hover:scale-[1.02] active:scale-95"
                    : "bg-white/5 text-ivory/30 pointer-events-none"
                }`}
              >
                Checkout on WhatsApp
              </a>
          
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
